import React from "react";
import { data } from "../../data/Data";
import styled from "styled-components";
import { RiGitRepositoryLine, RiLinksLine } from "react-icons/ri";

const Card = styled.div`
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    color: #4b5563;
  }

  .link-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }

  .link-container a {
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid #000;
    padding: 0.3rem 0.6rem;
    border-radius: 0.25rem;
    font-size: 0.9rem;
  }
`;

const Work = () => {
  return (
    <div id="works" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Works</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are some of my works.
        </p>
      </div>
      {/* card */}
      <div className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5">
        <div className="card-box grid grid-cols-3 gap-6 w-full md:grid-cols-2 sm:grid-cols-1 sm:gap-8 sm:space-y-6">
          {data.map((item) => (
            <Card key={item.id}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="link-container">
                {item.link && (
                  <a href={item.link}>
                    <RiLinksLine /> Live Demo
                  </a>
                )}
                {item.git && (
                  <a href={item.git}>
                    <RiGitRepositoryLine /> GitHub
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
