import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
            Major Deliveries
          </h2>
          <p className="text-slate-600 max-w-2xl">
            We are proud to be the exclusive supply partner for Midnapore's
            emerging skyline. Trusted by top developers for our AAC Blocks and
            timely bulk logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-6 aspect-video bg-zinc-100">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-display font-bold text-slate-900">
                  {project.name}
                </h3>
                <span className="bg-amber-50 text-amber-700 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {project.location}
                </span>
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                Supplied:{" "}
                <span className="text-slate-900">{project.material}</span>
              </p>
              <p className="text-slate-600 leading-relaxed border-l-2 border-amber-500 pl-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
