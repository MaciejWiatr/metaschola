import useBestStudents from "$features/shared/hooks/useBestStudents";
import SearchForm from "../SearchForm";
import {
	InfoContainer,
	RankItem,
	RankItemIcon,
	RankItemText,
	RankList,
	UserRank,
	UserRankHeader,
} from "./AdditionalInfo.styles";
import { BsFillPencilFill } from "react-icons/bs";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

const AdditionalInfo = () => {
	const { bestStudents } = useBestStudents();

	return (
		<InfoContainer>
			<SearchForm />
			<UserRank>
				<UserRankHeader>
					Ranking najbardziej aktywnych uczniów w szkole
				</UserRankHeader>
				<AnimateSharedLayout>
					<RankList layout>
						<AnimatePresence>
							{bestStudents.map((student, index) => (
								<RankItem layout key={student.id}>
									<RankItemText>
										{index + 1}. {student.name}
									</RankItemText>
									<RankItemIcon>
										{student.posts} <BsFillPencilFill />
									</RankItemIcon>
								</RankItem>
							))}
						</AnimatePresence>
					</RankList>
				</AnimateSharedLayout>
			</UserRank>
		</InfoContainer>
	);
};

export default AdditionalInfo;
