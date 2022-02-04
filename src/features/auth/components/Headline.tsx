import tw from "twin.macro";

const Headline = () => {
	return (
		<HeadLineContainer>
			<HeadLineText>Życie twojej szkoły w jednym miejscu</HeadLineText>
			<SubHeadLineText>
				Laboris sunt id Lorem eiusmod duis esse ipsum dolore eiusmod
				deserunt.
			</SubHeadLineText>
		</HeadLineContainer>
	);
};

const HeadLineContainer = tw.div`
`;

const HeadLineText = tw.h1`
    text-6xl
    font-bold
    text-gray-100
    dark:text-gray-100
    font-mont
    mb-8
`;

const SubHeadLineText = tw.h2`
    font-normal
    text-gray-300
    dark:text-gray-100
    font-mont
    text-base
    mb-8
    w-96
`;

export default Headline;
