import Main from '../components/Main';
import { BaseLayout, authRequired } from '$features/shared';

const HomePage = () => (
	<BaseLayout>
		<Main />
	</BaseLayout>
);

export default authRequired(HomePage);
