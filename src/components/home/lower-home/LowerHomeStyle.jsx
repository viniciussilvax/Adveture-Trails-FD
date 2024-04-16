import { styled } from "@mui/material";

export const MainContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    padding: "7.8em 5.9em 10.2em 5.1em",

    '@media(max-width: 1300px)' : {
        textAlign: "center"
    }

})

export const TitleContainer = styled("div")({
    fontFamily: "Montserrat",
    fontSize: "48px",
    fontWeight: "400",
    lineHeight: "72px",
    letterSpacing: "-0.015em",
    textAlign: "left",
    paddingBottom: "51px",

})

export const ContentContainer = styled("div")({
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "30px",
    letterSpacing: "-0.015em",
    textAlign: "left"
})

export const LowContententContainer = styled("div")({
    display: "flex",

    paddingTop: "7.1em",

    '@media(max-width: 1300px)' : {
        flexDirection: "column",
    }
})

export const LowerTitleBtnContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",


    '@media(max-width: 1300px)' : {
        alignItems: "center",
        textAlign: "center"
    }
})

export const LowerTitleContainer = styled("div")({
    fontFamily: "Montserrat, sans-serif",
    fontSize: "48px",
    fontWeight: "400",
    lineHeight: "72px",
    letterSpacing: "-0.015em",
    textAlign: "left",

    alignSelf: "first baseline",
    
    paddingRight: "5.6em",

 
})

export const MainLowerHomeImageContainer = styled("div")({

    '@media(max-width: 1300px)' : {
        paddingTop: "50px",
    } ,

    img: {
        border: "1.4px solid green",

    }

})
