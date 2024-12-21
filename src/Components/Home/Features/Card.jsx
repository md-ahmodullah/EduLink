export default function Card({ feature }) {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={feature.image}
          alt={feature.title}
          className="h-[230px] w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{feature.title}</h2>
        <p>{feature.description}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-sm btn-accent">Explore More</button>
        </div>
      </div>
    </div>
  );
}
