import styled from "styled-components";

export const Button = styled.button`
  border-radius: 1rem;
  color: #effdea;
  border: none;
  padding: 1vh 8vh;
  border: 1px solid black;
  box-shadow: -0.3px 0.3px 0 black;
  left: 40vw;
  display: flex;
  z-index: 10000;
  cursor: pointer;

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

type PageContainerParams = {
  backgroundImage?: string;
};

export const PageContainer = styled.div<PageContainerParams>`
  height: 100%;
  width: 100%;
  display: block;
  padding: 4px 8px;
  margin-bottom: 8px;

  position: fixed;
  top: 0;
  left: 0;

  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  @media (min-width: 720px) {
    width: 100%;
  }
`;

export const BackButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 8px;
`;
