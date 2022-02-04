import useDark from "$features/shared/hooks/useDark";
import { AiOutlineUser } from "react-icons/ai";
import {
	BsEmojiLaughing,
	BsChatSquareText,
	BsInfoCircle,
	BsCalendarEvent,
	BsCalendar4Week,
	BsGear,
	BsMoonStars,
	BsSun,
} from "react-icons/bs";
import Logo from "../Logo";
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
} from "./Aside.styles";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "$features/shared/firebase/auth";

const Aside = () => {
	const { toggle, isDark } = useDark();
	const [user] = useAuthState(auth);

	return (
		<HomeAside>
			<AsideTitle>
				<Logo />
			</AsideTitle>
			<ListHeader>Zespół Szkół Elektrycznych nr.1</ListHeader>
			<AsideList>
				<ListItem>
					<ListItemLink href="/">
						<ListItemIcon>
							<BsEmojiLaughing />
						</ListItemIcon>
						<ListItemText>Memawka</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink href="/">
						<ListItemIcon>
							<BsChatSquareText />
						</ListItemIcon>
						<ListItemText>Spotted</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink href="/">
						<ListItemIcon>
							<BsInfoCircle />
						</ListItemIcon>
						<ListItemText>Info</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink href="/">
						<ListItemIcon>
							<BsCalendarEvent />
						</ListItemIcon>
						<ListItemText>Wydarzenia</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink href="/">
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
					<ListItemLink href="/">
						<ListItemIcon>
							<BsCalendar4Week />
						</ListItemIcon>
						<ListItemText>Plan lekcji</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink href="/">
						<ListItemIcon>
							<BsInfoCircle />
						</ListItemIcon>
						<ListItemText>Info</ListItemText>
					</ListItemLink>
				</ListItem>
				<ListItem>
					<ListItemLink href="/">
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
									"transitionend",
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
				<UserImg src={user?.photoURL} />
			</AsideUserContainer>
		</HomeAside>
	);
};

export default Aside;
