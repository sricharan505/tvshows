export interface showDTO
{
    id:number;
    title:string;
    poster:string;
}
export interface showCreationDTO
{
    title:string;
    released:boolean;
    platform:string;
    trailer:string;
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;
    genresIds?: number[];
    platformIds?: number[];
    actors?: actorDTO[];
}

export interface landingPageDTO 
{
    released?: showDTO[];
    upcomingReleases?: showDTO[]; 
}