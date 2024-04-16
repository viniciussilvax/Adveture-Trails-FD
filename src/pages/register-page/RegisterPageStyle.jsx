import { styled } from "@mui/material"

export const RegisterContainer = styled('div')({
    height: "1024px",
    backgroundColor: "#d5e2d3",
    display: "flex",
    justifyContent: "center",
    paddingTop: "121px",
})



export const TitleRegister = styled("div")({
    fontFamily: "Inter",
    fontSize: "32px",
    fontWeight: "600",
    lineHeight: "30px",
    textAlign: "center",
    color: "#000000",

    padding: "0px 0px 40px 0px",
})

export const InputContainer = styled('div')({
    display: "flex",
    flexDirection: "column",

    paddingBottom: "12px",

    label: {
        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
        textAlign: "left",

        paddingBottom: "8px",
    },

    input: {
        height: "40px",
        padding: "8px 16px 8px 16px",
        gap: "10px",
        borderRadius: "4px",
        border: "1px solid #AEB3B7",

        marginBottom: "8px",
        marginRight: "20px",

        background: "transparent",

    },

    select: {
        height: "40px",
        padding: "8px 16px 8px 16px",
        gap: "10px",
        borderRadius: "4px",
        border: "1px solid #AEB3B7",

        color: " #AEB3B7",

        marginBottom: "8px",
        marginRight: "20px",

        background: "transparent",

    }
})

export const InputDoubleContainer = styled('div')({
    display: "flex",
    flexDirection: "row",
})

export const ButtonsContainer = styled('div')({
    display: "flex",
    columnGap: "14px",
    paddingTop: "20px",
})

export const Button = styled('button')({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
    height: "40px",
    padding: "8px 16px 8px 16px",
    borderRadius: "4px",

    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "24px",
    

    cursor: "pointer",

    transition: "all .1s ease-in-out",

    '&:hover': {
        transform: "scale(1.1)"
    }
})
