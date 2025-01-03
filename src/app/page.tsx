'use client';
import Skills from "./components/skills/Skills";
import "./styles/globals.scss";

const Home = () => {

  return (
    <section className="wz h-full page-container-size flex-start">
      <article className="flex flex-col items-baseline pt-20">
        <label className="text-l pl-2">Hi, my name is</label>
        <h1 className="text-6xl pr-2 text-white">Mauricio López Ruiz</h1>
      </article>
      <h3 className="text-4xl pb-5">Software Developer</h3>
      <p className="text-white">
        With a focus on front-end technologies. I specialize in React, React Native, CSS, and HTML, and I enjoy creating engaging,
        user-friendly interfaces for both web and mobile applications. I take pride in blending design and functionality to deliver
        seamless user experiences that meet modern performance standards.
      </p>
      <Skills />
    </section>
  );
}

export default Home;
