import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import db from "$features/shared/firebase/db";
const likePost = async (postId: string, userId: string) => {
	const docRef = doc(db, "posts", postId);
	await updateDoc(docRef, {
		reactions: {
			likes: arrayUnion(userId),
		},
	});
};

const dislikePost = async (postId: string, userId: string) => {
	const docRef = doc(db, "posts", postId);
	await updateDoc(docRef, {
		reactions: {
			likes: arrayRemove(userId),
		},
	});
};

export { likePost, dislikePost };
