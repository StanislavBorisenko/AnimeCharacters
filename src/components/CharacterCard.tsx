import React from "react";
import styled from "styled-components";

interface CharCardProps {
  name: string;
  image: string | null;
  jutsu: string[];
  birthdate: number;
  debut: string;
}

const Card = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 50px;
`;
const ImageCard = styled.img`
  min-width: 300px;
  max-width: 300px;
  mix-height: 300px;
  max-height: 300px;
  border-radius: 14px;
`;

const Description = styled.div``;

const DescriptionHolder = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const DescriptionLeftSide = styled.div`
    width: 150px;
`;

const DescriptionRightSide = styled.div``;

const CharacterName = styled.div`
  color: #ebeef5;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const DescriptionTitle = styled.div`
  font-size: 16px;
  margin-bottom: 7px;
`;

const DescriptionInfo = styled.div`
  color: #8e95a9;
  font-size: 14px;
  margin-bottom: 15px;
`;

const CharacterCard: React.FC<CharCardProps> = ({
  name,
  image,
  jutsu,
  birthdate,
  debut,
}) => {
  return (
    <Card>
      <ImageCard src={image} alt={name} />
      <Description>
        <CharacterName>{name}</CharacterName>
        <DescriptionHolder>
          <DescriptionLeftSide>
            <DescriptionTitle>Birthdate</DescriptionTitle>
            <DescriptionInfo>{birthdate}</DescriptionInfo>
            <DescriptionTitle>Debut</DescriptionTitle>
            <DescriptionInfo>{debut}</DescriptionInfo>
          </DescriptionLeftSide>
          <DescriptionRightSide>
            <DescriptionTitle>Abilities</DescriptionTitle>
            <DescriptionInfo>
              {jutsu.slice(0, 5).map((ability) => (
                <p key={ability}>{ability}</p>
              ))}
            </DescriptionInfo>
          </DescriptionRightSide>
        </DescriptionHolder>
      </Description>
    </Card>
  );
};

export default CharacterCard;
