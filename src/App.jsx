import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;


// Some Notes:

// 1. This App is using React JS with Tailwind CSS with Vite as a build tool.
// 2. The Main files are in the src folder.
// 3. The assets folder contains the images and svgs.
// 4. The main.jsx file is the entry point of the application.
// 5. The App.jsx file contains the main components.
// 6. The Constants folder contains the data for the components.
// 7. The Components folder contains the main components.



