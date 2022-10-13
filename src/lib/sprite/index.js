import React from "react";

import styles from "./style.module.css";

export function Sprite( {
    spriteImg,
    frames = 10,
    className
}) {
    const spriteStyle = { "--frames": frames, backgroundImage: 
    `url(${spriteImg})`}
  return (
    <div >
      <div className={`${styles.container} ${className}`}>
        <div className={styles.sprite} style={spriteStyle}></div>
      </div>
    </div>
  );
}
