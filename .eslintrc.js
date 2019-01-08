module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "jest": true,
        // "jest/globals": true
    },
    "extends": [
        "eslint:recommended",
        // "plugin:jest/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    // "plugins": ["jest"],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": "off",
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
        // "jest/no-disabled-tests": "warn",
        // "jest/no-focused-tests": "error",
        // "jest/no-identical-title": "error",
        // "jest/prefer-to-have-length": "warn",
        // "jest/valid-expect": "error"
    }
};