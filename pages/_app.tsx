import Header from "features/components/Header";
import "features/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="px-[4rem] md:px-[8rem]">
        <Component {...pageProps} />
      </div>
    </>
  );
}
