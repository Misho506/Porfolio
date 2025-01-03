'use client';
import Image from 'next/image';
import './skills.scss';
const Skills = () => {
  const goToWebTechnologies = (urlText: string) => {
    window.open(urlText, "_blank");
  }
  return (
    <section className="mt-20">
      <h2 className="text-2xl">Skills</h2>
      <article className="tech-icons inline-flex flex-wrap">
        <Image onClick={() => goToWebTechnologies("https://react.dev/")} width={100} height={100} alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
        <Image onClick={() => goToWebTechnologies("https://angular.dev/")} width={100} height={100} alt="angular" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
        <Image onClick={() => goToWebTechnologies("https://www.javascript.com/")} width={100} height={100} alt="javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        <Image onClick={() => goToWebTechnologies("https://typescriptlang.org/")} width={100} height={100} alt="typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
        <Image onClick={() => goToWebTechnologies("https://sass-lang.com/")} width={100} height={100} alt="sass" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
        <Image onClick={() => goToWebTechnologies("https://html.com/html5/")} width={100} height={100} alt="html5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
        <Image onClick={() => goToWebTechnologies("https://www.w3schools.com/css/css_website_layout.asp")} width={100} height={100} alt="css3" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
        <Image onClick={() => goToWebTechnologies("https://git-scm.com/")} width={100} height={100} alt="git" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
      </article>

      <section className="mt-20">
        <h2 className="text-2xl">Learning</h2>
        <article className="tech-icons inline-flex flex-wrap">
          <Image onClick={() => goToWebTechnologies("https://www.docker.com/")} width={100} height={100} alt="docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
          <Image onClick={() => goToWebTechnologies("https://nodejs.org/en")} width={100} height={100} alt="original" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
          <Image onClick={() => goToWebTechnologies("https://nextjs.org/")} width={100} height={100} alt="nextjs" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
          <Image onClick={() => goToWebTechnologies("https://tailwindcss.com/")} width={100} height={100} alt="tailwindcss" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
        </article>
      </section>
    </section>
  );
};

export default Skills;
