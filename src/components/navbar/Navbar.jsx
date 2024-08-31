import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  useMediaQuery, // Import useMediaQuery hook
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import Image from 'next/image'

function Navbar() {
  const router = useRouter();
  const [teamsAnchorEl, setTeamsAnchorEl] = useState(null);
  const [eventsAnchorEl, setEventsAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)"); // Detect if the device width is less than or equal to 600px (adjust as needed)

  const handleMenuClick = (type, event) => {
    type === "teams"
      ? setTeamsAnchorEl(event.currentTarget)
      : setEventsAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (type) => {
    type === "teams" ? setTeamsAnchorEl(null) : setEventsAnchorEl(null);
  };

  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  const handleLinkClick = () => {
    handleMenuClose("teams");
    handleMenuClose("events");
    handleMobileMenuClose();
  };

  const renderMenu = (label, anchorEl, handleClose, items) => (
    <>
      <Button
        color="inherit"
        onClick={(event) => handleMenuClick(label.toLowerCase(), event)}
        aria-controls={`${label.toLowerCase()}-menu`}
        aria-haspopup="true"
        style={{ color: isMobile ? "blue" : "white" }} // Set button color based on device
      >
        {label}
        <ExpandMoreIcon />
      </Button>
      <Menu
        id={`${label.toLowerCase()}-menu`}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(label.toLowerCase())}
        PaperProps={{
          style: {
            color: "blue",
            backgroundColor: "white", // Set menu background color here
          },
        }}
      >
        {items.map((item, subIndex) => (
          <MenuItem
            key={subIndex}
            to={item.to}
            onClick={() => {
              handleLinkClick();
              handleClose(label.toLowerCase());
            }}
            style={{ color: "blue" }} // Set menu item color here
          >
            <Link href={item.to}>
              <div style={{ color: "blue", textDecoration: "none" }}>{item.label}</div>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
  
  const Logo = ({ index }) => (
    <Image
      src={`/images/logos/${
        ["nss-logo", "father-logo", "crce-logo"][index]
        
      }.svg`}
      alt={`${["NSS Logo", "Father Logo", "CRCE Logo"][index]}`}
      width={[30, 30, 50][index]}
      height={[30, 25, 45][index]}
      style={{
        // width: [30, 30, 50][index],
        // height: [30, 25, 45][index],
        marginRight: [30, 38, 10][index],
        transform: "scale(3)",
        transition: "transform 0.5s",
      }}
      loading="lazy"
    />
  );

  const navigationLinks = [
    { label: "Home", to: "/" },
    { label: "Vol.Data", to: "/volunteer" },
    {
      label: "Teams",
      renderMenu: renderMenu("Teams", teamsAnchorEl, handleMenuClose, [
        { label: "Team 2023-24", to: "/teams/team-23-24" },
        { label: "Team 2022-23", to: "/teams/team-22-23" },
      ]),
    },
    {
      label: "Events",
      renderMenu: renderMenu("Events", eventsAnchorEl, handleMenuClose, [
        { label: "Events 2023-24", to: "/event/event-23-24" },
        { label: "Events 2022-23", to: "/event/event-22-23" },
      ]),
    },
    { label: "Camp", to: "/camp" },
    { label: "Collaboration", to: "/contactus" },
  ];

  return (
    <AppBar className="animate_animated animate_fadeInDown">
      <Toolbar className="animate_animated animate_fadeIn">
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          {[...Array(1)].map((_, i) => (
            <Logo key={i} index={i} />
          ))}
        </Box>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontFamily: "Pacifico, cursive", color: "white" }}
        >
          NSS CRCE
        </Typography>

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuToggle}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {navigationLinks.map((link, index) =>
            link.renderMenu ? (
              <React.Fragment key={index}>{link.renderMenu}</React.Fragment>
            ) : (
              <Link key={index} href={link.to}>
                <Button color="primary" style={{ color: "white" , textDecoration: "none"}}>
                  {link.label}
                </Button>
              </Link>
            )
          )}
        </Box>

        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={handleMobileMenuToggle}
          PaperProps={{
            style: {
              color: "blue",
              backgroundColor: "rgba(255,255,255,0.6)",
            },
          }}
        >
          <List sx={{ display: "flex", flexDirection: "column" }}>
            {navigationLinks.map((link, index) =>
              link.renderMenu ? (
                <React.Fragment key={index}>{link.renderMenu}</React.Fragment>
              ) : (
                <Link key={index} href={link.to} 
                onClick={() => {
                  handleLinkClick();
                  handleMobileMenuClose();
                }}
                >
                  <Button color="primary" style={{ color: isMobile ? "blue" : "white", textDecoration: 'none'}}>
                    {link.label}
                  </Button>
                </Link>
              )
            )}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
