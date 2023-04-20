import React from "react";
import { GrClose } from "react-icons/gr";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={closeSidebar}>
        <GrClose />
      </button>
      {sublinks.map(pageLink => {
        const { pageId, page, links } = pageLink;
        return (
          <div key={pageId} className="sidebar-section">
            <h4>{page}</h4>
            <ul className="links">
              {links.map(link => {
                const { id, label, icon, url } = link;
                return (
                  <li key={id}>
                    <a href={url}>
                      {icon}
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
