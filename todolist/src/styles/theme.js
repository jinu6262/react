// 색상
const palette = {
    primary: {
        100: "#brdeee",
        200: "#9dcde7",
        300: "#3aa5dd",
    },
    subColor: {
        100: "#ebf1f4",
    },
    gray: {
        100: "#e9e9e9",
        200: "#d9d9d9",
        300: "#656565",
    },
};

//폰트 크기
const fontSize = {
    small: "14px",
    medium: "16px",
    large: "18px",
    xLarge: "24px",
    xxLarge: "32px",
};

//굵기
const fontWeight = {
    thin: "100",
    regular: "400",
    medium: "500",
    bold: "800",
};

//행간
const lineHeight = {
    small: "16px",
    medium: "20px",
    large: "24px",
    xLarge: "28px",
};

export const theme = {
    palette,
    fontSize,
    fontWeight,
    lineHeight,
};
// ex) theme.palette.primary[300] = "#3aa5dd"
