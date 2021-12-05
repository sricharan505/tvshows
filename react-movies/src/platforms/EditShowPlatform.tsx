import PlatformForm from './PlatformForm';
export default function EditShowPlatform(){
    return (
        <>
            <h3>Edit Show Platform</h3>
            <PlatformForm 
                model={{name: '',url:''}}
                onSubmit={values => console.log(values)}
            />
            
        </>
    )
}