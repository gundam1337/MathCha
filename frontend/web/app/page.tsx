import "../styles/globals.css";
import Navigationbar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";
import SubjectCards from "@/components/SubjectCards/SubjectCards"
import ConceptSection from '@/components/ConceptSection/ConceptSection'

export default function Home() {
  return (
    <>
      <Navigationbar></Navigationbar>
      <Hero></Hero>
       
      <ConceptSection></ConceptSection>
      <SubjectCards></SubjectCards> 
    </>
  );
}
