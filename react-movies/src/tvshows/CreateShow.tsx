import { genreDTO } from '../genres/genre.model';
import { platformDTO } from '../platforms/platform.model';
import ShowForm from './ShowForm';
export default function CreateShow()
{
    const nonSelectedGenres: genreDTO[] = [{id:1,name:'comedy'},{id:2,name:'Drama'}]
    const nonSelectedPlatform: platformDTO[] = [{id:1,name:'Netflix'},{id:2,name:'Amazon Prime'}]
    return (
        <>
            <h3>Create Show</h3>
            <ShowForm model={{title:'',released:false,platform:'',trailer:''}}
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={[]}

                nonSelectedPlatform={nonSelectedPlatform}
                selectedPlatform={[]}

                selectedActors={[]}
            />
            
        </>
    )
}