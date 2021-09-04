import React from "react";
//IMAGES
import imgModernDesign from "../../assets/images/modern-design.jpg";
import imgCleanDesign from "../../assets/images/clean-design.jpg";
import imgGreatSupport from "../../assets/images/great-support.jpg";
import imgEasyCustomise from "../../assets/images/easy-customise.jpg";
import imgUnlimitedFeatures from "../../assets/images/unlimited-features.jpg";
import imgAdvanceOption from "../../assets/images/advanced-option.jpg";

import { Row, Col, Card } from "antd";
const { Meta } = Card;

function AppFeature() {
  return (
    <div className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>dolor sit amet, consectetuer something to be written here</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="Modern Design" src={imgModernDesign} />}
            >
              <Meta title="Modern design" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="Clean Design" src={imgCleanDesign} />}
            >
              <Meta title="Clean Design" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="Great Support" src={imgGreatSupport} />}
            >
              <Meta title="Great Support" />
            </Card>
          </Col>

          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="Easy Customization" src={imgEasyCustomise} />}
            >
              <Meta title="Easy Customization" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={
                <img alt="Unlimited Features" src={imgUnlimitedFeatures} />
              }
            >
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="Advance Options" src={imgAdvanceOption} />}
            >
              <Meta title="Advance Options" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
