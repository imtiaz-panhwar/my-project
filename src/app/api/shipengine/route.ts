import { shipEngine } from "@/helper/shipEngine";
import { NextRequest } from "next/server";

export async function GET() {
  return new Response(JSON.stringify({ message: "shipEngine testing" }), {
    status: 200,
  });
}

export async function POST(request: NextRequest) {
  try {
    const { shipToAddress, packages } = await request.json();

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
          packages: packages, // Ensure this is inside `shipment`
        },
        rateOptions: {
          carrierIds: [
            process.env.SHIPENGINE_FIRST_COURIER || "",
            process.env.SHIPENGINE_SECOND_COURIER || "",
            process.env.SHIPENGINE_THIRD_COURIER || "",
            process.env.SHIPENGINE_FOURTH_COURIER || "",
          ].filter(Boolean),
        },
      });

    return new Response(JSON.stringify(shipmentDetails), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error Occurred" }), {
      status: 500,
    });
  }
}
