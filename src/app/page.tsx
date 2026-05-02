const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  initial: "K",
};

const links = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Blog", href: "https://example.com" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center px-4 py-12">
      <div className="w-full max-w-md flex flex-col items-center">
        <div
          aria-label={`${profile.name} 프로필 사진`}
          className="w-32 h-32 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-4xl font-semibold text-zinc-500 dark:text-zinc-400"
        >
          {profile.initial}
        </div>

        <h1 className="mt-6 text-2xl font-bold">{profile.name}</h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          {profile.bio}
        </p>

        <ul className="mt-10 w-full flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 py-4 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
