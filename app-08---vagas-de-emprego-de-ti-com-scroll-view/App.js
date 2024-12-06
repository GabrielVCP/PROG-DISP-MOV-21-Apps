import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

const vagas = [
  { id: 1, titulo: 'Desenvolvedor Frontend', empresa: 'Tech Co.', localizacao: 'Remoto', salario: 'R$ 5.000' },
  { id: 2, titulo: 'Desenvolvedor Backend', empresa: 'Dev Solutions', localizacao: 'São Paulo, SP', salario: 'R$ 7.000' },
  { id: 3, titulo: 'Analista de Sistemas', empresa: 'SysCorp', localizacao: 'Rio de Janeiro, RJ', salario: 'R$ 6.500' },
  { id: 4, titulo: 'Engenheiro de Dados', empresa: 'Data Insights', localizacao: 'Belo Horizonte, MG', salario: 'R$ 8.000' },
  { id: 5, titulo: 'Desenvolvedor Mobile', empresa: 'App Creators', localizacao: 'Remoto', salario: 'R$ 6.000' },
  { id: 6, titulo: 'Especialista em DevOps', empresa: 'Cloud Tech', localizacao: 'São Paulo, SP', salario: 'R$ 9.000' },
  { id: 7, titulo: 'Gerente de Projetos de TI', empresa: 'Project Masters', localizacao: 'Rio de Janeiro, RJ', salario: 'R$ 10.000' },
  { id: 8, titulo: 'Desenvolvedor Fullstack', empresa: 'Web Solutions', localizacao: 'São Paulo, SP', salario: 'R$ 8.500' },
  { id: 9, titulo: 'Cientista de Dados', empresa: 'Analytics Hub', localizacao: 'Remoto', salario: 'R$ 11.000' },
  { id: 10, titulo: 'QA Tester', empresa: 'Quality Assurance', localizacao: 'Curitiba, PR', salario: 'R$ 4.500' },
  { id: 11, titulo: 'Desenvolvedor PHP', empresa: 'PHP Pros', localizacao: 'São Paulo, SP', salario: 'R$ 6.000' },
  { id: 12, titulo: 'Desenvolvedor Java', empresa: 'Java Solutions', localizacao: 'Belo Horizonte, MG', salario: 'R$ 7.500' },
  { id: 13, titulo: 'Arquiteto de Software', empresa: 'Architects United', localizacao: 'Rio de Janeiro, RJ', salario: 'R$ 12.000' },
  { id: 14, titulo: 'Analista de Suporte', empresa: 'Support Tech', localizacao: 'Remoto', salario: 'R$ 4.000' },
  { id: 15, titulo: 'Desenvolvedor .NET', empresa: 'DotNet Experts', localizacao: 'São Paulo, SP', salario: 'R$ 7.000' },
  { id: 16, titulo: 'Designer de UX/UI', empresa: 'Design Gurus', localizacao: 'Porto Alegre, RS', salario: 'R$ 5.500' },
  { id: 17, titulo: 'Consultor de TI', empresa: 'IT Consult', localizacao: 'São Paulo, SP', salario: 'R$ 8.000' },
  { id: 18, titulo: 'Programador Python', empresa: 'Python Developers', localizacao: 'Remoto', salario: 'R$ 7.500' },
  { id: 19, titulo: 'Administrador de Banco de Dados', empresa: 'DB Masters', localizacao: 'São Paulo, SP', salario: 'R$ 8.000' },
  { id: 20, titulo: 'Desenvolvedor Ruby', empresa: 'Ruby on Rails', localizacao: 'Florianópolis, SC', salario: 'R$ 6.500' },
  { id: 21, titulo: 'Especialista em Segurança da Informação', empresa: 'Secure IT', localizacao: 'São Paulo, SP', salario: 'R$ 10.000' },
  { id: 22, titulo: 'Analista de Dados', empresa: 'Data Analysts', localizacao: 'Remoto', salario: 'R$ 6.000' },
  { id: 23, titulo: 'Desenvolvedor React Native', empresa: 'React Native Co.', localizacao: 'Belo Horizonte, MG', salario: 'R$ 7.000' },
  { id: 24, titulo: 'Engenheiro de Machine Learning', empresa: 'ML Experts', localizacao: 'São Paulo, SP', salario: 'R$ 11.000' },
  { id: 25, titulo: 'Suporte Técnico', empresa: 'Tech Support', localizacao: 'São Paulo, SP', salario: 'R$ 4.000' },
];

const VagasEmprego = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas de Emprego de TI</Text>
      <ScrollView style={styles.scrollContainer}>
        {vagas.map((vaga) => (
          <View key={vaga.id} style={styles.card}>
            <Text style={styles.nome}>{vaga.titulo}</Text>
            <Text style={styles.empresa}>{vaga.empresa}</Text>
            <Text style={styles.localizacao}>{vaga.localizacao}</Text>
            <Text style={styles.salario}>{vaga.salario}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default VagasEmprego;
