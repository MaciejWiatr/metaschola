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

const Post = ({ content }) => {
	return (
		<PostCard>
			<PostHeader>
				<Author>
					<UserImg src="https://hauever.pl/wp-content/uploads/2021/05/corgi-rasy-psow.jpg" />
					<PostAuthorInfo>
						<PostAuthorName>Maciej Corgas</PostAuthorName>
						<PostCreatedAt>22.09.2001</PostCreatedAt>
					</PostAuthorInfo>
				</Author>
				<GroupInfo>
					Opublikowano w: <GroupLink>Memawka</GroupLink>
				</GroupInfo>
			</PostHeader>
			<PostContent>{content}</PostContent>
			<PostReactions>
				<PostReaction>
					<BsHandThumbsUp />
					<ReactionText>12</ReactionText>
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
