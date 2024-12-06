import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const JobList = ({ navigation }) => {
  const jobs = [
    { id: 1, title: 'Desenvolvedor Front-End', salary: 'R$ 5.000 - R$ 8.000' },
    { id: 2, title: 'Engenheiro de Dados', salary: 'R$ 10.000 - R$ 15.000' },
    { id: 3, title: 'Analista de Segurança da Informação', salary: 'R$ 6.000 - R$ 9.000' },
    { id: 4, title: 'Gestor de Projetos de TI', salary: 'R$ 8.000 - R$ 12.000' },
    { id: 5, title: 'Arquiteto de Soluções', salary: 'R$ 12.000 - R$ 18.000' },
    { id: 6, title: 'Desenvolvedor Mobile', salary: 'R$ 6.000 - R$ 10.000' },
    { id: 7, title: 'Analista de Infraestrutura', salary: 'R$ 5.000 - R$ 7.000' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Vagas de Emprego em TI</Text>
      {jobs.map((job) => (
        <View key={job.id} style={styles.jobContainer}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.jobSalary}>Salário: {job.salary}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('JobDetails', { job })}
          >
            <Text style={styles.buttonText}>Saiba mais</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default JobList;
