import Head from "next/head";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Top from "../components/Top";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yuri / Portfolio</title>
      </Head>
      <div className="mx-auto flex max-w-page flex-col section-gap pt-(--header-height)">
        <Top />

        <main className="flex flex-col section-gap">
          <TechStack />
          {/* <About /> */}
          <Experience />
          <Projects />
        </main>

        <Footer />
      </div>
    </>
  );
}
