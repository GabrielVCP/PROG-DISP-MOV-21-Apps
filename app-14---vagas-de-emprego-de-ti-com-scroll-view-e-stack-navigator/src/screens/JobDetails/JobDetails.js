import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const JobDetails = ({ route }) => {
  const { job } = route.params;

  const jobDetails = {
    1: {
      description: 'Desenvolver interfaces responsivas para aplicações web utilizando React e JavaScript.',
      requirements: 'Experiência com HTML, CSS, JavaScript e React. Conhecimento em Git é desejável.',
      location: 'São Paulo, SP',
      contractType: 'CLT',
      salary: job.salary,
    },
    2: {
      description: 'Arquitetar pipelines de dados e processar grandes volumes de informações para decisões estratégicas.',
      requirements: 'Proficiente em SQL, Python e ETL. Experiência com NoSQL e Data Warehousing é um diferencial.',
      location: 'Remoto',
      contractType: 'PJ',
      salary: job.salary,
    },
    3: {
      description: 'Monitorar e implementar políticas de segurança para proteger a infraestrutura de TI da empresa.',
      requirements: 'Conhecimento em firewalls, sistemas de intrusão e certificações como CISSP são desejáveis.',
      location: 'Curitiba, PR',
      contractType: 'CLT',
      salary: job.salary,
    },
  };

  const { description, requirements, location, contractType, salary } = jobDetails[job.id] || {};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detalhes da Vaga</Text>
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
