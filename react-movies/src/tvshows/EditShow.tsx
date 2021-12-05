import { actorDTO } from '../actors/actors.model';
import { genreDTO } from '../genres/genre.model';
import { platformDTO } from '../platforms/platform.model';
import ShowForm from './ShowForm';
export default function EditShow()
{
    const nonSelectedGenres: genreDTO[] = [{id:1,name:'comedy'}]
    const selectedGenres: genreDTO[] = [{id:2,name:'Drama'}]

    const nonSelectedPlatform: platformDTO[] = [{id:1,name:'Netflix'}]
    const selectedPlatform: platformDTO[] = [{id:2,name:'Amazon Prime'}]

    const selectedActors: actorDTO[] = [{
        id: 1, name: 'Felipe', character: 'gerald', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg'
    }]

    return (
        <>
            <h3>Edit Show</h3>
            <h3>Create Show</h3>
            <ShowForm model={{title:'',released:false,platform:'',trailer:''}}
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={selectedGenres}
                nonSelectedPlatform={nonSelectedPlatform}
                selectedPlatform={selectedPlatform}

                selectedActors={selectedActors}
            />
            
        </>
    )
}