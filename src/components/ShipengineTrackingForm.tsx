"use client";
import { useState } from "react";

export default function TrackShipment() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [carrierCode, setCarrierCode] = useState("ups"); // Default carrier
  const [trackingInfo, setTrackingInfo] = useState<any>(null);
  const [error, setError] = useState("");

  const trackShipment = async () => {
    setError("");
    setTrackingInfo(null);

    try {
      const response = await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ carrierCode, trackingNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        setTrackingInfo(data);
      } else {
        setError(data.error || "Failed to track the shipment");
      }
    } catch (err) {
      setError("Error fetching tracking details");
    }
  };

  return (
    <div className="p-6 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Track Your Shipment</h2>
      
      <div className="mb-4">
        <label className="block font-medium">Carrier</label>
        <select
          className="border p-2 w-full"
          value={carrierCode}
          onChange={(e) => setCarrierCode(e.target.value)}
        >
          <option value="ups">UPS</option>
          <option value="usps">USPS</option>
          <option value="fedex">FedEx</option>
          <option value="dhl">DHL</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Tracking Number</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Enter tracking number"
        />
      </div>

      <button
        onClick={trackShipment}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Track Shipment
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {trackingInfo && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h3 className="font-bold text-lg">Tracking Details:</h3>
          <p>Status: {trackingInfo.status_description}</p>
          <p>Last Update: {trackingInfo.events?.[0]?.description}</p>
          <p>Location: {trackingInfo.events?.[0]?.city_locality}, {trackingInfo.events?.[0]?.state_province}</p>
        </div>
      )}
    </div>
  );
}
