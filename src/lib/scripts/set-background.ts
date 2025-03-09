export function setBackground(url: string) {
	/* document.documentElement.style.setProperty(
		"--background-image",
		`url(${url})`
	); */
	(
		document.getElementById("background-image")! as HTMLImageElement
	).setAttribute("src", url);
}
