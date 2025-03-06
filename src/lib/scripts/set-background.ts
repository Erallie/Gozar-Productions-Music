export function setBackground(url: string) {
	document.documentElement.style.setProperty(
		"--background-image",
		`url(${url})`
	);
}
