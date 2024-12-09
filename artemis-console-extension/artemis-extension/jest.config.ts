import type { JestConfigWithTsJest } from "ts-jest"
// import path from 'node'

const config: JestConfigWithTsJest = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: './jsdom-test-env.ts',
  silent: false,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },

  testRegex: "(/__tests__/.*|(\\.|/)simple.(test|spec))\\.[jt]s?$",

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$':
      '<rootDir>/src/__mocks__/fileMock.js',
   '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js',
  //  '@hawtiosrc/(.*)': '<rootDir>/src/$1',
    'react-markdown': '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
    '@patternfly/react-icons': '<rootDir>/src/__mocks__/react-icons.js',
  //  'keycloak-js': path.resolve(__dirname, './src/__mocks__/keycloak.js'),
   'monaco-editor': '<rootDir>/src/__mocks__/monacoEditor.js',
  //  '@monaco-editor/react': path.resolve(__dirname, './src/__mocks__/monacoEditor.js'),
    '@patternfly/react-code-editor': '<rootDir>./src/__mocks__/codeEditorMock.js',
    oauth4webapi: '<rootDir>/src/__mocks__/oauth4webapi.js',
  },

  // The path to a module that runs some code to configure or set up the testing
  // framework before each test
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  transformIgnorePatterns: ['node_modules/(?!(@patternfly/react-icons/dist/esm/icons|react-markdown))'],

  coveragePathIgnorePatterns: ['node_modules/'],
}

export default config
