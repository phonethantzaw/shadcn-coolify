import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto p-8 pb-20">
        <main className="flex flex-col gap-12 items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <Image
              className="dark:invert mx-auto mb-8"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to shadcn-coolify
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A modern Next.js application with sample pages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
            {[
              {
                title: "Dashboard",
                description: "View analytics and metrics",
                href: "/dashboard",
                color: "blue",
              },
              {
                title: "Profile",
                description: "Manage your account settings",
                href: "/profile",
                color: "green",
              },
              {
                title: "Components",
                description: "Explore UI components",
                href: "/components",
                color: "purple",
              },
              {
                title: "About",
                description: "Learn more about us",
                href: "/about",
                color: "orange",
              },
            ].map((page, idx) => (
              <Link
                key={idx}
                href={page.href}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {page.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
