import React from 'react';

const About = () => {
  const skills = [
    'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML/CSS',
    'Socket.io', 'JWT', 'REST APIs', 'Stripe Integration', 'Git & GitHub'
  ];
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am a passionate and dedicated Full-Stack Developer specializing in the MERN stack.
        As an AI & Data Science student, I love building robust, scalable, and intelligent web applications.
        This portfolio showcases the projects I've built, demonstrating my skills in both frontend and backend development.
      </p>
      <h3>My Skills</h3>
      <div className="tags">
        {skills.map(skill => <span key={skill} className="tag">{skill}</span>)}
      </div>
    </section>
  );
};

export default About;
