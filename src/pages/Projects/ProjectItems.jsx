import chronology from "../../Assets/myChronology.png"
import weather from "../../Assets/myWeather.png";
import overwatch from "../../Assets/overWatchCode.png";
import portfolio from "../../Assets/portfolio.png";


const ProjectItems = [
    {
        src : portfolio,
        heading3 : "React Proejct",
        heading2 : "Portfolio",
        description : "A web App for portfolio. Framer motion provides a better visual experience. Heroku allows you to access a portfolio on any device with the internet.",
        libraries : ["React", "Heroku", "Framer", "Routes", "Evergreen"],
        github: "https://github.com/sean3687/Portfolio-web"
        
    },
    {
        src : chronology,
        heading3 : "Kotlin Proejct",
        heading2 : "Habits TODO-List",
        description : "Habits TODO-List helps you create and maintain positive habit in your life. Used various android jetpack libaray such as, Fragment ResultAPI, Fragment Manager, DiffUtil and Navigation Components",
        libraries : ["Kotlin", "Room-Database", "Calendar Library", "Android Jetpack Library", "Material Design"],
        github: "https://github.com/sean3687/Chronology-Project/tree/master/MyChronology"

    },
    {
        src : weather,
        heading3 : "Kotlin Proejct",
        heading2 : "The Weather Channel API",
        description : "Provide current weather based on your location. Under Current weather specification, You can view a 7 day weather forecast. If you want weather of any city or country, you can look for on search tab and you will able to access current weather specification of destination",
        libraries : ["Kotlin", "Retrofit", "Gson", "Lottie", "Android Stduio"],
        github: "https://github.com/sean3687/Learning-projects-2/tree/master/myweatherAPI"
        
    },
    {
        src : overwatch,
        heading3 : "Java Proejct",
        heading2 : "Overwatch Workshop Code Collection",
        description : "Provide popular overwatch workshop codes by nation. Multiple listview inside each navigation menu. Available on google play store. First app made with JAVA.",
        libraries : ["Java", "AndroidStudio", "ListView"],
        github: "https://drive.google.com/file/d/1ZRdht32_ax1Gfiwus-ObNJgpBcIMpnKy/view?usp=sharing"
        
    },

];

export default ProjectItems;