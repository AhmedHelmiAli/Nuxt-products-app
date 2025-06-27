import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

const primary = "#1A237E";

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        colors: { primary },
      },
      dark: {
        colors: { primary },
        dark: true,
      },
    },
  },
  locale: {
    locale: "ar",
    fallback: "en",
  },
  localeMessages: ["ar", "en"],
});
