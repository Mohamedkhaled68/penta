"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const MovingStars: React.FC = () => {
  const [init, setInit] = useState(false);

  // Initialize tsParticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded:", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#060B27",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#29E68C"],
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: {
            min: 0.5,
            max: 1.5,
          },
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: {
            min: 0.5,
            max: 1.5,
          },
          animation: {
            enable: true,
            speed: 1,
            min: 0.1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 1.3,
            max: 2.3,
          },
          animation: {
            enable: true,
            speed: 2,
            min: 0.5,
            sync: false,
          },
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: "random",
          animation: {
            enable: true,
            speed: 5,
            sync: false,
          },
        },
      },
      detectRetina: true,
      pauseOnBlur: false,
      pauseOnOutsideViewport: false,
    }),
    [],
  );

  // Only render when initialization is complete
  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          filter: "blur(0.5px)",
        }}
      />
    );
  }

  return <div></div>;
};

export default MovingStars;