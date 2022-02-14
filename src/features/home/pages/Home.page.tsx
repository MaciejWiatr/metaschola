import Main from '../components/Main';
import { BaseLayout, authRequired } from '$features/shared';

function HomePage() {
  return (
    <BaseLayout>
      <Main />
    </BaseLayout>
  );
}

export default authRequired(HomePage);
