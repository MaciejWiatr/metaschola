import styled from '@emotion/styled';
import tw from 'twin.macro';

export const RatesContainer = styled.div`
	${tw``}
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: masonry;
`;
