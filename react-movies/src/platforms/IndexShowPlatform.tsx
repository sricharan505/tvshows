import { Link } from "react-router-dom";

export default function IndexShowPlatforms(){
    return (
        <>
            <h3>Show Platforms</h3>
            <Link className="btn btn-primary" to="/showplatform/create">Create Show Platform</Link>
        </>
    )
}