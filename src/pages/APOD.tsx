import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { NasaService } from "../apis";
import { NasaApodResponse } from "../types";
import { BackButton } from "../style";

const formatDate = (date: string | undefined): string => {
  if (!date) return "";

  let stringDate = new Date(date);

  let day = stringDate.getDate();

  let month = stringDate.getMonth();

  let year = stringDate.getFullYear();

  return day + "/" + month + "/" + year;
};

const APOD = () => {
  const navigate = useNavigate();

  const [photoData, setPhotoData] = useState<NasaApodResponse>();
  const [isLoading, setIsLoading] = useState(true);

  const getPhotoFromNasaAPI = useCallback(() => {
    NasaService.getAPOD().then((res) => {
      setPhotoData(res);
      setIsLoading(false);
    });
  }, []);

  useEffect(getPhotoFromNasaAPI, [getPhotoFromNasaAPI]);

  return (
    <APODContainer>
      <APODImageContainer>
        <APODImage src={photoData?.url} alt="Apod image" />
      </APODImageContainer>

      <DescriptionContainer>
        <APODTitle>{photoData?.title}</APODTitle>
        <h3>Data da foto: {formatDate(photoData?.date)}</h3>
        <p>{photoData?.explanation}</p>
      </DescriptionContainer>

      <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
    </APODContainer>
  );
};

const APODContainer = styled.div`
  height: 100%;
  display: block;
  padding: 4px 8px;

  background-image: url(https://img.ibxk.com.br/2019/05/17/a-17202525498312.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const APODImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

const DescriptionContainer = styled.div`
  background-color: #0000008c;
`;

const APODImage = styled.img`
  width: 95%;
  object-fit: contain;
`;

const APODTitle = styled.h1`
  margin: 0;
`;

export default APOD;
