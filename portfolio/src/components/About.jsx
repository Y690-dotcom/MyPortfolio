function About() {
  return (
    <section id="about" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Turning ideas into <span className="text-cyan-400">technology</span>
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          {/* About Text */}
          <div>
            <p className="text-lg leading-8 text-gray-400">
              I am a B.Tech Computer Science student specializing in
              Artificial Intelligence and Machine Learning. I enjoy building
              practical applications that combine intelligent systems with
              modern web technologies.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              My interests include Artificial Intelligence, Machine Learning,
              full-stack development, and solving real-world problems through
              technology.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              I am continuously learning new technologies and working on
              projects that help me improve my development and problem-solving
              skills.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl border border-white/10 bg-slate-950 p-6">
              <p className="text-3xl font-bold text-cyan-400">AI/ML</p>
              <p className="mt-2 text-gray-400">
                Specialization
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950 p-6">
              <p className="text-3xl font-bold text-cyan-400">React</p>
              <p className="mt-2 text-gray-400">
                Frontend Development
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950 p-6">
              <p className="text-3xl font-bold text-cyan-400">MERN</p>
              <p className="mt-2 text-gray-400">
                Full Stack
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950 p-6">
              <p className="text-3xl font-bold text-cyan-400">Projects</p>
              <p className="mt-2 text-gray-400">
                Hands-on Learning
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About