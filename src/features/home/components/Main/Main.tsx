import { UploadForm } from "$features/shared";
import db from "$features/shared/firebase/db";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import Post from "../Post";
import { HomeMain } from "./Main.styles";
import PostType from "$features/shared/types/Post.types";

const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

const Main = () => {
	const [value, loading, error] = useCollection(q);

	return (
		<HomeMain>
			<UploadForm />
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
			{loading && <span>Collection: Loading...</span>}
			{value &&
				value.docs.map((doc) => (
					<Post key={doc.id} post={doc.data() as PostType} />
				))}
		</HomeMain>
	);
};

export default Main;
