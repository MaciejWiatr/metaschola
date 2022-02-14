import { useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsHandThumbsUp, BsChatSquareText } from 'react-icons/bs';
import { fireAuth } from '$features/shared';
import { dislikePost, likePost } from '$features/shared/services/Post.service';
import PostType from '$features/shared/types/Post.types';
import getRelativeDate from '$features/shared/utils/getRelativeDate';
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

interface IProps {
	post: PostType;
}

function SpottedPost({ post }: IProps) {
	const [user] = useAuthState(fireAuth);

	const isLiked = useMemo(() => {
		if (!user) return false;
		return post.reactions.likes?.includes(user.uid)!;
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
		<SpottedPostCard id={post.id}>
			<PostHeader>
				<Author>
					<PostAuthorInfo>
						<SpottedPostAuthorName>
							Anonimowe 🐱‍👤
						</SpottedPostAuthorName>
						<PostCreatedAt>
							{getRelativeDate(post.createdAt)}
						</PostCreatedAt>
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
