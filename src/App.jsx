// import { useState } from 'react'
import "./App.css";
import Canvas from "./components/Canvas";

export default function App() {
  /*FIXED CONSTANTS FOR DEVELOPMENT*/
  const ROWS = 10;
  const COLUMNS = 10;

  return (
    <>
      <div className="top">
        <div className="top-title">
          <h1>Map Editor</h1>
        </div>
        <div className="top-buttons">
          <button>Clear Map</button>
          <button>Export Map</button>
        </div>
      </div>
      <div className="mid">
        <div className="mid-left">
          <p>tileset</p>
        </div>
        <div className="mid-right">
          <Canvas rows={ROWS} cols={COLUMNS} />
        </div>
      </div>
      <div className="bottom">
        <button>layers</button>
      </div>
    </>
  );
}
