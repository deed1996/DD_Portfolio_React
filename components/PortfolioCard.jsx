import Image from "next/image";

export default function PortfolioCard({
  title,
  description,
  image,
  alt,
  demoURL,
  gitURL,
}) {
  return (
    <article>
      <Image
        src={image}
        alt={alt}
        width={720}
        height={405}
        loading="lazy"
        className="portfolio_image"
      />

      <div className="portfolio_text">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="portfolio_text__project--links">
          <li>
            <a
              href={demoURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block"
            >
              Demo <i className="fa fa-external-link"></i>
            </a>
          </li>

         {gitURL && (
          <li>
            <a
              href={gitURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block"
            >
              GitHub <i className="fa fa-external-link"></i>
            </a>
          </li>)}

        </ul>
      </div>
    </article>
  );
}