import type { Route } from "./+types/home";
import Banner from "~/shared/Home/HeroSection/Banner";
import  Intro  from "~/shared/Home/Intro/Intro";


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
     
    </>
  );
}
