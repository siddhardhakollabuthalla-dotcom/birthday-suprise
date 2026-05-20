import { useEffect } from "react";

import { Howl } from "howler";

export default function AudioController({
  birthdayStarted,
}) {

  useEffect(() => {

    const ambientMusic = new Howl({
      src: ["/audio/emotional.mp3"],
      loop: true,
      volume: 0.35,
    });

    ambientMusic.play();

    let fireworks;

    if (birthdayStarted) {

      fireworks = new Howl({
        src: ["/audio/fireworks.mp3"],
        loop: true,
        volume: 0.5,
      });

      fireworks.play();
    }

    return () => {

      ambientMusic.stop();

      if (fireworks) {
        fireworks.stop();
      }
    };

  }, [birthdayStarted]);

  return null;
}