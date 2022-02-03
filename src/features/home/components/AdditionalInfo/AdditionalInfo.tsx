import SearchForm from "../SearchForm";
import {
	InfoContainer,
	RankItem,
	RankList,
	UserRank,
	UserRankHeader,
} from "./AdditionalInfo.styles";

const AdditionalInfo = () => {
	return (
		<InfoContainer>
			<SearchForm />
			<UserRank>
				<UserRankHeader>
					Ranking najbardziej aktywnych uczniów w szkole
				</UserRankHeader>
				<RankList>
					<RankItem>Maciej Wiatr</RankItem>
					<RankItem>Maciej Wiatr</RankItem>
					<RankItem>Maciej Wiatr</RankItem>
				</RankList>
			</UserRank>
		</InfoContainer>
	);
};

export default AdditionalInfo;
