import {
	arrayRemove,
	arrayUnion,
	collection,
	doc,
	getDocs,
	query,
	updateDoc,
	where,
} from 'firebase/firestore';
import db from '$features/shared/firebase/db';
import { PostTypeEnum } from '../types/Post.types';

const likePost = async (postId: string, userId: string) => {
	const docRef = doc(db, 'posts', postId);
	await updateDoc(docRef, {
		'reactions.likes': arrayUnion(userId),
		'reactions.dislikes': arrayRemove(userId),
	});
};

const dislikePost = async (postId: string, userId: string) => {
	const docRef = doc(db, 'posts', postId);
	await updateDoc(docRef, {
		'reactions.dislikes': arrayUnion(userId),
		'reactions.likes': arrayRemove(userId),
	});
};

const getPostCountByCategory = async (category: PostTypeEnum) => {
	const postsRef = collection(db, 'posts');
	const q = query(postsRef, where('type', '==', category));
	const docs = await getDocs(q);
	return docs.size;
};

export { likePost, dislikePost, getPostCountByCategory };
