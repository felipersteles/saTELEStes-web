import React from 'react'
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Button } from '../style/components';

import satelite from '../assets/img/satelite.png'
import logo from "../assets/img/logo.png";
import spikeFishing from "../assets/img/spike-fishing.png";
import { SolIcon } from "../assets/img/sol";


const Home = () => {
    const navigate = useNavigate()

  return (
    <HomeContainer>
        <QuoteContainer>
            <Quote><i>Se choras por ter pedido o sol, as lágrimas te impedirão de olhar as estrelas e a lua...</i></Quote>
        </QuoteContainer>

        <ButtonContainer>
            <Button onClick={()=> navigate("/nasa/APOD")}><img src={satelite} alt="" /></Button>
        <Button onClick={()=> window.open("https://felipeteles.netlify.app/")}><img src={logo} alt="" /></Button>
        <Button onClick={()=> window.open("https://felipersteles.github.io/sistema-solar-experimento-um/")}><SolIcon size={"5vh"}/></Button>
        </ButtonContainer>

        <SpikeFishing src={spikeFishing} alt="Spike pescando"/>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
    display: block;
    height: 100%;
    padding: 4px 8px;

    background-image: url(https://img.olhardigital.com.br/wp-content/uploads/2021/07/espaco-sideral.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const QuoteContainer = styled.div`
    display: block;
`;

const Quote = styled.h2`
    margin: 0;
`;


const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 200px;
    gap: 0.2rem;

    img{
        max-height: 5vh
    }
`;

const SpikeFishing = styled.img`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
`;

export default Home