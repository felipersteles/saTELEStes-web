import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NasaService } from "../apis";
import Loading from "../components/Loading";
import { PageContainer, Button, BackButtonContainer } from "../style";
import { NasaMarsHoverPhoto } from "../types";
import { Modal } from "../components/Modal";
import { formatDate } from "../utils/format";

const MarsPhoto = () => {
  const navigate = useNavigate();

  const [marsRoverPhotos, setMarsRoverPhotos] =
    useState<NasaMarsHoverPhoto[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleDateChange = (e: any) => {
    setDate(e.target.value);
  };

  const searchImage = () => {
    if (date !== "") getInSightFromNasaAPI();
  };

  const getInSightFromNasaAPI = useCallback(() => {
    if (date === "") return;

    NasaService.getMarsRoverPhoto(date)
      .then(({ photos }) => {
        setMarsRoverPhotos(photos);
      })
      .finally(() => setIsLoading(false));
  }, [date]);

  return (
    <>
      <Modal show={openModal} setShow={setOpenModal}>
        <SelectedMarsHoverPhoto src={selectedImage} alt="Showing selected" />
      </Modal>

      <PageContainer backgroundImage="https://img.ibxk.com.br/2019/05/17/a-17202525498312.jpg">
        <PageTitle>Imagens capturadas por um viajante em marte</PageTitle>

        <DatePicker>
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleDateChange}
          />
          <Button onClick={searchImage}>Pesquisar</Button>
        </DatePicker>

        <ContentContainer>
          <PhotosContainer>
            {isLoading && <Loading />}
            {!isLoading && (
              <>
                {(!marsRoverPhotos || marsRoverPhotos?.length === 0) && (
                  <NotFound>
                    <h1>Sem fotos para este dia, tente outra data.</h1>
                  </NotFound>
                )}

                {marsRoverPhotos && marsRoverPhotos?.length > 0 && (
                  <PhotosList>
                    {marsRoverPhotos?.map((photo, key) => (
                      <PhotoCard
                        key={key}
                        onClick={() => {
                          setSelectedImage(photo?.img_src);
                          setOpenModal(true);
                        }}
                      >
                        <MarsHoverPhoto
                          src={photo?.img_src}
                          alt={photo?.camera?.full_name}
                        />
                        <MarsHoverInfo>
                          <>Nome do viajante: {photo?.rover?.name}</>
                          <div>
                            <div>
                              Nome da camera: {photo?.camera?.full_name}
                            </div>
                            <div>
                              Lançamento do viajante:
                              {" " + formatDate(photo?.rover?.launch_date)}
                            </div>
                          </div>
                        </MarsHoverInfo>
                      </PhotoCard>
                    ))}
                  </PhotosList>
                )}
              </>
            )}
          </PhotosContainer>
        </ContentContainer>

        <BackButtonContainer>
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </BackButtonContainer>
      </PageContainer>
    </>
  );
};

const DatePicker = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 12px;
`;

const PageTitle = styled.h1`
  text-align: center;
`;

const NotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;

  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhotosContainer = styled.div`
  height: 60vh;
  width: 90vw;
  border: 1px solid #5b26ff;
`;

const PhotosList = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;

  &&::-webkit-scrollbar {
    display: none;
  }
`;

const PhotoCard = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 1rem 0.5em;
  width: 100%;
  height: 20%;
  background-color: #0000008c;
  cursor: pointer;
`;

const MarsHoverPhoto = styled.img`
  max-height: 15vh;
  max-width: 15vh;
`;

const MarsHoverInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SelectedMarsHoverPhoto = styled.img`
  max-height: 60vh;
  max-width: 85vw;
`;

export default MarsPhoto;
