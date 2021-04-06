module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    fontFamily: {
      fk_screamer: ["FKScreamer"],
      space_grotesk_bold: ["SpaceGrotesk-Bold"],
      space_grotesk_semibold: ["SpaceGrotesk-SemiBold"],
      space_grotesk_medium: ["SpaceGrotesk-Medium"],
      space_grotesk_regular: ["SpaceGrotesk-Regular"],
      space_grotesk_light: ["SpaceGrotesk-Light"],
    },
    extend: {
      colors: {
        cyan: "#00C9FF",
        dark_blue: "#030014",
        yellow: "#F2FF00",
        green: "#29A434",
        red: "#C72213",
      },
      fontSize: {
        'navText': '20px',
        'xl_heading': '126px',
        'l_heading': '80px',
         'm_heading': '70px',
         's_heading': '52px',
         'xs_heading': '44px',
         'xxs_heading': '28px',
       },
       zIndex: {
        'negative': -1,
        'background': -100,
      },
      borderRadius: {
        'curved_bottom': '15%',
      }
    },
  },
};
