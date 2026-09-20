function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="text-center">

          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let's <span className="text-cyan-400">connect</span>
          </h2>

          {/* <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            I'm always interested in discussing new projects, opportunities,
            collaborations, and ideas related to technology.
          </p> */}
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Have a project idea, internship opportunity, or just want to connect?
             <br className="hidden sm:block" />
              Feel free to reach out.
        </p>

        </div>

        {/* Contact Card */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900 p-8 md:p-12">

          <div className="grid gap-8 md:grid-cols-3">

            {/* Email */}
            <a
              href="mailto:yusuf18mushtaq@gmail.com"
              className="group rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="text-3xl">✉</div>

              <h3 className="mt-4 font-semibold text-white">
                Email
              </h3>

              <p className="mt-2 break-all text-sm text-gray-400 group-hover:text-cyan-400">
                yusuf18mushtaq@gmail.com
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Y690-dotcom"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="text-3xl">◉</div>

              <h3 className="mt-4 font-semibold text-white">
                GitHub
              </h3>

              <p className="mt-2 text-sm text-gray-400 group-hover:text-cyan-400">
                View my projects
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="text-3xl">in</div>

              <h3 className="mt-4 font-semibold text-white">
                LinkedIn
              </h3>

              <p className="mt-2 text-sm text-gray-400 group-hover:text-cyan-400">
                Connect with me
              </p>
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact