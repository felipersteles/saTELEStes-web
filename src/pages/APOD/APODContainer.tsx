import { useCallback, useEffect, useState } from "react";
import { Button, PageContainer, colors } from "../../style";
import { useNavigate } from "react-router-dom";
import { NasaApodResponse } from "../../types";
import { NasaService } from "../../apis";
import NotFound from "../../components/NotFound";
import styled from "styled-components";
import APODList from "./APODList";

const APODContainer = () => {
  const navigate = useNavigate();

  const [photoData, setPhotoData] = useState<NasaApodResponse[]>();
  const [date, setDate] = useState<string>("");
  // const [selectedPhoto, setSelectedPhoto] = useState<NasaApodResponse>();
  const [isLoading, setIsLoading] = useState(true);

  const handleDateChange = (e: any) => {
    setDate(e.target.value);
  };

  const searchImage = () => {
    if (date !== "") console.log(date);
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
      {photoData && (
        <APODListContainer>
          <Title>Astronomy Picture of Day</Title>
          <APODList isLoading={isLoading} data={photoData} />
          <ButtonArea>
            <DatePicker>
              <DatePickerContainer>
                <DateLabel>Start:</DateLabel>
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={handleDateChange}
                />
              </DatePickerContainer>
              <DatePickerContainer>
                <DateLabel>End:</DateLabel>
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={handleDateChange}
                />
              </DatePickerContainer>
              <SearchButton onClick={searchImage}>Search</SearchButton>
            </DatePicker>

            <BackButton onClick={() => navigate("/")}>Back to home</BackButton>
          </ButtonArea>
        </APODListContainer>
      )}
      {!photoData && !isLoading && <NotFound />}
    </PageContainer>
  );
};

const Title = styled.h1`
  color: ${colors.branco};
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;

  @media (min-width: 720px) {
    -webkit-text-stroke-width: 1px;
    font-size: 25px;
  }

  @media (min-width: 900px) {
    font-size: 60px;
    margin: 25px 10px 0;
  }
`;

const APODListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DateLabel = styled.label`
  font-size: 20px;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: black;
`;

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const DatePicker = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 720px) {
    flex-direction: row;
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

const SearchButton = styled(Button)``;

const BackButton = styled(Button)`
  margin-top: 20px;

  @media (min-width: 720px) {
    margin-top: 30px;
  }
`;

export default APODContainer;
