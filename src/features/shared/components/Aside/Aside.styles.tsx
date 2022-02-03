import tw from "twin.macro";

export const HomeAside = tw.aside`
    hidden md:h-screen md:flex flex-col sticky top-0 left-0 w-48 overflow-y-auto
`;

export const AsideTitle = tw.div`
 mt-8 mb-2
 p-2
    w-full mx-auto
    text-gray-800
    dark:text-gray-100
`;

export const AsideList = tw.ul`
    list-none
    mt-0
    p-0
`;

export const ListItem = tw.li`
    text-gray-700 hover:bg-white rounded-full transition-all w-max text-lg dark:hover:bg-gray-700
`;

export const ListItemLink = tw.a`
   flex items-center no-underline text-gray-700 dark:text-gray-300 p-2 pl-4 pr-4 transition hover:space-x-1 hover:font-semibold
`;

export const ListItemIcon = tw.div`
    mr-2 mt-1 text-purple-600 transform scale-110
    transition-all
`;

export const ListItemText = tw.p`
     my-1 transition-all
`;

export const ListHeader = tw.h3`
    text-sm font-semibold text-gray-400 mb-1`;

export const Hr = tw.hr`
    border-b border-white w-full opacity-20
`;

export const AsideSpacer = tw.div`
flex-grow
`;

export const AsideUserContainer = tw.div`
flex flex-col items-center justify-center
p-6
space-y-4
`;

export const AsideIconLink = tw.a`
flex items-center text-2xl no-underline
text-gray-400 transition hover:font-semibold
hover:bg-white rounded-full p-3 hover:text-purple-600
`;

export const UserImg = tw.img`
rounded-full
w-12
h-12
object-cover
object-center
`;

export const DarkModeButton = tw.button`
flex items-center justify-center
text-gray-400
text-2xl
font-semibold
rounded-full
p-3
transition-all
border-none
bg-transparent
cursor-pointer
overflow-hidden
`;
