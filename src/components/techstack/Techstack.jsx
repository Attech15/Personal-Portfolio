import "./techstack.scss";
import Marquee from "react-fast-marquee";

const sliderContent = [
  {
    id: 1,
    img: "/c.png",
    name: "C langauge",
  },
  {
    id: 2,
    img: "/html.png",
    name: "Html",
  },
  {
    id: 3,
    img: "/css.png",
    name: "Css",
  },
  {
    id: 4,
    img: "/js.png",
    name: "Javascript",
  },
  {
    id: 5,
    img: "/typescript.png",
    name: "Typescript",
  },
  {
    id: 6,
    img: "/reactjs.png",
    name: "ReactJs",
  },
  {
    id: 7,
    img: "/nextjs.png",
    name: "NextJs",
  },
  {
    id: 8,
    img: "/sass.png",
    name: "Sass",
  },
  {
    id: 9,
    img: "/redux.png",
    name: "Redux Toolkit",
  },
  {
    id: 10,
    img: "/java.png",
    name: "Java langauge",
  },
  {
    id:11,
    img: "/git.png",
    name: "git"
  },
  {
    id: 12,
    img: "/tailwindCss.png",
    name: "tailwind Css"
  }
];



const Techstack = () => {
  return (
    <div className="techstack" >
      <h1>TechStack</h1>
      <div className="techContainer">
        <div className="mainContainer">
          <div className="textContent">
            <p>
            I have strong front-end skills, creating responsive and visually compelling web experiences with high performance and user satisfaction. My foundation includes HTML, CSS, and JavaScript, along with proficiency in C, Core Java, and TypeScript. I’m skilled in React.js, Next.js, React Router, and Redux Toolkit for state management, and I use SASS for styling. My adaptability, creativity, and problem-solving abilities ensure my projects are effective and responsive.
            </p>
            <div className="slider">
              <Marquee
                gradient={false}
                speed={60}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
              >
                {sliderContent.map((content, index) => (
                  <div className="sliderContent" key={index}>
                    <img src={content.img} alt="" />
                    <p>{content.name}</p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
          <div className="imageContent">
            <img src="/dev4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
