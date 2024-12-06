import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const jobs = [
  { id: '1', title: 'Desenvolvedor Frontend', salary: 'R$ 6.500', description: 'Desenvolvimento de interfaces com React.js e integração com APIs RESTful.' },
  { id: '2', title: 'Desenvolvedor Backend', salary: 'R$ 7.000', description: 'Responsável por criar e gerenciar sistemas de backend usando Node.js e MongoDB.' },
  { id: '3', title: 'Analista de Sistemas', salary: 'R$ 5.500', description: 'Análise de requisitos e integração de sistemas corporativos.' },
  { id: '4', title: 'Desenvolvedor Mobile', salary: 'R$ 7.500', description: 'Criação de aplicativos móveis para iOS e Android usando React Native.' },
  { id: '5', title: 'Engenheiro de Dados', salary: 'R$ 8.000', description: 'Análise de dados e criação de pipelines de dados usando ferramentas como Hadoop e Spark.' },
  { id: '6', title: 'Arquiteto de Software', salary: 'R$ 9.000', description: 'Responsável pela definição da arquitetura e escalabilidade de sistemas complexos.' },
  { id: '7', title: 'Especialista em DevOps', salary: 'R$ 7.800', description: 'Automatização de processos e infraestrutura com ferramentas como Docker, Kubernetes e Jenkins.' },
  { id: '8', title: 'Consultor de TI', salary: 'R$ 6.000', description: 'Consultoria para empresas sobre a implementação de soluções de TI, análise de processos e sistemas.' },
  { id: '9', title: 'Gerente de Projetos de TI', salary: 'R$ 9.500', description: 'Gestão de projetos de tecnologia, garantindo o cumprimento dos prazos e requisitos.' },
  { id: '10', title: 'Designer UX/UI', salary: 'R$ 6.800', description: 'Criação de interfaces e experiência do usuário para plataformas web e mobile.' },
];

const JobList = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.jobContainer}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={{ color: '#a1a1b8', marginBottom: 10 }}>Salário: {item.salary}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('JobDetails', { job: item })}
      >
        <Text style={styles.buttonText}>Saiba mais</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#00d2ff', marginBottom: 20 }}>
        Oportunidades em Tecnologia
      </Text>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default JobList;
