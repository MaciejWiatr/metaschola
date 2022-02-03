import tw from "twin.macro";

export const BaseLayout = tw.div`
    bg-gray-100 w-full h-full min-h-screen
    px-[5vw] box-border text-gray-800
    dark:bg-gray-900
    bg-opacity-95
    dark:bg-opacity-90
`;

export const BaseContainer = tw.div`
    mx-auto h-full w-full max-w-6xl flex gap-4
`;
