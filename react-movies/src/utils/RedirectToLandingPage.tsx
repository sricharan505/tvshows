import {Redirect} from "react-router-dom";

export default function redirectToLandingPage()
{
    return <Redirect to={{pathname:'/'}}/>
}