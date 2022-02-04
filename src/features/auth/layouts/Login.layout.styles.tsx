import tw from "twin.macro";

export const LoginContainer = tw.div`
    w-full
    h-screen
    flex 
    justify-end
`;

export const LoginBlob = tw.div`
    
`;

export const FormWrapper = tw.div`
    w-full    
    md:w-2/3
    lg:w-1/2
    bg-gray-900
    h-screen
    bg-opacity-80
    backdrop-blur
    p-12
    lg:pl-24
    text-gray-100
    flex flex-col justify-center
`;

export const LoginHeader = tw.header`
    w-full
    lg:w-3/4
    mr-auto
`;

export const LogoWrapper = tw.div`
    w-32
`;
