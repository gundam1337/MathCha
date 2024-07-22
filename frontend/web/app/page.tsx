import "../styles/globals.css";
import Navigationbar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";
import SubjectCards from "@/components/SubjectCards/SubjectCards"

export default function Home() {
  return (
    <>
      <Navigationbar></Navigationbar>
      <Hero></Hero>
      <SubjectCards></SubjectCards>  
    </>
  );
}
