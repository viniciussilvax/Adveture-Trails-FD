import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderContainer = styled('main')({
    height: "80px",
    backgroundColor: "#504908",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.125em 5.25em"
})

export const LogoContainer = styled('div')({
    fontFamily: "Comfortaa",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "17.84px",
    letterSpacing: "-0.015em",
    textAlign: "center"
})

export const Logo = styled(Link)({
    textDecoration: "none",
    color: "#FFFFFF"
})

export const LinkTo = styled(Link)({
    fontFamily: "Comfortaa",
    color: "#FFFFFF",
    textDecoration: "none",
    marginLeft: "30px",
    fontWeight: "400",
    letterSpacing: "1.5%",
    cursor: "pointer",
    transition: "all .1s ease-in-out",
    fontSize:"16px",
    lineHeight: "17.84px",
    letterSpacing: "-0.015em",

    '&:hover': {
        transform: "scale(1.2)"
    }
})