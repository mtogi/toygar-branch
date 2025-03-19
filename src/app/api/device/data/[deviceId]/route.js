import connectToDatabase from "@/lib/mongodb";
import { parseIncomingData } from "@/lib/parse";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { RaspberryPi } from "@/models/raspberryPi";
import { SensorData } from "@/models/sensorData";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

// Handles GET request for fetching device data based on deviceId
export async function GET(req, { params }) {
  try {
    const session = await getServerSession(authOptions);

    const { deviceId } = await params; // Get deviceId from route parameters

    // Connect to the database
    await connectToDatabase();

    // Check if device belongs to user
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Fetch device data by deviceId
    const device = await RaspberryPi.findOne({ serialId: deviceId });

    if (!device) {
      return NextResponse.json(
        { message: "Device not found" },
        { status: 404 }
      );
    }

    if (!device.userId.equals(user._id)) {
      return NextResponse.json(
        { message: "Device  belong to user" },
        { status: 403 }
      );
    }

    // Fetch sensor data related to the device
    const data = await SensorData.find({ raspberryPi: device._id });
    console.log(data);
    const parsedData = parseIncomingData(data);

    // Return the device data
    return NextResponse.json(parsedData, { status: 200 });
  } catch (error) {
    console.error("Error fetching device data:", error);
    return NextResponse.json(
      { message: "Error fetching device data" },
      { status: 500 }
    );
  }
}

// This handles the POST request for saving or updating the device data
export async function POST(req, { params }) {
  try {
    const { deviceId } = await params; // Get the deviceid from the route parameters

    // Check if device is registered (i.e. exists in db)
    // Device cannot be registered if it DNE in db
    const device = await RaspberryPi.findOne({ serialId: deviceId });

    if (!device) {
      return NextResponse.json(
        { message: "Device not found" },
        { status: 404 }
      );
    }

    const buffer = await req.arrayBuffer();
    const binaryData = Buffer.from(buffer);

    const temperature = binaryData.readFloatLE(4);
    const humidity = binaryData.readFloatLE(8);
    const moisture = binaryData.readUInt8(12);
    const timestamp = new Date(binaryData.readUInt32LE(13) * 1000);

    const newSensorData = new SensorData({
      raspberryPi: device._id,
      temperature: temperature,
      humidity: humidity,
      moisture: moisture,
      timestamp: timestamp,
    });

    await newSensorData.save();

    return NextResponse.json({ message: "ok" }, { status: 201 });
  } catch (error) {
    console.error("Error saving sensor data:", error);
    return NextResponse.json(
      { message: "Error saving sensor data" },
      { status: 500 }
    );
  }
}
