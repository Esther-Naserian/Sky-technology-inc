
import HomePage from "./coffee";
import MenuCards from "./menucard";
import HeroSection from "./background";
import ContactFormMap from "./map";
import DarkFooter from "./footer";

export default function Home() {
  return (
    <div>
    <HomePage/>
    <HeroSection/>
     <MenuCards/> 
    <ContactFormMap/>
    <DarkFooter/>
    </div>
  );
}