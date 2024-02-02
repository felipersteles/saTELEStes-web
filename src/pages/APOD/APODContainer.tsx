import { useCallback, useEffect, useState } from "react";
import { Button, PageContainer, colors } from "../../style";
import { useNavigate } from "react-router-dom";
import { NasaApodResponse } from "../../types";
import { NasaService } from "../../apis";
import NotFound from "../../components/NotFound";
import styled from "styled-components";
import APODList from "./APODList";
import Loading from "../../components/Loading";
import APOD from "./APOD";

const APODContainer = () => {
  const navigate = useNavigate();

  const [photoData, setPhotoData] = useState<NasaApodResponse[]>();
  const [selectedPhoto, setSelectedPhoto] = useState<NasaApodResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  const selectApod = (apod: NasaApodResponse) => {
    setSelectedPhoto(apod);
  };

  const unselectApod = () => {
    setSelectedPhoto(null);
  };

  const getPhotoFromNasaAPI = useCallback(() => {
    NasaService.get5DaysAPODs()
      .then((res) => {
        setPhotoData(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(getPhotoFromNasaAPI, [getPhotoFromNasaAPI]);

  return (
    <PageContainer backgroundImage="https://img.ibxk.com.br/2019/05/17/a-17202525498312.jpg">
      {!selectedPhoto && photoData && (
        <APODListContainer>
          <Title>Astronomy Picture of Day</Title>
          <APODList data={photoData} selectData={selectApod} />
          <ButtonArea>
            <BackButton onClick={() => navigate("/")}>Back to home</BackButton>
          </ButtonArea>
        </APODListContainer>
      )}
      {selectedPhoto && (
        <APOD data={selectedPhoto} unselectApod={unselectApod} />
      )}
      {isLoading && <Loading />}
      {!photoData && !isLoading && <NotFound />}
    </PageContainer>
  );
};

const Title = styled.h1`
  color: ${colors.branco};
  -webkit-text-stroke-color: black;
  text-align: center;
  font-family: "Catamaran";

  @media (min-width: 720px) {
    font-size: 28px;
  }

  @media (min-width: 900px) {
    font-size: 65px;
    margin: 25px 10px 0;
  }
`;

const APODListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 720px) {
    width: 700px;
  }
`;

const BackButton = styled(Button)`
  margin: 20px 0 120px;

  @media (min-width: 720px) {
    margin-top: 30px;
    width: 300px;
    height: 50px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export default APODContainer;
