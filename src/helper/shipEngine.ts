import shipengine, { ShipEngine } from "shipengine"



export const shipEngine = new ShipEngine({
        apiKey:process.env.SHIPENGIN_API_KEY as string
})