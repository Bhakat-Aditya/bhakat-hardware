import React from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useGSAP(() => {
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  });

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
          The Foundation of <br />
          <span className="text-amber-600">Midnapore.</span>
        </h1>
        <p className="hero-text text-lg text-slate-600 max-w-2xl leading-relaxed mb-12">
          From residential homes to the city's tallest high-rises, we provide
          the strength that holds it all together. The exclusive source for AAC
          Blocks in the region.
        </p>
        <div className="hero-text flex gap-4">
          <Link
            to="/products"
            className="bg-slate-900 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-amber-600 transition-colors rounded-sm"
          >
            View Materials
          </Link>
          <Link
            to="/projects"
            className="border border-slate-300 text-slate-900 px-8 py-4 font-bold uppercase tracking-wider hover:border-slate-900 transition-colors rounded-sm"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
