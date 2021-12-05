import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from '../forms/TextField';
import Button from '../utils/Button';

import { platformCreationDTO } from "./platform.model";
import * as Yup from 'yup';


export default function PlatfromForm(props: platfromForm)
{

    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUppercase(),
                link: Yup.string().optional()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName="Name" field="name" />
                    <TextField displayName="URL" field="url" />
                    <Button disabled={formikProps.isSubmitting} type="submit">
                        Save Changes
                    </Button>
                    <Link className="btn btn-secondary" to="/movietheaters">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface platfromForm 
{
    model: platformCreationDTO;
    onSubmit(values: platformCreationDTO, actions: FormikHelpers<platformCreationDTO>): void;
}