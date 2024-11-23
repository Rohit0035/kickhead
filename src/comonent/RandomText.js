import React, { useEffect, useState } from 'react';
import { RandomReveal } from "react-random-reveal";

const RandomText = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);

  // List of adjectives
  const adjectives = [
    "We’re the makers of the new way thinking ideas",
    "A startup-inspired challenger agency",
    "In the jungle of biz, where the lions  roar and unicorns run wild",
    "Our mission is to build thriving brands with Unique Stripes",
    "Designed specifically to take businesses from x to 10X",
    "Offering behavioural science, creativity, and innovation using AUTHENTIC IMAGINATION",
  ];


  useEffect(() => {
    document.body.onkeyup = function (e) {
      if (e.keyCode === 32) { // Space bar
        setIsPlaying((playing) => !playing);
      }
    };
  }, []);

  return (
    <div className="demo">
      {/* <h2>You are so&nbsp;</h2> */}
      <span className="adjectives" style={{fontSize:'40px', fontWeight:'600'}}>
        <RandomReveal
          isPlaying={isPlaying}
          duration={Infinity}
          revealDuration={0}
          updateInterval={0.55}
          characterSet={adjectives} // Use the list of adjectives here
          characters=" " // Keep the spacing between words
          renderCharacter={(char) => (
            // Wrap each character with your custom JSX element (in this case <h2>)
            <h2 >{char}</h2>
          )}
        />
      </span>
      {/* <h2>personality.</h2> */}
    </div>
  );
};

export default RandomText;
