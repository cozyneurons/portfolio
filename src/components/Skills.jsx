import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveBackground from './InteractiveBackground';

// Skills data extracted from resume & projects
const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
    ],
  },
  {
    title: 'Backend & AI',
    skills: [
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'LangChain', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/langchain/langchain-original.svg' },
      { name: 'WebSockets', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Leadership', emoji: '🎯' },
      { name: 'Communication', emoji: '💬' },
      { name: 'Problem Solving', emoji: '🧠' },
      { name: 'Team Work', emoji: '🤝' },
      { name: 'UI/UX Thinking', emoji: '✨' },
      { name: 'Open Source', emoji: '🌐' },
    ],
  },
];

const SkillCard = ({ skill }) => (
  <li className="skill-item">
    <span className="skill-icon-wrap">
      {skill.icon ? (
        <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
      ) : (
        <span className="skill-emoji">{skill.emoji}</span>
      )}
    </span>
    <span className="skill-label">{skill.name}</span>
  </li>
);

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      style={{ position: 'relative' }}
    >
      <InteractiveBackground />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="skills-header">
          <p className="skills-overline font-mono">Skills</p>
          <h2>Tools I work with</h2>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="skills-category-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ci * 0.07, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <h3 className="skills-category-title">{cat.title}</h3>
              <ul className="skills-list">
                {cat.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
