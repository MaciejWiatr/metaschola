import tw from 'twin.macro';

export const SearchContainer = tw.form`
w-full
relative
`;

export const SearchInput = tw.input`
p-4
bg-white
rounded-lg
border
border-gray-200
border-solid
text-lg
w-full
dark:bg-gray-800
    dark:border-gray-700
`;

export const SearchIcon = tw.div`
absolute
top-[1.35rem]
-right-1
z-10
w-10
h-10
text-gray-400
`;
