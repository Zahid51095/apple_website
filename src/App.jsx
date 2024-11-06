import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";

import * as Sentry from '@sentry/react';
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App = () => {

  return <main className="bg-black">
    <Navbar></Navbar>
    <Hero></Hero>
    <Highlights></Highlights>
    <Model></Model>
    <Features></Features>
    <HowItWorks></HowItWorks>
    <Footer></Footer>
  </main>;
};

export default Sentry.withProfiler(App);
