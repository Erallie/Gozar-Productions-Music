export type InitialBoxProps = {
	imageSource: string;
	imageAlt: string;
	children: any;
};

export type audioSource = {
	name: string;
	src: string;
	startTime: number;
	endTime: number;
};

export type AlbumPlayerProps = {
	audioSources: audioSource[];
	defaultSource: number;
};

export type AudioPlayerProps = {
	src: string;
	startTime: number;
	endTime: number;
	player?: HTMLAudioElement;
	nested?: boolean;
};

export enum TextColor {
	White,
	Black,
}

export enum ButtonDirection {
	Right,
	Left,
}

export type ButtonProps = {
	element?: HTMLAnchorElement | null;
	link: string;
	newTab: boolean;
	color: TextColor;
	invertBackground?: boolean;
	direction?: ButtonDirection;
	customSVG?: boolean;
	marginTopMultiplier?: number;
	marginBottomMultiplier?: number;
	marginLeftMultiplier?: number;
	marginRightMultiplier?: number;
	addedClass?: string;
	children: any;
};

export type SectionProps = {
	title: string;
	children?: any;
};

export type ExpandedSectionProps = {
	title: string;
	ordered?: boolean;
	children?: any;
	shouldOpen?: boolean;
};

export type ListSectionWrapperProps = {
	ordered?: boolean;
	children?: any;
};
