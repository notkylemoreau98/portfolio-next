import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import ExperienceList from "../components/ExperienceList";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../typing";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

/* 
  Work to do:
    Update experiences to pull from sanity
*/

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#5B6DBD]/80">
      <Head>
        <title>Kyle Moreau | Portfolio</title>
        <meta
          name="description"
          content="Full-stack software engineer based out of Los Angeles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="experince" className="snap-center">
          <ExperienceList />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <Contact />
        </section>

        <Link href="#hero">
          <footer className="relative h-[50px] w-full cursor-pointer snap-start">
            <div className="sticky bottom-5 -mt-20 flex items-center justify-center rounded-full">
              <img
                className="h-10 w-10 rounded-full filter bg-gray-900 grayscale hover:grayscale-0 border border-white p-2"
                src="https://www.kylemoreau.com/Images/KM-Logo.png"
                alt="Headshot"
              />
            </div>
          </footer>
        </Link>
      </main>
    </div>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   // const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();

//   return {
//     props: {
//       pageInfo,
//       skills,
//       projects,
//       socials,
//     },
//   };
// };
