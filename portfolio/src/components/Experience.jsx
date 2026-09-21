const experiences = [
  {
    title: 'Echo-Sync',
    role: 'AI/ML & Edge Computing Project',
    description:
      'Working on a continuous sign language recognition system focused on low-latency inference and efficient processing on edge devices.',
    technologies: [
      'Python',
      'PyTorch',
      'MediaPipe',
      'ONNX',
      'Rust',
      'Go',
    ],
  },

  {
    title: 'UHACK 4.0',
    role: 'Team Project',
    description:
      'Worked as part of a team to develop a technology-based solution for monitoring and providing early warnings related to water-borne diseases in rural areas.',
    technologies: [
      'AI/ML',
      'Web Development',
      'Data Analysis',
      'Team Collaboration',
    ],
  },

  {
    title: 'Web Development Projects',
    role: 'Frontend & Full-Stack Development',
    description:
      'Built interactive web applications using React, JavaScript, Node.js, Express.js, and MongoDB while learning modern development practices.',
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            What I've <span className="text-cyan-400">worked on</span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            My experience comes from hands-on projects, hackathons, and
            continuous development work.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-8">

            {experiences.map((experience) => (
              <div
                key={experience.title}
                className="relative md:pl-12"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-slate-900 bg-cyan-400 md:flex" />

                <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition duration-300 hover:border-cyan-400/40">

                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

                    <h3 className="text-2xl font-bold text-white">
                      {experience.title}
                    </h3>

                    <span className="text-sm font-medium text-cyan-400">
                      {experience.role}
                    </span>

                  </div>

                  <p className="mt-4 leading-7 text-gray-400">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-slate-900 px-3 py-1.5 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience