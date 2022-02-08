import PostType from "$features/shared/types/Post.types";
import { BsHandThumbsUp, BsChatSquareText } from "react-icons/bs";
import {
	PostCard,
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
	PostContent,
	GroupLink,
} from "./Post.styles";

const Post = ({ post }: { post: PostType }) => {
	return (
		<PostCard>
			<PostHeader>
				<Author>
					<UserImg src={post.author.img} />
					<PostAuthorInfo>
						<PostAuthorName>{post.author.name}</PostAuthorName>
						<PostCreatedAt>22.09.2001</PostCreatedAt>
					</PostAuthorInfo>
				</Author>
				<GroupInfo>
					Opublikowano w: <GroupLink>Memawka</GroupLink>
				</GroupInfo>
			</PostHeader>
			<PostContent>{post.content.text}</PostContent>
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
		</PostCard>
	);
};

export default Post;
