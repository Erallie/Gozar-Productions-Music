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