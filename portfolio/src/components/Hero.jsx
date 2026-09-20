function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-20"
    >

      {/* Background Glow */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div className="animate-fade-up">

           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
               Hello, I'm
           </p>

           <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
               Yusuf Mushtaq
           </h1>

           <h2 className="mt-5 text-2xl font-semibold text-slate-300 md:text-3xl">
               Btech CS-AIML Student
           </h2>

           <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
               I build responsive and user-friendly web applications using
               React, JavaScript, Node.js, and modern web technologies.
           </p>



          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex animate-float justify-center">

         <div className="relative">

           <div className="absolute -inset-4 rounded-full bg-cyan-400/10 blur-2xl" />

           <img
             src="/profile.jpg"
             alt="Yusuf"
             className="relative h-64 w-64 rounded-full border-2 border-cyan-400/30 object-cover shadow-2xl    shadow-cyan-500/10 sm:h-72 sm:w-72 md:h-96 md:w-96"
           />

         </div>

      </div>

      </div>
    </section>
  )
}

export default Hero