import React from 'react';
import AdditionalInfo from '../components/AdditionalInfo';
import Aside from '../components/Aside';
import { BaseContainer, BaseLayout } from './Base.layout.styles';

interface IProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: IProps) => (
		<BaseLayout>
			<BaseContainer>
				<Aside />
				{children}
				<AdditionalInfo />
			</BaseContainer>
		</BaseLayout>
	)

export default HomeLayout;
