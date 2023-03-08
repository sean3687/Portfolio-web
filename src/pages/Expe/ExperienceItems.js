import Walletgyde from "../../Assets/walletgyde_logo.png";
import UCIWebREG from "../../Assets/uci_logo.png"
import HackAtUCI from "../../Assets/hackAtuci_logo.png"
import Agency41 from "../../Assets/agency41.png"

const ExperienceItems = [
    {
        logo: Walletgyde,
        job_title: "Full-stack Developer",
        company_name : "Walletgyde",
        link:"https://walletgyde.com/",
        duration:"Nov 2022 - Present",
        location:" • Denvor, Colorado",
        desc: [
            { work: "- Launched an online Financial Coaching platform from start to finish. (React JS, Node.js, Express.js, JavaScript, ES6+, HTML5, EJS, CSS, SASS/SCSS, JSON, Bootstrap, Responsive Design, Postman, VS Code)."},
            { work: "- Designed a microservice architecture, SQL and NoSQL database schemas, and a JWT authentication framework. (MongoDB, PostgreSQL, REST API, Docker, Docker Compose)"},
            { work: "- Built development and production infrastructure on the cloud (AWS, EC2, S3, Netlify)"}
        ]
    },
    {
        logo: HackAtUCI,
        job_title: "Full-stack Developer",
        company_name : "Hack AT UCI - Financial Hack",
        link:"https://devpost.com/software/zothome",
        duration:"Feb 2023 – Feb 2023",
        location:" • Irvine, California",
        desc: [
            { work: "- Implemented Vercel API to retrieve subsets of data from the CockroachDB database using Axios for URL requests for JSON objects."},
            { work: "- Implemented Mapbox API and MapView component to display markers on American Campus Communities locations"},
            { work: "- Improved frontend-backend integration through URL parsing to retrieve parameters from front end and generate SQL queries for data retrieval."},
        ]
    },
    {
        logo: UCIWebREG,
        job_title: "Backend Developer & Product Manager",
        company_name : "UCI WebREG Hackathon",
        link:"https://github.com/sean3687/webreg-hackathon",
        duration:"Jan 2023 – Jan 2023",
        location:" • Irvine, California",
        desc: [
            { work: "- Build Schedule of classes REST API that are using on Front-end. Design API end point, implementing Authentication and authorization to verify UCI Student."},
            { work: "- Collaborate with Front-end Developers, UX Designer and stakeholders to understand project requirements and deliver solutions for our MVP. Pitch our Web App on Hackathon day"},
        ]
    },
    {
        logo: Agency41,
        job_title: "Web Developer",
        company_name : "Agnecy 41",
        link:"",
        duration:"Jun 2020 – Sep 2020",
        location:" • CostaMesa, California",
        desc: [
            { work: "- Update clients’ old javascript codebase with Angular or React.js. Utilize Evergreen to implement modern web design."},
            { work: "- Increase accessibility and SEO score 55 to 90 on Google Lighthouse by optimizing HTML, CSS, and Javascript codebase and compressing images"},
        ]
    },
];

export default ExperienceItems;