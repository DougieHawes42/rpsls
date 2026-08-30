import { motion } from "framer-motion";

import "./style.scss";

const HomeScreen = ({ onClick }) => {
  return (
    <div className="screen home">
      <div className="home-contents">
        {/* Zoom-in text */}
        <motion.p
          className="home-message"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}>
          READY TO PLAY?
        </motion.p>

        {/* Delayed fade-in + continuous blink */}
        <motion.button
          className="home-button"
          onClick={onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}>
          START
        </motion.button>
      </div>
    </div>
  );
};

export default HomeScreen;
