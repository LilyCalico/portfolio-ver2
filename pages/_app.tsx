import Header from "features/components/Header";
import { cn } from "features/lib/cn";
import { geistMono, geistSans } from "features/styles/fonts";
import "features/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn(geistSans.variable, geistMono.variable, "font-sans")}>
      <Header />
      <div className="page-gutter">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
