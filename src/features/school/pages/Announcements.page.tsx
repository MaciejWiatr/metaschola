import { SectionHeader } from '$features/shared';
import PostList from '$features/shared/components/PostList';
import SchoolLayout from '../layouts/School.layout';

const AnnouncementsPage = () => (
	<SchoolLayout>
		<SectionHeader
			sectionImage="https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/s960x960/77204707_129159528523847_617671453134815232_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8631f5&_nc_ohc=JpkIRoLmYjEAX_bF2Fv&_nc_ht=scontent-waw1-1.xx&oh=00_AT93prlSM-7ZVKPykSp1KzU1ALWda7UHSmboUC5KvpBgNA&oe=6232C7A5"
			sectionName="Ogłoszenia"
			sectionType="announcement"
			sectionDescription="Tutaj znajdziesz najważniejsze ogłoszenia od samorządu i dyrekcji"
		/>
		<PostList category="announcement" />
	</SchoolLayout>
);

export default AnnouncementsPage;
