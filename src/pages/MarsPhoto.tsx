import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NasaService } from "../apis";
import Loading from "../components/Loading";
import { PageContainer, Button, BackButtonContainer } from "../style";
import { NasaMarsHoverPhoto } from "../types";

const MarsPhoto = () => {
  const navigate = useNavigate();

  const [marsRoverPhotos, setMarsRoverPhotos] =
    useState<NasaMarsHoverPhoto[]>();
  const [isLoading, setIsLoading] = useState(true);

  const getInSightFromNasaAPI = useCallback(() => {
    NasaService.getMarsRoverPhoto("2015-6-3")
      .then(({ photos }) => {
        setMarsRoverPhotos(photos);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(getInSightFromNasaAPI, [getInSightFromNasaAPI]);

  return (
    <>
      {!isLoading && (
        <PageContainer backgroundImage="https://img.ibxk.com.br/2019/05/17/a-17202525498312.jpg">
          <PageTitle>
            {marsRoverPhotos
              ? "Imagens capturadas por um viajante em marte"
              : "Erro 404"}
          </PageTitle>
          
          {marsRoverPhotos && marsRoverPhotos?.length > 0 && (
            <PhotoContainer>
              {marsRoverPhotos?.map((photo, key) => (
                <PhotoCard key={key}>
                  <MarsHoverPhoto
                    src={photo?.img_src}
                    alt={photo?.camera?.full_name}
                  />

                  <PhotoDescriptionContainer>
                    <PhotoCameraTitle>
                      {photo?.camera?.full_name}
                    </PhotoCameraTitle>
                    <PhotoCameraInfo>Sol number: {photo?.sol}</PhotoCameraInfo>
                    <PhotoCameraInfo>
                      Id do viajante: {photo?.rover?.id}
                    </PhotoCameraInfo>
                  </PhotoDescriptionContainer>
                </PhotoCard>
              ))}
            </PhotoContainer>
          )}

          <BackButtonContainer>
            <Button onClick={() => navigate("/")}>Voltar</Button>
          </BackButtonContainer>
        </PageContainer>
      )}

      {isLoading && <Loading />}
    </>
  );
};

const PageTitle = styled.h1`
  text-align: center;
`;

const PhotoContainer = styled.div`
  height: 100%;
`;

const PhotoCard = styled.div`
  display: flex;
  padding: 8px; 4px;

  background-color: #0000008c;
`;

const PhotoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const PhotoCameraTitle = styled.h4`
  margin: 0;
`;

const PhotoCameraInfo = styled.h4`
  margin-top: 4px;
  margin-bottom: 0;
`;

const MarsHoverPhoto = styled.img`
  max-height: 15vh;
`;

export default MarsPhoto;
