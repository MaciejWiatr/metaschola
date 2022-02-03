import tw from "twin.macro";

const Headline = () => {
	return (
		<HeadLineContainer>
			<HeadLineText>Życie twojej szkoły w jednym miejscu</HeadLineText>
		</HeadLineContainer>
	);
};

const HeadLineContainer = tw.div`
`;

const HeadLineText = tw.h1`
    text-5xl
    font-bold
    text-center
    text-gray-100
    dark:text-gray-100
    uppercase
    font-mont
`;

export default Headline;
