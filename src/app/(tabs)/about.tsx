import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.title}>O avtorju</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Ime in priimek:</Text>
        <Text style={styles.value}>Tara Bećarević</Text>

        <Text style={styles.label}>O aplikaciji:</Text>
        <Text style={styles.value}>To je moja šolska aplikacija, ki predstavlja moj najljubši šport – smučanje.</Text>

        <Text style={styles.label}>Šola:</Text>
        <Text style={styles.value}>Obiskujem 3. letnik računalniške šole.</Text>

        <Text style={styles.label}>Moj hobi in strast:</Text>
        <Text style={styles.value}>V prostem času pozimi zelo radi smučam, saj obožujem hiter ritem, sneg in neokrnjene strmine.</Text>

        <Text style={styles.label}>Moj osebni smučarski dosežek:</Text>
        <Text style={styles.value}>Na Kopah imam na črni progi zabeležen rekord 90 km/h, moj naslednji cilj pa je, da dosežem vsaj 100 km/h!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  container: {
    padding: 20,
    backgroundColor: '#25292e',
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff69b4',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1e2227',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 500,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff69b4',
    marginTop: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 15,
    color: '#ccc',
    lineHeight: 22,
  },
});