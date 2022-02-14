import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { BsChatSquareText } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useMemo } from 'react';
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
import getRelativeDate from '$features/shared/utils/getRelativeDate';
import {
	MemeBody,
	MemeContent,
	MemePostCard,
	MemeReaction,
	MemeReactions,
} from './MemePost.styles';
import { fireAuth } from '$features/shared';
import { dislikePost, likePost } from '$features/shared/services/Post.service';

interface IProps {
	post: PostType;
}

function MemePost({ post }: IProps) {
	const [user] = useAuthState(fireAuth);

	const isLiked = useMemo(() => {
		if (!user) return false;
		return post.reactions.likes?.includes(user.uid);
	}, [post.reactions.likes, user]);

	const reactionCount = useMemo(() => {
		let count = 0;
		if (post.reactions.likes) {
			count += post.reactions.likes.length;
		}
		if (post.reactions.dislikes) {
			count -= post.reactions.dislikes.length;
		}
		return count;
	}, [post.reactions]);

	const handleUpVote = async () => {
		if (user) {
			await likePost(post.id, user.uid);
		}
	};

	const handleDownVote = async () => {
		if (user) {
			await dislikePost(post.id, user.uid);
		}
	};

	return (
		<MemePostCard id={post.id}>
			<MemeReactions>
				<MemeReaction onClick={handleUpVote} active={isLiked}>
					<BiUpArrow />
				</MemeReaction>
				<ReactionText>{reactionCount}</ReactionText>
				<MemeReaction onClick={handleDownVote} active={!isLiked}>
					<BiDownArrow />
				</MemeReaction>
			</MemeReactions>
			<MemeBody>
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
