import { ErrorMessage, Field } from "formik";
import React from "react";

export default function TextField(props: textFieldprops)
{
    return(
        <div className="mb-3">
                    <label htmlFor={props.field}>{props.displayName}</label>
                    <Field name={props.field} id={props.field} className="form-control"></Field>
                    <ErrorMessage name={props.field}>{msg=><div className="text-danger">{msg}</div>}</ErrorMessage>
        </div>
    )

}

interface textFieldprops{
    field:string;
    displayName: string
}