import { BsHandThumbsUp, BsChatSquareText } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useMemo } from 'react';
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
import getRelativeDate from '$features/shared/utils/getRelativeDate';
import { fireAuth } from '$features/shared';
import { dislikePost, likePost } from '$features/shared/services/Post.service';

interface IProps {
	post: PostType;
}

function NormalPost({ post }: IProps) {
	const [user] = useAuthState(fireAuth);

	const isLiked = useMemo(() => {
		if (!user) return false;
		return post.reactions.likes?.includes(user.uid);
	}, [post.reactions.likes, user]);

	const handleLike = async () => {
		if (user) {
			if (isLiked) {
				await dislikePost(post.id, user.uid);
			} else {
				await likePost(post.id, user.uid);
			}
		}
	};

	return (
		<PostCard id={post.id}>
			<PostHeader>
				<Author>
					<UserImg src={post.author.img} />
					<PostAuthorInfo>
						<PostAuthorName>{post.author.name}</PostAuthorName>
						<PostCreatedAt>
							{getRelativeDate(post.createdAt)}
						</PostCreatedAt>
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
