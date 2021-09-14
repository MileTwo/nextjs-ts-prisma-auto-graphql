// you want to import from test-utils instead of testing-library/react since we overwrote the render function to support our wrapper providers
import { render, screen } from '../test-utils';
import Tool, { getStaticPaths, getStaticProps } from '../../pages/tool/[name]';
import { tools } from '../../lib/tools';

describe('Tool Page', () => {
    it('should render  a page without errors', async () => {
        render(<Tool tool={tools[0]} />);

        // go home button
        expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
        // header
        expect(screen.getByRole('heading', { name: tools[0].name })).toBeInTheDocument();
        // image
        expect(screen.getByTestId('image')).toBeInTheDocument();
        // description
        expect(screen.getByText(tools[0].description));
        // link to docs
        expect(screen.getByText(`Visit ${tools[0].name} documentation`)).toBeInTheDocument();
    });
    it('should render a tool not found if no tool is passed', () => {
        render(<Tool></Tool>);
        // go home button
        expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
        // header
        expect(screen.getByText('Tool not found.')).toBeInTheDocument();
    });
    it('getStaticPath', async () => {
        const paths = await getStaticPaths();
        expect(paths.paths.length).toEqual(tools.length);
    });
    it('getStaticProps', async () => {
        // @ts-ignore
        const staticProps = await getStaticProps({ params: { name: tools[0].name } });

        expect(staticProps).toEqual({
            props: {
                tool: tools[0],
            },
        });
    });
    it('fails to getStaticProps', async () => {
        // @ts-ignore
        const staticProps = await getStaticProps({ params: null });

        expect(staticProps).toEqual({
            props: {},
        });
    });
});
