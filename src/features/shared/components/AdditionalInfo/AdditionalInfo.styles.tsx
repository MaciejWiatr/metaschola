import { motion } from "framer-motion";
import tw from "twin.macro";

export const InfoContainer = tw.div`
    lg:flex flex-col w-72 pt-8 sticky top-0 left-0 z-50 h-screen box-border gap-4 hidden
`;

export const UserRank = tw.div`
    w-full
    flex
    flex-col
    p-4
    bg-white
    rounded-lg
    border
    border-gray-200
    border-solid
    dark:bg-gray-800
    dark:border-gray-700
`;

export const UserRankHeader = tw.p`
    text-sm
    text-gray-400
`;

export const RankList = tw(motion.ul)`
    list-none
    p-0
    mt-0
    space-y-3
`;

export const RankItem = tw(motion.li)`
text-gray-700
dark:text-gray-300
p-3
border-0
not-last:border-b
border-solid
border-gray-100
dark:border-gray-700
flex
h-12
justify-between
`;

export const RankItemText = tw.p`
`;

export const RankItemIcon = tw.div`
    text-purple-600
    font-semibold
    flex items-center
    gap-2
`;
