// import { useState } from 'react'
import "./App.css";
import Canvas from "./components/Canvas";
import Spritesheet from "./components/Spritesheet";

export default function App() {
  /*FIXED CONSTANTS FOR DEVELOPMENT*/
  const ROWS = 10;
  const COLUMNS = 10;
  const IMG_URL =
    "https://github.com/johnww15/Map-Editor/blob/main/public/TilesetSpriteSheet.png?raw=true";

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
          <Spritesheet url={IMG_URL} />
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
