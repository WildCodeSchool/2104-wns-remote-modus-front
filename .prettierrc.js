module.exports = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: false,
    singleQuote: false,
    overrides: [
        {
            files: ".prettierrc",
            options: { "parser": "json" }
        }
    ]
};