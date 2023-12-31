import React, { useEffect, useState } from 'react';
import './technology.scss';
import imageLaunchVehiclePortrait from '../../../assets/technology/image-launch-vehicle-portrait.jpg';
import imageSpaceportPortrait from '../../../assets/technology/image-spaceport-portrait.jpg';
import imageSpaceCapsulePortrait from '../../../assets/technology/image-space-capsule-portrait.jpg';
import imageLaunchVehiclelandscape from '../../../assets/technology/image-launch-vehicle-landscape.jpg';
import imageSpaceportlandscape from '../../../assets/technology/image-spaceport-landscape.jpg';
import imageSpaceCapsulelandscape from '../../../assets/technology/image-space-capsule-landscape.jpg';

const Technology = () => {
  const infoTech = [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": imageLaunchVehiclePortrait,
        "landscape": imageLaunchVehiclelandscape,
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": imageSpaceportPortrait,
        "landscape": imageSpaceportlandscape,
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": imageSpaceCapsulePortrait,
        "landscape": imageSpaceCapsulelandscape,
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ];

  const [currentTech, setCurrentTech] = useState(infoTech[0]);
  const [isTable, setIsTable] = useState(false);

  const [selectedTechIndex, setSelectedTechIndex] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentTech(infoTech[index]);
    setSelectedTechIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTable(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);


    handleResize();

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="containerT">
      <div className="containerT__titles">
        <h4>03</h4>
        <h2>SPACE LAUNCH 101</h2>
      </div>
      <article className="containerT__main">
      <div className='containerT__info'>
        <div className="containerT__buttons">
          {infoTech.map((tech, index) => (
            <button key={index} onClick={() => handleButtonClick(index)}className={selectedTechIndex === index ? 'selected' : ''}>
              {index + 1}
            </button>
          ))}
        </div>
        <div className="containerT__text">
          <h3>The terminology</h3>
          <h1>{currentTech.name}</h1>
          <p>{currentTech.description}</p>
        </div>
        </div>
        <div className="containerT__image">
          <figure>
            <img src={isTable ? currentTech.images.landscape : currentTech.images.portrait} alt="" />
          </figure>
        </div>
      </article>
    </div>
  );
};

//update Now


export default Technology;


