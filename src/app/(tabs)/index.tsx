import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.title}>SMUČANJE</Text>
      <Text style={styles.subtitle}>Moj hobi</Text>
      
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=800&q=80' }} 
        style={styles.image} 
      />

      <Text style={styles.description}>
        Smučanje je čudovit zimski šport, ki se izvaja na snegu. Najbolj znane discipline so slalom, veleslalom in smuk, kjer se tekmuje na hitrost in spretnost. Meni je smučanje najbolj všeč, ker zelo uživam v vožnji po belih strminah, svežem zraku in občutku svobode, ko vijugam po snegu.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#25292e', // Temno ozadje za celoten pomik
  },
  container: {
    padding: 20,
    backgroundColor: '#25292e',
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff69b4', // Roza barva naslova
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#808080', // Siva barva podnapisa
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 320,
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
});