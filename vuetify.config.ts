import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

export default defineVuetifyConfiguration({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1A237E", // primary color
        },
      },
    },
  },
  locale: {
    locale: "ar",
    fallback: "en",
  },
  localeMessages: ["ar", "en"],
});
