import styled from "styled-components";
import { NasaApodResponse } from "../../types";
import { formatDate, limitString } from "../../utils/format";
import { colors } from "../../style";

type APODCardParams = {
  data: NasaApodResponse;
};

const APODCard = ({ data }: APODCardParams) => {
  const limitTitle = window.innerWidth < 720 ? 20 : 100;
  const limitCopyright = window.innerWidth < 720 ? 35 : 100;

  return (
    <APODCardContainer>
      <Image src={data.url} alt="Apod image" />
      <Description>
        <TitleBox>
          <Title>{data.title && limitString(data.title, limitTitle)}</Title>
          <Date>{formatDate(data.date, true)}</Date>
        </TitleBox>

        <Copyright>
          {data.copyright &&
            "By: " + limitString(data.copyright, limitCopyright)}
        </Copyright>
      </Description>
    </APODCardContainer>
  );
};

const APODCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  background-color: #000;
  padding: 5px 5px;
  border-radius: 5px;
  cursor: pointer;

  @media (min-width: 720px) {
    width: 700px;
    padding: 10px 10px;
  }

  @media (min-width: 900px) {
    width: 900px;
    padding: 15px 15px;
  }
`;

const Image = styled.img`
  flex: 1;
  width: 50px;
  height: 50px;
  border-radius: 2px;

  @media (min-width: 720px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 900px) {
    width: 110px;
    height: 110px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
`;

const Title = styled.span`
  color: ${colors.purpleWhite};
  font-size: 18px;

  @media (min-width: 720px) {
    font-size: 20px;
  }

  @media (min-width: 900px) {
    font-size: 22px;
  }
`;

const Date = styled.span`
  color: ${colors.purpleWhite};
  font-size: 12px;

  @media (min-width: 720px) {
    font-size: 14px;
  }

  @media (min-width: 900px) {
    font-size: 16px;
  }
`;

const Copyright = styled.span`
  font-size: 15px;

  @media (min-width: 720px) {
    font-size: 17px;
  }

  @media (min-width: 900px) {
    font-size: 19px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  flex: 5;
`;

export default APODCard;
