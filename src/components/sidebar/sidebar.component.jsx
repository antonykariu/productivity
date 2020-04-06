import React from "react";

import "./sidebar.styles.scss";

const Sidebar = () => (
  <div className="sidebar">
    <div className="sub-header">
      <div className="sub-title">
        <h3>Tasks</h3>
      </div>
      <div className="sub-icon">
        <img src="#" alt="" />
      </div>
      <div className="tasks">
        <div className="task-view">
          <div className="icon-container">
            <img src="#" alt="" />
          </div>
          <span className="task">To-do</span>
        </div>
        <div className="task-view">
          <div className="icon-container">
            <img src="#" alt="" />
          </div>
          <span className="task">Table</span>
        </div>
        <div className="task-view">
          <div className="icon-container">
            <img src="#" alt="" />
          </div>
          <span className="task">Upcoming</span>
        </div>
        <div className="task-view">
          <div className="icon-container">
            <img src="#" alt="" />
          </div>
          <span className="task">Not sheduled</span>
        </div>
        <div className="task-view">
          <div className="icon-container">
            <img src="#" alt="" />
          </div>
          <span className="task">Done</span>
        </div>
      </div>
    </div>
    <div className="sub-header">
      <div className="sub-title">
        <h3>Team</h3>
      </div>
      <div className="sub-icon">
        <img src="#" alt="" />
      </div>
      <div className="team"></div>
    </div>
    <div className="sub-header">
      <div className="sub-title">
        <h3>Project</h3>
      </div>
      <div className="sub-icon">
        <img src="#" alt="" />
      </div>
      <div className="project"></div>
    </div>
    <div className="sub-header">
      <div className="sub-title">
        <h3>Chat</h3>
      </div>
      <div className="sub-icon">
        <img src="#" alt="" />
      </div>
      <div className="chat"></div>
    </div>
  </div>
);

export default Sidebar;