import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { NasaService } from "../apis";
import { NasaApodResponse } from "../types";
import { BackButtonContainer, Button, PageContainer } from "../style";
import Loading from "../components/Loading";

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
    NasaService.getAPOD()
      .then((res) => {
        setPhotoData(res);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(getPhotoFromNasaAPI, [getPhotoFromNasaAPI]);

  return (
    <>
      {!isLoading && (
        <PageContainer backgroundImage="https://img.ibxk.com.br/2019/05/17/a-17202525498312.jpg">
          {photoData && (
            <APODPageContainer>
              <APODImageContainer>
                <APODImage src={photoData?.url} alt="Apod image" />
              </APODImageContainer>

              <DescriptionContainer>
                <APODTitle>{photoData?.title}</APODTitle>
                <h3>Data da foto: {formatDate(photoData?.date)}</h3>
                <APODDescription>{photoData?.explanation}</APODDescription>
              </DescriptionContainer>

              <BackButtonContainer>
                <Button onClick={() => navigate("/")}>Voltar</Button>
              </BackButtonContainer>
            </APODPageContainer>
          )}

          {!photoData && (
            <APODPageContainer>
              <APODTitle>Erro 404</APODTitle>
              <BackButtonContainer>
                <Button onClick={() => navigate("/")}>Voltar</Button>
              </BackButtonContainer>
            </APODPageContainer>
          )}
        </PageContainer>
      )}

      {isLoading && <Loading />}
    </>
  );
};

const APODPageContainer = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;

  &&::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const APODImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const DescriptionContainer = styled.div`
  background-color: #0000008c;

  @media (min-width: 720px) {
    width: 50%;
  }
`;

const APODImage = styled.img`
  max-height: 25vh;
  object-fit: contain;

  @media (min-width: 720px) {
    max-height: 50vh;
  }
`;

const APODTitle = styled.h1`
  margin: 0;
  text-align: center;
`;

const APODDescription = styled.p`
  margin: 0;
`;

export default APOD;
