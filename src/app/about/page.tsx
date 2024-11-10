"use client";
import Image from "next/image";
import "../../styles/about.css";
import "../globals.css";
import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="about-box">
      <h1>
        About <span>Me</span>
      </h1>
      <Image
        src="/profile-image.jpeg"
        alt="Profile Picture"
        height={200}
        width={200}
        className="about-image"
      />
      <h2>Frontend Developer!</h2>
      <p>
        I have completed matriculation and I am enrolled in a 4-quarter based
        course called &apos;Generative AI and Computing.&apos; I have passed the
        first quarter focused on TypeScript and I am currently learning Next.js
        in the second quarter. I’ve completed HTML, CSS key concepts, and I am
        studying advanced topics. The upcoming quarters will cover Python,
        backend development, and AI. Additionally, I’m starting a 3-year diploma
        as an Associate Engineer in Software.
      </p>
      {/* Additional content shows up directly below the first paragraph when expanded */}
      {isExpanded && (
        <p className="more-text">
          Before beginning my current studies, I had little knowledge about
          programming, coding, or the intricacies of AI creation. My journey
          into technology has been a rewarding learning experience, allowing me
          to build essential skills in TypeScript, HTML, CSS, and Next.js. I’m
          driven by a strong career goal: to establish my own AI company
          specializing in intelligent agents and to contribute meaningfully to
          the AI industry. Additionally, as a Hafiz of the Quran, I bring a
          disciplined and focused approach to my work and studies, values that
          guide my journey in tech.
        </p>
      )}
      <button className="read-more-btn" onClick={toggleReadMore}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
