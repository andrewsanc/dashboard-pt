import React, { useState } from "react";
import Profile from "./Profile";
import Home from "./Home";
import Grades from "./Grades";
import PublishedProjects from "./PublishedProjects";
import "react-calendar/dist/Calendar.css";
import Sidebar from "./Sidebar";

function App({ sidebarItems }) {
  const [activeSidebarIndex, setActiveSidebarIndex] = useState(0);

  const renderContent = () => {
    switch (activeSidebarIndex) {
      case 0:
        return <Home />;
      case 1:
        return <div>Render Classroom Content</div>;
      case 2:
        return <div>Render Scheduler Content</div>;
      case 3:
        return <Grades />;
      case 4:
        return <PublishedProjects />;
      default:
        return null;
    }
  };

  return (
    <div className='flex'>
      <Sidebar
        activeSidebarIndex={activeSidebarIndex}
        setActiveSidebarIndex={setActiveSidebarIndex}
      />
      <div className='flex flex-col w-full'>
        <div className='flex'>
          <Profile />
        </div>
        <div className={activeSidebarIndex === 3 ? "" : "flex h-full"}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

App.defaultProps = {
  sidebarItems: [
    "Home",
    "My Classroom",
    "My Schedule",
    "Grades",
    "Published Projects",
  ],
  discussions: [
    {
      title: "Technology Update",
      description:
        "Below are the most current updates on our technology situation: Copiers are back online!  All employees please try the newly updated Copiers.",
      date: "Oct 10, 2019",
    },
    {
      title: "Planned Power Outages and Your Students",
      description:
        "PG&E Power Outage Notification Due to projected high fire danger, PG&E has announced a planned power saving plan.",
      date: "Oct 9, 2019",
    },
  ],
};

export default App;
