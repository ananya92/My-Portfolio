import pr11 from "../components/projects/img/pr1_1.png";
import pr12 from "../components/projects/img/pr1_2.JPG";
import pr13 from "../components/projects/img/pr1_3.JPG";
import pr14 from "../components/projects/img/pr1_4.JPG";
import pr21 from "../components/projects/img/pr2_1.PNG";
import pr22 from "../components/projects/img/pr2_2.PNG";
import pr31 from "../components/projects/img/pr3_1.PNG";
import pr32 from "../components/projects/img/pr3_2.PNG";
import pr41 from "../components/projects/img/pr4_1.JPG";
import pr51 from "../components/projects/img/pr5_1.PNG";
import pr52 from "../components/projects/img/pr5_2.png";
import pr61 from "../components/projects/img/pr6_1.png";
import pr62 from "../components/projects/img/pr6_2.gif";
import pr71 from "../components/projects/img/pr7_1.JPG";
import pr82 from "../components/projects/img/pr8_2.PNG";
import pr91 from "../components/projects/img/pr9_1.png";
import pr101 from "../components/projects/img/pr10_1.PNG";
import pr102 from "../components/projects/img/pr10_2.PNG";
import pr103 from "../components/projects/img/pr10_3.PNG";
import pr111 from "../components/projects/img/pr11_1.PNG";

const projectList = [
    {
        title: "Donate Right",
        image: [pr11, pr12, pr13, pr14],
        intro: "A charity-based application for directing users towards those in need.",
        desc: ["Mission of Donate Right is to connect donors and verified charities on a single platform so that every individual is notified about the needs of the society and can help provide faster assistance to those in need.","Currently there is no single platform where individuals wishing to donate and different charities can directly come together. The core idea of Donate Right is to bridge the gap between charities and donors."],
        tech: ["Frontend: HTML, CSS, Javascript, Handlebars", "Backend: Node, Express", "Database: MySQL, Sequelize", "CSS framework: Bulma", "Third-party API: Google Maps API", "Middleware: Passport.js for authentication", "Build: Travis.ci, JawsDB, Heroku"],
        appLink: "https://donateright.herokuapp.com/",
        github: "https://github.com/ananya92/donateRight"
    },
    {
        title: "The Ultimate Cookbook",
        image: [pr21, pr22],
        intro: "An online cookbook of irresistible global recipes for everyone!",
        desc: ["The Ultimate Cookbook is your one stop application for getting the yummiest recipes from all around the world! Get detailed instructions with picture and video guidelines from the best chefs!", "Want to search for your favourite recipe or get a taste of the global culture? Then this is the ultimate food stop for you!", "Integrated with the MealDB API providing users access to an online database of meal recipes. Provides efficient recipe search to user - from a selected region, meal category or by name and intuitive dropdown recommendations of recipes while user is typing. Features sleek and subtle web design with Semantic UI."],
        tech: ["Frontend: HTML, CSS, Javascript, JQuery", "UI Framework: Semantic UI", "Integration with MealDB API using AJAX"],
        appLink: "https://ananya92.github.io/TheUltimateCookbook/",
        github: "https://github.com/ananya92/TheUltimateCookbook/"
    },
    {
        title: "Google Books",
        image: [pr31,pr32],
        intro: "React application to search and save user's favorite books.",
        desc: ["Google Books Search is a MERN stack application to search for books using the Google Books API with an option to save the user's favorite books in a Mongo database.",
        "It allows the user to search for a book, view and open the book in Google Books, save book as favorite, view all favorites and delete from favorites.", "It is a single page application with an intuitive and user-friendly UI using React MDL library."],
        tech: ["Frontend: React, React Router, React MDL library", "Backend: Node, Express", "Database: MongoDB, Mongoose", "Third-party API: Google Books API", "Deployed on Heroku"],
        appLink: "https://fav-books-app.herokuapp.com/",
        github: "https://github.com/ananya92/Google-Books-Search"
    },
    {
        title: "Employee Directory",
        image: [pr41],
        intro: "React app to access quick information about all employees.",
        desc: ["MERN stack application to access quick information about all employees using React front-end and an Express server servering employee information from a Mongo database.", "Has multi-select dropdown functionality to filter employees belonging to a department or role and sort employees by their name, department or designation.", "It is a single page application with an intuitive and user-friendly UI using React Bootstrap library."],
        tech: ["Frontend: React, React Boostrap, React Select", "Backend: Node, Express", "Database: MongoDB, Mongoose", "Deployed on Heroku"],
        appLink: "https://employee-directory-mern.herokuapp.com/",
        github: "https://github.com/ananya92/Employee-Directory"
    },
    {
        title: "Workout Tracker",
        image: [pr51,pr52],
        intro: "Application to create and track daily workouts on a dashboard.",
        desc: ["App to create and track daily workouts using Mongo database with a Mongoose schema and Express server.","When the user loads the page, they are given the option to- create a new workout, or continue with their last workout, add exercises to a previous workout plan and view their workout progress on stats page."],
        tech: ["Frontend: HTML, CSS, Javascript", "Backend: Node, Express", "Database: MongoDB, Mongoose", "Deployed on Heroku"],
        appLink: "https://arcane-everglades-43912.herokuapp.com",
        github: "https://github.com/ananya92/Workout-Tracker"
    },
    {
        title: "Employee Tracker",
        image: [pr61, pr62],
        intro: "CLI tool to manage company's employees using Node and MySQL database.",
        desc: ["Employee Tracker is a CLI tool to manage company's employees using node, inquirer, and MySQL. Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems.", "The command-line application allows users to add departments, roles and employees; view departments, roles and employees; update employee roles; update employee managers; view employees by manager; delete departments, roles, and employees and view the total utilized budget of a department."],
        tech: ["Backend: Node, Inquirer", "Database: MySQL"],
        appLink: "https://github.com/ananya92/Employee-Tracker",
        github: "https://github.com/ananya92/Employee-Tracker"
    },
    {
        title: "Team Summary Generator",
        image: [pr71],
        intro: "Node CLI application to input employee information and generate team summary.",
        desc: ["A hierarchical team summary generator command line application using Node.js. The application prompts the user for information about the team manager and the team members. The user can input any number of team members, with a mix of engineers and interns. The application generates an HTML file that displays a nicely formatted team roster based on the information provided by the user.", "Used the Inquirer npm package to prompt the user for their email, id, and specific information based on their role with the company."],
        tech: ["Formatted HTML output using HTML5 and CSS", "Backend: Node CLI, Inquirer"],
        appLink: "https://github.com/ananya92/Team-summary-generator-CLI",
        github: "https://github.com/ananya92/Team-summary-generator-CLI"
    },
    {
        title: "Weather Dashboard",
        image: [pr82],
        intro: "Search and display current and future weather predictions of any city.",
        desc: ["As a traveller I want to see the weather outlook for multiple cities so that I can plan my trips accordingly. The Weather Dashboard app integrates with the OpenWeather API with search functionality to find current weather conditions and the future weather for multiple cities.", "The dashboard shows a visual representation of weather conditions, temperature, humidity, wind speed and UV index along with the next 5-days weather forecast at the searched city.", "Application displays the weather at the user's current location at the initial landing page using Geolocation API."],
        tech: ["Frontend: HTML, CSS, Javascript, jQuery", "API Integration: OpenWeather API, Geolocation API"],
        appLink: "https://ananya92.github.io/weather-dashboard/",
        github: "https://github.com/ananya92/weather-dashboard"
    },
    {
        title: "Day Planner",
        image: [pr91],
        intro: "A calendar application to save events for each hour of the day.",
        desc: ["As an employee with a busy schedule, people need to add important events to a daily planner so that they can manage their time effectively.", "The app displays standard business hours (9 a.m. to 5 p.m.) time slots with a text area and save button. Each time slot is color coded and changes dynamically depending on the time of day to reflect whether the time slot is in the past, the present, or the future."],
        tech: ["Frontend: HTML, CSS, Javascript, jQuery", "Libraries: Bootstrap, Moment.js"],
        appLink: "https://ananya92.github.io/Day-Planner/",
        github: "https://github.com/ananya92/Day-Planner"
    },
    {
        title: "Coding Quiz Challenge",
        image: [pr101,pr102, pr103],
        intro: "Quiz app with timed quizzes on coding fundamentals that persists user's high scores.",
        desc: ["Timed quizzes with multiple-choice questions based on coding fundamentals. The application stores the user's high scores so as to help gauge user's progress as compared to peers."],
        tech: ["HTML", "CSS", "Javascript", "jQuery"],
        appLink: "https://ananya92.github.io/Coding-quiz-challenge/",
        github: "https://github.com/ananya92/Coding-quiz-challenge"
    },
    {
        title: "Password_Generator",
        image: [pr111],
        intro: "Application that generates a random password based on user-selected criteria.",
        desc: ["As an employee with access to sensitive data there is a need to randomly generate a password that meets certain criteria so that a strong password can be created that provides greater security.", "generates a random password based on user-selected criteria (special chars, numeric, lowercase, uppercase). On clicking Generate Password button, user will be presented with a password matching the selected preferences."],
        tech: ["HTML", "CSS", "Javascript"],
        appLink: "https://ananya92.github.io/Password-Generator/",
        github: "https://github.com/ananya92/Password-Generator"
    }
]

export default projectList;