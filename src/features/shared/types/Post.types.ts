interface PostContent {
	text?: string;
	image?: string;
}

interface PostReactions {
	likes?: string[];
	dislikes?: string[];
}

export interface EntryAuthor {
	id: string;
	img: string;
	name: string;
}

interface Comment {
	id: string;
	author: EntryAuthor;
	text: string;
	subcomments?: Comment[];
}

export type PostTypeEnum =
	| "mem"
	| "discussion"
	| "opinion"
	| "spotted"
	| "announcement"
	| "event";

interface PostType {
	type: PostTypeEnum;
	author: EntryAuthor;
	content: PostContent;
	createdAt: {
		nanoseconds: number;
		seconds: number;
	};
	id: string;
	reactions: PostReactions;
	comments: Comment[];
}

export default PostType;
