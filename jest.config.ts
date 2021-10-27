import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    collectCoverage: true,
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    transform: {
        '\\.m?jsx?$': 'jest-esm-transformer',
        '^.+\\.(js|jsx|ts|tsx)$': ['<rootDir>/node_modules/babel-jest', { configFile: './test.babelrc' }],
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^components/(.*)$': '<rootDir>/components/$1',
        '^lib/(.*)$': '<rootDir>/lib/$1',
        '^pages/(.*)$': '<rootDir>/pages/$1',
        '^services/(.*)$': '<rootDir>/services/$1',
        '^tests/(.*)': '<rootDir>/tests/$1',
        '^types/(.*)$': '<rootDir>/types/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    verbose: true,
};

export default config;
