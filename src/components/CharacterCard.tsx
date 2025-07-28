import React from 'react'
import styled from 'styled-components'

interface CharCardProps {
  name: string;
  image: string | null;
  jutsu: string[];
}

const Card = styled.div`
 display: flex;
 justify-content: space-between;
`
const ImageCard = styled.img`
    min-width: 300px;
    max-width: 300px;
`

const CharacterCard: React.FC<CharCardProps> = ({ name, image, jutsu }) => {
  return (
    <Card>
        <ImageCard src={image} alt={name}/>
        <div>
            <p>{name}</p>
            <p>{jutsu.slice(0, 5)}</p>
        </div>
    </Card>
  )
}

export default CharacterCard