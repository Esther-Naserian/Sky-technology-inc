import HomePage from "./coffee";
import PropertiesSection from "./properties";
import AboutSection from "./about";
import TestimonialsSection from "./testimonies";
import ContactFormMap from "./map";
import RealEstateFooter from "./footer";

export default function Home() {
  return (
    <div>
    <HomePage/>
    <AboutSection/>
    <PropertiesSection/>
    <TestimonialsSection/>
    <ContactFormMap/>
    <RealEstateFooter/>
    </div>
  );
}
