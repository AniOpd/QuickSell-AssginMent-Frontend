import React, { useEffect } from "react";
import profile from "../Assets/profile.png";
import profile1 from "../Assets/profile1.png";
import profile4 from "../Assets/profile4.jpeg";
import profile5 from "../Assets/profile5.jpeg";
import profile6 from "../Assets/profile6.png";
import profile7 from "../Assets/profile7.png";

import Todo from '../Assets/icons_FEtask/To-do.svg';
import Progress from '../Assets/icons_FEtask/in-progress.svg';
import Backlog from '../Assets/icons_FEtask/Backlog.svg';
import Done from '../Assets/icons_FEtask/Done.svg';
import Cancel from '../Assets/icons_FEtask/Cancelled.svg';


import Priority0 from '../Assets/icons_FEtask/No-priority.svg';
import Priority1 from '../Assets/icons_FEtask/Img - Low Priority.svg';
import Priority2 from '../Assets/icons_FEtask/Img - Medium Priority.svg';
import Priority3 from '../Assets/icons_FEtask/Img - High Priority.svg';
import Priority4 from '../Assets/icons_FEtask/SVG - Urgent Priority grey.svg';
import Priority5 from '../Assets/icons_FEtask/SVG - Urgent Priority colour.svg';



const Card = ({
  id,
  title,
  tag,
  userId,
  userData,
  status,
  priority,
  grouping,
  ordering,
  statusMapping,
}) => {
  const user = userData.find((user) => user.id === userId);
  return (
    <div className="card">
      <div className="card-header">
        <div className="status-heading">
          {grouping == "users" || grouping == "priority" ? (
            statusMapping[id] == "Todo" ? (
              <img src={Todo} alt="Todo" />
            ) : statusMapping[id] == "In progress" ? (
              <img src={Progress} alt="Progress" />
            ) : statusMapping[id] == "Backlog" ? (
              <img src={Backlog} alt="Backlog" />
            ) : statusMapping[id] == "Done" ? (
             <img src={Done} alt="Done" />
            ) : (
              <img src={Cancel} alt="Cancel" />
            )
          ) : null}
          <p>{id}</p>
        </div>
        {grouping != "users" ? (
          <div
            className={
              user && !user.available
                ? "user-avatar-unavailable"
                : "user-avatar"
            }
          >
            <img
              src={
                userId == "usr-1"
                  ? profile1
                  : userId == "usr-2"
                  ? profile6
                  : userId == "usr-3"
                  ? profile7
                  : userId == "usr-4"
                  ? profile5
                  : userId == "usr-5"
                  ? profile4
                  : profile
              }
              className={
                user && !user.available
                  ? "user-avatar-unavailable"
                  : "user-avatar"
              }
              alt="user"
            ></img>
          </div>
        ) : null}
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
      <div className="card-footer">
        {grouping != "priority" ? (
          <div className="feature-container">
            {priority == "0" ? (
              <img src={Priority0} alt="Priority0" />
            ) : priority == "1" ? (
              <img src={Priority1} alt="Priority1" />
            ) : priority == "2" ? (
              <img src={Priority2} alt="Priority2" />
            ) : priority == "3" ? (
              <img src={Priority3} alt="Priority3" />
            ) : priority == "4" ? (
              <img src={Priority4} alt="Priority4" />
            ) : (
              <img src={Priority5} alt="Priority5" />
            )}
          </div>
        ) : null}
        {tag?.map((value, index) => {
          return (
            <div className="feature-container" key={index}>
              <div className="alert-icon"></div>
              <div className="feature-request">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
