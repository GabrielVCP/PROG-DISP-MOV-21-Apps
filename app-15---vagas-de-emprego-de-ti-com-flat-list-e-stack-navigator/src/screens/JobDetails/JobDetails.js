import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const JobDetails = ({ route }) => {
  const { job } = route.params;

  const jobDetails = {
    1: {
      description: 'Desenvolver interfaces responsivas e dinâmicas para aplicações web utilizando React e JavaScript.',
      requirements: 'Experiência com HTML, CSS, JavaScript e frameworks modernos como React. Conhecimento em Git é desejável.',
      location: 'São Paulo, SP',
      contractType: 'CLT',
      salary: job.salary,
    },
    2: {
      description: 'Trabalhar com arquiteturas de dados e pipelines de processamento de grandes volumes de dados para apoiar decisões estratégicas.',
      requirements: 'Proficiência em SQL, Python, e ferramentas de ETL. Experiência com bancos de dados NoSQL e Data Warehousing é um diferencial.',
      location: 'Remoto',
      contractType: 'PJ',
      salary: job.salary,
    },
  };

  const { description, requirements, location, contractType, salary } = jobDetails[job.id] || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.infoLabel}>Salário:</Text>
      <Text style={styles.infoText}>{salary}</Text>
      <Text style={styles.infoLabel}>Tipo de Contrato:</Text>
      <Text style={styles.infoText}>{contractType}</Text>
      <Text style={styles.infoLabel}>Localização:</Text>
      <Text style={styles.infoText}>{location}</Text>
      <Text style={styles.infoLabel}>Descrição:</Text>
      <Text style={styles.infoText}>{description}</Text>
      <Text style={styles.infoLabel}>Requisitos:</Text>
      <Text style={styles.infoText}>{requirements}</Text>
    </View>
  );
};

export default JobDetails;
