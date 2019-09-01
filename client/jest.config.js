module.exports = {
  collectCoverageFrom: [
    'client/src/**/*.{js,jsx,mjs,ts,tsx}',
  ],
  moduleFileExtensions: [
    'web.js',
    'mjs',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'ts',
    'tsx',
  ],
  testEnvironment: 'jsdom',
  testMatch:[ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  testURL: 'http://localhost',
  moduleNameMapper: {
    '^Root(.*)$': '<rootDir>/src$1',
  },
  setupFiles: [
    '<rootDir>/config/testSetup.js',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
  ],
}
