import { FooterContainer, IconFooterContainer, LinkTo } from "./FooterStyle";
import GitHubLogo from "../../assets/icons/github-logo.png"
import InstagramLogo from "../../assets/icons/instagram-logo.png"
import LinkedinLogo from "../../assets/icons/linkedin-logo.png"

export default function Footer() {
    return (
        <FooterContainer>
            <div>
                Adveture Trails FD
            </div>
            <IconFooterContainer>
                <LinkTo to="" target="_blank">
                    <img src={GitHubLogo} alt="githublogo" />
                </LinkTo>
                <LinkTo to="" target="_blank">
                    <img src={InstagramLogo} alt="instranlogo" />
                </LinkTo>
                <LinkTo to="" target="_blank">
                    <img src={LinkedinLogo} alt="linkdinlogo" />
                </LinkTo>
            </IconFooterContainer>
        </FooterContainer>
    )
}