import type { Route } from "./+types/about";

import Main  from "../About/Main.jsx";
import OurStory  from "../About/OurStory.jsx";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About Page | Anytech" },
    // { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return (
    <>  
     <Main/>
     <OurStory/>
    </>
  );
}
