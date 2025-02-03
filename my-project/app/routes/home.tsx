import type { Route } from "./+types/home";
import Banner from "~/Home/HeroSection/Banner";
import  Intro  from "~/Home/Intro/Intro";
import  Philosophy  from "~/Home/philosophy/philosophy";
import  Technology  from "~/Home/Tech4U/Technology";
import  TrustedSect  from "~/Home/TrustedSect/TrustedSect";
import  Legacy  from "~/shared/Legacy/Legacy";


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
     <TrustedSect/>
     <Legacy/>
     
    </>
  );
}
