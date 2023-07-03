const nextJest = require('next/jest');

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' });

// Any custom config you want to pass to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    collectCoverage: true,
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
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
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
