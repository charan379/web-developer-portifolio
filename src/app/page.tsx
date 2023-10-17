import dynamic from "next/dynamic";
import Loading from "./loading";

const ProfileCard = dynamic(() => import('@/ui/profilecard'), {
  ssr: true,
  loading: () => <Loading />
});

async function fetchData() {
  const response: Response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data`, {
    next: { revalidate: 3600 },
    method: "GET",
  });

  if (response?.status === 200) {
    return await response.json();
  } else {
    throw new Error(`${response?.status} : ${response?.statusText}`);
  }
}
export async function generateMetadata() {

  const data = await fetchData();

  return {
    // meta tags
    title: data?.name,
    description: data?.aboutMe,
    // pwa
    applicationName: "",
    appleWebApp: {
      capable: true,
      title: "",
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
      title: data?.name,
      description: data?.aboutMe,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      siteName: data?.name,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/dp.jpg`,
          width: 185,
          height: 278,
        },
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/dp.jpg`,
          width: 342,
          height: 513,
        },
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/dp.jpg`,
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
      title: data?.name,
      description: data?.aboutMe,
      images: [
        `${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/dp.jpg`,
      ],
    },
  };
}

export default async function Home() {

  const data = await fetchData();

  return (
    <main className="min-h-[100dvh] w-full m-0 flex flex-row justify-center items-center overflow-auto">
      <ProfileCard {...data} />
    </main>
  );
}
