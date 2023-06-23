module.exports = {
  content: ["**/*.{html,tsx,jsx}"],
  theme: {
    fontFamily: {
      "red-hat-display": ["Red Hat Display", "sans-serif"],
      // Add more font families if needed
    },
    extend: {
      backgroundImage: {
        "pattern-background-mobile":
          "url('./images/pattern-background-mobile.svg')",
        "pattern-background-desktop":
          "url('./images/pattern-background-desktop.svg')",
      },
    },
    fontSize: {
      "standard-size": "16px",
      "tiny": "0.625rem", // 10px
      "extra-small": "0.75rem", // 12px
      "custom-size": "0.8rem", // 20px
    },
    // Rest of your Tailwind CSS configuration...
  },

};
