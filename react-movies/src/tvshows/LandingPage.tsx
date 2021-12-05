import { useEffect, useState } from "react";
import { landingPageDTO } from "./shows.model";
import ShowsList from "./ShowsList";

export default function LandingPage()
{
    const [shows,setShows] = useState<landingPageDTO>({});

  useEffect(()=>
  {
    const timerId = setTimeout(() => 
    {
      setShows
      ({
      released:[
        {
          id:1,
          title:'breaking bad',
          poster:'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Breaking_Bad_title_card.png/250px-Breaking_Bad_title_card.png'
        },
        {
          id:2,
          title:'Dexter',
          poster:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Dexter_TV_Series_Title_Card.jpg/250px-Dexter_TV_Series_Title_Card.jpg'
        }
      ],
      upcomingReleases:
      [
        {
          id:1,
          title:'breaking bad 2',
          poster:'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Breaking_Bad_title_card.png/250px-Breaking_Bad_title_card.png'
        }
      ]
      })
    },1000);

    return () => clearTimeout(timerId);
  });
    return(
        <>
            <h3>Released</h3>
            <ShowsList shows ={shows.released}/>

            <h3>Upcoming Releases</h3>
            <ShowsList shows={shows.upcomingReleases}/>
        </>
    )
}