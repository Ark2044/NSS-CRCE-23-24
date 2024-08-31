// src/app/api/volunteer.js
import Volunteer from "@/lib/models"; // Adjust the import path accordingly
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { srno } = await request.json();

  try {
    await connectToDb();
    // Fetch volunteer data based on srno from MongoDB
    const volunteerData = await Volunteer.findOne({ srno: srno });

    if (!volunteerData) {
      console.log("Volunteer not found");
      return new NextResponse(
        JSON.stringify({ volunteerData: null }),
        "Volunteer not found",
        { status: 404 }
      );
    } else {
      // console.log("Volunteer data retrieved:", volunteerData);
      // Pass the data to the template
      return new NextResponse(JSON.stringify({ volunteerData }), { status: 200 }); // Wrap data in object with key volunteerData
    }
  } catch (err) {
    console.error("Error submitting data:", err);
    return new NextResponse("Error submitting data" + err, { status: 500 });
  }
};
