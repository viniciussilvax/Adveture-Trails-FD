import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const FooterContainer = styled('div')({
    height: "60px",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#504908",
    color:"#FFFFFF",
    fontFamily: "Comfortaa",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "17.84px",
    letterSpacing: "-0.015em",
    
    padding: "0em 5.25em"

})

export const IconFooterContainer = styled("div")({
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100px",

    img: {        
        transition: "all .1s ease-in",

        '&:hover': {
            transform: "scale(1.2)"
        }
    }
    
})

export const LinkTo = styled(Link)({
    textDecoration: "none"
})
