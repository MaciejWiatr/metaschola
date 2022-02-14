import tw from 'twin.macro';

const HeadLineContainer = tw.div`
`;

const HeadLineText = tw.h1`
    mt-8
    text-6xl
    font-bold
    text-gray-100
    dark:text-gray-100
    font-mont
    mb-8
    leading-tight
    letter-spacing[2px]
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

function Headline() {
	return (
		<HeadLineContainer>
			<HeadLineText>Życie twojej szkoły w jednym miejscu</HeadLineText>
			<SubHeadLineText>
				Poznawaj nowych ludzi, wchodź z nimi w interakcje i aktywnie
				twórz społeczność swojej szkoły!
			</SubHeadLineText>
		</HeadLineContainer>
	);
}

export default Headline;
