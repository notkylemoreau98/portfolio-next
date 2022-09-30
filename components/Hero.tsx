import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Kyle Moreau",
      "A Full-Stack Software Engineer",
      "Passionate About Making Ideas a Reality",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
      <BackgroundCircles />

      <div className="absolute z-20">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQGK-MUe7P-yRw/profile-displayphoto-shrink_200_200/0/1648744523838?e=1666224000&v=beta&t=eAIy8qA0HbZl5kKkH4TZZLOfVCirwRzYxHEUoa18maA"
          alt="Kyle Headshot"
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
        />

        <div>
          <h2 className="text-sm uppercase text-gray-500 pb-2 pt-4 tracking-[15px]">
            Software Engineer
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#5B6DBD" />
          </h1>
        </div>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
