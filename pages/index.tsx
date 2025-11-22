import TechStack from "../components/TechStack";
import Top from "../components/Top";

export default function Home() {
  return (
    <div className="mt-[9.6rem]">
      <Top />

      <main className="flex flex-col items-center gap-[8rem]">
        <TechStack />
        <div>
          <p>hiii</p>
        </div>
      </main>
    </div>
  );
}
