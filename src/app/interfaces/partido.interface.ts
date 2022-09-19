import { Video } from "./video.interface";

export interface Partido {
    title: string;
    competition: string;
    matchviewUrl: string;
    competitionUrl: string;
    thumbnail: string;
    date: Date;
    videos: Video[];
}