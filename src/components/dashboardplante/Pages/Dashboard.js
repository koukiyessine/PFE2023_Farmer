import React, { useState, useEffect } from 'react';
import { Card, Typography,Table  } from 'antd';
import axios from "axios";
import { CloudOutlined,BulbOutlined, AlertOutlined, EnvironmentOutlined,UserOutlined, SafetyOutlined } from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./Dashboard.css";


const { Meta } = Card;

const PlantTemperatureCard = () => {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    // ici, vous pouvez ajouter une requête API pour récupérer la température de la plante
    // et mettre à jour l'état de la température
    // par exemple : fetch('/api/plant/temperature').then(res => setTemperature(res.data.temperature));
  }, []);

  return (
    <Card style={{ width: 350 }}>
      <Meta
        avatar={<BulbOutlined  style={{
            color: "red" , 
            backgroundColor:"rgba(0,255,0,0,25)",
            borderRadius: 20, 
            fontSize: 24 , 
            padding: 8,
          }}/>}
        title="Température de la plante"
        description={`${temperature}°C`}
      />
    </Card>
  );
};

const PlantHumidityCard = () => {
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    // ici, vous pouvez ajouter une requête API pour récupérer l'humidité de la plante
    // et mettre à jour l'état de l'humidité
    // par exemple : fetch('/api/plant/humidity').then(res => setHumidity(res.data.humidity));
  }, []);

  return (
    <Card style={{ width: 350 }}>
      <Meta
        avatar={<EnvironmentOutlined  style={{
            color: "SteelBlue" , 
            backgroundColor:"rgba(0,255,0,0,25)",
            borderRadius: 20, 
            fontSize: 24 , 
            padding: 8,
          }}/>}
        title="Humidité de la plante"
        description={`${humidity}%`}
      />
    </Card>
  );
};

const WeatherCard = () => {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    // ici, vous pouvez ajouter une requête API pour récupérer les conditions météorologiques actuelles
    // et mettre à jour l'état de la météo
    // par exemple : fetch('/api/weather').then(res => setWeather(res.data.weather));
  }, []);

  return (
    <Card style={{ width: 320 }}>
      <Meta
        avatar={<CloudOutlined  style={{
            color: "Yellow" , 
            backgroundColor:"rgba(0,255,0,0,25)",
            borderRadius: 20, 
            fontSize: 24 , 
            padding: 8,
          }}/>}
        title="Météo"
        description={weather}
      />
    </Card>
  );
};

const PlantHealthCard = () => {
  const [health, setHealth] = useState('');

  useEffect(() => {
    // ici, vous pouvez ajouter une requête API pour récupérer l'état de santé de la plante
    // et mettre à jour l'état de la santé
  // fetch('/api/plant/health').then(res => setHealth(res.data.health));
  }, []);

  return (
    <Card style={{ width: 350 }}>
      <Meta
        avatar={<SafetyOutlined    style={{
            color: "Teal" , 
            backgroundColor:"rgba(0,255,0,0,25)",
            borderRadius: 20, 
            fontSize: 24 , 
            padding: 8,
          }}/>}
        title="État de santé de la plante"
        description={health}
      />
    </Card>
  );
};

const WaterLevelCard = () => {
  const [waterLevel, setWaterLevel] = useState(0);

  useEffect(() => {
   
// ici, vous pouvez ajouter une requête API pour récupérer le niveau d'eau actuel
// et mettre à jour l'état du niveau d'eau
// par exemple : fetch('/api/water/level').then(res => setWaterLevel(res.data.level));
}, []);

return (
<Card style={{ width: 350   }}>
<Meta
avatar={<AlertOutlined   style={{
    color: "noir " , 
    backgroundColor:"rgba(0,255,0,0,25)",
    borderRadius: 20, 
    fontSize: 24 , 
    padding: 8,
  }}/>}
title="Niveau d'eau"
description={`${waterLevel}%`}
/>
</Card>
);
};


const Customers = () => {
    const [Customers, setCustomers] = useState(0);
  
    useEffect(() => {
      // ici, vous pouvez ajouter une requête API pour récupérer les conditions météorologiques actuelles
      // et mettre à jour l'état de la météo
      // par exemple : fetch('/api/weather').then(res => setWeather(res.data.weather));
    }, []);
  
    return (
      <Card style={{ width: 320 }}>
        <Meta
          avatar={<UserOutlined  style={{
            color: "green" , 
            backgroundColor:"rgba(0,255,0,0,25)",
            borderRadius: 20, 
            fontSize: 24 , 
            padding: 8,
          }} />}
          title="Customers"
          description={`${Customers}`}
        />
      </Card>
    );
  };

  const RecentOrders = () => {
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
     fetch('/api/orders')
        .then(res => res.json())
        .then(data => setOrders(data.splice(0, 3)))
        .catch(err => console.log(err));
    }, []);
  
    const columns = [
      { 
        title: "Date",   
        dataIndex: "date",    
      },
      {        
        title: "nom de Produit",   
        dataIndex: "product",    
      },  
      {    
        title: "Quantité d'alert ",    
        dataIndex: "quantity",   
      },   
      {     
        title: "Total produit",     
        dataIndex: "total",   
      },
    ];
  
    return (
      <div>
        <Typography.Title level={4}>Recent Orders</Typography.Title>
        <Table 
          columns={columns}
          dataSource={orders}
          rowKey="id"
        />
      </div>
    );
  };
  
 
  const PlantCard = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
     axios.get("https://example.com/api/plants").then((response) => {
        setData(response.data);
      });
    }, []);
  
    return (
      <div className="plant-card">
        <Typography.Title level={4}>Statistiques de gestion de plantes</Typography.Title>
  
        <BarChart width={520} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="arrosages" fill="#8884d8" />
          <Bar dataKey="tailles" fill="#82ca9d" />
          <Bar dataKey="fertilisations" fill="#ffc658" />
        </BarChart>
      </div>
    );
  };

 

 
const Dashboard = () => {
return (
    <div>
<Typography.Title level={5}>Dashboard</Typography.Title>
<table  >
  <tr>
    <th><PlantTemperatureCard /></th>
    <th><PlantHumidityCard /></th>
    <th><WeatherCard /></th>
  </tr>
  <tr>
  <th><WaterLevelCard /></th>
    <th><PlantHealthCard /></th>
    <th><Customers/></th>
  </tr>
  </table>
  <table>
 <tr><th><RecentOrders/></th>
     <th><PlantCard/></th></tr> 
  </table>
  </div>
 
);
};

export default Dashboard;
