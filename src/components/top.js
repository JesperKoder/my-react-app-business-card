import React from "react";
import Image from "../lion.jpg";

export default function Top() {
  return (
    <div className="Top">
      <img src={Image} alt="picture of lion" />
      <h1 className="top--Title">Jesper Stene</h1>
      <h2 className="top--UnderTitle">Frontend Developer</h2>
      <p className="top--Website">Jesper.website</p>
      <button className="top--Btn">
        <a href="https://github.com/JesperKoder/">
          <i className="material-icons">github</i>
        GitHub</a>
      </button>
    </div>
  );
}
