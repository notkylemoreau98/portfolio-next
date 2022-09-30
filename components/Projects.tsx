import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#5B6DBD]/80">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/485a3927359323.5636718bca5e3.jpg"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                Case Study {i + 1} of {projects.length}: UPS Clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, culpa! Rem suscipit dolore odit, sit et maxime quod
                tenetur aliquam, deleniti ipsum, possimus aut esse quo. In
                perferendis unde eligendi aliquam doloribus rerum consectetur
                quisquam sed voluptates molestias, placeat iusto voluptatibus
                facere. Debitis, commodi delectus! Nostrum necessitatibus unde
                esse eveniet!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#5B6DBD]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
