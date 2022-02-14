import dayjs from 'dayjs';

const getRelativeDate = (createdAt: {
	nanoseconds: number;
	seconds: number;
}) => dayjs.unix(createdAt.seconds).fromNow();

export default getRelativeDate;
