import { LoadingStatus } from "./PostList.styles";
import db from "$features/shared/firebase/db";
import PostType, { PostTypeEnum } from "$features/shared/types/Post.types";
import { query, collection, orderBy, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { If, Then, Else } from "react-if";
import Post from "../Post";
import { useMemo } from "react";

const PostList = ({ category }: { category?: PostTypeEnum }) => {
	const q = useMemo(() => {
		if (category) {
			console.log(category);
			return query(
				collection(db, "posts"),
				where("type", "==", category)
			);
		}
		return query(collection(db, "posts"), orderBy("createdAt", "desc"));
	}, [category]);
	const [value, loading, error] = useCollection(q);

	return (
		<If condition={loading || Boolean(error)}>
			<Then>
				<LoadingStatus>
					{loading && <span>Wczytywanie postów...</span>}
					{error && <strong>Error: {JSON.stringify(error)}</strong>}
				</LoadingStatus>
			</Then>
			<Else>
				{value &&
					value.docs.map((doc) => (
						<Post
							key={doc.id}
							post={{
								...(doc.data() as PostType),
								id: doc.id,
							}}
						/>
					))}
			</Else>
		</If>
	);
};

export default PostList;
