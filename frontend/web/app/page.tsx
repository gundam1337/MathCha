import "../styles/globals.css";
import Navigationbar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";
import SubjectCards from "@/components/SubjectCards/SubjectCards";
import ConceptSection from "@/components/ConceptSection/ConceptSection";
import TitleOfConceptSection from "@/components/TitleOfConceptSection/TitleOfConceptSection";
import ProfessorProfile from "@/components/ProfessorProfile/ProfessorProfile";

//TODO : add the 

export default function Home() {
  return (
    <>
      <Navigationbar></Navigationbar>
      <Hero></Hero>
      <TitleOfConceptSection></TitleOfConceptSection>
      <ConceptSection></ConceptSection>
      {/* <ProfessorProfile
        name="Omar Derkaoui"
        title="PhD"
        quote="Although the questions we're grappling with may have changed since the founding era, the examples of antiquity still challenge us to reflect on our own republic—its promises and its perils."
        institution="Stanford University"
        almaMater="University of Michigan"
        imageUrl="/path/to/image.jpg"
      /> */}
      {/* <SubjectCards></SubjectCards> */}
    </>
  );
}
