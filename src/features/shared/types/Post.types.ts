interface PostContent {
	text?: string;
	image?: string;
}

interface PostReactions {
	likes?: number | string[];
	dislikes?: number | string[];
}

type PostTypeEnum =
	| "mem"
	| "discussion"
	| "opinion"
	| "spotted"
	| "announcement"
	| "event";

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
