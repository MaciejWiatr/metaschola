import tw from "twin.macro";

export const PostCard = tw.div`
	mb-4
	bg-white
	rounded-lg
	border
	border-gray-200
	border-solid
	dark:bg-gray-800
	dark:border-gray-700
	bg-opacity-50
	dark:bg-opacity-50
	backdrop-blur
	dark:text-gray-200
	break-all
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
	dark:text-gray-200
	m-0
`;

export const PostHeader = tw.div`
	flex
	items-center
	justify-between
	mb-2
	space-x-2
	p-6
	pb-0

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
p-6
pt-0
flex
	items-center
	justify-start
	mb-2
	h-8
	space-x-2
`;

export const PostReaction = tw.div`
	flex
	items-center
	justify-start
	mr-2
	text-gray-600
	text-xl
	font-semibold
	transition-all
	hover:text-purple-600
	space-x-1
	cursor-pointer
`;

export const ReactionText = tw.p`
	text-sm
	text-gray-400
	m-0
	transition-all
	hover:text-purple-600
	hover:font-bold
`;

export const Author = tw.div`
    flex
    items-center
    gap-2
`;

export const GroupInfo = tw.div`
    text-gray-600
	dark:text-gray-300
`;

export const GroupLink = tw.a`
    underline text-purple-600
`;

export const PostContent = tw.div`
	my-8
	mt-4
	w-full
	flex
	flex-col
	gap-4
`;

export const ImageWrapper = tw.div`
	w-full
	h-auto
	object-contain
	object-center
	overflow-hidden
`;

export const PostImage = tw.img`
	w-full
	h-auto
	object-contain
	object-center
	overflow-hidden
`;

export const PostText = tw.p`
	px-6
	mt-0
	mb-0
`;
