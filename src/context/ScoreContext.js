import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

export default ScoreProvider = ({ children }) => {
  const [runs, setRuns] = useState(0);
  const [totalPlayer, setTotalPlayer] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [over, setOver] = useState({
    overNo: 0,
    ballNo: 0,
  });
  const [lastOver, setLastOver] = useState(null);
  const [lastOperation, setLastOperation] = useState(null);
  const [lastScore, setLastScore] = useState(null);
  const [currentScore, setCurrentScore] = useState([]);
  // const arrayStore = [];
  const undoLastOperation = () => {
    switch (lastOperation) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
        setRuns(runs - Number(lastOperation));
        setOver(lastOver);
        setLastOver(null);
        setLastOperation(null);
        break;
      case "wicket":
        setWickets(wickets - 1);
        setOver(lastOver);
        setLastOver(null);
        // setLastOperation(null);

        break;
      case "over":
        setOver(lastOver);
        setLastOver(null);
        // setLastOperation(null);
        break;
      case "reset":
        if (lastScore) {
          setRuns(lastScore.runs);
          setWickets(lastScore.wickets);
          setOver(lastScore.over);
          setLastOver(null);
          // setLastOperation(null);
        }
        break;
      default:
        return;
    }
  };
  const increaseOver = () => {
    setOver({
      overNo: over.ballNo === 5 ? over.overNo + 1 : over.overNo,
      ballNo: over.ballNo === 5 ? 0 : over.ballNo + 1,
    });
    setLastOperation("over");
    // setLastOperation([...lastOperation,["over"]]);
    setLastOver(over);
    // setCurrentScore([...currentScore,[""]])
  };
  const increaseRuns = (btnTxt) => {
    setRuns(runs + btnTxt);
    increaseOver();
    setLastOperation(runs + btnTxt.toString());
    setCurrentScore(currentScore.length < 6 ? [...currentScore, btnTxt] : []);
    // setLastOperation([...lastOperation,[runs + btnTxt.toString()]]);
  };
  const wide = () => {
    setRuns(runs + 1);
    setCurrentScore(currentScore.length < 6 ? [...currentScore, "WD"] : []);
  };
  const increaseWickets = () => {
    setWickets(wickets + 1);
    increaseOver();
    setLastOperation("wicket");
    setCurrentScore(currentScore.length < 6 ? [...currentScore, "W"] : []);

    // setLastOperation([...lastOperation,["wicket"]]);
  };
  const resetScore = () => {
    setRuns(0);
    setWickets(0);
    setOver({ overNo: 0, ballNo: 0 });
    setLastScore({ runs, wickets, over });
    setLastOperation("reset");
    setCurrentScore([]);
    // setLastOperation([...lastOperation,["reset"]]);
  };

  const totalPlayers = (e) => {
    setTotalPlayer(e);
  };

  return (
    <ScoreContext.Provider
      value={{
        runs,
        currentScore,
        wide,
        wickets,
        over,
        lastOperation,
        increaseRuns,
        increaseOver,
        increaseWickets,
        resetScore,
        undoLastOperation,
        totalPlayer,
        totalPlayers,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
