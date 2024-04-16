import { CardContainer, CardTrailCreator, CardTrailSeparator, CardTrailTitle, CardTrailsContainer, CardTrailsImage, Difficulty, FavoriteIconPosition, InformationContainer, Rating, RatingTitle } from "./CardTrailsStyle";
import FavoriteIcon from "../../assets/icons/favoriteIcon"
import StairIconOn from "../../assets/icons/stairIconOn"
import StairIconOff from "../../assets/icons/stairIconOff"

export default function CardTrails({trail}) {
    return (
        <CardTrailsContainer>
            <CardTrailsImage src={trail.imageUrl} alt={trail.name} />
            <CardContainer>
                <FavoriteIconPosition>
                    <FavoriteIcon />
                </FavoriteIconPosition>
                <CardTrailTitle>{trail.name} - {trail.city} / {trail.state}</CardTrailTitle>
                <CardTrailSeparator />
                <CardTrailCreator>
                    Por: {trail.created}
                </CardTrailCreator>
                <InformationContainer>
                    <div>Duração: {trail.duration} min</div>
                    <div>Trajeto: {trail.distance} km</div>
                </InformationContainer>
                <Difficulty>{trail.difficulty}!</Difficulty>
                <Rating>
                    <div>
                        <StairIconOn />
                        <StairIconOn />
                        <StairIconOn />
                        <StairIconOn />
                        <StairIconOff />
                    </div>
                    <RatingTitle>
                        Avaliações
                    </RatingTitle>
                </Rating>
            </CardContainer>
        </CardTrailsContainer>
    )
}