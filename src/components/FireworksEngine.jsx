import { useEffect, useMemo } from "react";

import Particles from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";

export default function FireworksEngine() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },

      background: {
        color: "transparent",
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 0,
        },

        color: {
          value: [
            "#ff4fd8",
            "#ffd700",
            "#ffffff",
            "#7f5cff",
            "#ff8844",
          ],
        },

        shape: {
          type: "circle",
        },

        opacity: {
          value: 1,
          animation: {
            enable: true,
            speed: 0.8,
            minimumValue: 0,
            sync: false,
          },
        },

        size: {
          value: {
            min: 2,
            max: 5,
          },
        },

        life: {
          duration: {
            sync: true,
            value: 1.8,
          },

          count: 1,
        },

        move: {
          enable: true,
          gravity: {
            enable: true,
            acceleration: 12,
          },

          speed: {
            min: 10,
            max: 28,
          },

          decay: 0.08,

          direction: "none",

          outModes: {
            default: "destroy",
          },
        },
      },

      emitters: [
        {
          life: {
            count: 0,
            duration: 0.1,
            delay: 0.4,
          },

          rate: {
            delay: 0.15,
            quantity: 1,
          },

          size: {
            width: 0,
            height: 0,
          },

          position: {
            x: 50,
            y: 90,
          },

          particles: {
            move: {
              direction: "top",
              speed: {
                min: 45,
                max: 60,
              },
            },
          },
        },
      ],
    }),
    []
  );

  return (
    <div className="absolute inset-0 z-30 pointer-events-none">

      <Particles
        id="fireworks"
        init={particlesInit}
        options={options}
      />

    </div>
  );
}