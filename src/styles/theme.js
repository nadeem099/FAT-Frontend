export const theme = {
  breakPoint: {
    breakPointSizes: {
      lg: "1200px",
      md: "992px",
      sm: "768px",
      xs: "480px",
    },
    lg: function () {
      return this.breakPointSizes.lg;
    },
    md: function () {
      return this.breakPointSizes.md;
    },
    sm: function () {
      return this.breakPointSizes.sm;
    },
    xs: function () {
      return this.breakPointSizes.xs;
    },
  },
  space: {
    0: "0",
    1: "1.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
  },
  typography: {
    color: {
      app: {
        25: "#b5deb1",
        50: "#8ccc8c",
        100: "#73bb44",
        200: "#4fab4a",
        300: "#385925",
        400: "#4c4444",
      },
      white: {
        25: "#ffffff",
      },
      gray: {
        25: "#F5F8FA",
        50: "#E1E8ED",
        100: "#AAB8C2",
        200: "#657786",
        300: "#14171A",
      },
      value: function (type, weight) {
        return this[type][weight];
      },
    },
    common: {
      fontFammily: "Inter sans-serif",
    },
    header: "2rem",
    font: {
      text: {
        xs: {
          regular: `
            font-size: 0.75rem;
            line-height: 1.125rem;
            font-weight: 400;
          `,
          medium: `
            font-size: 0.75rem;
            line-height: 1.125rem;
            font-weight: 500;
          `,
          semibold: `
            font-size: 0.75rem;
            line-height: 1.125rem;
            font-weight: 600;
          `,
        },
        sm: {
          regular: `
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: 400;
          `,
          medium: `
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: 500;
          `,
          semibold: `
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: 600;
          `,
        },
        md: {
          regular: `
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 400;
          `,
          medium: `
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 500;
          `,
          semibold: `
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 600;
          `,
        },
      },
    },
    scale: function (size, weight) {
      return this.font.text[size][weight];
    },
    weight: {
      bold: 700,
      default: 400,
      light: 300,
      medium: 500,
      regular: 400,
      semibold: 600,
    },
  },
};
