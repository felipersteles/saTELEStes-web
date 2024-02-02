import styled from "styled-components";
import { NasaApodResponse } from "../../types";
import APODCard from "./APODCard";

type APODListParams = {
  data: NasaApodResponse[];
  selectData: (apod: NasaApodResponse) => void;
};

const APODList = ({ data, selectData }: APODListParams) => {
  return (
    <APODListContainer>
      {data
        .slice(0)
        .reverse()
        .map((d, key) => (
          <APODCard key={key} data={d} selectData={selectData} />
        ))}
    </APODListContainer>
  );
};

const APODListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media (min-width: 720px) {
    margin-top: 50px;
    align-items: center;
  }
`;

export default APODList;
