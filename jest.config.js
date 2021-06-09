
module.exports = {
    "roots": [
        "<rootDir>/test"
    ],
    "transform": {
        "^.+\\.ts?$": "ts-jest"
    },
    "setupFilesAfterEnv": [
        "./test/setup.ts"
    ]
};