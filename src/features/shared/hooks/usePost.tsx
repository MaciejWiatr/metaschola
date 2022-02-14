import { useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { fireAuth } from '..';
import { dislikePost, likePost } from '../services/Post.service';
import PostType from '../types/Post.types';
import getRelativeDate from '../utils/getRelativeDate';

const usePost = (post: PostType) => {
	const [user] = useAuthState(fireAuth);

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

	const isLiked = useMemo(() => {
		if (!user) return false;
		return post.reactions.likes?.includes(user.uid);
	}, [post.reactions.likes, user]);

	const isDisliked = useMemo(() => {
		if (!user) return false;
		return post.reactions.dislikes?.includes(user.uid);
	}, [post.reactions.dislikes, user]);

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

	const relativeDate = useMemo(
		() => getRelativeDate(post.createdAt),
		[post.createdAt]
	);

	const handleLike = async () => {
		if (user) {
			if (isLiked) {
				await dislikePost(post.id, user.uid);
			} else {
				await likePost(post.id, user.uid);
			}
		}
	};

	return {
		reactionCount,
		isLiked,
		handleUpVote,
		handleDownVote,
		relativeDate,
		handleLike,
		isDisliked,
	};
};

export default usePost;
