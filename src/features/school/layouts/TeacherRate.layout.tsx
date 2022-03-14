import { ReactNode } from 'react';
import { BaseLayout } from '$features/shared';

interface IProps {
	children: ReactNode;
}

const TeacherRateLayout = ({ children }: IProps) => (
	<BaseLayout>
		<div>{children}</div>
	</BaseLayout>
);

export default TeacherRateLayout;
