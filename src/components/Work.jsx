import React from "react";
import WorkItem from './WorkItem'

const data = [
  {
    year: 'March, 2023 - present',
    title: "Style Guide",
    duration: "6 month",
    details:
      "In my capacity as a part-time style guide, I have engaged in endeavors aimed at refining my client communication skills. Collaboratively interacting with clients, I have adeptly discerned their specific apprehensions, thereby enabling me to proffer solutions that not only enhance their comfort in attire but also imbue them with a heightened sense of confidence.",
  },
  {
    year: 'Sept., 2021 - present',
    title: "Freelance UX Designer",
    duration: "2 years",
    details:
      "I operated as an independent UX designer undertaking a spectrum of projects necessitating full-cycle development. My responsibilities encompassed orchestrating comprehensive user research to identify user pain points, thereby informing the design trajectory and facilitating the generation of prospective resolutions. Furthermore, I formulated a structured design rationale elucidating the underlying decision-making processes.",
  },
  {
    year: 'Sept., 2021 - April, 2022',
    title: "Production Assistant",
    duration: "9 months",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure",
  }
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx)=> (
        <WorkItem
        key={idx}
        year={item.year}
        title={item.title}
        duration={item.duration}
        details={item.details}
      />
      ))}
    </div>
  );
};

export default Work;
