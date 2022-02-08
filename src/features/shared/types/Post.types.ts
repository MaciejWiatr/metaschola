interface PostContent {
	text?: string;
	image?: string;
}

interface PostReactions {
	likes?: number;
	dislikes?: number;
}

type PostTypeEnum = "mem" | "text" | "opinion";

interface PostType {
	type: PostTypeEnum;
	author: {
		id: string;
		img: string;
		name: string;
	};
	content: PostContent;
	createdAt: {
		nanoseconds: number;
		seconds: number;
	};
	id: string;
	reactions: PostReactions;
}

export default PostType;
