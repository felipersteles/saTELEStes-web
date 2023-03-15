import styled from "styled-components";

export const Button = styled.button`

    border-radius: 1rem;
    color: #effdea;
    border: none;
    padding: 1vh 8vh;
    left: 40vw;
    display: flex;
    z-index: 10000;

    background: linear-gradient(223deg, #5b26ff, #000000, #8d00ff);
    background-size: 600% 600%;

    -webkit-animation: BotaoAnimation 18s ease infinite;
    -moz-animation: BotaoAnimation 18s ease infinite;
    -o-animation: BotaoAnimation 18s ease infinite;
    animation: BotaoAnimation 18s ease infinite;

    @-webkit-keyframes BotaoAnimation {
        0% {
          background-position: 0% 75%;
        }
        50% {
          background-position: 100% 26%;
        }
        100% {
          background-position: 0% 75%;
        }
      }
      @-moz-keyframes BotaoAnimation {
        0% {
          background-position: 0% 75%;
        }
        50% {
          background-position: 100% 26%;
        }
        100% {
          background-position: 0% 75%;
        }
      }
      @-o-keyframes BotaoAnimation {
        0% {
          background-position: 0% 75%;
        }
        50% {
          background-position: 100% 26%;
        }
        100% {
          background-position: 0% 75%;
        }
      }
      @keyframes BotaoAnimation {
        0% {
          background-position: 0% 75%;
        }
        50% {
          background-position: 100% 26%;
        }
        100% {
          background-position: 0% 75%;
        }
      }
`;

export const BackButton = styled.button`
      border: none;
`;