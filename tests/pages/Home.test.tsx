// you want to import from test-utils instead of testing-library/react since we overwrote the render function to support our wrapper providers
import { render, screen } from '../test-utils';
import Home, { getServerSideProps } from '../../pages/index';
import { tools } from '../../lib/tools';

describe('Home page', () => {
    it('should render without errors', async () => {
        render(<Home tools={tools.map(({ name, image }) => ({ name, image }))} />);

        // tools header
        expect(screen.getByRole('heading', { name: 'Tools' })).toBeInTheDocument();
        // array of tools
        expect(screen.getAllByRole('listitem').length).toEqual(tools.length);
        expect(screen.getAllByRole('link').length).toEqual(tools.length);

        const firstTool = screen.getAllByRole('listitem')[0];
        // Semantics check of 'link button' is anchor tag to tool page ( Accessibility test )
        expect(firstTool.querySelector('a')).toBeInTheDocument();
        // image
        expect(firstTool.querySelector('img')).toBeInTheDocument();
        // name
        // @ts-ignore
        expect(firstTool.querySelector('p', { name: tools[0].name })).toBeInTheDocument();
    });
    it('serverSideProps', async () => {
        // @ts-ignore
        const response = await getServerSideProps();
        expect(response).toEqual({
            props: {
                tools: tools.map(({ name, image }) => ({
                    name,
                    image,
                })),
            },
        });
    });
});
