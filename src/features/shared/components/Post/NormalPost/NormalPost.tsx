import { BsHandThumbsUp, BsChatSquareText } from 'react-icons/bs';
import PostType from '$features/shared/types/Post.types';
import {
	PostCard,
	PostHeader,
	UserImg,
	PostAuthorInfo,
	PostAuthorName,
	PostCreatedAt,
	PostReactions,
	PostReaction,
	ReactionText,
	Author,
	GroupInfo,
	PostContent,
	GroupLink,
	ImageWrapper,
	PostImage,
	PostText,
} from '../Default/DefaultPost.styles';
import usePost from '$features/shared/hooks/usePost';

interface IProps {
	post: PostType;
}

const NormalPost = ({ post }: IProps) => {
	const { handleLike, relativeDate } = usePost(post);

	return (
		<PostCard id={post.id}>
			<PostHeader>
				<Author>
					<UserImg src={post.author.img} />
					<PostAuthorInfo>
						<PostAuthorName>{post.author.name}</PostAuthorName>
						<PostCreatedAt>{relativeDate}</PostCreatedAt>
					</PostAuthorInfo>
				</Author>
				<GroupInfo>
					Opublikowano w: <GroupLink>Dyskusji</GroupLink>
				</GroupInfo>
			</PostHeader>
			<PostContent>
				<PostText>{post.content.text}</PostText>
				{post.content.image && (
					<ImageWrapper>
						<PostImage src={post.content.image} />
					</ImageWrapper>
				)}
			</PostContent>
			<PostReactions>
				<PostReaction onClick={handleLike}>
					<BsHandThumbsUp />
					<ReactionText>{post.reactions.likes?.length}</ReactionText>
				</PostReaction>
				<PostReaction>
					<BsChatSquareText />
					<ReactionText>Skomentuj</ReactionText>
				</PostReaction>
			</PostReactions>
		</PostCard>
	);
}

export default NormalPost;
