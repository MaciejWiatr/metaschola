import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { BsChatSquareText } from 'react-icons/bs';
import PostType from '$features/shared/types/Post.types';
import {
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
	GroupLink,
	ImageWrapper,
	PostImage,
	PostText,
} from '../Default/DefaultPost.styles';
import {
	MemeBody,
	MemeContent,
	MemePostCard,
	MemeReaction,
	MemeReactions,
} from './MemePost.styles';
import usePost from '$features/shared/hooks/usePost';

interface IProps {
	post: PostType;
}

const MemePost = ({ post }: IProps) => {
	const {
		reactionCount,
		isLiked,
		handleUpVote,
		handleDownVote,
		relativeDate,
		isDisliked,
	} = usePost(post);

	return (
		<MemePostCard id={post.id}>
			<MemeReactions>
				<MemeReaction onClick={handleUpVote} active={isLiked}>
					<BiUpArrow />
				</MemeReaction>
				<ReactionText>{reactionCount}</ReactionText>
				<MemeReaction onClick={handleDownVote} active={isDisliked}>
					<BiDownArrow />
				</MemeReaction>
			</MemeReactions>
			<MemeBody>
				<PostHeader>
					<Author>
						<UserImg src={post.author.img} />
						<PostAuthorInfo>
							<PostAuthorName>{post.author.name}</PostAuthorName>
							<PostCreatedAt>{relativeDate}</PostCreatedAt>
						</PostAuthorInfo>
					</Author>
					<GroupInfo>
						Opublikowano w: <GroupLink>Memawce</GroupLink>
					</GroupInfo>
				</PostHeader>
				<MemeContent>
					<PostText>{post.content.text}</PostText>
					{post.content.image && (
						<ImageWrapper>
							<PostImage src={post.content.image} />
						</ImageWrapper>
					)}
				</MemeContent>
				<PostReactions>
					<PostReaction>
						<BsChatSquareText />
						<ReactionText>Komentarze</ReactionText>
					</PostReaction>
				</PostReactions>
			</MemeBody>
		</MemePostCard>
	);
}

export default MemePost;
