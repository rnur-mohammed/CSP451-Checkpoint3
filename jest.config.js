module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text-summary"],
coverageThreshold: {
  global: {
    lines: 60,
    statements: 60,
    functions: 50,
    branches: 50,
  },
},
