import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import DropdownButton from "../../components/dropdown/DropDown";

function Home() {
  return (
    <div className="space-y-10">
      <Header></Header>
      <DropdownButton></DropdownButton>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Home;
