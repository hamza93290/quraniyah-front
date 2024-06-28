import type {Config} from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  roots: ['/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts|js)'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleDirectories: ['node_modules', 'src']
};

export default config;