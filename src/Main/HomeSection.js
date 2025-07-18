import React from "react";
import "./HomeSection.css";
import "../images/hero-img.jpg";
import myImg from '../images/my-img.jpg';

const HomeSection = () => {
 
  return (
    <div className="bg-color">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-left">
            <h6 className="text-light fade-up-name mt-5">Vallapuneni Anil</h6>

            {/* Updated Animated Headline */}
            <div className="headline-container">
              <h3 className="animated-heading text-light">
                Hello! I am Anil, a Passionate Java Developer
              </h3>
            </div>

    
              <p className="text-light text-start">
  Aspiring Java Full Stack Developer with strong knowledge of Java, Spring Boot,
  and MySQL, complemented by front-end skills in HTML, CSS, and JavaScript.
  Committed to building scalable and user-centric web applications.
</p>
<p className="text-light text-start">
  Proficient in developing REST APIs, handling backend logic, and designing
  responsive front-end interfaces. Passionate about continuous learning and
  contributing to impactful software solutions.
</p>
            
            <div className="d-flex">
              <a href="#contact" className="px-btn d-none d-lg-inline-flex">
                Let's Talk
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="pic img-fluid rounded-circle"
              src={myImg}
              alt="Anil Vallapuneni"
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects-section mt-5" id="projects">
          <h2 className="text-light">Previous Projects</h2>
          <div className="projects-container">
            {/* Project 1 - AstraZeneca */}
            <div className="project-card">
              <h3 className="text-light">
               Parking Lot System (Jan – May 2024)
              </h3>
              <p className="text-light">
                <strong>Duration:</strong> Aug 2024 - Feb 2025
              </p>
              <p className="text-light">
                ◦ Built a Parking Lot Management System using Java, Spring Boot, and MySQL to handle vehicle entry, exit, and dynamic fee calculation.
◦ Applied Object-Oriented Principles and implemented design patterns like Strategy Pattern and Factory Pattern.
◦ Designed RESTful APIs using Spring MVC to manage real-time vehicle operations and parking slot allocation.
◦ Followed layered architecture: Controller, Service, and Repository layers to ensure clean structure.
◦ Used H2 in-memory database for development and Postman for testing.

              </p>
              <h5 className="text-light">Roles and Responsibilities:</h5>
      
                <ul className="text-light">
  <li>Designed and developed RESTful APIs to manage vehicle entry, exit, and slot allocation.</li>
  <li>Implemented dynamic pricing using Strategy and Factory design patterns.</li>
  <li>Followed layered architecture (Controller, Service, Repository) for clean code structure.</li>
  <li>Used H2 in-memory database for rapid testing and development.</li>
  <li>Tested all APIs using Postman and validated business logic.</li>
  <li>Wrote modular, reusable code and followed best practices of OOP in Java.</li>


              </ul>
              <h5 className="text-light">Technical Skills:</h5>
              <ul className="text-light">
                <li>HTML5, CSS3, JavaScript</li>
                <li>Spring Boot,Security,REST api</li>
                <li>Spring Security, h2 database</li>
            
              </ul>
            </div>

            {/* Project 2 - Optiva */}
            <div className="project-card">
              <h3 className="text-light">Todo application</h3>
              <p className="text-light">
                <strong>Duration:</strong> March 2025 - July 2025
              </p>
              <p className="text-light">
               ◦ Developed a secure To-Do Application using Java, Spring Boot, Spring Security, and MySQL.
◦ Implemented JWT-based authentication and role-based authorization using Spring Security.
◦ Built a responsive frontend using Angular, HTML, CSS, and Bootstrap.
◦ Created RESTful APIs to ensure smooth communication between frontend and backend.
◦ Followed MVC architecture and managed dependencies using Maven.
◦ Deployed and tested the project on Tomcat Server using H2 Database and Postman.

              </p>
              <h5 className="text-light">Roles and Responsibilities:</h5>
              
                <ul className="text-light">
  <li>Built secure RESTful APIs with Spring Boot for task management features.</li>
  <li>Implemented JWT-based authentication and role-based access control using Spring Security.</li>
  <li>Developed responsive frontend using Angular, HTML, CSS, and Bootstrap.</li>
  <li>Integrated frontend and backend using REST API calls with proper error handling.</li>
  <li>Used Maven for dependency management and Tomcat Server for deployment.</li>
  <li>Tested APIs with Postman and used H2 database during development phase.</li>

                
              </ul>
              <h5 className="text-light">Technical Skills:</h5>
              <ul className="text-light">
                <li>Java ,Spring Boot Angular JavaScript</li>
                <li>H2 database</li>
                <li>Sts ,Spring Security</li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
