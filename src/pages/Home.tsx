import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { Button, PageContainer } from "../style";

import satelite from "../assets/img/satelite.png";
import logo from "../assets/img/logo.png";
import spikeFishing from "../assets/img/spike-fishing.png";
import { SunIcon, PlanetIcon } from "../assets";

const Home = () => {
  const navigate = useNavigate();

  const buttons = [
    {
      onClick: () => navigate("/nasa/APOD"),
      content: <img src={satelite} alt="APOD button" />,
    },
    {
      onClick: () => window.open("https://felipersteles.netlify.app/"),
      content: <img src={logo} alt="Personal site logo" />,
    },
    {
      onClick: () =>
        window.open(
          "https://felipersteles.github.io/sistema-solar-experimento-um/"
        ),
      content: <SunIcon size={"5vh"} />,
    },
    {
      onClick: () => navigate("/nasa/MarsHoverPhoto"),
      content: <PlanetIcon size={"5vh"} />,
    },
  ];

  return (
    <PageContainer backgroundImage="https://img.olhardigital.com.br/wp-content/uploads/2021/07/espaco-sideral.jpg">
      <HomePageContainer>
        <QuoteContainer>
          <Quote>
            <i>
              If you love a flower that lives on a star, it is sweet to look at
              the sky at night...
            </i>
          </Quote>
        </QuoteContainer>

        <ButtonContainer>
          {buttons.map((button, key) => (
            <Button key={key} onClick={button.onClick}>
              {button.content}
            </Button>
          ))}
        </ButtonContainer>
      </HomePageContainer>

      <SpikeFishing src={spikeFishing} alt="Spike pescando" />
    </PageContainer>
  );
};

const HomePageContainer = styled.div`
  @media (min-width: 720px) {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const QuoteContainer = styled.div`
  display: block;
  margin-bottom: 18px;
  max-width: 99vw;

  @media (min-width: 720px) {
    width: 25%;
    margin-left: 18px;
  }
`;

const Quote = styled.h2`
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 20vh 20vh;
  gap: 0.5rem;
  justify-content: center;

  img {
    max-height: 5vh;
  }
`;

const SpikeFishing = styled.img`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  @media (min-width: 720px) {
    display: none;
  }
`;

export default Home;
