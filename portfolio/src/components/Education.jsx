function Education() {
  return (
    <section id="education" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Education
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My <span className="text-cyan-400">Education</span>
          </h2>
        </div>

        {/* Education Card */}
        <div className="relative rounded-2xl border border-white/10 bg-slate-900 p-8">

          {/* Timeline Dot */}
          <div className="absolute -left-2 top-10 hidden h-4 w-4 rounded-full bg-cyan-400 md:block" />

          <div className="flex flex-col justify-between gap-4 md:flex-row">

            <div>
              <p className="text-sm font-medium text-cyan-400">
                B.Tech • Computer Science
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Artificial Intelligence & Machine Learning
              </h3>

              <p className="mt-3 text-gray-400">
                United College of Engineering and Research
              </p>
            </div>

            <div>
              <span className="rounded-lg bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400">
                3rd Year
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Education