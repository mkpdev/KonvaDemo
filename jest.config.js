module.exports = {
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "roots": [
    "<rootDir>/src/test"
  ],
  "setupTestFrameworkScriptFile": "./setupTest.tsx",
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "transform": {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
}