import React from 'react';
import AdditionalInfo from '../components/AdditionalInfo';
import Aside from '../components/Aside';
import { BaseContainer, BaseLayout, MainContainer } from './Base.layout.styles';

interface IProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: IProps) => (
	<BaseLayout>
		<BaseContainer>
			<Aside />
			<MainContainer>{children}</MainContainer>
			<AdditionalInfo />
		</BaseContainer>
	</BaseLayout>
);

export default HomeLayout;
