import React from 'react';

export default function Resume() {
  return (
    <main className="max-w-[800px] mx-auto p-4 sm:p-8 md:p-12 bg-white text-black min-h-screen">
      {/* Header */}
      <header className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 font-normal leading-tight">Omkar Prajapati</h1>
        <div className="text-sm sm:text-base flex flex-col sm:flex-row flex-wrap justify-center items-center gap-1 sm:gap-2">
          <a href="mailto:prajapatiomkar9833@gmail.com" className="hover:underline">
            prajapatiomkar9833@gmail.com
          </a>
          <span className="hidden sm:inline">|</span>
          <span>Mumbai, Maharashtra</span>
          <span className="hidden sm:inline">|</span>
          <a href="https://github.com/prajapatiomkar" className="hover:underline break-all" target="_blank" rel="noreferrer">
            github.com/prajapatiomkar
          </a>
        </div>
      </header>

      {/* Profile Section */}
      <Section title="PROFILE">
        <p className="text-justify text-sm sm:text-base">
          Software Developer with expertise in React, Node.js, API development, and cross-platform app
          development.
        </p>
      </Section>

      {/* Education Section */}
      <Section title="EDUCATION">
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1 sm:mb-0">
            <span className="font-bold text-sm sm:text-base">N. G. Acharya & D. K. Marathe College of Arts, Science & Commerce</span>
            <span className="text-xs sm:text-base mt-0.5 sm:mt-0 text-gray-700 sm:text-black">Mumbai</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-baseline italic mb-2">
            <span className="text-sm sm:text-base">Bachelor of Science in Computer Science</span>
            <span className="not-italic text-xs sm:text-base mt-0.5 sm:mt-0 text-gray-700 sm:text-black">2020 – 2023</span>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section title="EXPERIENCE">
        <ExperienceItem 
          title="Software Developer"
          company="Code B"
          location="Mumbai, India"
          date="07/2025 – Present"
          bullets={[
            "Spearheaded end-to-end maintenance of the Meahana software, resolving critical issues and implementing new features while significantly improving platform stability and scalability.",
            "Maintained the ICall software, fixing major issues such as counselors not receiving live feedback when new users were added, along with several other critical bugs.",
            "Worked on the Lobo Chat App, implementing full internationalization (English/Korean) and contributing to major backend APIs (user authentication & authorization) using Express.js. Built custom React components, created complex forms, and handled application state efficiently.",
            "Developed the KGF Live Flutter app from Figma designs, completing the entire Flutter development lifecycle."
          ]}
        />
        
        <ExperienceItem 
          title="Software Developer"
          company="Utopiatech"
          location="Mumbai, India"
          date="01/2024 – 02/2025"
          bullets={[
            "Developed authentication APIs for Eazyiot’s IoT platform.",
            "Contributed to core API functionalities, including create, update, and delete operations.",
            "Maintained and enhanced the Software Timer, EazyInfra, and Utility modules.",
            "Improved API efficiency, reliability, and scalability across the platform.",
            "Ensured robust security and followed industry best practices in API development."
          ]}
        />

        <ExperienceItem 
          title="Frontend Developer (React JS) Intern"
          company="Educase"
          location="Remote, India"
          date="09/2023 – 01/2024"
          bullets={[
            "Built a dedicated module for the application using React Native.",
            "Converted class-based screens to functional components following best practices.",
            "Implemented role-based access management based on the current user’s permissions.",
            "Built and deployed the application end-to-end."
          ]}
        />
      </Section>

      {/* Technical Skills Section */}
      <Section title="TECHNICAL SKILLS">
        <div className="flex flex-col gap-2 sm:gap-1 text-sm sm:text-base">
          <SkillRow label="Programming Languages" value="JavaScript, Go, and Python" />
          <SkillRow label="Front-End" value="HTML, CSS, JavaScript, TypeScript, React JS, React Native, Flutter, Redux Toolkit, Angular, Tailwind CSS" />
          <SkillRow label="Back-End" value="NodeJs, NestJs, ExpressJs" />
          <SkillRow label="Databases" value="NoSQL (MongoDB), SQL (MySQL, PostgreSQL)" />
          <SkillRow label="Cloud" value="AWS (EC2, Lambda, Fargate, ECR, ECS, EKS, S3, EBS...)" />
          <SkillRow label="Tools" value="Docker, VS Code, Android Studio, Postman, Git, GitHub, Selenium, Jest, Figma" />
          <SkillRow label="Others" value="UI/UX, MVC design pattern & RESTful, MERN Stack" />
        </div>
      </Section>

    </main>
  );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="mb-6 sm:mb-8">
      <h2 className="text-base sm:text-lg font-bold sm:font-normal uppercase tracking-wide mb-1 sm:mb-2">{title}</h2>
      <hr className="border-t-2 sm:border-t border-black mb-3 sm:mb-4" />
      {children}
    </section>
  );
}

function SkillRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="leading-snug">
      <span className="font-bold block sm:inline sm:mr-2">{label}:</span>
      <span className="block sm:inline mt-0.5 sm:mt-0">{value}</span>
    </div>
  );
}

function ExperienceItem({ title, company, location, date, bullets }: {
  title: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
}) {
  return (
    <div className="mb-6 sm:mb-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1 sm:mb-0">
        <span className="font-bold text-sm sm:text-base">{title}</span>
        <span className="text-xs sm:text-base mt-0.5 sm:mt-0 text-gray-700 sm:text-black">{date}</span>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline italic mb-2 sm:mb-3">
        <span className="text-sm sm:text-base">{company}</span>
        <span className="not-italic text-xs sm:text-base mt-0.5 sm:mt-0 text-gray-700 sm:text-black">{location}</span>
      </div>
      <ul className="list-disc list-outside ml-4 sm:ml-8 space-y-1.5 sm:space-y-1 text-sm sm:text-base">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="pl-1 sm:pl-2">{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
