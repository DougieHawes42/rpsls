import { Route1 } from "../utils/routes";

import { FaQuestion } from "react-icons/fa";

import { FaHandRock } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { GiLizardman, GiSpockHand } from "react-icons/gi";
import { RiFilePaper2Fill } from "react-icons/ri";

import "./style.scss";

const Game = () => {
  const GameGridBox = ({ icon }) => <div className="game-grid-box">{icon}</div>;

  const sheldonVictoryQuotes = [
    "Bazinga! I have once again demonstrated my intellectual superiority.",
    "As predicted by my flawless understanding of game theory, I win.",
    "Rock, Paper, Scissors, Lizard, Spock is not luck-based. You just lost.",
    "Victory was inevitable. I merely allowed you to participate.",
    "Once again, the triumph of logic over chaos.",
    "I’d explain why you lost, but I don’t have a whiteboard.",
    "Checkmate. Yes, I know that’s chess. The sentiment stands.",
    "Your strategy was flawed. My strategy was Sheldon.",
    "I win. Please take a moment to reflect on your poor decision-making.",
    "Bazinga is optional. The win is not.",
  ];

  const sheldonDefeatQuotes = [
    "Impossible! My calculations do not allow for this outcome.",
    "This must be a statistical anomaly of epic proportions.",
    "I… I concede. But only under protest!",
    "Clearly, I underestimated the chaotic nature of human unpredictability.",
    "This loss is temporary. My victory is inevitable in the long run.",
    "I demand a recount! Bazinga… not.",
    "You may have won this round, but I will rise again.",
    "A minor setback for the genius that is Sheldon Cooper.",
    "My superior intellect has been thwarted… for now.",
    "I… must accept this loss, but it pains me greatly.",
  ];

  const sheldonTimeoutQuotes = [
    "Ah! Hesitation—your fatal flaw is exposed.",
    "Time waits for no one, except apparently you… and I am taking full advantage.",
    "Indecision is not a strategy, my friend.",
    "You have forfeited by default. Logic always prevails.",
    "A victory by default is still a victory. Bazinga!",
    "Your lack of promptness has allowed my superior intellect to shine.",
    "I see that your reaction time is as flawed as your reasoning.",
    "Patience is a virtue. Punctuality is a necessity—clearly you missed that memo.",
    "While you contemplate, I dominate.",
    "I win. You may call it mercy if it makes you feel better.",
  ];

  const sheldonIndecisionQuotes = [
    "There was a bluejay at the window. I couldn’t focus.",
    "I struggle with arbitrary decisions, this isn’t fair!",
    "Which fork do I use? The very fabric of reality is collapsing!",
    "My brain is experiencing a minor existential crisis over this choice.",
    "This requires careful analysis… which I am incapable of completing right now.",
    "I need more data before I can make a rational decision.",
    "I cannot decide; the universe itself seems undecided.",
    "I am paralyzed by the sheer weight of all possible options.",
    "Choosing randomly would violate my personal code of conduct.",
    "If I choose incorrectly, the consequences could be catastrophic… or mildly inconvenient.",
  ];

  const numberArray = [
    "nine",
    "eight",
    "seven",
    "six",
    "five",
    "four",
    "three",
    "two",
    "one",
    "zero",
  ];

  const content = (
    <div className="game">
      <div className="game-grid">
        <GameGridBox icon={<FaHandRock />} />
        <GameGridBox icon={<RiFilePaper2Fill />} />
        <GameGridBox icon={<FaScissors />} />
        <GameGridBox icon={<GiLizardman />} />
        <div className="game-grid-box-choose">
          <FaQuestion />
          <p>choose one</p>
        </div>
        <GameGridBox icon={<GiSpockHand />} />
      </div>
      <div className="game-counter">{numberArray[0]}</div>
    </div>
  );

  return <Route1 content={content} />;
};

export default Game;
