export type InitialBoxProps = {
    imageSource: string;
    imageAlt: string;
    children: any;
}

export type audioSource = {
    name: string,
    src: string,
    startTime: number,
    endTime: number,
}

export type AlbumPlayerProps = {
    audioSources: audioSource[],
    defaultSource: number
}

export type AudioPlayerProps = {
    src: string,
    startTime: number,
    endTime: number,
    player: HTMLAudioElement;
    removeMargins?: boolean
}

export enum TextColor {
    White,
    Black
}

export enum ButtonDirection {
    Right,
    Left
}

export type ButtonProps = {
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
    children: any;
}