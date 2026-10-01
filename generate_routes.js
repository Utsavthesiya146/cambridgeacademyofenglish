const fs = require('fs');
const path = require('path');

const routes = [
  '/about/vision-mision',
  '/about/values-of-cambridge',
  '/courses/learn-english-speaking-course-online',
  '/courses/class-room-english-course',
  '/courses/exam-preparation-course',
  '/courses/foreign-language-courses',
  '/courses/teacher-training',
  '/courses/cambridge-exam',
  '/admission/foreign-students',
  '/admission/indian-students',
  '/admission/terms-process',
  '/admission/academic-extracts',
  '/extra/general',
  '/extra/thailand',
  '/extra/saudi-arabia',
  '/extra/iran',
  '/extra/iraq',
  '/extra/turkey',
  '/extra/korea',
  '/extra/yemen',
  '/extra/japan',
  '/extra/kuwait',
  '/extra/bahrain',
  '/extra/egypt',
  '/certificate'
];

const basePath = path.join(__dirname, 'src', 'app');

routes.forEach(route => {
  const dirPath = path.join(basePath, route);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, 'page.tsx');
  
  // Format title for the page
  const parts = route.split('/');
  const lastPart = parts[parts.length - 1];
  const title = lastPart.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const content = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${title} | Cambridge Academy of English",
  description: "Learn more about ${title} at Cambridge Academy of English.",
};

export default function Page() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      <section className="relative py-24 bg-primary text-white">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">${title}</h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Information about ${title} will be provided here.
          </p>
        </div>
      </section>
      
      <section className="py-24 container-custom">
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6">Welcome to ${title}</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            This is the official page for ${title}. Content is currently being updated to match the original Cambridge Academy of English website.
          </p>
        </div>
      </section>
    </div>
  );
}
`;

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(\`Created route: \${route}\`);
  } else {
    console.log(\`Route already exists: \${route}\`);
  }
});
