import React from "react";

import "./sidebar.styles.scss";
import plus from "../../assets/sidebar/plus.svg";
import file from "../../assets/sidebar/file.svg";
import table from "../../assets/sidebar/table.svg";
import arrow from "../../assets/sidebar/arrow-right.svg";
import timer from "../../assets/sidebar/timer.svg";
import check from "../../assets/sidebar/check.svg";

const Sidebar = () => (
  <div className="sidebar">
    <div className="sub-header">
      <div className="sub-title">
        <div className="title">
          <h3>Tasks</h3>
        </div>
        <div className="sub-icon">
          <img src={plus} alt="plus" />
        </div>
      </div>
      <div className="tasks">
        <div className="task-view">
          <div className="icon-container">
            <img src={file} alt="file icon" />
          </div>
          <span className="task">To-do</span>
        </div>
        <div className="task-view">
          <div className="icon-container">
            <img src={table} alt="table icon" />
          </div>
          <span className="task">Table</span>
        </div>
        <div className="task-view">
          <div className="icon-container">
            <img src={arrow} alt="right arrow icon" />
          </div>
          <span className="task">Upcoming</span>
        </div>
        <div className="task-view">
          <div className="icon-container">
            <img src={timer} alt="timer icon" />
          </div>
          <span className="task">Not sheduled</span>
        </div>
        <div className="task-view">
          <div className="icon-container">
            <img src={check} alt="check icon" />
          </div>
          <span className="task">Done</span>
        </div>
      </div>
    </div>
    <div className="sub-header">
      <div className="sub-title">
        <div className="title">
          <h3>Team</h3>
        </div>
        <div className="sub-icon">
          <img src={plus} alt="plus" />
        </div>
      </div>
      <div className="team">
        <div className="member">
          <div className="image">
            <img src="#" alt="" />
          </div>
          <div className="details">
            <div className="name">Name</div>
            <div className="title">Title</div>
          </div>
          <div className="progress">
          <svg>
              <circle cx="25" cy="25" r="22"></circle>
              <circle cx="25" cy="25" r="22"></circle>
            </svg>
          </div>
        </div>
        <div className="member">
          <div className="image">
            <img src="#" alt="" />
          </div>
          <div className="details">
            <div className="name">Name</div>
            <div className="title">Title</div>
          </div>
          <div className="progress">
          <svg>
              <circle cx="25" cy="25" r="22"/>
              <circle cx="25" cy="25" r="22"/>
            </svg>
          </div>
        </div>
        <div className="member">
          <div className="image">
            <img src="#" alt="" />
          </div>
          <div className="details">
            <div className="name">Name</div>
            <div className="title">Title</div>
          </div>
          <div className="progress">
            <svg>
              <circle cx="25" cy="25" r="22"/>
              <circle cx="25" cy="25" r="22"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="sub-header">
      <div className="sub-title">
        <div className="title">
          <h3>Project</h3>
        </div>
        <div className="sub-icon">
          <img src={plus} alt="plus" />
        </div>
      </div>
      <div className="project">
        <div className="project-view">
          <p>Redesign</p>
        </div>
        <div className="project-view">
          <p>MVP</p>
        </div>
        <div className="project-view">
          <p>Website</p>
        </div>
        <div className="project-view">
          <p>Deploy</p>
        </div>
        <div className="project-view">
          <p>Design</p>
        </div>
      </div>
    </div>
    <div className="sub-header">
      <div className="sub-title">
        <div className="title">
          <h3>Chat</h3>
        </div>
        <div className="sub-icon">
          <img src={plus} alt="plus" />
        </div>
      </div>
      <div className="chat"></div>
    </div>
  </div>
);

export default Sidebar;
