import React from "react";
import { Row, Col } from "antd";

const items = [
  {
    key: "1",
    icon: <i className="fa fa-chart-pie"></i>,
    title: "High Performance",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    key: "2",
    icon: <i className="fa fa-desktop"></i>,
    title: "Flat design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    key: "3",
    icon: <i className="fa fa-database"></i>,
    title: "Simplified workflow",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
];

function AppAbout() {
  return (
    <div className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>dolor sit amet, consectetuer something to be written here</p>
        </div>
        <div className="contentHolder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col span={8}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;
