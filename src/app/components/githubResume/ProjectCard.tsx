import { Project } from '@/app/types';
import { useState } from 'react';
import "./projectCard.scss";

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`project-card mx-5 my-10 p-3 h-full w-full rounded-lg overflow-hidden transform transition-all duration-300 ${isHovered ? '-translate-y-1' : ''
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <section className="flex items-center justify-between mb-4 mx-4">
        <h2 className="text-xl text-white">{project.name}</h2>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-icons text-gray-500 flex items-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
      </section>

      {project.description && (
        <p className="mb-4 mx-4">{project.description}</p>
      )}

      <section className="languages-container flex flex-wrap gap-2">
        {project.languages.length > 0 && project.languages.map((language, index) => (
          <article
            key={index}
            className="button-custom px-3 py-1 rounded-full text-sm font-medium"
          >
            {language}
          </article>
        ))}
      </section>
    </section>
  );
};

export default ProjectCard;