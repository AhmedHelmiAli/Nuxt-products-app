export const useMode = () => {
  const theme = useTheme();

  const isDark = computed({
    get() {
      return theme.global.name.value === "dark";
    },
    set() {
      theme.global.name.value =
        theme.global.name.value === "dark" ? "light" : "dark";
    },
  });

  const themeIcon = computed(() =>
    theme.global.name.value === "dark"
      ? "mdi-white-balance-sunny"
      : "mdi-weather-night"
  );

  return { isDark, themeIcon };
};
