import Image from "next/image";
import "../styles/card.css"

export default function Card({image, h3 , p ,href}:any){
    return(
        <div className="project-item">
        <Image
          src={image}
          alt="Portfolio Item Image"
          width={280}
          height={250}
          className="portfolio-image"
        />

        <h3>{h3}</h3>
        <p>
          {p}
        </p>
        <button type="button"><a href={href} target="_blank">View Project</a></button>
      </div>
    )
}