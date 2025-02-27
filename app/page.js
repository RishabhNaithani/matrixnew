'use client';

import { Footer } from '../components';
import { About, Explore, Hero, Insights, Achievements } from '../sections';

const Page = () => (
  <div className="bg-[#FFF5CE] overflow-hidden">
    <Hero />
    <div className="relative">
      <div className="gradient-03 z-0" />
      <About />
      <div className="z-0 relative py-6" />
      <Explore />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Insights />
    </div>
    <Achievements />
    <Footer />
  </div>
);

export default Page;
