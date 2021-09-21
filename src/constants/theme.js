import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
    // primary colors
    black: '#040415',
    white: '#FFFFFF',
    white2: '#BFBFBF',
    orange: '#FD371F',
    orange2: '#FF844B',
    grey: '#7F7F7F',
    green: '#65CF58',
    lightPink: '#f4e5e1',
    navyBlue: '#161626',

    // SPECIAL COLORS
    // orange
    CustomOrange: '#F15223',
    CustomOrange1: 'rgba(241, 82, 35, 0.8)',
    CustomOrange2: 'rgba(241, 82, 35, 0.6)',
    CustomOrange3: 'rgba(241, 82, 35, 0.4)',
    CustomOrange4: 'rgba(241, 82, 35, 0.2)',
    CustomOrange5: 'rgba(241, 82, 35, 0.1)',

    // Purple
    CustomPurple: '#5041AB',
    CustomPurple1: 'rgba(80, 65, 171, 0.8)',
    CustomPurple2: 'rgba(80, 65, 171, 0.6)',
    CustomPurple3: 'rgba(80, 65, 171, 0.4)',
    CustomPurple4: 'rgba(80, 65, 171, 0.2)',
    CustomPurple5: 'rgba(80, 65, 171, 0.1)',

    // Black
    CustomBlack: '#040415',
    CustomBlack1: 'rgba(4, 4, 21, 0.8)',
    CustomBlack2: 'rgba(4, 4, 21, 0.6)',
    CustomBlack3: 'rgba(4, 4, 21, 0.4)',
    CustomBlack4: 'rgba(4, 4, 21, 0.2)',
    CustomBlack5: 'rgba(4, 4, 21, 0.1)',

    // Gold
    CustomGold: '#FFB432',
    CustomGold1: 'rgba(255, 180, 50, 0.8)',
    CustomGold2: 'rgba(255, 180, 50, 0.6)',
    CustomGold3: 'rgba(255, 180, 50, 0.4)',
    CustomGold4: 'rgba(255, 180, 50, 0.2)',
    CustomGold5: 'rgba(255, 180, 50, 0.1)',

    // Cyan
    CustomCyan: '#69E0C7',
    CustomCyan1: 'rgba(105, 224, 199, 0.8)',
    CustomCyan2: 'rgba(105, 224, 199, 0.6)',
    CustomCyan3: 'rgba(105, 224, 199, 0.4)',
    CustomCyan4: 'rgba(105, 224, 199, 0.2)',
    CustomCyan5: 'rgba(105, 224, 199, 0.1)',

    // LightPurple
    lightPurple: '#8A24FF',
    lightPurple1: 'rgba(138, 36, 255, 0.8)',
    lightPurple2: 'rgba(138, 36, 255, 0.6)',
    lightPurple3: 'rgba(138, 36, 255, 0.4)',
    lightPurple4: 'rgba(138, 36, 255, 0.2)',
    lightPurple5: 'rgba(138, 36, 255, 0.1)',

    // Pink
    CustomPink: '#FF7D7D',
    CustomPink1: 'rgba(255, 125, 125, 0.8)',
    CustomPink2: 'rgba(255, 125, 125, 0.6)',
    CustomPink3: 'rgba(255, 125, 125, 0.4)',
    CustomPink4: 'rgba(255, 125, 125, 0.2)',
    CustomPink5: 'rgba(255, 125, 125, 0.1)',

    // Green
    CustomGreen: '#65CF58',
    CustomGreen1: 'rgba(101, 207, 88, 0.8)',
    CustomGreen2: 'rgba(101, 207, 88, 0.6)',
    CustomGreen3: 'rgba(101, 207, 88, 0.4)',
    CustomGreen4: 'rgba(101, 207, 88, 0.2)',
    CustomGreen5: 'rgba(101, 207, 88, 0.1)',

    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.4)',
    transparent: 'transparent',
};
export const SIZES = {
    // global sizes
    radius: 24,
    radius2: 14,

    // font sizes
    largeTitle: 36,
    font1: 24,
    font2: 18,
    font3: 16,
    font4: 14,
    font5: 12,

    // app dimensions
    width,
    height,
};
export const FONTS = {
    largeTitle: {fontSize: SIZES.largeTitle, lineHeight: 46, fontWeight: 'bold'},
    h1: {fontSize: SIZES.font1, lineHeight: 34, fontWeight: 'bold'},
    h2: {fontSize: SIZES.font2, lineHeight: 28, fontWeight: 'bold'},
    h3: {fontSize: SIZES.font3, lineHeight: 26, fontWeight: 'bold'},
    h4: {fontSize: SIZES.font4, lineHeight: 22, fontWeight: 'bold'},
    h5: {fontSize: SIZES.font5, lineHeight: 16, fontWeight: 'bold'},
    body1: {fontSize: SIZES.font1, lineHeight: 34, fontWeight: 'normal'},
    body2: {fontSize: SIZES.font2, lineHeight: 28, fontWeight: 'normal'},
    body3: {fontSize: SIZES.font3, lineHeight: 26, fontWeight: 'normal'},
    body4: {fontSize: SIZES.font4, lineHeight: 22, fontWeight: 'normal'},
    body5: {fontSize: SIZES.font5, lineHeight: 16, fontWeight: 'normal'},
};

export const darkTheme = {
    name: 'dark',
    backgroundColor: COLORS.black,
    backgroundColor2: COLORS.navyBlue,
    textColor: COLORS.white,
    textColor2: COLORS.white2,
    borderColor: COLORS.white2,
    tabBackgroundColor: COLORS.black,
    bottomTabBarBackgroundColor: COLORS.black,
    headerColor: COLORS.black,
};

export const lightTheme = {
    name: 'light',
    backgroundColor: COLORS.white,
    backgroundColor2: COLORS.white2,
    textColor: COLORS.black,
    textColor2: COLORS.grey,
    borderColor: COLORS.black,
    tabBackgroundColor: COLORS.white,
    bottomTabBarBackgroundColor: COLORS.white,
    headerColor: COLORS.white,
};

export const selectedTheme = darkTheme;

const appTheme = {
    COLORS,
    SIZES,
    FONTS,
    darkTheme,
    lightTheme,
};

export default appTheme;
