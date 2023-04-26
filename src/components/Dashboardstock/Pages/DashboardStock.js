import React, { useState, useEffect } from 'react';
import { Card, Typography, Table, Avatar } from 'antd';
import "./DashboardStock.css"
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';


const products = [
  { name: "Pommes", stock: 50 },
  { name: "Oranges", stock: 75 },
  { name: "Bananes", stock: 100 },
  { name: "Tomates", stock: 25 },
];

const stockByProduct = products.reduce((acc, product) => {
  acc[product.name] = acc[product.name] ? acc[product.name] + product.stock : product.stock;
  return acc;
}, {});

const StockDisplay = () => {
  return (
    <Card style={{ width: 220  }}>
      <Card.Meta
        avatar={
          <Avatar
            style={{
              color: "green",
              backgroundColor: "rgba(0,255,0,0.25)",
              borderRadius: 10,
              fontSize: 25,
              padding: 2,
            }}
            icon={<ShoppingCartOutlined />}
          />
        }
        title="Stock total de chaque produit "
        description={
          Object.keys(stockByProduct).map((productName, index) => (
            <p key={index}>
              {productName}: {stockByProduct[productName]}
            </p>
          ))
        }
      />
    </Card>
  );
};

const Customers = () => {
  const [Customers, setCustomers] = useState(0);

  useEffect(() => {
    // fetch('/api/customers').then(res => setCustomers(res.data.customers));
  }, []);

  return (
    <Card style={{ width: 220 , height:230 }}>
      <Card.Meta
        avatar={
          <Avatar
            style={{
              color: "green",
              backgroundColor: "rgba(0,255,0,0,25)",
              borderRadius: 10,
              fontSize: 25,
              padding: 2,
            }}
            icon={<UserOutlined />}
          />
        }
        title="Customers"
        description={`${Customers}`}
      />
    </Card>
  );
};

const ProductCards = () => {
  return (
    <Card style={{ width: 220  }}>
      <Card.Meta
        avatar={
          <Avatar
            style={{
              color: "green",
              backgroundColor: "rgba(0,255,0,0.25)",
              borderRadius: 10,
              fontSize: 25,
              padding: 2,
            }}
            icon={<ShoppingCartOutlined />}
          />
        }
        title=" stock disponible de chaque produit"
        description={
          Object.keys(stockByProduct).map((productName, index) => (
            <p key={index}>
              {productName}: {stockByProduct[productName]}
            </p>
          ))
        }
      />
    </Card>
  );
};

const product = [
  { name: "Pommes", stock: 50, alertQuantity: 10 },
  { name: "Oranges", stock: 75, alertQuantity: 15 },
  { name: "Bananes", stock: 100, alertQuantity: 20 },
  { name: "Tomates", stock: 25, alertQuantity: 5 },
];

const Quantitéalerte = () => {
  return (
    <Card style={{ width: 320  }}>
      <Card.Meta
        avatar={
          <Avatar
            style={{
              color: "green",
              backgroundColor: "rgba(0,255,0,0.25)",
              borderRadius: 10,
              fontSize: 25,
              padding: 2,
            }}
            icon={<ShoppingCartOutlined />}
          />
        }
        title="Quantité d'alerte de chaque produit"
        description={
          products.map((product, index) => (
            <p key={index}>
              {product.name}:   {product.alertQuantity}
            </p>
          ))
        }
      />
    </Card>
  );
};

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Nom',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Téléphone',
    dataIndex: 'phone',
    key: 'phone',
  },
];

const data = [
  {
    id: 1,
    name: 'Fournisseur 1',
    phone: '0123456789',
  },
  {
    id: 2,
    name: 'Fournisseur 2',
    phone: '9876543210',
  },
];

const FournisseurTable = () => {
  const rowKey = (record) => record.id;
  
  const expandedRowRender = (record) => (
    <Card style={{ margin: '0 50px 30px' }}>
      <Card.Meta
        avatar={
          <Avatar
            style={{ backgroundColor: 'rgba(0,255,0,0.25)' }}
            icon={<UserOutlined />}
          />
        }
        title={`Fournisseur ${record.id}`}
        description={
          <div>
            <p>Nom: {record.name}</p>
            <p>Téléphone: {record.phone}</p>
          </div>
        }
      />
    </Card>
  );
  
  return (
    <>
    <Typography.Title level={4}>Recent Fournisseur</Typography.Title>
    <Table     
      dataSource={data}
      columns={columns}
      rowKey={rowKey}
      expandable={{ expandedRowRender }}
    />
    </>
  );
};




const DashboardStock = () => {
  return (
    <div>
      <Typography.Title level={3}>Dashboard Stock</Typography.Title>
      <table>
        <tr>
          <th>
            <StockDisplay />
          </th>

          <th>
            <Customers />
          </th>

          <th>
            <ProductCards />
          </th>
          <th>
            <Quantitéalerte />
          </th>
        </tr>
      </table>
      <table>
        <tr>
          <th><FournisseurTable/></th>
         
        </tr>
      </table>
    </div>
  );
};

export default DashboardStock;
