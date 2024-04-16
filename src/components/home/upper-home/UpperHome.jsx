import { useNavigate } from "react-router-dom";
import MainTrailImage from "../../../assets/images/main-trail-image.png"

import { BtnContainer, CommentContainer, MainContainer, TitleContainer } from "./UpperHomeStyle";


export default function UpperHome() {
    
    const navigate = useNavigate()
    
    return (
        <MainContainer style={{ background: `url(${MainTrailImage}) no-repeat center`, backgroundSize: "cover" }}>
            <TitleContainer>
                <h1>Que tal aproveitar um tempo</h1>
                <h1>com a natureza?</h1>
            </TitleContainer>
            <CommentContainer>
                <p>Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas</p>
                <p>aventuras e inspire-se com as experiências de outros aventureiros.</p>
                <p>Prepare-se para explorar novos horizontes e se conectar com a natureza </p>
                <p>através do Adventure Trails!</p>
            </CommentContainer>
            <BtnContainer>
                <button
                onClick={() => navigate('/explorar-trilhas')}
                >Explorar trilhas</button>
            </BtnContainer>
        </MainContainer>
    )
}
