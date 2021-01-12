import React, { useRef, useState } from "react";
import Styled from "styled-components";

const AppDiv = Styled.div`
  color: white;

  .watch {
    .watch-time {
      margin-top: 30vh;
      margin-left: auto;
      margin-right: auto;
      width: 150px;
      text-align: center;
  
      .time-label {
        display: grid;
        grid-template-columns: repeat(3, 33%);
        padding-left: 0;
        text-align: center;
        list-style: none;
      }

      .time-count {
        text-align: center;
      }
    }

    .watch-controls {
      display: flex;
      justify-content: space-around;
      margin-top: 24px;
      margin-left: auto;
      margin-right: auto;
      width: 140px;

      button {
        border: 1px solid gray;
        border-radius: 4px;
        padding: 4px 8px;
        background: black;
        color: white;

        &:hover {
          cursor: pointer;
          transition: 0.3s;
          background: white;
          color: black
        }
      }
      .none {
        display: none;
      }
    }
  }
`

const App = () => {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(false)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  };

  const handlePause = () => {
    clearInterval(countRef.current)
    setIsPaused(true)
  };

  const handleResume = () => {
    setIsPaused(false)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  };

  const handleClear = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  };

  const renderStart = () => {
    if (isActive === false) {
      return "start";
    }
    else {
      return "none";
    }
  };

  const renderPause = () => {
    if (isActive === true && isPaused === false) {
      return "pause";
    }
    else {
      return "none";
    }
  };

  const renderResume = () => {
    if (isActive === true && isPaused === true) {
      return "resume";
    }
    else {
      return "none";
    }
  };

  const renderClear = () => {
    if (isActive === true && isPaused === true) {
      return "clear";
    }
    else {
      return "none";
    }
  };

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <AppDiv>
      <div className="watch">
        <div className="watch-time">
          <h1>timer</h1>
          <h2 className="time-count">{formatTime()}</h2>
        </div>
        <div className="watch-controls">
          <button className={renderStart()} onClick={() => handleStart()}>Start</button>
          <button className={renderPause()} onClick={() => handlePause()}>Pause</button>
          <button className={renderResume()} onClick={() => handleResume()}>Resume</button>
          <button className={renderClear()} onClick={() => handleClear()}>Clear</button>
        </div>
      </div>
    </AppDiv>
  );
};

export default App;