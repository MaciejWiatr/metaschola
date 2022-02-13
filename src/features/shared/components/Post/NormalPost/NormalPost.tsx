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
	ImageWrapper,
	PostImage,
	PostText,
} from "../Default/DefaultPost.styles";
import getRelativeDate from "$features/shared/utils/getRelativeDate";

interface IProps {
	post: PostType;
}

const NormalPost = ({ post }: IProps) => {
	return (
		<PostCard>
			<PostHeader>
				<Author>
					<UserImg src={post.author.img} />
					<PostAuthorInfo>
						<PostAuthorName>{post.author.name}</PostAuthorName>
						<PostCreatedAt>
							{getRelativeDate(post.createdAt)}
						</PostCreatedAt>
					</PostAuthorInfo>
				</Author>
				<GroupInfo>
					Opublikowano w: <GroupLink>Dyskusji</GroupLink>
				</GroupInfo>
			</PostHeader>
			<PostContent>
				<PostText>{post.content.text}</PostText>
				{post.content.image && (
					<ImageWrapper>
						<PostImage src={post.content.image} />
					</ImageWrapper>
				)}
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
		</PostCard>
	);
};

export default NormalPost;
