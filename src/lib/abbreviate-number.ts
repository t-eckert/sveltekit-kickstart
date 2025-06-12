export default function abbreviateNumber(num: number): string {
	if (num < 1000) {
		return num.toString();
	}

	const units = ['K', 'M', 'B', 'T'];
	let unitIndex = -1;

	while (num >= 1000 && unitIndex < units.length - 1) {
		num /= 1000;
		unitIndex++;
	}

	return `${num.toFixed()}${units[unitIndex]}`;
}
