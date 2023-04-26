import { Table } from 'antd';
import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';

function Rapport() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('https://example.com/api/plants')
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error(error));
  }, []);

  const columns = [
    {
      title: 'Nom de produit',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'reference de produit',
      dataIndex: 'referencedeproduit',
      key: 'referencedeproduit',
    },
    {
      title: 'Quantite alerte',
      dataIndex: 'Quantitealerte',
      key: 'Quantitealerte',
    },
    {
      title: 'message fournisseur',
      dataIndex: 'messagefournisseur',
      key: 'messagefournisseur',
    },
    {
      title: 'id fournisseur',
      dataIndex: 'idfournisseur',
      key: 'idfournisseur',
    },
    
    {
      title: 'Customers',
      dataIndex: 'Customers',
      key: 'Customers',
    },
  ];

  return (
    <div>
    <Typography.Title level={4}>Rapport Stock</Typography.Title>
    <Table dataSource={plants} columns={columns} />
    </div>
  );
}

export default Rapport;
