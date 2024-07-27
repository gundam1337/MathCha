import "../styles/globals.css";
import Navigationbar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";
import SubjectCards from "@/components/SubjectCards/SubjectCards"
import ConceptSection from '@/components/ConceptSection/ConceptSection'
import TitleOfConceptSection from '@/components/TitleOfConceptSection/TitleOfConceptSection'
import  Head  from 'next/head';


export default function Home() {
  return (
    <>
      <Navigationbar></Navigationbar>
      <Hero></Hero>
      <TitleOfConceptSection></TitleOfConceptSection>
      <ConceptSection></ConceptSection>
      <SubjectCards></SubjectCards> 
    </>
  );
}
