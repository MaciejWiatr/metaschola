import PostType from '$features/shared/types/Post.types';
import {
	PostHeader,
	UserImg,
	PostAuthorInfo,
	Author,
	ImageWrapper,
	PostImage,
	PostText,
} from '../Default/DefaultPost.styles';
import getRelativeDate from '$features/shared/utils/getRelativeDate';
import {
	AnnouncementAuthorName,
	AnnouncementContent,
	AnnouncementPostCard,
	AnnouncementPostCreatedAt,
} from './AnnouncementPost.styles';

interface IProps {
	post: PostType;
}

function AnnouncementPost({ post }: IProps) {
	return (
		<AnnouncementPostCard id={post.id}>
			<PostHeader>
				<Author>
					<UserImg src={post.author.img} />
					<PostAuthorInfo>
						<AnnouncementAuthorName>
							{post.author.name} (Ogłoszenie samorządowe)
						</AnnouncementAuthorName>
						<AnnouncementPostCreatedAt>
							{getRelativeDate(post.createdAt)}
						</AnnouncementPostCreatedAt>
					</PostAuthorInfo>
				</Author>
			</PostHeader>
			<AnnouncementContent>
				<PostText>{post.content.text}</PostText>
				{post.content.image && (
					<ImageWrapper>
						<PostImage src={post.content.image} />
					</ImageWrapper>
				)}
			</AnnouncementContent>
		</AnnouncementPostCard>
	);
}

export default AnnouncementPost;
