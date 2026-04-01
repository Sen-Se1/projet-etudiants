import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import EtudiantItem from '@/components/EtudiantItem';
import { Etudiant } from '@/types/Etudiant';

export default function HomeScreen() {
  const [etudiants, setEtudiants] = useState<Etudiant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchEtudiants = async () => {
    try {
      const API_URL = 'http://localhost:8080/api/etudiants';

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('Erreur lors du chargement des étudiants');
      }

      const data: Etudiant[] = await response.json();
      setEtudiants(data);
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEtudiants();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={styles.infoText}>Chargement...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Erreur: {error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Liste des Étudiants</Text>

      <FlatList
        data={etudiants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EtudiantItem etudiant={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    marginTop: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});