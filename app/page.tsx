import Slide1Title from "@/components/Slide1Title";
import Slide2Traction from "@/components/Slide2Traction";
import Slide3Financials from "@/components/Slide3Financials";
import Slide4Projections from "@/components/Slide4Projections";
import Slide5GrowthEngine from "@/components/Slide5GrowthEngine";
import Slide6DealStructure from "@/components/Slide6DealStructure";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Slide1Title />
      <Slide2Traction />
      <Slide3Financials />
      <Slide4Projections />
      <Slide5GrowthEngine />
      <Slide6DealStructure />
    </main>
  );
}
