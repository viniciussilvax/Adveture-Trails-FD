import { styled } from "@mui/material"

export const CardTrailsContainer = styled("div")({
    position: "relative",
    
    width: "960px",
    height: "351px",

    display: "flex",

    boxShadow: "0px 4px 4px 0px #00000040",

    '@media (max-width: 1000px)': {
        flexDirection: "column",
        width: "500px",
        height: "800px",
    }
})

export const CardTrailsImage = styled("img")({
    width: "400px",
    height: "351px",
    minWidth: "400px",
    minHeight: "351px",

    '@media (max-width: 1000px)': {
        width: "500px",
        height: "400px",
        minWidth: "500px",
        minHeight: "400px",
    }
})

export const CardContainer = styled("div")({
    width: "100%",
})

export const FavoriteIconPosition = styled("div")({
    position: "absolute",
    top: "36px",
    right: "27px",

    '@media (max-width: 1000px)': {
        right: "10px",
        top: "59%",
    } 
})


export const CardTrailTitle = styled("div")({
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "25px",
    textTransform: "capitalize",

    padding: "32px 0px 24px 32px" 
})

export const CardTrailSeparator = styled("div")({
    width: "40px",
    border: "1px solid #AEB3B7",

    marginLeft: "32px",
})

export const CardTrailCreator = styled("div")({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "20px",
    textAlign: "right",
    textTransform: "capitalize",

    padding: "24px 32px 24px 0px",
})


export const InformationContainer = styled('div')({
    fontFamily: "Inter", 
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.01em",
    textAlign: "left",

    color:"#5C6670",

    padding: "0px 0px 24px 32px",

    div: {
        marginBottom: "8px",
    }
})

export const Difficulty = styled('p')({
    width: "120px",
    height: "24px",
    padding: "6px 8px 6px 8px",
    borderRadius: "32px",

    fontFamily: "Inter",
    fontWeight: "600",
    size: "12px",
    lineHeight: "12px",
    textAlign: "center",
    backgroundColor:"#EFF0F0",
    color:"#0D1A26",

    marginLeft: "32px",
})

export const Rating = styled('div')({
    display: "flex",
    padding: "24px 0px 37px 32px",
})


export const RatingTitle = styled('div')({
    fontFamily: "Inter", 
    color: "#0D1A26",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "22px",
    textAlign: "left",
    textDecoration: "underline",

    padding: "7px 0px 7px 16px",
})

