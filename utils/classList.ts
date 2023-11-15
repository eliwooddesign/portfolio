export default function classList(...classNames: (string | false)[]) {
	const validClasses = classNames.filter((className) => className);

	const classNamesAsString = validClasses.join(' ');

	return classNamesAsString;
}
