import tw from 'twin.macro';

export const GoogleLoginButton = tw.button`
    h-12
    border-none
    bg-gray-100
    rounded-lg
    font-semibold
    px-4
    font-mont
    flex
    items-center
    gap-2
    cursor-pointer
    hover:bg-gray-200
    hover:shadow-lg
    text-gray-900
`;

export const GoogleIcon = tw.div`
    w-6
    h-6
    bg-gray-100
    rounded-full
    flex
    justify-center
    items-center
    text-2xl
`;
