import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const route = useRouter();

  useEffect(() => {
    route.push("/food");
  }, []);
  return null;
}
