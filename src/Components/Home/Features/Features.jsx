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
    <section>
      <div className="w-11/12 mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-black text-center mb-5">
          Discover the Essential and Exciting Key Features
        </h2>
        <p className="text-gray-400 text-center w-full lg:w-3/5 mx-auto mb-10">
          Discover a platform that revolutionizes group learning with assignment
          creation, peer grading and collaborative tools. Experience the
          ultimate blend of productivity and teamwork!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
