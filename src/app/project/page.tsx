import Image from "next/image";
import "../../styles/project.css";
import "../globals.css"
import Card from "@/components/Project-Card";

export default function Project() {
  return (
    <div className="project-box">
      <h2>Project</h2>
    <div className="project-card">
      <div className="project-card-1">
        <Card image="/Countdown_Timer.PNG" h3="Countdown Timer" p="Developed a countdown timer app using Next.js, TypeScript, Tailwind CSS, and Shadcn components. Features a responsive, visually appealing interface displaying time left for events with real-time updates and customization options." href="https://01-countdown-timer-zeta.vercel.app/"/>
        <Card image="/Todo-List.PNG" h3="Todo List" p="Developed a to-do list app using React.js and TypeScript, allowing users to add, edit, and delete tasks. Provides real-time updates, a user-friendly interface, reliable task management, and enhanced productivity with type safety." href="https://todo-list-nine-rust-59.vercel.app/"/>
      </div>
      <div className="project-card-2">
        <Card image="/static_resume.PNG" h3="Static Resume" p="Developed a responsive static resume using TypeScript, HTML, and CSS. Incorporated sections for personal details, education, skills, and work experience, with interactive features such as skill section toggling for user engagement" href="https://static-interactive-resume-dusky.vercel.app/"/>
        <Card image="/resume-builder.png" h3="Dynamic Resume Builder" p="Built a dynamic resume builder with HTML, CSS, and TypeScript, allowing users to input personal details, education, skills, and work experience, generating a downloadable resume in real-time." href="https://dynamic-resume-builder-woad.vercel.app/"/>
      </div>
    </div>
    </div>
  );
}
