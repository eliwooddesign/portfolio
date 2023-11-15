export default function addCSSVariable(name: string, value: string, priority?: string) {
	const htmlElement = document.querySelector('html');

	htmlElement?.style.setProperty(name, value, priority);
}
