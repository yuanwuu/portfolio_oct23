import React from "react";
import data from "../data/data";

// const ProjectItem = ({img, title}) => {
//   return (
//     <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
//       <img src={img} alt={title} className='nrounded-xl group-hover:opacity-25' />
//       <div className='hidden group-hover:block absolute top-[50%] translate-x-[-50%] translate-y-[-50%]'>
//         <h3 className='text-2xl font-blod text-white tracking-wider text-center'>{title}</h3>
//         <p className='pb-4 pt-2 text-white text-ceter'>React Js</p>
//         <a href="/">
//             <p className='text-center p-3 rounded-full bg-white text-gray-700 ront-bold cursor-pointer text-lg'>More Info</p>
//         </a>
//       </div>
//     </div>
//   )
// }

const ProjectItem = () => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.title}
          className="relative flex flex-col flex-wrap items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#fffffffe]"
        >
          <img
            src={item.img}
            alt={item.title}
            className="nrounded-xl group-hover:opacity-25"
          />
          <div className="hidden group-hover:block absolute top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-blod text-gray tracking-wider text-center m-1">
              {item.title}
            </h3>
            <a href={item.link}>
              <p className="text-center p-3 rounded-full bg-white text-gray-700 ront-bold cursor-pointer text-lg">
                Visit Project
              </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectItem;
