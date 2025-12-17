import { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  useEffect(
    function () {
      setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
    },
    [dispatch]
  );

  return <div className="timer">{secondsRemaining}</div>;
}

export default Timer;
