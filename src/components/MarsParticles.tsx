import Particles from "react-tsparticles";
import styled from "styled-components";
import { loadFull } from "tsparticles";
import { colors } from "../style";

const MarsParticles = () => {
  const particlesInit = async (main: any) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Box>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: [
                "#6e070056",
                colors.blueOpacity,
                colors.greenOpacity,
                colors.purpleWhite,
              ],
            },
            shape: {
              type: "star",
              stroke: {
                width: 0,
                color: "#000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
              warp: true,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              absorbers: {
                color: "#ff0000",
                size: {
                  value: 10,
                  limit: 50,
                  random: {
                    enable: true,
                    minimumValue: 5,
                  },
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          absorbers: {
            orbits: true,
            destroy: false,
            size: {
              value: 5,
              limit: 50,
              random: false,
              density: 15,
            },
            position: {
              x: 50,
              y: 50,
            },
          },
          background: {
            image:
              "url(https://img.ibxk.com.br/2019/05/17/a-17202525498312.jpg)",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </Box>
  );
};
const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

export default MarsParticles;
