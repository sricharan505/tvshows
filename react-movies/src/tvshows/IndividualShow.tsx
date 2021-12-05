import { showDTO } from "./shows.model";
import css from './individualShow.module.css';
export default function IndividualShow(props:showDTO)
{
    const buildLink = () => `/movie/${props.id}`
    return(
        <div className={css.div}>
            <a href={buildLink()}>
                <img src={props.poster} alt="Poster" />
            </a>
            <p>
                <a href={buildLink()}>{props.title}</a>
            </p>
        </div>
    )
}