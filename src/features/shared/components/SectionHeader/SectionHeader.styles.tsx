import tw from 'twin.macro';

export const HeaderImgWrapper = tw.div`
    h-56
    rounded-t-lg
    overflow-hidden
    flex
    items-center
    justify-center
    relative
    opacity-90
    object-cover
`;

export const HeaderImg = tw.img`
    w-full
    h-full
    object-cover
    max-h-56
`;

export const HeaderGradient = tw.div`
    absolute
    top-0
    left-0
    h-56
    w-full
    rounded-lg
    overflow-hidden
    flex
    items-center
    justify-center
    opacity-80
    bg-gradient-to-t from-gray-100 dark:from-gray-800 to-transparent
`;

export const HeaderTitle = tw.h1`
    text-3xl
    font-bold
    text-gray-900
    dark:text-gray-100
    mt-4
    px-8
`;

export const HeaderInfo = tw.p`
    text-base
    text-gray-600
    dark:text-gray-400
    font-semibold
    mb-2
    px-8
    
`;

export const HeaderDescription = tw.p`
    text-sm
    text-gray-900
    dark:text-gray-100
    mb-4
    px-8
`;

export const HeaderSeparator = tw.hr`
    border-b
    border-gray-200
    mb-4
    px-8
`;

export const SectionHeaderContainer = tw.div`
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
