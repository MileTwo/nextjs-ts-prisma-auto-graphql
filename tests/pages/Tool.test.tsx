// you want to import from test-utils instead of testing-library/react since we overwrote the render function to support our wrapper providers
import { render, screen, waitFor } from '../test-utils';
import Tool, { QUERY_TOOL } from '../../pages/tool/[id]';
import { tools } from '../../lib/tools';

describe('Tool Page', () => {
    it('should render  a page without errors', async () => {
        render(<Tool />, {
            router: { pathname: '/tool/1', query: { id: '1' } },
            mocks: [
                {
                    request: {
                        query: QUERY_TOOL,
                        variables: {
                            id: 1,
                        },
                    },
                    result: {
                        data: {
                            tool: {
                                id: 1,
                                name: 'Apollo Client React',
                                description:
                                    "Manage the entirety of your React app's state and seamlessly execute GraphQL operations.",
                                link: 'https://www.apollographql.com/docs/react/',
                                image: '/apollo.svg',
                            },
                        },
                    },
                },
            ],
        });

        // go home button
        waitFor(() => expect(screen.getByRole('link', { name: 'Link to Home' })).toBeInTheDocument());
        // header
        waitFor(() => expect(screen.getByRole('heading', { name: 'Apollo Client React' })).toBeInTheDocument());
        // image
        waitFor(() => expect(screen.getByTestId('image')).toBeInTheDocument());
        // description
        waitFor(() => expect(screen.getByText(tools[0].description)));
        // link to docs
        waitFor(() => expect(screen.getByText('Visit documentation')).toBeInTheDocument());
    });
});
