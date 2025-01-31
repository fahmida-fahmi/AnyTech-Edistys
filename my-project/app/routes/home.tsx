import type { Route } from "./+types/home";
import Banner from "~/shared/Home/HeroSection/Banner";
import  Intro  from "~/shared/Home/Intro/Intro";
import  Philosophy  from "~/shared/Home/philosophy/philosophy";
import  Technology  from "~/shared/Home/Tech4U/Technology";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home Page | Anytech" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>  
     <Banner/>
     <Intro/>
     <Philosophy/>
     <Technology/>
     
    </>
  );
}
