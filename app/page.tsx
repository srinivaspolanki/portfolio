import Header from "../components/Header";
import Intro from "../components/Intro";
import Work from "../components/Work";
import Tools from "../components/Tools";
import Background from "../components/Background";
import About from "../components/About";
import Github from "../components/Github";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Search from "../components/Search";

export default function Home() {
  return (
    <>
      <Search />
      <Header />
      <main className="max-w-3xl mx-auto px-4 md:px-6">
        <Intro />
        <About />
        <Background />
        <Work />
        <Tools />
        <Github />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
