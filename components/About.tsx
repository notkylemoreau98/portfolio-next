import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="https://avatars.githubusercontent.com/u/73264164?v=4"
        alt="Second Kyle Headshot"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:mx-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#5B6DBD]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed a
          incidunt quam asperiores veniam maiores reiciendis laudantium culpa,
          eveniet corrupti quidem libero ipsum. Sunt blanditiis, voluptate magni
          illo totam ipsum dicta suscipit eum architecto atque, ipsam obcaecati
          culpa consequuntur cumque quae aperiam maxime aliquid minima nisi? Qui
          quo sit quos ducimus error quae perspiciatis omnis sint, saepe totam!
          Molestias voluptate, accusamus delectus quibusdam temporibus
          voluptates quasi distinctio atque quis a unde iure nulla sunt
          provident consectetur! Quae doloribus exercitationem aspernatur?
        </p>
      </div>
    </motion.div>
  );
};

export default About;
