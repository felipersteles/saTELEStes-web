import styled from "styled-components";
import { NasaApodResponse } from "../../types";
import { Button, colors } from "../../style";
import { formatDate, limitString } from "../../utils/format";

type APODParams = {
  data: NasaApodResponse;
  unselectApod: () => void;
};

const APOD = ({ data, unselectApod }: APODParams) => {
  const limit = window.innerWidth < 720 ? 41 : 100;

  return (
    <APODContainer>
      <Image src={data.url} alt="astronomy pic of the day" />
      <Description>
        <Intro>
          <Date>{formatDate(data.date)}</Date>
          <By>
            By: <Date>{limitString(data.copyright, limit)}</Date>
          </By>
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

const Description = styled.div`
  padding: 10px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 720px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const By = styled.span`
  font-size: 18px;

  @media (min-width: 720px) {
    color: ${colors.purpleWhite};
  }
`;

const Date = styled.span`
  color: ${colors.purpleWhite};
  font-size: 18px;

  @media (min-width: 720px) {
    font-size: 20px;
  }
`;

const Essay = styled.p`
  @media (min-width: 720px) {
    font-size: 25px;
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
