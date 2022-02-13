import dayjs from "dayjs";

const getRelativeDate = (createdAt: {
	nanoseconds: number;
	seconds: number;
}) => {
	return dayjs.unix(createdAt.seconds).fromNow();
};

export default getRelativeDate;
