export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-12 max-w-3xl mx-auto font-sans">
      <h1 className="text-4xl font-bold">Hello, I am <strong>Owen Yap</strong>!</h1>
      <p className="text-center text-lg max-w-xl">
        I'm a full-stack developer specializing in building modern and intuitive web applications and mobile apps. I have a maniac love for ice cream and green tea. Plus, I am also an easy-going and chill person so I will fit right in any team.
      </p>
      <p className="text-center text-lg max-w-xl">
        This website is built using React, Next.js, and TypeScript.
      </p>
      <div className="flex gap-6"><a href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Take a look at my work!</a>
        <a href="/about" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
          About Me
        </a>
      </div>
      <footer className="mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
}
