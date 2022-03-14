import { useEffect, useState } from 'react';
import { getPostCountByCategory } from '$features/shared/services/Post.service';
import { PostTypeEnum } from '$features/shared/types/Post.types';
import {
	HeaderGradient,
	HeaderImg,
	HeaderImgWrapper,
	HeaderInfo,
	HeaderTitle,
	SectionHeaderContainer,
	HeaderDescription,
} from './SectionHeader.styles';

interface ISectionHeaderProps {
	sectionImage: string;
	sectionName: string;
	sectionDescription: string;
	sectionType: PostTypeEnum;
}

const SectionHeader = ({
	sectionType,
	sectionImage,
	sectionName,
	sectionDescription,
}: ISectionHeaderProps) => {
	const [postCount, setPostCount] = useState(0);

	useEffect(() => {
		(async () => {
			await getPostCountByCategory(sectionType).then((count) => {
				setPostCount(count);
			});
		})();
	}, [sectionType]);

	return (
		<SectionHeaderContainer>
			<HeaderImgWrapper>
				<HeaderImg src={sectionImage} alt={sectionName} />
				<HeaderGradient />
			</HeaderImgWrapper>
			<HeaderTitle>{sectionName}</HeaderTitle>
			<HeaderInfo>{postCount} postów</HeaderInfo>
			<HeaderDescription>{sectionDescription}</HeaderDescription>
		</SectionHeaderContainer>
	);
};

export default SectionHeader;
