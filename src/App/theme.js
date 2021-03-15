const colors = {
    white: "#FFFFFF",
    mineShaft: "#252525",
    scienceBlue: "#0366D6",
    scienceBlueLight: "#0366D633",
    dodgerBlue: "#2188FF",
    paleSky: "#687585",
    ironLight: "#D1D5DA1A",
};

export const lightTheme = {
    color: {
        text: {
            primaryText: colors.paleSky,
            secondaryText: colors.mineShaft,
            title: colors.mineShaft,
            tileTitle: colors.scienceBlue,
            link: colors.scienceBlue,
        },

        background: {
            primaryBackground: "#FBFBFE",
            secondaryBackground: colors.white,
            linkButtonBackground: colors.scienceBlue,
            themeTogglerBackground: "#E5E5E5",
            ballBackground: colors.paleSky,
        },

        border: {
            linkBorder: colors.scienceBlueLight,
            listBorder: "rgba(209, 213, 218, 0.8)",
            tileBorder: "rgba(209, 213, 218, 0.3)",
        },

        element: {
            ballColor: colors.white,
            icon: colors.scienceBlue,
            iconLink: colors.mineShaft,
        },

        hover: {
            title: colors.scienceBlue,
            tileBorder: colors.scienceBlueLight,
            buttonShadow: "#8CC2FF",
            iconLink: colors.scienceBlue,
            link: "#6529CF",
        },
    },
};

export const darkTheme = {
    color: {
        text: {
            primaryText: colors.white,
            secondaryText: colors.white,
            title: colors.white,
            tileTitle: colors.white,
            link: "#4B9FFF",
        },

        background: {
            primaryBackground: colors.mineShaft,
            secondaryBackground: "#343435",
            linkButtonBackground: "#0470F7",
            themeTogglerBackground: "#6E6E6E",
            ballBackground: colors.white,
        },

        border: {
            linkBorder: "rgba(33, 136, 255, 0.4)",
            listBorder: colors.ironLight,
            tileBorder: colors.ironLight,
        },

        element: {
            ballColor: colors.mineShaft,
            icon: colors.dodgerBlue,
            iconLink: colors.white,
        },
        
        hover: {
            title: colors.dodgerBlue,
            tileBorder: "rgba(3, 102, 214, 0.5)",
            buttonShadow: "#6D93BE",
            iconLink: colors.dodgerBlue,
            link: "#87BDFF",
        },
    },
};