import Banner from "../Components/Home/Banner";
import FAQ from "../Components/Home/FAQ";
import Features from "../Components/Home/Features/Features";

export default function Home() {
  return (
    <div className="font-roboto">
      <Banner />
      <div className="w-11/12 mx-auto">
        <Features />
        <FAQ />
      </div>
    </div>
  );
}
