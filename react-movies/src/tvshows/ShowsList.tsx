import IndividualShow from "./IndividualShow";
import css from "./ShowsList.module.css";
import {showDTO } from "./shows.model";
import  GenericList from './../utils/GenericList';

export default function ShowsList(props: showsListProps)
{
    return(
    <>
        <GenericList list={props.shows}>
            <div className={css.div}>
                {props.shows?.map(show =><IndividualShow {...show} key={show.id}/>)}
            </div>
        </GenericList>
    </> );
            
        
    
}

interface showsListProps
{
    shows?:showDTO[];
}