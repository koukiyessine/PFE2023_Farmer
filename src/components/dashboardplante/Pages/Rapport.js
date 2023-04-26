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
      title: 'Nom de la plante',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'type de sol',
      dataIndex: 'typedesol',
      key: 'typedesol',
    },
    {
      title: 'etat de sante',
      dataIndex: 'etatdesante',
      key: 'etatdesante',
    },
    {
      title: 'Humidite plante',
      dataIndex: 'Humiditeplante',
      key: 'Humiditeplante',
    },
    {
      title: 'temperature plante',
      dataIndex: 'temperature plante',
      key: 'temperature plante',
    },
    {
      title: 'niveau de eau',
      dataIndex: 'niveaudeeau',
      key: 'niveaudeeau',
    },

    {
      title: 'Customers',
      dataIndex: 'Customers',
      key: 'Customers',
    },
  ];

  return (
    <div>
    <Typography.Title level={3}>Rapport</Typography.Title>
    <Table dataSource={plants} columns={columns} />
    </div>
  );
}

export default Rapport;
