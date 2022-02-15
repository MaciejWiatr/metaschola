import { Case, Default, Switch } from 'react-if';
import PostType from '$features/shared/types/Post.types';
import AnnouncementPost from './AnnouncementPost/AnnouncementPost';
import MemePost from './MemePost/MemePost';
import NormalPost from './NormalPost/NormalPost';
import SpottedPost from './SpottedPost/SpottedPost';

interface IProps {
	post: PostType;
}

const Post = ({ post }: IProps) => (
    <Switch>
      <Case condition={post.type === 'announcement'}>
        <AnnouncementPost post={post} />
      </Case>
      <Case condition={post.type === 'mem'}>
        <MemePost post={post} />
      </Case>
      <Case condition={post.type === 'spotted'}>
        <SpottedPost post={post} />
      </Case>
      <Default>
        <NormalPost post={post} />
      </Default>
    </Switch>
  )

export default Post;
