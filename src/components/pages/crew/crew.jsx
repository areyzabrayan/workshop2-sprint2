import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import employee1 from '../../../assets/crew/image-douglas-hurley.webp';
import employee2 from '../../../assets/crew/image-mark-shuttleworth.webp';
import employee3 from '../../../assets/crew/image-victor-glover.webp';
import employee4 from '../../../assets/crew/image-anousheh-ansari.webp';
import './crew.scss'

const crewData = [
  {
    "name": "Douglas Hurley",
    "image": employee1,
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    "name": "Mark Shuttleworth",
    "image": employee2,
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "image": employee3,
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "image": employee4,
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]
const buttons = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];


const Crew = () => {


  const [crewInfo, setCrewInfo] = useState()
  const [indexParameter, setindexParameter] = useState()

  const { id } = useParams();
  const navigate = useNavigate();


  const handleButtonClick = (buttonId) => {
    let index = Number(buttonId) + 1;
    navigate(`/crew/${index}`)
  };



  const loadData = () => {
    let index = 0;

    index = Number(id) - 1;
    if (index < 0) {
      index = 0;
    }
    if (index > 3) {
      index = 3;
    }
    else {
      index = Number(id) - 1;
    }

    setCrewInfo(crewData[index]);
    setindexParameter(index);
  }


  useEffect(() => {
    loadData()
  }, [id]);



  return (
    <>
      {
        crewInfo != undefined ? (
          <div className="containerC">


            <div className='containerC__left'>
              <div className='containerC__left__titles'>
                <h4>02</h4>
                <h2>MEET THE CREW</h2>
              </div>
              <div className='containerC__left__content'>
                <div className='containerC__left__content__info'>
                  <div className='containerC__left__content__info__roles'>
                    <h3>{crewInfo.role}</h3>
                    <h2>{crewInfo.name}</h2>
                  </div>
                  <div className='containerC__left__content__info__bio'>
                    <p>{crewInfo.bio}</p>
                  </div>
                </div>
                <div className='containerC__left__content__buttons'>


                  {buttons.map((button, index) => (


                    <button key={button.id}
                      onClick={() => handleButtonClick(button.id)}

                      style={{
                        backgroundColor: index === indexParameter ? '#FFFFFF' : '#363841'

                      }}
                    >

                    </button>

                  ))}

                </div>
              </div>



            </div>
            <div className='containerC__right'>
              <div className="containerC__right__image">
                <figure>


                  <img src={crewInfo.image} />
                </figure>
              </div>
            </div>
          </div>
        ) : <div className="containerC">

          <div className='Loading'><h1>Loading</h1></div>
        </div>
      }
    </>

  );

}

export default Crew