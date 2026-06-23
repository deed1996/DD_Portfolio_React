import PortfolioCard from "./PortfolioCard";
import todoHero from "../public/todo-hero.jpg";
import frugi from "../public/clarks-x-frugi-hero.jpeg";
import raheem from "../public/clarks-x-raheem_young-hero.jpeg";
import bundlee from "../public/clarks-x-bundlee-hero.jpeg";
import manage from "../public/manage-hero.jpeg";
import jobhunters from "../public/jobhunters-hero.jpeg";
import nespresso from "../public/nespresso.jpeg";
import latcareers from "../public/latcareers.jpeg";
import leighacademiestrust from "../public/leigh-academies-trust.jpeg";

export default function Portfolio() {
  const projects = [
    {
      title: "Nespresso",
      description: "Contributed to ongoing development of the Nespresso website, building landing pages, reusable components, and delivering UI updates with a focus on responsiveness and accessibility.",
      image: nespresso,
      alt: "Nespresso website",
      demoURL: "https://www.nespresso.com",
    },
    {
      title: "Todo App",
      description: "The Todo-App is a task management web application built using React. It features a clean interface where users can add, edit, mark, and delete tasks, with additional functionality for toggling between light and dark modes.",
      image: todoHero,
      alt: "Todo App",
      demoURL: "https://deed1996.github.io/Todo-App/",
      gitURL: "https://github.com/deed1996/Todo-App",
    },
    {
      title: "Frugi x Clarks",
      description: "The Clarks X Frugi collaboration page is crafted using a blend of web technologies. HTML5 structures the content, while CSS styles the page and incorporates animations, creating a visually appealing and dynamic user experience. This collaboration focuses on sustainability, highlighting eco-friendly practices and products.",
      image: frugi,
      alt: "Frugi x Clarks",
      demoURL: "https://deed1996.github.io/Frugi/",
      gitURL: "https://github.com/deed1996/Frugi",
    },
    {
      title: "Raheem Youth",
      description: "The Raheem Youth content site leverages HTML5 to structure the content, CSS for styling and layout, and some JavaScript for interactive features. This site showcases Raheem Sterling's Back to School collection, incorporating responsive design principles to ensure a user-friendly experience across various devices.",
      image: raheem,
      alt: "Raheem Youth",
      demoURL: "https://deed1996.github.io/Raheem-Youth/",
      gitURL: "https://github.com/deed1996/Raheem-Youth",
    },
    {
      title: "Bundlee x Clarks",
      description: "This page was built for the Bundlee partnership with Clarks to promote sustainability and eco-friendliness by reducing clothing waste. The Clarks X Bundlee content page utilises HTML5 to structure the content and CSS to style the page.",
      image: bundlee,
      alt: "Bundlee x Clarks",
      demoURL: "https://deed1996.github.io/Bundlee/",
      gitURL: "https://github.com/deed1996/Bundlee",
    },
    {
      title: "Manage",
      description: "The Manage task planner's content page is designed as a mobile-first landing page. It is built using HTML5, SCSS, and JavaScript to ensure responsiveness and an optimal user experience across devices.",
      image: manage,
      alt: "Manage",
      demoURL: "https://deed1996.github.io/Manage/",
      gitURL: "https://github.com/deed1996/Manage",
    },
    {
      title: "Jobhunters",
      description: "This content page for a job-hunting agency shares information about virtual interviews and remote work. Built using HTML5, CSS, and Vanilla JavaScript, it features full mobile responsiveness. Tiny Slider JS is used for the section linking to other articles.",
      image: jobhunters,
      alt: "Jobhunters",
      demoURL: "https://deed1996.github.io/JobHunters/",
      gitURL: "https://github.com/deed1996/JobHunters",
    },
    {
      title: "LAT Careers",
      description: "A fully functional site designed from wireframe through to development. Most pages are custompage templates and require input from the user on the WordPress backend using Advanced custom fields. PHP is used on every section to call the content in, apart from the homepage. The events section is a custom post type and uses JavaScript to archive events that have passed automatically.",
      image: latcareers,
      alt: "LAT Careers",
      demoURL: "https://latcareers.org.uk/"
    },
    {
      title: "Leigh Academies Trust",
      description: "Re-designed and developed a website for the Leigh Academies Trust. Collaborated with the in-house marketing team and the executive team to determine the project scope. Technologies used are HTML, PHP, CSS and JavaScript.",
      image: leighacademiestrust,
      alt: "Leigh Academies Trust",
      demoURL: "https://leighacademiestrust.org.uk/"
    },
  ];

  return (
    <div className="portfolio_grid-section">
      <h2 id="portfolio">Work</h2>
      <p>Thing's I've made or learned at the companies I have worked for.</p>
      <div className="portfolio_grid">
        {projects.map((project) => (
          <PortfolioCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}