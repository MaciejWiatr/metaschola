import { BsHandThumbsUp, BsChatSquareText } from 'react-icons/bs';
import PostType from '$features/shared/types/Post.types';
import {
	Author,
	PostAuthorInfo,
	PostContent,
	PostCreatedAt,
	PostHeader,
	PostReaction,
	PostReactions,
	PostText,
	ReactionText,
} from '../Default/DefaultPost.styles';
import {
	SpottedGroupInfo,
	SpottedGroupLink,
	SpottedPostAuthorName,
	SpottedPostCard,
} from './SpottedPost.styles';
import usePost from '$features/shared/hooks/usePost';

interface IProps {
	post: PostType;
}

const SpottedPost = ({ post }: IProps) => {
	const { handleLike, isLiked, relativeDate } = usePost(post);

	return (
		<SpottedPostCard id={post.id}>
			<PostHeader>
				<Author>
					<PostAuthorInfo>
						<SpottedPostAuthorName>
							Anonimowe 🐱‍👤
						</SpottedPostAuthorName>
						<PostCreatedAt>{relativeDate}</PostCreatedAt>
					</PostAuthorInfo>
				</Author>
				<SpottedGroupInfo>
					Opublikowano w: <SpottedGroupLink>Spotted</SpottedGroupLink>
				</SpottedGroupInfo>
			</PostHeader>
			<PostContent>
				<PostText>{post.content.text}</PostText>
			</PostContent>
			<PostReactions>
				<PostReaction active={isLiked} onClick={handleLike}>
					<BsHandThumbsUp />
					<ReactionText>{post.reactions.likes?.length}</ReactionText>
				</PostReaction>
				<PostReaction>
					<BsChatSquareText />
					<ReactionText>Skomentuj</ReactionText>
				</PostReaction>
			</PostReactions>
		</SpottedPostCard>
	);
}

export default SpottedPost;
