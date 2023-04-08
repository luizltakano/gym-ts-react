import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget facilisis nisi, in facilisis tellus.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget facilisis nisi, in facilisis tellus.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget facilisis nisi, in facilisis tellus.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.75 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Graphics and Description */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* Graphic */}
        <img
          className="mx-auto"
          alt="benefits-page-graphic"
          src={BenefitsPageGraphic}
        ></img>
        {/* Title and Description */}
        <div className="">
          {/* Title */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.75 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 50,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>
          </div>
          {/* Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.75 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: 50,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              tincidunt ex dui, nec auctor erat consectetur non. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Proin et gravida
              nibh. Maecenas eleifend, enim ut varius interdum, nisi enim
              efficitur metus, non ullamcorper leo enim ornare lectus. Nullam
              porttitor lorem tristique mauris cursus feugiat.
            </p>
            <p className="mb-5">
              Mauris sollicitudin pellentesque ex, id finibus risus. Ut nec
              ullamcorper neque. Aliquam ornare, nisi in volutpat pulvinar, dui
              nibh sodales purus, id mattis orci urna sit amet nulla. Aenean in
              ligula mauris. Donec at leo vestibulum, pulvinar velit at,
              tincidunt turpis.{" "}
            </p>
          </motion.div>

          {/* Button */}
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
