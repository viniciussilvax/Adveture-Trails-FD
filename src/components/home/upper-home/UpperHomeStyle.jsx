import { styled } from "@mui/material";

export const MainContainer = styled("div")({
    height: "1024px",
    fontFamily: "Inter",
    color: "#FFFFFF"
})

export const TitleContainer = styled("div")({
    paddingTop: "13.5em",

    h1: {
        fontSize: "40px",
        fontWeight: "600",
        lineHeight: "45px",
        textAlign: "center"
    }
})

export const CommentContainer = styled("div")({
    paddingTop: "3.25em",

    p: {
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "24px",
        letterSpacing: "1%",
        textAlign: "center"
    }
})

export const BtnContainer = styled("div")({
    paddingTop: "3.25em",
    textAlign: "center",

    button: {
        backgroundColor: "#504908",
        color: "#FFFFFF",
        border: "none",
        width: "hug(151px)",
        height: "hug(40px)",
        padding: "8px 16px 8px 16px",
        borderRadius: "4px",
        fontSize: "14px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all .1s ease-in-out",

        '&:hover': {
            transform: "scale(1.2)"
        }
    }

})

