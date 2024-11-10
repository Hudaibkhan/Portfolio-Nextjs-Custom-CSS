"use client";
import Image from "next/image";
import "../styles/page.css";

import "./globals.css";

export default function Home() {
  return (
    <div id="main">
      <div id="left-side">
        <h3>Hello, It's me</h3>
        <h1>Hudaib Khan</h1>
        <h2 className="typing-text">And I am a <span>Developer</span></h2>
        <p>I, am passionate software engineer student and a future AI developer</p>
        <div>
          <a href="https://www.linkedin.com/in/hudaib-khan-383b21330/" target="_blank">
          <Image
          src="/linkedin-logo.png"
          alt="Linkedin Logo"
          width={40}
          height={40}/>
          </a>
          <a href="https://github.com/Hudaibkhan" target="_blank">
          <Image
          src="/github-logo.png"
          alt="github Logo"
          width={62}
          height={40}/>
          </a>
          <a href="https://www.npmjs.com/~hudaib" target="_blank">
          <Image
          src="/npm-logo.avif"
          alt="npm Logo"
          width={55}
          height={40}/>
          </a>
        </div>
      </div>
      <div id="right-side">
        <Image 
        src="/profile-image.jpeg"
        alt ="Profile Image"
        width={400}
        height={450}
        id="img"/>
      </div>
    </div>
  );
}
