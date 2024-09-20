import React, { useState } from 'react';
import Card from '../HomePage/Card';

const CardType4 = () => {
  // Array of card data
  const cardsData = [
    {
      title: 'Human Centered Systems',
      content: `
        Cyberization is all pervasive today with technology-driven engineering systems having a significant presence in almost all spheres of life. In fact, with each passing year, they are evolving at a very fast pace in terms of AI, computational capacities, and their scope of use.
        <br/><br/>
        While they offer numerous benefits to society on one hand, the current state of cyberization is creating an intellectual challenge to envision, design, and research Human-Centered Systems for the future. Since human-centered systems integrate CPS with various social units – organizations, communities, and distinctive social processes and practices; our lab envisions meeting the research challenges of making them more usable and sustainable.
      `,
      image:'https://epicpadprinting.com/public/img/indus/MEDICAL.png',

    },
    {
      title: 'Healthcare',
      content: `
        The demand for remote healthcare is getting more crucial than ever even as CPSs are making spectacular advancements in this sector. It is piloting technologies and software to address challenging healthcare issues and revolutionizing how myriad healthcare issues are tackled. The CPS healthcare ecosystem has evolved in telemedicine, connected-health, mobile-health and intelligent health in the last two decades. Healthcare-Cyber Physical Systems (H-CPS) networks are available anywhere, anytime and to anyone with the means to digital access. Yet, they are to be rigorously explored and are a matter of high research interest.
      `,
      image:'https://epicpadprinting.com/public/img/indus/MEDICAL.png',
    },
    {
      title: 'Cybersecurity',
      content: `
        CPSs are closely integrated physical processes for networking, computation, feedback loops and comprise several tiny devices with sensing, computing and wireless communication capabilities. These enhanced functionality, automation, and connectivity also bring significant cybersecurity challenges to the CPS. Moreover, extensive connectivity makes CPS vulnerable to cyber threats and attacks, making safety, security and privacy essential research issues.
      `,
      image:'https://epicpadprinting.com/public/img/indus/MEDICAL.png',
    },
    {
      title: 'Wearables',
      content: `
        The recent spectacular progress in Sensor technologies and allied materials, internet of Things (IoT), Informations and Technology (ICT) and microelectronic fabrication techniques have created a significant stimulus towards the development of smart wearable devices. As a result, this sector is witnessing an explosive growth offering huge market and research opportunities.
        </br></br>
        Wearable devices are complex systems of sensors and cross-domain communication networks handling large amounts of data with real-time decision-making capabilities. In addition, they provide continuous autonomous service over a long period. Therefore, rigorous research in computing and design technologies is required to adequately overcome these challenges to satisfy the stringent demands of wearable devices.
      `,
      image:'https://epicpadprinting.com/public/img/indus/MEDICAL.png',
    },
    {
      title: 'New Domain',
      content: `
        Exploring a new domain with significant potential for innovation...
        (Detailed description goes here)
      `,
      image:'https://epicpadprinting.com/public/img/indus/MEDICAL.png',
    },
    {
      title: 'New Domain',
      content: `
        Exploring a new domain with significant potential for innovation...
        (Detailed description goes here)
      `,
      image:'https://epicpadprinting.com/public/img/indus/MEDICAL.png',
    }
  ];

  const [selectedTitle, setSelectedTitle] = useState(cardsData[0].title);
  const [selectedContent, setSelectedContent] = useState(cardsData[0].content);

  // Function to handle card clicks
  const updateContent = (title) => {
    setSelectedTitle(title);
    const selectedCard = cardsData.find(card => card.title === title);
    if (selectedCard) {
      setSelectedContent(selectedCard.content);
    }
  };

  return (
    <div className="bg-white flex flex-col md:flex-row xs:flex-col gap-1 w-[70%] p-8 mb-8 shadow-md border-[1px] hover:shadow-lg">
      {/* Left Column (Cards) */}
      {/* <!-- Left side: Cards list --> */}
    {/* <div class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2"> */}
      <div class="scale-75 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-28 lg:gap-y-16">
 
          {/* Cards with click functionality */}
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              onClick={() => updateContent(card.title)}
            />
          ))}
        </div>
      {/* </div> */}

      {/* Right Column (Dynamic Content) */}
      <div className="flex flex-col flex-1 gap-10 p-12">
        <p className="font-bold text-left text-3xl text-[#a0034c]">
          {selectedTitle}
        </p>
        <div
          className="font-poppins font-normal text-[rgb(10,1,1)] text-sm leading-2"
          dangerouslySetInnerHTML={{ __html: selectedContent }}
        ></div>
        <p className="text-md font-bold text-left text-[#a0034c] hover:translate-x-1 hover:text-[var(--accent-hover)]">Read more...</p>
      </div>
    </div>
  );
};

export default CardType4;
