import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import BackToTopBtn from "@/components/Buttons/BackToTopBtn";

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
    method: "GET",
  });

  const data = await response.json();

  return {
    // meta tags
    title: data?.profile?.name,
    description: data?.profile?.aboutMe,
    // pwa
    applicationName: data?.profile?.name,
    appleWebApp: {
      capable: true,
      title: data?.profile?.name,
      statusBarStyle: "default",
    },
    formatDetection: {
      telephone: false,
    },
    themeColor: "#e9f1fa",
    viewport:
      "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
    manifest: "/manifest.json",
    icons: [
      {
        rel: "apple-touch-icon",
        url: "/assets/images/site/apple-touch-icon.png",
      },
      { rel: "shortcut icon", url: "/favicon.ico" },
    ],
    keywords: ["web-developer", "portifolio", "projects", "skills"],

    // og meta tags
    openGraph: {
      title: data?.profile?.name,
      description: data?.profile?.aboutMe,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      siteName: data?.profile?.name,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}${data?.profile?.displayPicture}`,
          width: 185,
          height: 278,
        },
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}${data?.profile?.displayPicture}`,
          width: 342,
          height: 513,
        },
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}${data?.profile?.displayPicture}`,
          width: 500,
          height: 750,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    // twitter og meta tags
    twitter: {
      card: "summary_large_image",
      title: data?.profile?.name,
      description: data?.profile?.aboutMe,
      images: [
        `${process.env.NEXT_PUBLIC_BASE_URL}${data?.profile?.displayPicture}`,
      ],
    },
  };
}

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
    method: "GET",
  });

  const data = await response.json();

  return (
    <>
      <NavBar profile={data?.profile} />

      <Intro profile={data?.profile} />

      <About profile={data?.profile} />

      <Projects projects={data?.projects} />

      <Skills skills={data?.skills} />

      <Contact profile={data?.profile} />

      <BackToTopBtn />

      <Footer profile={data?.profile} />

      <ThemeToggle />
    </>
  );
}
