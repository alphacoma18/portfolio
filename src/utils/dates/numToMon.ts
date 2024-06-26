const months = {
	1: "Jan",
	2: "Feb",
	3: "Mar",
	4: "Apr",
	5: "May",
	6: "Jun",
	7: "Jul",
	8: "Aug",
	9: "Sep",
	10: "Oct",
	11: "Nov",
	12: "Dec",
} as const;
type Month = keyof typeof months;
function numToMonth(num: number) {
	if (num < 1 || num > 12) throw new Error("Invalid month number");
	return months[num as Month];
}

export default numToMonth;
