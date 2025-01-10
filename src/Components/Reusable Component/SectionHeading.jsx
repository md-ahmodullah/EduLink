export default function SectionHeading({ title, subTitle }) {
  return (
    <div className="pb-8">
      <h2 className="text-3xl font-bold text-black text-center mb-5">
        {title}
      </h2>
      <p className="text-gray-500 text-center w-full md:w-4/5 mx-auto">
        {subTitle}
      </p>
    </div>
  );
}
