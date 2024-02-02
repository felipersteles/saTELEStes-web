import styled from "styled-components";
import { NasaApodResponse } from "../../types";
import APODCard from "./APODCard";
import Loading from "../../components/Loading";

type APODListParams = {
  data: NasaApodResponse[];
  isLoading: boolean;
};

const APODList = ({ data, isLoading }: APODListParams) => {
  return (
    <APODListContainer>
      {data
        .slice(0)
        .reverse()
        .map((d, key) => (
          <APODCard key={key} data={d} />
        ))}
      {isLoading && <Loading />}
    </APODListContainer>
  );
};

const APODListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-height: 700px) {
    height: 400px;
  }

  @media (min-width: 720px) {
    margin-top: 50px;
    align-items: center;
    height: 600px;
  }
`;

export default APODList;
