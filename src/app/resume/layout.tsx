import "../globals.css";
import { Open_Sans } from "next/font/google";

const googleFont = Open_Sans({ weight: "400", subsets: ["latin"] });


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${googleFont.className} min-h-[100%] bg-slate-200 overflow-y-auto`}
      >
        {children}
      </body>
    </html>
  );
}
