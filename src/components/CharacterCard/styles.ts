import styled from "styled-components";

export interface IProps {
  name: string;
  image: string | null;
  jutsu: string[];
  birthdate: number;
  debut: string;
  clan: string;
}

export const Card = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 50px;
`;
export const ImageCard = styled.img`
  min-width: 300px;
  max-width: 300px;
  min-height: 250px;
  max-height: 300px;
  border-radius: 14px;
`;

export const Description = styled.div``;

export const DescriptionHolder = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const DescriptionLeftSide = styled.div`
  width: 150px;
`;

export const DescriptionRightSide = styled.div``;

export const CharacterName = styled.div`
  color: #ebeef5;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const DescriptionTitle = styled.div`
  font-size: 12px;
  color: #8e95a9;
  margin-bottom: 7px;
`;

export const DescriptionInfo = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
`;