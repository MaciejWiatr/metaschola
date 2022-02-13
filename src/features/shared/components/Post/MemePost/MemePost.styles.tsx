import tw from "twin.macro";
import {
	PostCard,
	PostContent,
	PostReaction,
	PostReactions,
} from "../Default/DefaultPost.styles";

export const MemePostCard = tw(PostCard)`
    flex
    flex-row
    overflow-hidden
`;

export const MemeBody = tw.div`
    flex-col
    w-full
`;

export const MemeReactions = tw(PostReactions)`
    flex    
    flex-col
    space-x-0
    h-full
    p-3
    border-r
    dark:border-gray-600
`;

export const MemeReaction = tw(PostReaction)`
mr-0
`;

export const MemeContent = tw(PostContent)`
mb-3
`;
