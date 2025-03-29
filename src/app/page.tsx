import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Omkar Prajapati
        </h1>
        <div className="flex justify-center gap-6 mt-4">
          <Link
            href="https://github.com/prajapatiomkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium"
          >
            GitHub
          </Link>
          <Link
            href="https://x.com/omkartwts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium"
          >
            X
          </Link>
          <Link
            href="https://www.linkedin.com/in/prajapati-omkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
