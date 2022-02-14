import { collection, query, where } from "firebase/firestore";
import { useMemo } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import db from "../firebase/db";
import PostType, { EntryAuthor } from "../types/Post.types";

const q = query(collection(db, "posts"), where("type", "!=", "spotted"));

interface IStudentRank extends EntryAuthor {
	posts: number;
}

interface IReturnValues {
	bestStudents: IStudentRank[];
	loading: boolean;
	error: any;
}

const useBestStudents = (): IReturnValues => {
	const [value, loading, error] = useCollection(q);

	const bestStudents = useMemo(() => {
		if (!value) return [];

		let studentRank: IStudentRank[] = [];

		value.docs.map((doc) => {
			const data = doc.data() as PostType;
			let existingEntry = studentRank.find(
				(a) => a.id === data.author.id
			);
			if (!existingEntry) {
				studentRank.push({ ...data.author, posts: 1 });
			} else {
				existingEntry.posts++;
			}
		});

		studentRank.sort((a, b) => b.posts - a.posts);

		return studentRank;
	}, [value]);

	return { bestStudents, loading, error };
};

export default useBestStudents;
