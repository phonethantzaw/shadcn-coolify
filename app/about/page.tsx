export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building amazing experiences with modern web technologies
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We are dedicated to creating beautiful, functional, and accessible
            web applications that solve real-world problems. Our team combines
            cutting-edge technology with thoughtful design to deliver
            exceptional user experiences.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            With a focus on performance, accessibility, and user-centric design,
            we strive to build products that make a positive impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            {
              title: "Innovation",
              description:
                "We stay ahead of the curve with the latest technologies and best practices.",
            },
            {
              title: "Quality",
              description:
                "Every line of code is written with attention to detail and excellence.",
            },
            {
              title: "Collaboration",
              description:
                "We believe in working together to achieve extraordinary results.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "shadcn/ui",
              "Vercel",
              "Node.js",
              "PostgreSQL",
            ].map((tech, idx) => (
              <div
                key={idx}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center"
              >
                <span className="text-gray-900 dark:text-white font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

