import { Construction } from "lucide-react";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700">
      <Construction size={64} className="text-red-500 mb-4" />
      <h1 className="text-3xl font-semibold">Page Under Construction</h1>
      <p className="text-lg mt-2">Sorry for the inconvenience. We’ll be back soon!</p>
    </div>
  );
};

export default UnderConstruction;
