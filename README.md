# Camera

Surveillance camera project for Softala course at Haaga-Helia University of Applied Sciences.

This project leverages AI to analyze surveillance camera footage for detecting persons and vehicles. The system extracts license plate text from detected vehicles and presents relevant images and video clips in a dashboard alongside the live feed. Users can review and select detected events for further analysis, enhancing monitoring efficiency and security.

## Project Architecture

The project architecture consists of the following components:

- **Frontend**: A React application that provides a user interface and interacts with the Sprin Boot backend application via REST API calls. It additionally displays an embedded livefeed from the camera.
- **Backend**: Consists of a Spring Boot application and server. The Spring Boot application that handles business logic, manages data interaction, and serves as a REST API provider. It processes requests from the frontend and communicates with the server and the database. The server runs scripts and the AI tools for human detection.
- **AI**: Analyzes snapshots from the surveillance camera footage to detect persons (and vehicles?). Runs on the backend server.
- **Database**: The project's database stores users an d (?). H2 is used for local development, while MySQL is used for production deployment.
- **Camera**: TBA

### Architecture Diagram

TBA

## Data model

TBA

### Entities and attributes

TBA

### ERD

TBA

## Developer guide

### Frontend

1. To start the frontend application:

- Navigate to the frontend directory of the application (e.g., frontendapp) in your CLI (e.g. powershell)
- Install dependencies using: `npm install`
- Start the application in development environment with: `npm run dev`
- Access the application in your browser at <http://localhost:5173>.

2. Technologies used:

- Programming Language: TypeScript
- Frameworks: React (Vite)
- Major Libraries: Material-UI (MUI), React Router (react-router-dom)

### Backend Spring Boot Application

1. To intialize the back end Spring Boot application:

- Using a Command-line interface (CLI), navigate to the the project's backend folder
- Start the application by running the `./mvnw spring-boot:run` command
  (- Once the Spring Boot app is initialized, visit <http://localhost:8080> in a web browser)

2. Technologies used:

- Programming Language: Java
- Frameworks: Spring Boot, MVC
- Major Libraries: Maven

### Backend server

1. TBA (If AI related components are mentioned, refer to repository "ai-security-camera-object-detection")
2. Technologies used:

- Programming Languages:
- Tools:
- Major Libraries:

### Database

TBA

- (Development Environment: H2 Database) ?
- (Production Environment: MySQL) ?

### System Requirements

#### Backend Spring Boot Application

- Java version 17: Java version can be found in the pom.xml file in the java.version property.
- Maven: Required to build and run the Spring Boot application.

#### Frontend

- Node.js: Version 18 or later (required to run the Vite development server and manage dependencies).You can check your Node.js version with the command: `node -v`
- npm: Comes bundled with Node.js (used to install project dependencies and run the application).

## Camera live feed (Jukka Juslin's channel):

[https://www.youtube.com/watch?v=T-u-BbFNNY4](https://www.youtube.com/watch?v=T-u-BbFNNY4)

(Testing link for a stream that is down: https://www.youtube.com/watch?v=4637xjTMXCs )

## Images from livestream (non-labeled)

[http://softala.haaga-helia.fi/images/](http://softala.haaga-helia.fi/images/)

## REST API documentation URL

TBA? (swagger)

## Web service URL Frontend

https://faa2025.github.io/camera/

## Web service URL Backend

(TBA?)

## Team members

- [Juslin Jukka](https://github.com/jusju)
- [Henein Roda](https://github.com/hxrda)
- [Nevalainen Jesse](https://github.com/Suppiluliumas)
- [Zafar Irum](https://github.com/zafarirum87)
- [Domracheva Polina](https://github.com/PolinaD31)
- [Nguyen Minh](https://github.com/NguyenMinh03)

## Product backlog

https://github.com/orgs/faa2025/projects/1/views/1

## License

Camera is [MIT licensed](./LICENSE).
