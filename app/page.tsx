import CardDetailsList from "@/components/CardDetailsList/CardDetailsList";
import InitialCard from "@/components/InitialCard/InitialCard";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="w-[95%] py-3 min-h-screen mx-auto">
      <Navbar />
      <InitialCard />
      <CardDetailsList />
    </div>
  );
}
