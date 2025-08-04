import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="container my-4">
      <h2>About Notes App</h2>
      <p>
        Welcome to <strong>Notes</strong>, a secure and minimal web-based note-taking application.
        It allows you to:
      </p>
      <ul>
        <li>Create, edit, and delete your notes</li>
        <li>Access notes securely with JWT-based authentication</li>
        <li>Use a clean, user-friendly interface built with React</li>
      </ul>

      <h4>Tech Stack</h4>
      <ul>
        <li><strong>Frontend:</strong> React, Context API, Bootstrap</li>
        <li><strong>Backend:</strong> Node.js, Express, MongoDB</li>
        <li><strong>Auth:</strong> JSON Web Token (JWT), bcrypt</li>
        <li><strong>Deployment:</strong> Vercel (frontend), Render (backend)</li>
      </ul>

      <p>
        Built with ❤️ by <strong>Krishna Sai Rayavaram</strong>
      </p>

      <div className="mt-4">
        <h5>Connect with me:</h5>
        <a
          href="https://github.com/krishnasairayavaram"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark me-2"
        >
          <FaGithub className="mb-1" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/krishnasai-rayavaram-5b8a2326a/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
        >
          <FaLinkedin className="mb-1" /> LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;
