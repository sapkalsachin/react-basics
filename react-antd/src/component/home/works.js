import React, { useState } from "react";
import { Modal, Button } from "antd";
function AppWorks() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it works</h2>
          <p>dolor sit amet, consectetuer something to be written here</p>
        </div>
      </div>

      <div className="contentHolder">
      <Button onClick={showModal}>
        <i className="fas fa-play"></i>
      </Button>
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <iframe
          width="100%"
          height="350px"
          src="https://www.youtube.com/embed/Xbx4HJW-th0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal>
    </div>
  );
}

export default AppWorks;
