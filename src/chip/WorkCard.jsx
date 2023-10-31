import styled from 'styled-components';
import { data } from "../data/Data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((data) => {
        return (
          <Card key={data.id}>
            <img src={data.img} alt={data.title} />
            <h3>{data.title}</h3>
            <Popup>
              <p>{data.desc}</p>
              <div className="links">
                <Link to={data.link} target="_blank">
                  <RxExternalLink />
                  <span>Demo</span>
                </Link>
                <Link to={data.git} target="_blank">
                  <AiOutlineGithub />
                  <span>Code</span>
                </Link>
              </div>
            </Popup>
          </Card>
        );
      })}
    </>
  );
};

const Card = styled.div`
border: 1px solid #e5e7eb;
padding: 1rem;
border-radius: 0.5rem;
background-color: #fff;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
position: relative;
transition: filter 0.3s;
overflow: hidden;
`;

const Popup = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: opacity 0.3s, visibility 0.3s;

  p {
    color: #333;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .links {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #000;

      svg {
        margin-right: 5px;
      }
    }
  }
`;

const PopUpIcon = styled.div`
  
`;

export default WorkCard;
