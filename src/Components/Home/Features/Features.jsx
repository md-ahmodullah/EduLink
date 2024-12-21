import { useEffect, useState } from "react";
import Card from "./Card";
export default function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/features_data.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
