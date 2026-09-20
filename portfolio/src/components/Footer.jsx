function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Yusuf. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm text-gray-400 transition hover:text-cyan-400"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  )
}

export default Footer