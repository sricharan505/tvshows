import PlatformForm from './PlatformForm';
export default function CreateShowPlatform(){
    return (
        <>
            <h3>Create Show Platform</h3>
            <PlatformForm 
                model={{name: '',url:''}}
                onSubmit={values => console.log(values)}
            />
            
        </>
    )
}