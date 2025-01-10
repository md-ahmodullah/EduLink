import Banner from "../Components/Home/Banner";
import FAQ from "../Components/Home/FAQ";
import Features from "../Components/Home/Features/Features";
import Value from "../Components/Home/value";

export default function Home() {
  return (
    <div className="font-roboto">
      <Banner />
      <Value />
      <div className="w-10/12 mx-auto my-0 lg:my-12 py-8">
        <Features />
      </div>
      <FAQ />
    </div>
  );
}
