import React from "react";

const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-[60vh]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-display font-bold text-slate-900 mb-6">
          Start Your Project
        </h2>
        <p className="text-xl text-slate-500 mb-12">
          Ready to build? Contact Susmit Bhakat directly for bulk rates and
          logistics planning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Contact Details Card */}
          <div className="bg-zinc-50 p-10 rounded-sm border border-zinc-100">
            <h3 className="text-lg font-bold text-amber-600 uppercase tracking-widest mb-4">
              Owner / Proprietor
            </h3>
            <p className="text-3xl font-display font-bold text-slate-900 mb-2">
              Susmit Bhakat
            </p>

            <div className="space-y-2 mb-6">
              <p className="text-slate-600 text-lg flex items-center gap-2">
                <span className="font-bold text-slate-900">M:</span> +91 91537
                60277
              </p>
              <p className="text-slate-600 text-lg flex items-center gap-2">
                <span className="font-bold text-slate-900">M:</span> +91 94343
                21475
              </p>
              <p className="text-slate-600 text-lg flex items-center gap-2">
                <span className="font-bold text-slate-900">E:</span>{" "}
                pappu.3790@gmail.com
              </p>
            </div>

            <a
              href="tel:+919153760277"
              className="block w-full text-center bg-slate-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Location / Map Card */}
          <div className="bg-zinc-50 p-10 rounded-sm border border-zinc-100 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-amber-600 uppercase tracking-widest mb-4">
                Store Location
              </h3>
              <p className="text-xl font-display font-bold text-slate-900 mb-2">
                Bhakat Hardware
              </p>
              <p className="text-slate-600 leading-relaxed">
                Rajardijhi, Jamunabali Basantpur,
                <br />
                Abash, Midnapore,
                <br />
                West Bengal 721102
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Bhakat+Hardware&query_place_id=ChIJSTnjCQ9bHToRp9GGGwvi_As"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full text-center border-2 border-slate-900 text-slate-900 py-3.5 font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
