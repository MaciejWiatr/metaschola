import { AiOutlineUser } from 'react-icons/ai';
import {
	BsEmojiLaughing,
	BsChatSquareText,
	BsInfoCircle,
	BsCalendarEvent,
	BsCalendar4Week,
	BsGear,
	BsMoonStars,
	BsSun,
	BsChatDots,
} from 'react-icons/bs';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import {
	AsideIconLink,
	AsideList,
	AsideSpacer,
	AsideTitle,
	AsideUserContainer,
	DarkModeButton,
	HomeAside,
	Hr,
	ListHeader,
	ListItem,
	ListItemIcon,
	ListItemLink,
	ListItemText,
	UserImg,
} from './Aside.styles';
import useDark from '$features/shared/hooks/useDark';
import auth from '$features/shared/firebase/auth';

const Aside = () => {
	const { toggle, isDark } = useDark();
	const [user] = useAuthState(auth);

	return (
		<HomeAside>
			<Link to="/">
				<AsideTitle>
					<Logo />
				</AsideTitle>
			</Link>
			<ListHeader>Zespół Szkół Elektrycznych nr.1</ListHeader>
			<AsideList>
				<ListItem>
					<ListItemLink to="/school/memawka">
						<ListItemIcon>
							<BsEmojiLaughing />
						</ListItemIcon>
						<ListItemText>Memawka</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink to="/school/spotted">
						<ListItemIcon>
							<BsChatSquareText />
						</ListItemIcon>
						<ListItemText>Spotted</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink to="/school/announcement">
						<ListItemIcon>
							<BsInfoCircle />
						</ListItemIcon>
						<ListItemText>Ogłoszenia</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink to="/school/discussion">
						<ListItemIcon>
							<BsChatDots />
						</ListItemIcon>
						<ListItemText>Dyskusje</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink to="/school/events">
						<ListItemIcon>
							<BsCalendarEvent />
						</ListItemIcon>
						<ListItemText>Wydarzenia</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink to="/school/teachers">
						<ListItemIcon>
							<AiOutlineUser />
						</ListItemIcon>
						<ListItemText>Nauczyciele</ListItemText>
					</ListItemLink>
				</ListItem>
			</AsideList>
			<Hr />
			<ListHeader>Klasa 4C</ListHeader>
			<AsideList>
				<ListItem>
					<ListItemLink to="/class/schedule">
						<ListItemIcon>
							<BsCalendar4Week />
						</ListItemIcon>
						<ListItemText>Plan lekcji</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink to="/class/announcements">
						<ListItemIcon>
							<BsInfoCircle />
						</ListItemIcon>
						<ListItemText>Ogłoszenia</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink to="/class/events">
						<ListItemIcon>
							<BsCalendarEvent />
						</ListItemIcon>
						<ListItemText>Wydarzenia</ListItemText>
					</ListItemLink>
				</ListItem>
			</AsideList>
			<AsideSpacer />
			<AsideUserContainer>
				<DarkModeButton onClick={toggle}>
					<SwitchTransition>
						<CSSTransition
							key={JSON.stringify(isDark)}
							addEndListener={(node, done) =>
								node.addEventListener(
									'transitionend',
									done,
									false
								)
							}
							classNames="slide"
						>
							{isDark ? <BsMoonStars /> : <BsSun />}
						</CSSTransition>
					</SwitchTransition>
				</DarkModeButton>
				<AsideIconLink href="/settings">
					<BsGear />
				</AsideIconLink>
				<UserImg src={user?.photoURL as string} />
			</AsideUserContainer>
		</HomeAside>
	);
};

export default Aside;
