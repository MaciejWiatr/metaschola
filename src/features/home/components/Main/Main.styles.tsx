import tw from "twin.macro";

export const HomeMain = tw.main`
	flex flex-col flex-1 py-8 w-full items-stretch max-w-2xl`;

export const PostCard = tw.div`
	mb-4
	bg-white
	p-6
	mx-4
	rounded-lg
	border
	border-gray-200
	border-solid
	w-full
`;

export const UserImg = tw.img`
	rounded-full
	w-12
	h-12
	object-cover
	object-center
`;

export const PostAuthorName = tw.p`
	text-sm
	font-semibold
	text-gray-700
	m-0
`;

export const PostHeader = tw.div`
	flex
	items-center
	justify-start
	mb-2
	space-x-2
`;

export const PostAuthorInfo = tw.div`
	flex
	flex-col
	items-start`;

export const PostCreatedAt = tw.p`
	text-xs
	text-gray-400
	m-0
`;

export const PostReactions = tw.div`
	flex
	items-center
	justify-start
	mb-2
	h-8
`;

export const PostReaction = tw.div`
	flex
	items-center
	justify-start
	mr-2
	text-gray-600
	text-2xl
	font-semibold
	transition-all
	hover:text-purple-600
	space-x-1
`;

export const PostReactionCount = tw.p`
	text-sm
	text-gray-400
	m-0
`;
