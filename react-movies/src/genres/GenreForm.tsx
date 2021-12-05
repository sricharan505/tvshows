import Button from "../utils/Button";
import { Link, useHistory } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik, FormikHelpers, yupToFormErrors } from "formik";
import * as Yup from 'yup';
import TextField from '../forms/TextField';
import {genreCreationDTO} from './genre.model';

export default function GenreForm(props:genreFormProps)
{
    return(
        <Formik initialValues={props.model} onSubmit={props.onSubmit} 
        validationSchema={Yup.object({name: Yup.string().required('This field is required').max(50,'Max length is 50 characters').firstLetterUppercase()})}
        >
            {(formikprops) => (
                <Form>
                <TextField field="name" displayName="Name"/>

                <Button disabled={formikprops.isSubmitting} type='submit'>Save Changes</Button>
                <Link className="btn btn-secondary" to="/genres">Cancel</Link>
            </Form>
            )}
            
        </Formik> 
    )
}

interface genreFormProps{
    model:genreCreationDTO;
    onSubmit(values:genreCreationDTO,action:FormikHelpers<genreCreationDTO>) : void;
}