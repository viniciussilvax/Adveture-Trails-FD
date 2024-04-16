import { ExplorerPageCardContainer, ExplorerTrailContainer, ExplorerTrailsTitle } from "./ExplorerPageStyle";
import ExplorerTrailsImage from "../../assets/images/explorer-trails-image.png"

import {globalContext} from "../../context/globalContext"
import CardTrails from "../../components/cards/CardTrails"
import { useContext } from "react";

export default function ExplorerPage() {
    const {trails} = useContext(globalContext)
    
    return (
        <div>
            <figure style={{
                background: `url(${ExplorerTrailsImage}) no-repeat center`,
                backgroundSize: "cover",
                height: "343px"
            }} />
            <ExplorerTrailContainer>
            <ExplorerTrailsTitle>Explore trilhas incríveis</ExplorerTrailsTitle>
            <ExplorerPageCardContainer>
            {trails?.map((trail, index)=>{
                        return (
                            <CardTrails
                            key={index}
                            trail={trail}
                            />
                        )
                    })}
            </ExplorerPageCardContainer>
            </ExplorerTrailContainer>
        </div>
    )
}