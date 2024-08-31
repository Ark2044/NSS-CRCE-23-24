import {
  Grid,
  Typography,
  Stack,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LastUpdated() {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/CRCE-NSS/WEBSITE_NEXT")
      .then((response) => response.json())
      .then((data) => {
        const lastUpdatedDate = new Date(data.pushed_at);
        const formattedDate = `${lastUpdatedDate.getDate()} ${lastUpdatedDate.toLocaleString(
          "default",
          { month: "short" }
        )} ${lastUpdatedDate.getFullYear()}`;
        setLastUpdated(formattedDate);
      });
  }, []);

  return <p id="last-updated">Last Updated: {lastUpdated}</p>;
}

function Footer() {
  const router = useRouter();

  const currentYear = new Date().getFullYear();

  return (
    <section className="footer">
      <Grid
        container
        spacing={3}
        sx={{
          color: "white",
          display: { xs: "flex", md: "flex" },
        }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Stack direction="column" spacing={3}>
            <Stack
              direction="row"
              spacing={5}
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <img
                  className="nss-logo"
                  alt="NSS Logo"
                  src="/images/logos/nss-logo.svg"
                  style={{
                    width: "50px",
                    height: "50px",
                    transform: "scale(2)",
                    transition: "transform 0.2s",
                  }}
                />
              </Box>
              <Typography variant="h4" color="white" sx={{ marginTop: "30" }}>
                NSS CRCE
              </Typography>
            </Stack>
            {/* <Box>
              <a href="/team_2023_24">
                <Image
                  // src="/images/banner/Banner website.svg"
                  alt="banner-gif"
                  width = "90%"
                  style={{
                    borderRadius: "10px",
                  }}
                ></Image>
              </a>
            </Box> */}
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Typography variant="h5" color="white" component="div">
            Contact Info
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText
                style={{ color: "white" }}
                primary="+91 99204 14062"
                secondary="Ratan Singh (President)"
                secondaryTypographyProps={{ color: "white", fontSize: "15px" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText
                style={{ color: "white" }}
                primary="+91 93266 65726"
                secondary="Krishna Soni (Vice President)"
                secondaryTypographyProps={{ color: "white", fontSize: "15px" }}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText
                style={{ color: "white" }}
                classname="link"
                primary="+91 99693 54409"
                secondary="Aarush Wasnik (Senior Web-Master)"
                secondaryTypographyProps={{ color: "white", fontSize: "15px" }}
              />
            </ListItem>
            <ListItem component="a" href="mailto:crce.nss@gmail.com">
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText
                style={{ color: "white", textTransform: "lowercase" }}
                primary={"crce.nss@gmail.com".toLowerCase()}
              />
            </ListItem>
            <ListItem
              component="a"
              href="https://www.google.com/maps/place/Fr.+Conceicao+Rodrigues+College+of+Engineering/@19.044333,72.8203705,15z/data=!4m5!3m4!1s0x0:0x111b63353dbbce01!8m2!3d19.044333!4d72.8203705"
            >
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText
                style={{ color: "white" }}
                primary="Fr. Conceicao Rodrigues College of Engineering, Father Agnel Ashram, Bandstand Promenade, Mount Mary, Bandra West, Mumbai, Maharashtra."
              />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Grid
            container
            spacing={3}
            sx={{
              alignItem: "center",
              justifyContent: "center",
              marginTop: "-20px",
            }}
          >
            <Grid item>
              <Typography variant="h5" color="white" textAlign={"center"}>
                {/* Feel free to follow us on our social media handles */}
                Stay Connected
              </Typography>
            </Grid>
            <Grid
              item
              container
              spacing={2}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Grid item className="share">
                <Stack
                  spacing={{ xs: 0.75, md: 3 }}
                  direction={{ xs: "row", md: "column" }}
                >
                  <MDBBtn
                    floating
                    className="m-1"
                    style={{ backgroundColor: "white", borderRadius: "40px" }}
                    href="https://www.facebook.com/NssCrce/"
                    role="button"
                  >
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>

                  <MDBBtn
                    floating
                    className="m-1"
                    style={{ backgroundColor: "white", borderRadius: "40px" }}
                    href="https://twitter.com/nssCRCE"
                    role="button"
                  >
                    <MDBIcon fab icon="twitter" style={{ color: "#1E90FF" }} />
                  </MDBBtn>
                  <MDBBtn
                    floating
                    className="m-1"
                    style={{ backgroundColor: "white", borderRadius: "40px" }}
                    href="https://www.instagram.com/nss.crce/"
                    role="button"
                  >
                    <MDBIcon
                      fab
                      icon="instagram"
                      style={{ color: "magenta" }}
                    />
                  </MDBBtn>

                  <MDBBtn
                    floating
                    className="m-1"
                    style={{ backgroundColor: "white", borderRadius: "40px" }}
                    href="https://www.linkedin.com/in/nss-crce-0a44951b0/"
                    role="button"
                  >
                    <MDBIcon fab icon="linkedin-in" />
                  </MDBBtn>
                  <MDBBtn
                    floating
                    className="m-1"
                    style={{ backgroundColor: "white", borderRadius: "40px" }}
                    href="https://www.youtube.com/@nsscrce502/videos"
                    role="button"
                  >
                    <MDBIcon fab icon="youtube" style={{ color: "red" }} />
                  </MDBBtn>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sx={{ bgcolor: "#00008B", paddingTop: "30px" }}
          marginTop={"20px"}
        >
          <Typography
            variant="h6"
            // sx={{ bgcolor: "#00008B", paddingTop: "30px" }}
            color="white"
            fontWeight="bold"
          >
            Copyright &copy; {currentYear}{" "}
            <a className="nss" href="/">
              NSS-CRCE
            </a>
            .
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 0.5, sm: 1, md: 1, lg: 1 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              variant="h6"
              sx={{ bgcolor: "#00008B", paddingTop: "10px" }}
              color="white"
              fontWeight="bold"
            >
              {" "}
              DESIGN & DEVELOPMENT{" "}
            </Typography>
            <Typography
              variant="h6"
              sx={{ bgcolor: "#00008B", paddingTop: "10px" }}
              color="white"
              fontWeight="bold"
            >
              BY
            </Typography>
            <Typography
              variant="h6"
              sx={{ bgcolor: "#00008B", paddingTop: "10px" }}
              color="white"
            >
              <Link
                href={"/teams/web_card_list"}
                className="designers"
                color="white"
              >
                {" "}
                NSS-CRCE WEB TEAM
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
}

export default Footer;
