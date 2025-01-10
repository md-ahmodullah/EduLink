export default function Card({ feature }) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={feature.image}
          alt={feature.title}
          className="h-[230px] w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{feature.title}</h2>
        <p className="text-gray-500">{feature.description}</p>
        <div className="card-actions justify-start py-1">
          <button className="btn btn-sm btn-primary">Explore More</button>
        </div>
      </div>
    </div>
  );
}
