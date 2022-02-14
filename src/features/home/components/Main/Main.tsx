import { UploadForm } from '$features/shared';
import { HomeMain } from './Main.styles';
import PostList from '$features/shared/components/PostList';

function Main() {
  return (
    <HomeMain>
      <UploadForm />
      <PostList />
    </HomeMain>
  );
}

export default Main;
