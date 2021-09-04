import React from "react";
import { Carousel, Button } from "antd";

const items = [
  {
    key: "1",
    title: "Web and mobile payment built for developers",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    key: "2",
    title: "Web and mobile payment built for developers",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    key: "3",
    title: "Web and mobile payment built for developers",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function AppHero() {
  return (
    <div className="heroBlock">
      <Carousel>
          {
              items.map(item => {
                  return(
                      <div className="container-fluid">
                          <div className="content">
                              <h3>{item.title}</h3>
                              <p>{item.content}</p>
                              <div className="btnHolder">
                                  <Button type="primary" size="large">Learn more</Button>
                                  <Button size="large"><span class="fas fa-desktop"></span>Watch a Demo</Button>
                              </div>
                          </div>
                      </div>
                  )
              })
          }
      </Carousel>
    </div>
  );
}

export default AppHero;
