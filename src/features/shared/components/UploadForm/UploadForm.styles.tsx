import tw from "twin.macro";

export const FormContainer = tw.div`
mb-4
bg-white
p-6
rounded-lg
border
border-gray-200
border-solid
dark:bg-gray-800
dark:border-gray-700
bg-opacity-50
dark:bg-opacity-50
backdrop-blur
text-gray-800
dark:text-gray-100
`;

export const FormHeader = tw.div`
flex
text-xl
justify-between
w-full
items-center
`;

export const FormHeaderName = tw.div`
flex
items-center
gap-2
text-lg
`;

export const FormHeaderSelect = tw.select`
border-none
bg-purple-800
p-3
text-base
px-4
rounded-lg
outline-none
text-gray-100
hover:bg-purple-700
cursor-pointer
transition-all
`;

export const FormHeaderImage = tw.img`
w-10
h-10
rounded-full
`;

export const Form = tw.form`
flex
flex-col
`;

export const FormTextArea = tw.textarea`
mt-4
p-3
text-base
px-4
rounded-lg
outline-none
text-gray-800
dark:text-gray-100
border
border-solid
border-gray-200
dark:border-gray-700
bg-gray-100
dark:bg-gray-800
resize-y
font-normal
font-sans
`;

export const FormPublishButton = tw.button`
transition-all
bg-gray-100
dark:bg-gray-700
text-gray-800
mt-4
text-base
px-4
h-12
rounded-lg
outline-none
dark:text-gray-100
hover:bg-purple-700
hover:text-gray-100
cursor-pointer
border
border-solid
border-gray-200
dark:border-gray-700
hover:border-none
`;

export const FormInput = tw.input`
mt-4
p-3
text-base
px-4
rounded-lg
outline-none
text-gray-800
dark:text-gray-100
border
border-solid
border-gray-200
dark:border-gray-700
bg-gray-100
dark:bg-gray-800
font-normal
font-sans
`;

export const DropZone = tw.div`
transition-all
flex
flex-col
justify-center
items-center
mt-4
p-3
text-base
px-4
rounded-lg
outline-none
text-gray-800
dark:text-gray-700
border
border-solid
border-gray-200
dark:border-gray-700
bg-gray-100
dark:bg-gray-800
font-normal
font-sans
h-24
hover:text-purple-700
`;

export const FormLabel = tw.label`
text-purple-700
mt-4
mb-2
`;

export const ImagePreview = tw.img`
w-full
object-contain
max-h-[200px]
border
border-solid
border-gray-200
dark:border-gray-700
bg-gray-100
dark:bg-gray-800
rounded-lg
p-2
`;
