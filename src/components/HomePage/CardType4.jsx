import React, { useState } from 'react';
import Card from './Card';

const CardType4 = () => {
  const [selectedTitle, setSelectedTitle] = useState('Human Centered Systems');
  const [selectedContent, setSelectedContent] = useState(`
    Cyberization is all pervasive today with technology-driven engineering systems having a significant presence in almost all spheres of life. In fact, with each passing year, they are evolving at a very fast pace in terms of AI, computational capacities, and their scope of use.
    <br/><br/>
    While they offer numerous benefits to society on one hand, the current state of cyberization is creating an intellectual challenge to envision, design, and research Human-Centered Systems for the future. Since human-centered systems integrate CPS with various social units – organizations, communities, and distinctive social processes and practices; our lab envisions meeting the research challenges of making them more usable and sustainable.
  `);

  // Function to handle card clicks
  const updateContent = (title) => {
    setSelectedTitle(title);

    if (title === 'Human Centered Systems') {
      setSelectedContent(`
    Cyberization is all pervasive today with technology-driven engineering systems having a significant presence in almost all spheres of life. In fact, with each passing year, they are evolving at a very fast pace in terms of AI, computational capacities, and their scope of use.
    <br/><br/>
    While they offer numerous benefits to society on one hand, the current state of cyberization is creating an intellectual challenge to envision, design, and research Human-Centered Systems for the future. Since human-centered systems integrate CPS with various social units – organizations, communities, and distinctive social processes and practices; our lab envisions meeting the research challenges of making them more usable and sustainable.
  `);
    } else if (title === 'Healthcare') {
      setSelectedContent(`
      The demand for remote healthcare is getting more crucial than ever even as CPSs are making spectacular advancements in this sector. It is piloting technologies and software to address challenging healthcare issues and revolutionizing how myriad healthcare issues are tackled. The CPS healthcare ecosystem has evolved in telemedicine, connected-health, mobile-health and intelligent health in the last two decades. Healthcare-Cyber Physical Systems (H-CPS) networks are available anywhere, anytime and to anyone with the means to digital access. Yet, they are to be rigorously explored and are a matter of high research interest.
      `);
    } else if (title === 'Cybersecurity') {
      setSelectedContent(`
        CPSs are closely integrated physical processes for networking, computation, feedback loops and comprise several tiny devices with sensing, computing and wireless communication capabilities. These enhanced functionality, automation, and connectivity also bring significant cybersecurity challenges to the CPS. Moreover,  extensive connectivity makes CPS vulnerable to cyber threats and attacks, making safety, security and privacy essential research issues.
      `);
    } else if (title === 'Wearables') {
      setSelectedContent(`
        The recent spectacular progress in Sensor technologies and allied materials, internet of Things (IoT), Informations and Technology (ICT) and microelectronic fabrication techniques have created a significant stimulus towards the development of smart wearable devices. As a result, this sector is witnessing an explosive growth offering huge market and research opportunities. 
        </br></br>
        Wearable devices are complex systems of sensors and cross-domain communication networks handling large amounts of data with real-time decision-making capabilities. In addition, they provide continuous autonomous service over a long period. Therefore, rigorous research in computing and design technologies is required to adequately overcome these challenges to satisfy the stringent demands of wearable devices.
      `);
    } else {
      setSelectedContent(`
        Exploring a new domain with significant potential for innovation...
        (Detailed description goes here)
      `);
    }

    // 
/*
    const updateContent = (title) => {
      setSelectedTitle(title);
      switch (title) {
        case 'Human Centered Systems':
          setSelectedContent(`Detailed content for Human Centered Systems...`);
          break;
        case 'Healthcare':
          setSelectedContent(`Detailed content for Healthcare...`);
          break;
        case 'Cybersecurity':
          setSelectedContent(`Detailed content for Cybersecurity...`);
          break;
        case 'Wearables':
          setSelectedContent(`Detailed content for Wearables...`);
          break;
        default:
          setSelectedContent(`Detailed content for New Domain...`);
      }
*/
  };

  return (
    <div className="bg-white flex md:flex-row xs:flex-col gap-10 w-[70%] h-[900px] p-14 mb-8 shadow-md border-[1px] hover:shadow-lg">
      {/* Left Column (Cards) */}
      <div className="flex-1 p-10 flex-col flex-wrap gap-4 items-baseline">
        <div className="flex flex-row flex-wrap p-8">
          {/* Cards with click functionality */}
          <Card title="Human Centered Systems" onClick={() => updateContent('Human Centered Systems')} />
          <Card title="Healthcare" onClick={() => updateContent('Healthcare')} />
          <Card title="Cybersecurity" onClick={() => updateContent('Cybersecurity')} />
          <Card title="Wearables" onClick={() => updateContent('Wearables')} />
          <Card title="New Domain" onClick={() => updateContent('New Domain')} />
        </div>
      </div>

      {/* Right Column (Dynamic Content) */}
      <div className="flex flex-col flex-1 gap-10 p-12">
        <p className="font-bold text-left text-3xl text-[#a0034c]">
          {selectedTitle}
        </p>
        <div
          className="font-poppins font-normal text-[rgb(10,1,1)] text-[23px] leading-[35px]"
          dangerouslySetInnerHTML={{ __html: selectedContent }}
        ></div>
        <p className="text-xl font-bold text-left text-[#a0034c]">Read more...</p>
      </div>
    </div>
  );
};

export default CardType4;
