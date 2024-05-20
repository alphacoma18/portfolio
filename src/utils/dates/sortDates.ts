function sortDates<T>(
	items: T[],
	getDate: (item: T) => { year: number; month: number },
	isDescending: boolean = false, // Default to ascending
): T[] {
	return items.sort((a, b) => {
		const dateA = new Date(getDate(a).year, getDate(a).month - 1);
		const dateB = new Date(getDate(b).year, getDate(b).month - 1);
		return isDescending
			? dateB.getTime() - dateA.getTime()
			: dateA.getTime() - dateB.getTime();
	});
}

export default sortDates;
