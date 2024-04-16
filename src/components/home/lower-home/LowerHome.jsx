import { BtnContainer } from "../upper-home/UpperHomeStyle";
import { ContentContainer, LowContententContainer, LowerTitleBtnContainer, LowerTitleContainer, MainContainer, MainLowerHomeImageContainer, TitleContainer } from "./LowerHomeStyle";
import MainLowerHomeImage from "../../../assets/images/main-2nd-image.png"
import { useNavigate } from "react-router-dom";


export default function LowerHome() {
    const navigate = useNavigate()
    
    return (
        <MainContainer>
            <div>
                <TitleContainer>
                    Explore trilhas incríveis
                </TitleContainer>
                <ContentContainer>
                    O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.
                </ContentContainer>
                <BtnContainer>
                    <button
                    onClick={()=>navigate('/explorar-trilhas')}
                    >Explorar trilhas</button>
                </BtnContainer>
            </div>
            <LowContententContainer>
                <LowerTitleBtnContainer>
                    <LowerTitleContainer>
                        Compartilhe fotos, dicas e localização das suas trilhas favoritas
                    </LowerTitleContainer>
                    <BtnContainer style={{
                        textAlign: "left"}}>
                        <button
                        onClick={()=>navigate('/cadastrar-nova-trilha')}
                        >Cadastrar nova trilha</button>
                    </BtnContainer>
                </LowerTitleBtnContainer>
                <MainLowerHomeImageContainer>
                    <img src={MainLowerHomeImage} alt="" />
                </MainLowerHomeImageContainer>
            </LowContententContainer>
        </MainContainer>
    )
}