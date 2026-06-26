import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero_banner">
            <div className="hero">
                <div className="hero_image">
                    <Image 
                        src="/hero-right-img.png" 
                        alt="Dee Desai Front End Developer" 
                        fill
                        style={{ objectFit: "contain" }}
                        priority 
                    />
                </div>
                <div className="hero_text container container-no-top-margin">
                    <h1>
                        Hi, I'm Dee! <span className="wave">👋</span><span className="job-title">Front End Developer</span>
                    </h1>
                    <p>Passionate about the web. <br />Obsessed with the details.</p>

                    <ul>
                        <li><a href="https://drive.google.com/file/d/1oAbvTqXOkvEBtoN1hDtIWmJ1VoM8EFIB/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button type="button">Resume <i className="fa fa-external-link"></i></button></a></li>
                        <li><a href="#portfolio"><button type="button" className="arrow" rel="noopener noreferrer">See my work</button></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}