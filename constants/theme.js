import { Dimensions } from "react-native"
const {width,height}  =Dimensions.get("window")

export const COLORS={
    primary:"#fc603f",
    secondary:"#cdcd02",

    black:"#000000",
    white:"#ffffff",


    ligthGray:"#f5f5f6",
    ligthGray2:"#f6f6f7",
    ligthGray3:"#efeff1",
    ligthGray4:"#f8f8f9",
    transparent:"transparent",
    darkgray:"#898c95",
}


export const SIZES={
    base:0,
    font:14,
    radius:30,
    padding:10,
    padding2:12,

    largeTitle:50,
    h1:30,
    h2:22,
    h3:20,
    h4:18,
    h5:16,
    h6:14,

    body1:30,
    body2:20,
    body3:16,
    body4:14,
    body5:12,

}

export const FONTS={
   largeTitle: {fontFamily:'Source Code Pro',fontSize:SIZES.largeTitle,lineHeight:40},
   h1:{fontFamily:'Source Code Pro',fontSize:SIZES.h1,lineHeight:36},
   h2:{fontFamily:'Source Code Pro',fontSize:SIZES.h2,lineHeight:30},
   h3:{fontFamily:'Source Code Pro',fontSize:SIZES.h3,lineHeight:22},
   h4:{fontFamily:'Source Code Pro',fontSize:SIZES.h4,lineHeight:22},
   body1:{fontFamily:'Source Code Pro',fontSize:SIZES.body1,lineHeight:36},
   body2:{fontFamily:'Source Code Pro',fontSize:SIZES.body2,lineHeight:30},
   body3:{fontFamily:'Source Code Pro',fontSize:SIZES.body3,lineHeight:22},
   body4:{fontFamily:'Source Code Pro',fontSize:SIZES.body4,lineHeight:22},
   body5:{fontFamily:'Source Code Pro',fontSize:SIZES.body5,lineHeight:22},
}

const appTheme={COLORS,SIZES,FONTS}

export default appTheme