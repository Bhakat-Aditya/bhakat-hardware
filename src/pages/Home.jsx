import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const container = useRef();

  useGSAP(
    () => {
      // 1. Hero Animation (Load)
      const tl = gsap.timeline();
      tl.from(".hero-content", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-image",
          { x: 50, opacity: 0, duration: 1, ease: "power3.out" },
          "-=0.8",
        )
        .from(
          ".stat-item",
          { y: 20, opacity: 0, duration: 0.8, stagger: 0.2 },
          "-=0.5",
        );

      // 2. Features Scroll Animation
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="w-full overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="hero-content z-10">
            <div className="inline-block px-3 py-1 mb-6 border border-amber-600 rounded-full">
              <span className="text-amber-700 text-xs font-bold uppercase tracking-widest">
                Est. 2008 • Midnapore
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
              The Foundation of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Modern Living.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-10 border-l-2 border-amber-200 pl-6">
              The exclusive authorized partner for AAC Blocks and high-grade
              construction materials in Midnapore. We bridge the gap between
              major manufacturers and your construction site.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-slate-900 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-amber-600 transition-colors rounded-sm shadow-lg hover:shadow-xl"
              >
                View Catalog
              </Link>
              <Link
                to="/contact"
                className="group flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-wider text-slate-900 transition-colors"
              >
                <span>Talk to Owner</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Image (Architectural Frame) */}
          <div className="hero-image relative lg:h-[600px] flex items-center justify-center">
            {/* Decorative back square */}
            <div className="absolute top-10 right-10 w-full h-full border-2 border-amber-600/30 rounded-sm z-0 hidden lg:block"></div>

            {/* Main Image */}
            <div className="relative z-10 w-full h-full overflow-hidden rounded-sm shadow-2xl bg-white p-2">
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipNbmgbd29ui2Mfb-1WEWwfOq7QmKr7dhhl1EzIZ=s1360-w1360-h1020-rw"
                  alt="Bhakat Hardware Site"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-0 left-0 bg-slate-900 text-white p-6 backdrop-blur-md bg-opacity-90">
                  <p className="text-2xl font-display font-bold text-amber-500">
                    15+
                  </p>
                  <p className="text-xs uppercase tracking-widest">
                    Years of Establishment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <div className="bg-slate-900 py-12 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
          {[
            { label: "High-Rise Projects", value: "15+" },
            { label: "Metric Tons Supplied", value: "50k+" },
            { label: "Delivery Radius", value: "West Bengal" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="stat-item flex-1 min-w-[200px] text-center md:text-left border-l border-slate-700 pl-6 first:border-0"
            >
              <h3 className="text-3xl font-display font-bold text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-slate-400 text-xs uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- WHY CHOOSE US (Features) --- */}
      <section className="features-section py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Why Builders Trust Us
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="feature-card bg-zinc-50 p-8 rounded-sm hover:shadow-lg transition-shadow border border-zinc-100">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 flex items-center justify-center rounded-full mb-6 text-xl">
                ★
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Exclusive AAC Partner
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We are the sole authorized distributor for premium AAC blocks in
                the region. Get direct-from-factory rates without the middleman
                markup.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card bg-zinc-50 p-8 rounded-sm hover:shadow-lg transition-shadow border border-zinc-100">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 flex items-center justify-center rounded-full mb-6 text-xl">
                🚛
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Bulk Logistics
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our logistics network is optimized for heavy loads. Whether it's
                a truckload of sand or 50 tons of steel, we handle the transport
                logistics so you don't have to.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card bg-zinc-50 p-8 rounded-sm hover:shadow-lg transition-shadow border border-zinc-100">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 flex items-center justify-center rounded-full mb-6 text-xl">
                🤝
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Authentic Billing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Transparency is our core. Every bag of cement and every rod of
                steel comes with authentic GST billing and manufacturer test
                certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
            Building Something <span className="text-amber-500">Big?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Don't compromise on your foundation. Get a quote for your project's
            complete material requirement today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-600 text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all rounded-sm"
          >
            Get a Bulk Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
