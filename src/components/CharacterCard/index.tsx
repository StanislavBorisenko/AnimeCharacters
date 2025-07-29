import { type FC } from "react";
import {
  Card,
  CharacterName,
  Description,
  DescriptionHolder,
  DescriptionInfo,
  DescriptionLeftSide,
  DescriptionRightSide,
  DescriptionTitle,
  ImageCard,
  type IProps,
} from "./styles";

const CharacterCard: FC<IProps> = ({
  name,
  image,
  jutsu,
  birthdate,
  debut,
  clan,
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
            <DescriptionTitle>Clan</DescriptionTitle>
            <DescriptionInfo>{clan}</DescriptionInfo>
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
