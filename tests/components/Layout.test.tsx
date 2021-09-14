import { render, screen } from '../test-utils';
import Layout from '../../components/layout';

describe('Home page', () => {
    it('should render without errors', async () => {
        render(
            <Layout title="Next.js example">
                <div></div>
            </Layout>
        );
        // header
        expect(screen.getByRole('heading', { name: 'Next.js example' })).toBeInTheDocument();
    });
});
