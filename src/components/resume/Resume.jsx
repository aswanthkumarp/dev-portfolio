import React from 'react';

const Resume = () => {
  return (
    <div id='resume' className=' container m-auto   mt-16'>
      {/* heading */}
      <div data-aos='fade-up' className='relative mb-5'>
        <h3 className=' text-3xl font-black text-gray-400 sm:text-2xl'>
          Resume
        </h3>
        <span className='h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block'></span>
      </div>
      <div data-aos='fade-up' className='left flex-1 w-full'>
        <p className=' text-gray-700 font-medium w-[100%]'>
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className='card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto '>
        <div className='left flex-1 flex items-center justify-center'>
          <fieldset
            data-aos='zoom-in'
            className=' w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2'
          >
            <legend className=' w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500'>
              Internship
            </legend>
            <div className=' relative'>
              {/* design */}
              <div className='design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] '>
                <div className='c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500'></div>
                <div className='line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]'></div>
                <div className='c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500'></div>
              </div>
              {/* design */}
              <div className=' flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg'>
                <h1 className='text-[1.4rem] font-semibold sm:text-xl'>
                  Full Stack Web Development (MERN)
                </h1>
                <span className=' text-[.9rem] font-semibold text-gray-500 sm:text-base'>
                  Entri Elevate Programme, Entri Software Private Ltd
                </span>
                <span className=' text-[.9rem] font-semibold text-yellow-500 sm:text-base'>
                  December 2022 - October 2023
                </span>
                <p className=' text-[.9rem] text-justify break-words text-gray-500'>
                  During my internship at Entri Software Pvt. Ltd. as part of
                  the Entri Elevate Programme from December 2022 to October
                  2023, I extensively immersed myself in MERN (MongoDB,
                  Express.js, React.js, Node.js) stack web development. This
                  experience equipped me with hands-on proficiency in creating
                  dynamic web applications, contributing significantly to
                  multiple projects. I gained a strong foundation in scalable
                  application architecture, collaborated effectively within a
                  team environment, and honed problem-solving skills to adapt
                  quickly to evolving project demands. This internship not only
                  expanded my technical prowess but also fostered a deep
                  understanding of web development principles and effective
                  teamwork, enhancing my capabilities and expertise in MERN
                  stack development.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className='right flex-1 flex items-center justify-center'>
          <fieldset
            data-aos='zoom-in'
            className=' w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2'
          >
            <legend className=' w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500'>
              Graduation
            </legend>
            <div className=' relative'>
              {/* design */}
              <div className='design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] '>
                <div className='c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500'></div>
                <div className='line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]'></div>
                <div className='c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500'></div>
              </div>
              {/* design */}
              <div className=' flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg'>
                <h1 className='text-[1.4rem] font-semibold sm:text-xl'>
                  B.Tech, Electronics And Communication
                </h1>
                <span className=' text-[.9rem] font-semibold text-gray-500 sm:text-base'>
                  Cochin University Of Science And Technology
                </span>
                <span className=' text-[.9rem] font-semibold text-yellow-500 sm:text-base'>
                  2015-2019
                </span>
                <p className=' text-[.9rem] text-justify text-gray-500'>
                  During my undergraduate studies at the School of Engineering,
                  Cochin University of Science and Technology, which I completed
                  in 2021, I obtained a comprehensive education in Electronics
                  and Communication. This academic journey not only provided me
                  with a profound understanding of core principles but also
                  equipped me with essential problem-solving skills and a strong
                  foundation in electronics. It fostered my analytical thinking
                  and introduced me to a wide array of concepts in communication
                  technologies. Through hands-on projects and coursework, I
                  developed the ability to apply theoretical knowledge to
                  practical scenarios, laying a robust foundation for my
                  professional growth in the field of Electronics and
                  Communication Engineering.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
