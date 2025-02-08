import { shipEngine } from "@/helper/shipEngine";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("Loaded ShipEngine API Key:", process.env.SHIPENGINE_API_KEY || "Not Found");

    const body = await request.json();
    const { shipToAddress, packages } = body;

    if (!shipToAddress || !packages) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipToAddress,
        shipFrom: {
          name: "Imtiaz",
          phone: "03343395488",
          addressLine1: "address",
          addressLine2: "address2",
          cityLocality: "Karachi",
          stateProvince: "Sindh",
          postalCode: "76330",
          countryCode: "PK",
          addressResidentialIndicator: "no",
        },
        packages,
      },
      rateOptions: {
        carrierIds: [
          process.env.SHIPENGINE_FIRST_COURIER,
          process.env.SHIPENGINE_SECOND_COURIER,
          process.env.SHIPENGINE_THIRD_COURIER,
          process.env.SHIPENGINE_FOURTH_COURIER,
        ].filter(Boolean) as string[], // ✅ FIXED
      },
    });
    
    return NextResponse.json(shipmentDetails);
  } catch (error) {
    console.error("ShipEngine API Error:", error);

    // Type assertion to Error object
    const errMessage = (error as Error).message || "Unknown error occurred";

    return NextResponse.json({ error: "ShipEngine API Error", details: errMessage }, { status: 500 });
}
}
