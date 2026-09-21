const skillCategories = [
  {
    title: 'Programming',
    skills: ['C++', 'Python', 'JavaScript'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'HTML', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'Netlify','Render'],
  },
  {
  title: 'Problem Solving',
  skills: ['Data Structures & Algorithms'],
  links: [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/CKkJCltIZd/',
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/profile/yusriskdev?tab=activity',
    },
  ],
},
  
]

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Skills
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technologies I{' '}
            <span className="text-cyan-400">work with</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Technologies and tools I use to build modern web
            applications and software projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group flex h-full min-h-[180px] flex-col rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
            >

              {/* Category Title */}
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm text-gray-300 transition group-hover:border-cyan-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {category.links && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.links.map((link) => (
                        <a
                          key={link.name}
                           href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-sm font-medium text-cyan-400 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
                        >
                         {link.name} ↗
                        </a>
                      ))}
                    </div>
                   )}
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills