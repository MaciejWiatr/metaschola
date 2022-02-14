import tw from 'twin.macro';
import {
  PostAuthorName,
  PostCard,
  PostContent,
} from '../Default/DefaultPost.styles';

export const AnnouncementPostCard = tw(PostCard)`
bg-gradient-to-tr from-purple-900 to-purple-500
text-white
dark:bg-opacity-70
border-none
backdrop-blur

`;

export const AnnouncementAuthorName = tw(PostAuthorName)`
    text-white
`;

export const AnnouncementContent = tw(PostContent)`
    py-4
    pb-6
    m-0
`;

export const AnnouncementPostCardInfo = tw.p`
    text-xl
    align-self[flex-start]
    text-purple-300
    font-semibold
    flex
    items-center
`;

export const AnnouncementPostCreatedAt = tw.p`
    text-sm
    text-gray-300
    mb-2`;
