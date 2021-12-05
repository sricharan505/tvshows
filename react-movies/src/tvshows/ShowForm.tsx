import {showCreationDTO} from './shows.model';
import {Form,Formik, FormikHelpers} from "formik";
import * as Yup from 'yup';
import TextField from '../forms/TextField';
import Button from "../utils/Button";
import { Link} from 'react-router-dom';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';
import CheckboxField from '../forms/CheckboxField';
import MultipleSelector, { multipleSelectorModel } from '../forms/MultipleSelector';
import { useState } from 'react';
import { genreDTO } from '../genres/genre.model';
import { platformCreationDTO, platformDTO } from '../platforms/platform.model';
import { actorCreationDTO, actorDTO } from '../actors/actors.model';
import TypeAheadActors from '../forms/TypeAheadActors';

export default function ShowForm(props: showFormProps)
{
    const [selectedGenres,setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres] = useState(mapToModel(props.nonSelectedGenres));

    const [selectedPlatform, setSelectedPlatform] = useState(mapToModel(props.selectedPlatform));
    const [nonSelectePlatform, setNonSelectedPlatform] = useState(mapToModel(props.nonSelectedPlatform));

    const [selectedActors, setSelectedActors] = useState(props.selectedActors);

    function mapToModel(items: { id: number, name: string }[]): multipleSelectorModel[] 
    {
        return items.map(item => {
            return { key: item.id, value: item.name }
        })
    }
    return(
        <Formik initialValues={props.model} 
            onSubmit={(values,actions) => {
                values.genresIds = selectedGenres.map(item => item.key);
                values.platformIds = selectedPlatform.map(item => item.key);
                values.actors = selectedActors;
                props.onSubmit(values,actions)
            
            }}
            validationSchema={Yup.object({
                title: Yup.string().required('This field is required').firstLetterUppercase()
            })}
        >
            {(formikProps)=>(
                <Form>
                    <TextField displayName="Title" field="title" />
                    <CheckboxField displayName="Released" field="released" />
                    <TextField displayName="Platform" field="platform" />
                    <TextField displayName="Trailer" field="trailer" />
                    <DateField displayName="Release Date" field="releaseDate" />
                    <ImageField displayName="Poster" field="poster"
                        imageURL={props.model.posterURL}
                    />

                    <MultipleSelector
                        displayName="Genres"
                        nonSelected={nonSelectedGenres}
                        selected={selectedGenres}
                        onChange={(selected,nonSelected)=>{
                            setSelectedGenres(selected);
                            setNonSelectedGenres(nonSelected);
                        }}
                    />

                    <MultipleSelector
                        displayName="Platforms"
                        nonSelected={nonSelectePlatform}
                        selected={selectedPlatform}
                        onChange={(selected,nonSelected)=>{
                            setSelectedPlatform(selected);
                            setNonSelectedPlatform(nonSelected);
                        }}
                    />

                    <TypeAheadActors displayName="Actors" actors={selectedActors} 
                        onAdd={actors => {setSelectedActors(actors);}}
                        onRemove={actor => {
                            const actors = selectedActors.filter(x => x !== actor);
                            setSelectedActors(actors);
                        }}
                        listUI={(actor: actorDTO) => 
                        <>
                            {actor.name} / <input placeholder="Character" type="text"
                                value={actor.character}
                                onChange={e => {
                                    const index = selectedActors.findIndex(x => x.id === actor.id);

                                    const actors = [...selectedActors];
                                    actors[index].character = e.currentTarget.value;
                                    setSelectedActors(actors);
                                }} />
                        </>
                    }
                    />

                    <Button disabled={formikProps.isSubmitting} 
                        type='submit'
                    >
                        Save Changes
                    </Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface showFormProps
{
    model:showCreationDTO;
    onSubmit(values:showCreationDTO,actions: FormikHelpers<showCreationDTO>):void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedPlatform: platformDTO[];
    nonSelectedPlatform: platformDTO[];
    selectedActors: actorDTO[];
}