import { AiOutlineUser } from "react-icons/ai";
import {
	BsEmojiLaughing,
	BsChatSquareText,
	BsInfoCircle,
	BsCalendarEvent,
	BsCalendar4Week,
	BsGear,
} from "react-icons/bs";
import Logo from "../Logo";
import {
	AsideIconLink,
	AsideList,
	AsideSpacer,
	AsideTitle,
	AsideUserContainer,
	HomeAside,
	Hr,
	ListHeader,
	ListItem,
	ListItemIcon,
	ListItemLink,
	ListItemText,
	UserImg,
} from "./Aside.styles";

const Aside = () => {
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
				<AsideIconLink href="/settings">
					<BsGear />
				</AsideIconLink>
				<UserImg src="https://fajnepodroze.pl/wp-content/uploads/2020/06/Welsh-Corgi-Pembroke.jpg" />
			</AsideUserContainer>
		</HomeAside>
	);
};

export default Aside;
