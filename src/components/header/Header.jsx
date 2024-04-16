import { HeaderContainer, LogoContainer, Logo, LinkTo } from "./HeaderStyle";

export default function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo to="/">Adveture Trails</Logo>
            </LogoContainer>
            <div style={{ display: "flex" }}>
                <LinkTo to="/explorar-trilhas" >Explorar Trilhas</LinkTo>
                <LinkTo to="/cadastrar-nova-trilha" >Cadastrar Trilhas</LinkTo>
            </div>
        </HeaderContainer>
    )
}