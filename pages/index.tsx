import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Top from "../components/Top";

export default function Home() {
  return (
    <div className="mt-[9.6rem] flex flex-col items-center">
      <Top />

      <main className="flex flex-col items-start gap-[10rem]">
        <TechStack />
        {/* <About /> */}
        <Experience />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
