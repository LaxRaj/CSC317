# Final Project Submission - CSC317
**Student:** Lakshyaraj Bhati  
**Date:** January 2025  
**Project:** Recipe Sharing Platform Integration into Portfolio

## Group Project Reflection

### Project Overview
The Recipe Sharing Platform was a collaborative full-stack web application developed as Assignment 5. Our team of four students created a comprehensive platform where users can create, share, and discover recipes with detailed nutritional and cost information.

**Live Application:** https://csc317-group-k.onrender.com  
**Repository:** https://github.com/ianaqui/CSC317Project

### My Role and Contributions
As the **Backend API and Authentication Developer**, I was responsible for:

#### Core Backend Development
- **RESTful API Design:** Created comprehensive API endpoints for all recipe operations (CREATE, READ, UPDATE, DELETE)
- **Authentication System:** Implemented secure user registration and login using bcrypt for password hashing and express-session for session management
- **Database Integration:** Built the connection layer between our Express.js application and MongoDB using Mongoose
- **Server-Side Validation:** Developed robust input validation and error handling middleware to ensure data integrity
- **Authorization Logic:** Created middleware to protect routes and ensure users can only modify their own recipes

#### Advanced Features Implemented
- **Recipe Filtering API:** Developed backend logic for complex filtering by cost range, preparation time, dietary restrictions, and meal type
- **External API Integration:** Integrated TheMealDB API alongside our user-generated content to provide a comprehensive recipe database
- **Error Handling:** Implemented comprehensive error handling and response management for all API endpoints
- **Database Schema Design:** Collaborated with Adrian (Database Developer) to design efficient MongoDB schemas for recipe-user relationships

### Technical Skills Gained

#### Backend Development
- **Express.js Mastery:** Gained deep understanding of middleware, routing, and server architecture
- **Database Design:** Learned to design efficient MongoDB schemas and implement complex queries
- **API Security:** Understood authentication, authorization, and secure session management
- **Error Handling:** Developed skills in comprehensive error handling and API response management

#### Collaborative Development
- **Git Workflow:** Practiced advanced Git workflows with multiple contributors, including branch management and merge conflict resolution
- **API Documentation:** Learned to document APIs for frontend team integration
- **Code Review:** Participated in peer code reviews to maintain code quality and consistency

### Challenges and Solutions

#### Challenge 1: User Authentication Security
**Problem:** Implementing secure user authentication without compromising user experience  
**Solution:** Used bcrypt for password hashing and express-session for secure session management. Implemented proper logout functionality and session expiration.

#### Challenge 2: API Integration Complexity
**Problem:** Balancing external API data (TheMealDB) with user-generated content  
**Solution:** Created a unified interface that seamlessly presents both data sources while maintaining different route structures for different data types.

#### Challenge 3: Team Coordination
**Problem:** Coordinating backend development with frontend requirements across four team members  
**Solution:** Established clear API contracts early, used consistent naming conventions, and maintained regular communication through team meetings and GitHub issues.

### Learning Outcomes

#### Technical Growth
- **Full-Stack Understanding:** Gained comprehensive understanding of how frontend and backend systems integrate
- **Database Proficiency:** Developed strong skills in MongoDB and Mongoose for data modeling and queries
- **Security Awareness:** Learned importance of input validation, authentication, and authorization in web applications
- **API Design:** Understood principles of RESTful API design and best practices

#### Soft Skills Development
- **Team Communication:** Improved ability to communicate technical requirements and solutions across team members
- **Project Management:** Learned to break down complex features into manageable tasks and coordinate timelines
- **Problem Solving:** Developed systematic approach to debugging and troubleshooting complex backend issues

### Integration into Portfolio
This group project represents the culmination of skills learned throughout CSC317, demonstrating:
- **Technical Proficiency:** Full-stack development capabilities with modern web technologies
- **Collaboration Skills:** Ability to work effectively in a team development environment
- **Project Completion:** Successfully delivering a complex, deployed web application
- **Professional Development:** Building a portfolio piece that showcases real-world development experience

### Future Applications
The skills gained from this project directly apply to:
- **Industry Internships:** Backend development skills are highly relevant for software engineering roles
- **Personal Projects:** Understanding of authentication and database design for future applications
- **Advanced Coursework:** Foundation for more complex web development and software engineering courses
- **Career Preparation:** Experience with collaborative development workflows used in professional environments

### Conclusion
The Recipe Sharing Platform project was instrumental in solidifying my understanding of backend web development and collaborative software engineering. The experience of building a real-world application with authentication, database integration, and API design has prepared me for professional software development roles and advanced computer science coursework.

The integration of this project into my portfolio demonstrates not only technical capabilities but also the ability to work effectively in team environments—a crucial skill for any software engineer. This project represents a significant milestone in my journey as a full-stack developer. 