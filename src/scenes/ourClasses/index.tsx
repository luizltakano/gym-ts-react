import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Maecenas tincidunt dapibus elit, auctor blandit lacus auctor id. Maecenas eros nulla, sagittis vitae metus at, dapibus tincidunt elit. Aliquam erat volutpat. ",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Maecenas tincidunt dapibus elit, auctor blandit lacus auctor id. Maecenas eros nulla, sagittis vitae metus at, dapibus tincidunt elit. Aliquam erat volutpat. ",
    image: image3,
  },
  {
    name: "Adventure Classes",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Maecenas tincidunt dapibus elit, auctor blandit lacus auctor id. Maecenas eros nulla, sagittis vitae metus at, dapibus tincidunt elit. Aliquam erat volutpat. ",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Maecenas tincidunt dapibus elit, auctor blandit lacus auctor id. Maecenas eros nulla, sagittis vitae metus at, dapibus tincidunt elit. Aliquam erat volutpat. ",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="ourclasses"
      className="w-full bg-primary-100 py-40"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.75 }}
          transition={{ duration: 0.5 }}
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
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
          </div>
          <p className="py-5">
            Praesent et felis sollicitudin risus lacinia ultrices ut quis orci.
            Morbi ut dui dignissim, aliquam dolor porttitor, vehicula velit.
            Phasellus nec lacinia sem. Cras eleifend ipsum et felis vulputate,
            at bibendum nulla rhoncus. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Curabitur rutrum mattis velit in eleifend. Sed
            laoreet aliquam odio, at finibus mauris tincidunt eu.
          </p>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
