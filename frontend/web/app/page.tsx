import "../styles/globals.css";
import Navigationbar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";
import ConceptSection from "@/components/ConceptSection/ConceptSection";
import TitleOfConceptSection from "@/components/TitleOfConceptSection/TitleOfConceptSection";
import ProfessorProfile from "@/components/ProfessorProfile/ProfessorProfile";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
    <Navigationbar/>
      <Hero></Hero>
      <TitleOfConceptSection></TitleOfConceptSection>
      <ConceptSection></ConceptSection>
      <ProfessorProfile/>
      <Footer/>
    </>
  );
}
