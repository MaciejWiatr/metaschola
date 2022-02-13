import { UploadForm } from "$features/shared";
import db from "$features/shared/firebase/db";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { HomeMain, LoadingStatus } from "./Main.styles";
import PostType from "$features/shared/types/Post.types";
import { Else, If, Then } from "react-if";
import Post from "$features/shared/components/Post/";

const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

const Main = () => {
	const [value, loading, error] = useCollection(q);

	return (
		<HomeMain>
			<UploadForm />

			<If condition={loading || Boolean(error)}>
				<Then>
					<LoadingStatus>
						{loading && <span>Collection: Loading...</span>}
						{error && (
							<strong>Error: {JSON.stringify(error)}</strong>
						)}
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
		</HomeMain>
	);
};

export default Main;
