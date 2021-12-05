export interface actorCreationDTO
{
    name: string;
    dateOfBirth?: Date;
    picture?: File;
    pictureURL?: string;
    biography?: string;
}

export interface actorDTO
{
    id: number;
    name: string;
    picture: string;
    character: string;
}