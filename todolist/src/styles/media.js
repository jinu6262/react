const medieaQurey = (maxWidth) => `@media (max-width:${maxWidth}px)`;

const size = {
    mobileS: 375,
    mobileM: 568,
    mobileL: 768,
    tablet: 1024,
    desktopS: 1280,
    desktopM: 1440,
    desktopL: 1920,
};
export const {
    mobileS,
    mobileM,
    mobileL,
    tablet,
    desktopS,
    desktopM,
    desktopL,
} = size;

export const media = {
    mobileS: medieaQurey(mobileS),
    mobileM: medieaQurey(mobileM),
    mobileL: medieaQurey(mobileL),
    tablet: medieaQurey(tablet),
    desktopS: medieaQurey(desktopS),
    desktopM: medieaQurey(desktopM),
    desktopL: medieaQurey(desktopL),
    custom: (maxWidth) => medieaQurey(maxWidth), //객체 안에 함수를 넣은 것
};
