import Image from "next/image";
import "../styles/card.css";

interface CardProps {
    image: string;
    h3: string;
    p: string;
    href: string;
}

export default function Card({ image, h3, p, href }: CardProps) {
    return (
        <div className="project-item">
            <Image
                src={image}
                alt="Portfolio Item Image"
                width={280}
                height={250}
                className="portfolio-image"
            />
            <h3>{h3}</h3>
            <p>{p}</p>
            <a href={href} target="_blank" rel="noopener noreferrer" className="view-project-button">
                View Project
            </a>
        </div>
    );
}