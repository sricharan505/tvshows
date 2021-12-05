import { Field, Form, Formik } from "formik"
import { genreDTO } from "../genres/genre.model"
import Button from "../utils/Button"

export default function FilterShows()
{
    const initialValues: filterShowsForm = 
    {
    title:'',
    genreId: 0,
    upcomingReleases: false,
    released: false
    }

    const genres:genreDTO[] = [{id:1,name:'Drama'},{id:2,name:'Comedy'}];

    return (
    <>
        <h3>Filter Shows</h3>
            <Formik initialValues={initialValues} 
                onSubmit={values=>console.log(values)}
            >
                {(formikProps) => 
                    (
                        <Form>
                            <div className="row gx-3 align-items-center">
                                <div className="col-auto">
                                    <input type="text" className="from-control" id="title" 
                                        placeholder="Title of the show"
                                        {...formikProps.getFieldProps("title")}/>
                                    
                                </div>
                                <div className="col-auto">
                                    <select className="form-select" 
                                        {...formikProps.getFieldProps("genreId")}
                                    >
                                        <option value="0">--Choose a genre--</option>
                                        {genres.map(genre=> <option key={genre.id}
                                            value={genre.id}
                                        >
                                        {genre.name}</option>)}
                                    </select>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <Field className="form-check-input" id="upcomingReleases"
                                        name="upcomingReleases" type="checkbox" />
                                        <label className="form-check-label"
                                        htmlFor="upcomingReleases">Upcoming Releases</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <Field className="form-check-input" id="released"
                                        name="released" type="checkbox" />
                                        <label className="form-check-label"
                                        htmlFor="released">Released</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <Button className="btn btn-primary"
                                    onClick={() => formikProps.submitForm()}
                                    >Filter</Button>
                                    <Button className="btn btn-danger ms-3"
                                    onClick={() => formikProps.setValues(initialValues)}
                                    >Clear</Button>
                                </div>
                            </div>
                        </Form>
                    )
                }
            </Formik>
    </>
    )
}

interface filterShowsForm
{
    title:string;
    genreId: number;
    upcomingReleases: boolean;
    released: boolean;
}