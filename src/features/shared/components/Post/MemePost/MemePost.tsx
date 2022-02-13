import PostType from "$features/shared/types/Post.types";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
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
import {
	MemeBody,
	MemeContent,
	MemePostCard,
	MemeReaction,
	MemeReactions,
} from "./MemePost.styles";
import { BsChatSquareText, BsHandThumbsUp } from "react-icons/bs";

interface IProps {
	post: PostType;
}

const MemePost = ({ post }: IProps) => {
	return (
		<MemePostCard>
			<MemeReactions>
				<MemeReaction>
					<BiUpArrow />
				</MemeReaction>
				<ReactionText>
					{post.reactions.likes - post.reactions.dislikes}
				</ReactionText>
				<PostReaction>
					<BiDownArrow />
				</PostReaction>
			</MemeReactions>
			<MemeBody>
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
						Opublikowano w: <GroupLink>Memawce</GroupLink>
					</GroupInfo>
				</PostHeader>
				<MemeContent>
					<PostText>{post.content.text}</PostText>
					{post.content.image && (
						<ImageWrapper>
							<PostImage src={post.content.image} />
						</ImageWrapper>
					)}
				</MemeContent>
				<PostReactions>
					<PostReaction>
						<BsChatSquareText />
						<ReactionText>Komentarze</ReactionText>
					</PostReaction>
				</PostReactions>
			</MemeBody>
		</MemePostCard>
	);
};

export default MemePost;
