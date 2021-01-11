import React, { useState } from "react";
import Styled from "styled-components";

const AppDiv = Styled.div`
  color: white;

  .watch {
    .watch-time {
      margin-top: 30vh;
      margin-left: auto;
      margin-right: auto;
      width: 400px;
  
      ul {
        display: grid;
        grid-template-columns: repeat(3, 33%);
        padding-left: 0;
        text-align: center;
        list-style: none;
      }
    }

    .watch-controls {
      display: grid;
      grid-template-columns: repeat(3, 33%);
      margin-top: 24px;
      margin-left: auto;
      margin-right: auto;
      width: 400px;

      button {
        border: 1px solid gray;
        background: black;
        color: white;

        &:hover {
          cursor: pointer;
          transition: 0.3s;
          background: white;
          color: black
        }
      }
    }
  }
`

const App = () => {
  const [time, updateTime] = useState(
    {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  );

  const addTime = () => {
    updateTime(
      {
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds+1
      }
    );
  };

  return (
    <AppDiv>
      <div className="watch">
        <div className="watch-time">
          <ul className="time-label">
            <li>hr</li>
            <li>min</li>
            <li>sec</li>
          </ul>
          <ul className="time-count">
            <li>{time.hours}</li>
            <li>{time.minutes}</li>
            <li>{time.seconds}</li>
          </ul>
        </div>
        <div className="watch-controls">
          <button className="start" onClick={() => addTime()}>Start</button>
          <button className="stop">Stop</button>
          <button className="clear" 
            onClick={() => updateTime({
              hours: 0,
              minutes: 0,
              seconds: 0
            })}>
            Clear
          </button>
        </div>
      </div>
    </AppDiv>
  );
};

export default App;