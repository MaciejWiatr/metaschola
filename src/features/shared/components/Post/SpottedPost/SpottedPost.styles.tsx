import tw from 'twin.macro';
import {
  GroupInfo,
  GroupLink,
  PostAuthorName,
  PostCard,
} from '../Default/DefaultPost.styles';

export const SpottedPostCard = tw(
  PostCard,
)`bg-gray-200 border-gray-300 text-gray-800 dark:bg-opacity-50 dark:bg-black `;

export const SpottedPostAuthorName = tw(PostAuthorName)`
    text-base
`;

export const SpottedGroupInfo = tw(GroupInfo)`
`;

export const SpottedGroupLink = tw(GroupLink)`
    text-purple-500
`;
