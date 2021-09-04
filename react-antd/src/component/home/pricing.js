import React from "react";
import { List, Card, Button } from "antd";

const data = [
  {
    title: "Basic",
    price: "$123",
    space: "Unlimited space",
    user: "15 users",
    support: "24x7",
    backup: "Safe and relieble",
    access: "Anywhere",
  },
  {
    title: "Gold",
    price: "$123",
    space: "Unlimited space",
    user: "15 users",
    support: "24x7",
    backup: "Safe and relieble",
    access: "Anywhere",
  },
  {
    title: "Platinum",
    price: "$123",
    space: "Unlimited space",
    user: "15 users",
    support: "24x7",
    backup: "Safe and relieble",
    access: "Anywhere",
  },
];
function AppPricing() {
  return (
    <div className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choose your best plan💰</h2>
          <p>dolor sit amet, consectetuer something to be written here</p>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.price}</p>
                <p>{item.space}</p>
                <p>{item.user}</p>
                <p>{item.support}</p>
                <p>{item.backup}</p>
                <p>{item.access}</p>
                <Button type="primary" size="large">
                  Get started 🚀
                </Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default AppPricing;
