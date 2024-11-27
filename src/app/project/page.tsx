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

      {/* add more project */}
      <div className="project-card">
        <div className="project-card-1">
          <Card image="/birthday-wish.PNG" h3="Birthday Wish" p="Developed a static birthday wish app using Next.js, TypeScript, Tailwind CSS, and Shadcn components. The app displays a fixed birthday date along with festive animations, like falling celebration confetti. Users can interact by clicking on balloons, enhancing the celebratory experience." href="https://03-birthday-wish-plum.vercel.app/"/>
          <Card image="/number-guessing.PNG" h3="Number Guessing Game" p="This engaging number guessing game challenges players to guess a randomly generated number between 1 and 10. Players are given feedback on their guesses, helping them refine their attempts.  Perfect for all ages, this game combines excitement and suspense in a compact format." href="https://04-number-guessing-game-five.vercel.app/"/>
        </div>
        <div className="project-card-2">
          <Card image="/simple-calculator.PNG" h3="Simple Calculator" p="This simple calculator app provides essential functionality for basic arithmetic operations, including addition, subtraction, multiplication, and division. Designed with an intuitive interface, users can easily input numbers and perform calculations with just a few taps." href="https://05-simple-calculator-eight.vercel.app/"/>
          <Card image="/digital-clock.PNG" h3="Digital Clock" p="This digital clock application displays the current time in both 12-hour and 24-hour formats. Users can easily switch between the two formats to suit their preference. The interface is sleek and user-friendly, ensuring clear visibility of the time. Ideal for anyone looking for a straightforward way to keep track of time in multiple formats." href="https://06-digital-clock-hazel.vercel.app/"/>
        </div>      
      </div>

      {/* four more */}
      <div className="project-card">
        <div className="project-card-1">
          <Card image="/random-joke.PNG" h3="Random Joke Generator" p="This app generates a new joke at the click of a button. With a simple and user-friendly interface, users can enjoy a variety of jokes randomly selected from a curated database. Each click brings a fresh laugh, making it perfect for a quick mood boost or sharing with friends." href="https://07-random-joke-generator-one.vercel.app/"/>

          <Card image="/color-picker.PNG" h3="Color Picker" p="This interactive application allows users to select colors easily and copy their hex codes and RGB values. With an intuitive interface, users can explore a spectrum of colors, making it simple to choose their desired shade. Once a color is picked, the corresponding hex and RGB values are displayed, ready to be copied for use in design projects or web development." href="https://08-color-picker-six.vercel.app/"/>
        </div>

        <div className="project-card-2">
          <Card image="/tip-calculator.PNG" h3="Tip Calculator" p="This tip calculator app allows users to easily calculate their total bill amount, including tips. Users can enter their bill amount and select a percentage for the tip. The app then computes the total amount due and the tip amount, providing a clear breakdown for easy understanding. The interface is user-friendly and designed for quick input, making it perfect for dining out or group outings." href="https://09-tip-calculator-zeta.vercel.app/"/>

          <Card image="/password-generator.PNG" h3="Password Generator" p="This password generator app allows users to define the length of their password while maintaining a standard set of features. The generated password will include uppercase letters, lowercase letters, symbols, and numbers. Users simply input their desired length, and the app creates a secure, random password that meets these criteria." href="https://10-password-generator-nu.vercel.app/"/>
        </div>      
      </div>



    </div>
  );
}
