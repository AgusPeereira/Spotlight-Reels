import { useSeo } from '../hooks/useSeo';
import Hero from '../sections/Hero';
import WhyWeExist from '../sections/WhyWeExist';
import TwoVideos from '../sections/TwoVideos';
import WhatYouGet from '../sections/WhatYouGet';
import Comparison from '../sections/Comparison';
import Examples from '../sections/Examples';
import HowItWorks from '../sections/HowItWorks';
import Packages from '../sections/Packages';
import Founder from '../sections/Founder';
import Faq from '../sections/Faq';
import FinalCta from '../sections/FinalCta';

// Home: el recorrido de un padre que no nos conoce, sin repetir ideas.
// Por qué existimos → qué te llevás (y videos reales) → por qué nosotros → cómo funciona → precios → quién está detrás.
export default function Home() {
  useSeo(
    'Spotlight Reels | Soccer Recruiting Highlight Videos',
    'Recruiting highlight videos for soccer players, built for what college coaches actually watch. Ready in 48 hours.',
  );

  return (
    <>
      <Hero />
      <WhyWeExist />
      <TwoVideos />
      <Examples />
      <WhatYouGet />
      <Comparison />
      <HowItWorks />
      <Packages />
      <Founder />
      <Faq />
      <FinalCta />
    </>
  );
}
