export const tools: Tool[] = [
    {
        name: 'TypeScript',
        description:
            'TypeScript extends JavaScript by adding types. By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code. Any browser, any OS, anywhere JavaScript runs. Entirely Open Source.',
        link: 'https://www.typescriptlang.org/',
        image: {
            src: '/typescript.svg',
            width: 48,
            height: 50,
            alt: 'TypeScript',
        },
    },
    {
        name: 'Material UI',
        description:
            'React components for faster and easier web development. Build your own design system, or start with Material Design.',
        link: 'https://material-ui.com/',
        image: { src: '/material-ui.svg', width: 50, height: 50, alt: 'Material UI' },
    },
    {
        name: 'Jest',
        description:
            'Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!',
        link: 'https://jestjs.io/',
        image: {
            src: '/jest.svg',
            width: 50,
            height: 50,
            alt: 'Jest',
        },
    },
    {
        name: 'Testing Library',
        description: 'Simple and complete testing utilities that encourage good testing practices',
        link: 'https://testing-library.com/',
        image: {
            src: '/testing-library.png',
            width: 50,
            height: 50,
            alt: 'Testing Library',
        },
    },
    {
        name: 'ESLint',
        description: `ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline. Many problems ESLint finds can be automatically fixed. ESLint fixes are syntax-aware so you won't experience errors introduced by traditional find-and-replace algorithms. Preprocess code, use custom parsers, and write your own rules that work alongside ESLint's built-in rules. You can customize ESLint to work exactly the way you need it for your project.`,
        link: 'https://eslint.org/',
        image: {
            src: '/eslint.svg',
            width: 50,
            height: 50,
            alt: 'ESLint',
        },
    },
    {
        name: 'Prettier',
        description:
            'An opinionated code formatter. Supports many languages. Integrates with most editors. Has few options',
        link: 'https://prettier.io/',
        image: {
            src: '/prettier.png',
            width: 50,
            height: 50,
            alt: 'Prettier',
        },
    },
    {
        name: 'Deque Axe',
        description:
            'Test your React application with the axe-core accessibility testing library. Results will show in the Chrome DevTools console.',
        link: 'https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md',
        image: {
            src: '/axe.svg',
            width: 50,
            height: 50,
            alt: 'axe-core/react',
        },
    },
];

export interface Tool {
    name: string;
    description: string;
    link: string;
    image?: {
        alt: string;
        src: string;
        width: number;
        height: number;
    };
}
