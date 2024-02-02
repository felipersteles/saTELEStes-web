import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NasaService } from "../apis";
import Loading from "../components/Loading";
import { PageContainer, Button, BackButtonContainer } from "../style";
import { NasaMarsHoverPhoto } from "../types";
import { Modal } from "../components/Modal";
import { formatDate } from "../utils/format";
import MarsParticles from "../components/MarsParticles";

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

    setIsLoading(true);

    NasaService.getMarsRoverPhoto(date)
      .then(({ photos }) => {
        // console.log(photos);
        setMarsRoverPhotos(photos);
      })
      .finally(() => setIsLoading(false));
  }, [date]);

  return (
    <>
      <MarsParticles />

      <Modal show={openModal} setShow={setOpenModal}>
        <SelectedMarsHoverPhoto src={selectedImage} alt="Showing selected" />
      </Modal>

      <Container>
        <PageTitle>Mars Rover Photos</PageTitle>

        <DatePicker>
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleDateChange}
          />
          <Button onClick={searchImage}>Search</Button>
        </DatePicker>

        <ContentContainer>
          <PhotosContainer>
            {isLoading && <Loading />}
            {!isLoading && (
              <>
                {(!marsRoverPhotos || marsRoverPhotos?.length === 0) && (
                  <NotFound>
                    <h1>No pictures found in this day. Try another.</h1>
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
                          <>Rover: {photo?.rover?.name}</>
                          <div>
                            <div>Camera: {photo?.camera?.full_name}</div>
                            <div>
                              Launch:
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

        <ButtonContainer>
          <Button onClick={() => navigate("/")}>Back to home</Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

const Container = styled(PageContainer)`
  z-index: 100;
`;

const DatePicker = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 12px;
  z-index: 999;
`;

const PageTitle = styled.h1`
  text-align: center;
  z-index: 999;
`;

const NotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  z-index: 999;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
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

const ButtonContainer = styled(BackButtonContainer)`
  margin-top: 20px;
`;

const SelectedMarsHoverPhoto = styled.img`
  max-height: 60vh;
  max-width: 85vw;
`;

export default MarsPhoto;
