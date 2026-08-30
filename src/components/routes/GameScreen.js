import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
  FaRegHandLizard,
  FaRegHandSpock,
} from "react-icons/fa";

import "./style.scss";

const GameScreen = ({ handleBackToHome }) => {
  const [showGrid, setShowGrid] = useState(true);
  const [showRoundResult, setShowRoundResult] = useState(false);
  const [roundResult, setRoundResult] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [sheldonChoice, setSheldonChoice] = useState(null);
  const [loadedChamber, setLoadedChamber] = useState(0);
  const [round, setRound] = useState(1);

  const makeSheldonChoice = () => {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];

    return choices[Math.floor(Math.random() * choices.length)];
  };

  const handleChoice = (choice) => {
    const newSheldonChoice = makeSheldonChoice();

    setUserChoice(choice);
    setSheldonChoice(newSheldonChoice);

    setShowGrid(false);
    setShowRoundResult(true);
    setRoundResult(getRoundResult(choice, newSheldonChoice));

    getRoundResult(choice, newSheldonChoice);
  };

  const getLoadedChamber = () => {
    setLoadedChamber(Math.floor(Math.random() * 6) + 1);
  };

  const getRoundResult = (UC, SC) => {
    if (UC === SC) {
      return "tie";
    }
    if (UC === "rock") {
      return SC === "scissors" || SC === "lizard" ? "win" : "lose";
    }
    if (UC === "paper") {
      return SC === "rock" || SC === "spock" ? "win" : "lose";
    }
    if (UC === "scissors") {
      return SC === "paper" || SC === "lizard" ? "win" : "lose";
    }
    if (UC === "lizard") {
      return SC === "spock" || SC === "paper" ? "win" : "lose";
    }
    if (UC === "spock") {
      return SC === "scissors" || SC === "rock" ? "win" : "lose";
    }
  };

  useEffect(() => {
    getLoadedChamber();
  }, []);

  return (
    <div className="screen game">
      {showGrid && (
        <>
          <h3 className="game-title">Make your choice:</h3>
          <motion.div
            className="choice-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}>
            <div className="choice" onClick={() => handleChoice("rock")}>
              <FaRegHandRock />
            </div>
            <div
              className="choice"
              onClick={() => {
                handleChoice("paper");
              }}>
              <FaRegHandPaper />
            </div>
            <div
              className="choice"
              onClick={() => {
                handleChoice("scissors");
              }}>
              <FaRegHandScissors />
            </div>
            <div
              className="choice"
              onClick={() => {
                handleChoice("lizard");
              }}>
              <FaRegHandLizard />
            </div>
            <div
              className="choice"
              onClick={() => {
                handleChoice("spock");
              }}>
              <FaRegHandSpock />
            </div>
          </motion.div>
        </>
      )}
      {showRoundResult && (
        <div className="round-result">
          <motion.p
            className="round-result-text user-choice"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}>
            you chose: {userChoice}
          </motion.p>
          <motion.p
            className="round-result-text sheldon-choice"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}>
            sheldon chose: {sheldonChoice}
          </motion.p>
          <motion.p
            className="round-result-text round-winner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4 }}>
            round result: {roundResult}
          </motion.p>
          {loadedChamber === round ? (
            <div>
              <div>
                {roundResult === "win" ? "Bang! I lose" : "Bang! I win"}
              </div>
              <div onClick={handleBackToHome}>BACK TO HOME SCREEN</div>
            </div>
          ) : (
            <motion.div
              className="next-round-button"
              onClick={() => {
                setShowRoundResult(false);
                setShowGrid(true);
                setRound(round + 1);
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.3, 1] }}
              transition={{
                duration: 1,
                delay: 0.8,
                repeat: Infinity,
                repeatType: "loop",
              }}>
              NEXT ROUND
            </motion.div>
          )}
        </div>
      )}
      <div className="round">Round: {round}</div>
    </div>
  );
};

export default GameScreen;
