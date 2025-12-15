import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about me, my background, skills, and what drives my passion for web development.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 border-b border-border pb-8">
        <span className="section-label block mb-4">[ ABOUT ]</span>
        <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground mb-4">
          ABOUT ME
        </h1>
        <p className="text-xl text-muted-foreground font-mono">
          Developer, learner, and tech enthusiast
        </p>
      </div>

      {/* Bio Section */}
      <section className="mb-12">
        <h2 className="font-mono text-2xl font-bold text-foreground mb-4">
          HI, I'M <span className="bg-accent px-1">LE VIET TRUNG</span>
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Welcome to my blog! I'm a passionate web developer with a love for building 
            beautiful, functional, and user-friendly applications. This space serves as 
            my digital garden where I share what I'm learning, working on, and thinking about.
          </p>
          <p>
            My journey in tech began when I started exploring web development in college, and since then, I've been constantly 
            exploring new technologies, frameworks, and best practices. I believe in learning 
            by doing and sharing knowledge with the community.
          </p>
          <p>
            When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen. I'm always excited 
            to connect with fellow developers and learn from different perspectives.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <span className="section-label block mb-4">[ SKILLS ]</span>
        <h2 className="font-mono text-2xl font-bold text-foreground mb-6">
          TECHNOLOGIES I WORK WITH
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 bg-white">
          {[
            {
              category: 'FRONTEND',
              skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
            },
            {
              category: 'BACKEND',
              skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'],
            },
            {
              category: 'TOOLS & OTHERS',
              skills: ['Git', 'Docker', 'AWS', 'CI/CD'],
            },
            {
              category: 'CYBERSECURITY',
              skills: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Security Audits'],
            }
          ].map((group) => (
            <div key={group.category} className="bg-background p-6 border border-border">
              <h3 className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-foreground font-mono text-sm">
                    <span className="text-success mr-2">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="card-featured p-8">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent block mb-4">
          [ CONNECT ]
        </span>
        <h2 className="font-mono text-2xl font-bold mb-4">
          LET'S CONNECT
        </h2>
        <p className="text-gray-400 mb-6">
          I'm always open to interesting conversations and collaboration opportunities. 
          Feel free to reach out!
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/vietrux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-white text-white font-mono text-sm hover:bg-white hover:text-black transition-all"
          >
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GITHUB
          </a>
          <a
            href="https://twitter.com/vietrux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-white text-white font-mono text-sm hover:bg-white hover:text-black transition-all"
          >
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            TWITTER
          </a>
          <a
            href="https://linkedin.com/in/vietrux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-white text-white font-mono text-sm hover:bg-white hover:text-black transition-all"
          >
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
            LINKEDIN
          </a>
          <a
            href="mailto:leviettrung.social@gmail.com"
            className="inline-flex items-center px-4 py-2 border border-accent text-accent font-mono text-sm hover:bg-accent hover:text-black transition-all"
          >
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            EMAIL
          </a>
        </div>
      </section>
    </div>
  )
}
