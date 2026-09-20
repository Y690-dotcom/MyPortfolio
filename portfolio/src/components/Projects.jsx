const projects = [
  {
    title: 'Echo-Sync',
    description:
      'A continuous sign language recognition system designed for edge devices. It uses MediaPipe for skeletal tracking and an ONNX-optimized Transformer for low-latency inference.',
    technologies: [
      'Python',
      'PyTorch',
      'MediaPipe',
      'ONNX',
      'Rust',
      'Go',
    ],
    github: 'https://github.com/sriramxdev/Echo-Sync',
    demo: '#',
  },

  {
    title: 'Book Recommendation Chatbot',
    description:
      'An AI-powered chatbot that recommends books based on user preferences such as genre, mood, length, and popular authors using IBM Watson Assistant.',
    technologies: [
      'IBM Watson Assistant',
      'AI',
      'Chatbot',
      'JavaScript',
    ],
    github: 'https://github.com/Y690-dotcom/IBM-WATSON-ASSISTANT-CHATBOT',
    demo: ' https://y690-dotcom.github.io/IBM-WATSON-ASSISTANT-CHATBOT/CHATBOT.html',
  },

  {
    title: 'MERN Expense Tracker',
    description:
      'A full-stack expense management application that allows users to securely manage, track, and visualize their expenses with authentication and interactive charts.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
    ],
    github: 'https://github.com/Y690-dotcom/Expense-Tracker-Application',
    demo: 'https://animated-platypus-249503.netlify.app',
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Some of the projects I've built while exploring AI, machine
            learning, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-slate-950 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
            >

              {/* Project Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400">
                &lt;/&gt;
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-900 px-3 py-1.5 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-5 border-t border-white/10 pt-5">

                <a
                  href={project.github}
                  className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
                >
                  GitHub →
                </a>

                <a
                  href={project.demo}
                  className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
                >
                  Live Demo →
                </a>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects