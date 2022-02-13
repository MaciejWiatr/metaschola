import PostType from "$features/shared/types/Post.types";
import getRelativeDate from "$features/shared/utils/getRelativeDate";
import { BsHandThumbsUp, BsChatSquareText } from "react-icons/bs";
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
} from "../Default/DefaultPost.styles";
import {
	SpottedGroupInfo,
	SpottedGroupLink,
	SpottedPostAuthorName,
	SpottedPostCard,
} from "./SpottedPost.styles";

interface IProps {
	post: PostType;
}

const SpottedPost = ({ post }: IProps) => {
	return (
		<SpottedPostCard>
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
				<PostReaction>
					<BsHandThumbsUp />
					<ReactionText>{post.reactions.likes}</ReactionText>
				</PostReaction>
				<PostReaction>
					<BsChatSquareText />
					<ReactionText>Skomentuj</ReactionText>
				</PostReaction>
			</PostReactions>
		</SpottedPostCard>
	);
};

export default SpottedPost;
