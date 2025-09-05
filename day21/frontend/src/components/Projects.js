import React from 'react';

const projectData = [
  { title: 'E-commerce Store', description: 'A full-stack online shop with a product catalog, user authentication, a persistent shopping cart, and secure payments via Stripe.', tags: ['React', 'Node.js', 'MongoDB', 'Stripe'] },
  { title: 'Real-time Trello Clone', description: 'A collaborative task management board with drag-and-drop functionality and real-time updates for all users, powered by Socket.io.', tags: ['React', 'Socket.io', 'Express', 'dnd-kit'] },
  { title: 'Social Media Dashboard', description: 'A social platform where users can create posts, and interact by liking and commenting on them in real-time.', tags: ['React', 'MERN', 'JWT'] },
  { title: 'Weather App with Maps', description: 'A client-side app that fetches data from OpenWeatherMap and displays the current weather on an interactive Leaflet map.', tags: ['React', 'API', 'Geolocation', 'Leaflet'] },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectData.map(project => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <div className="project-links">
              <a href="#">GitHub</a>
              {/* <a href="#">Live Demo</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
