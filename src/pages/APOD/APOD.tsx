import styled from "styled-components";
import { NasaApodResponse } from "../../types";
import { Button, colors } from "../../style";
import { formatDate } from "../../utils/format";

type APODParams = {
  data: NasaApodResponse;
  unselectApod: () => void;
};

const APOD = ({ data, unselectApod }: APODParams) => {
  return (
    <APODContainer>
      <Image src={data.url} alt="astronomy pic of the day" />
      <Title>{data.title}</Title>
      <Description>
        <Intro>
          <Date>{formatDate(data.date)}</Date>
          <Date>{data.copyright}</Date>
        </Intro>

        <Essay>{data.explanation}</Essay>
      </Description>
      <ButtonArea>
        <BackButton onClick={unselectApod}>Back</BackButton>
      </ButtonArea>
    </APODContainer>
  );
};

const APODContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background-color: ${colors.greenOpacity};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Image = styled.img`
  margin-top: 5vw;
  width: 90vw;
  height: auto;
`;

const Title = styled.h1`
  text-align: center;

  -webkit-text-stroke-color: black;

  @media (min-width: 720px) {
    font-size: 35px;
  }
`;

const Description = styled.div`
  padding: 10px;
`;

const Intro = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Date = styled.span`
  color: ${colors.purpleWhite};

  @media (min-width: 720px) {
    font-size: 20px;
  }
`;

const Essay = styled.p`
  @media (min-width: 720px) {
    font-size: 22px;
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
  margin-bottom: 80px;
  @media (min-width: 720px) {
    margin-top: 30px;
  }
`;

export default APOD;
