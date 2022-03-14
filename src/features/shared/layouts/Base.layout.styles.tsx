import tw from 'twin.macro';

export const BaseLayout = tw.div`
    bg-gray-100 w-full h-full min-h-screen
    px-[5vw] box-border text-gray-800
    dark:bg-gray-900
    bg-opacity-95
    dark:bg-opacity-90
    dark:text-gray-100
`;

export const BaseContainer = tw.div`
    mx-auto h-full w-full max-w-6xl flex gap-4
`;

export const MainContainer = tw.main`
flex flex-col flex-1 py-8 w-full items-stretch max-w-2xl
`;
