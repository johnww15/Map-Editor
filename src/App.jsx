// import { useState } from 'react'
import "./App.css";

export default function App() {
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
          <p>grid</p>
        </div>
      </div>
      <div className="bottom">
        <button>layers</button>
      </div>
    </>
  );
}
