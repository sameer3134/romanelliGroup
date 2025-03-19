import { useEffect } from "react";
import FeaureListing from "../Default Pages/feaureListing";
import NumberSpeak from "../Default Pages/numberSpeak";
import ClientSay from "../Default Pages/clientSay";
import RoadMap from "./roadMap";
import ClientSuccess from "../Default Pages/clientSuccess";
import QuestionAnswer from "../Default Pages/QuestionAnswer/questionAnswer";
import Footer from "../Default Pages/footer";
import Talk from "../Default Pages/talk";
import { motion } from "framer-motion";


// Animation Variants (Slide-up & Fade-in)
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MainPageBuy = () => {


  return (
    <div className="font-dmsans">
      <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0 -my-1"
      >
        <FeaureListing />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0"
      >
        <NumberSpeak />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0"
      >
        <ClientSay />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0"
      >
        <RoadMap />
      </motion.div>
      {/* <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0 -my-1"
      > */}
        <ClientSuccess />
      {/* </motion.div> */}
      <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0 -my-1"
      >
        <QuestionAnswer />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0 -my-1"
      >
        <Talk />
        <Footer />
      </motion.div>
    </div>
  );
};

export default MainPageBuy;
