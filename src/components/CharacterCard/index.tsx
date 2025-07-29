import { useContext, type FC } from "react";
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
import { ThemeContext } from "../../ThemeContext";

const CharacterCard: FC<IProps> = ({
  name,
  image,
  jutsu,
  birthdate,
  debut,
  clan,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card>
      <ImageCard src={image} alt={name} />
      <Description>
        <CharacterName theme={theme}>{name}</CharacterName>
        <DescriptionHolder>
          <DescriptionLeftSide>
            <DescriptionTitle theme={theme}>Birthdate</DescriptionTitle>
            <DescriptionInfo theme={theme}>{birthdate}</DescriptionInfo>
            <DescriptionTitle theme={theme}>Debut</DescriptionTitle>
            <DescriptionInfo theme={theme}>{debut}</DescriptionInfo>
            <DescriptionTitle theme={theme}>Clan</DescriptionTitle>
            <DescriptionInfo theme={theme}>{clan}</DescriptionInfo>
          </DescriptionLeftSide>
          <DescriptionRightSide>
            <DescriptionTitle theme={theme}>Abilities</DescriptionTitle>
            <DescriptionInfo>
              {jutsu.slice(0, 5).map((ability) => (
                <p key={ability} style={{ marginBottom: "10px" }}>
                  {ability}
                </p>
              ))}
            </DescriptionInfo>
          </DescriptionRightSide>
        </DescriptionHolder>
      </Description>
    </Card>
  );
};

export default CharacterCard;
