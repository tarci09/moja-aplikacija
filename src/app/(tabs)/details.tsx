import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Details() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tehnike in užitek na snegu</Text>
      
      <Text style={styles.description}>
        Smučanje ni samo hitrost, ampak predvsem izjemna tehnika, ravnotežje in ritem. Občutek, ko se zjutraj zapodiš po sveže urejeni in neokrnjeni progi, je neopisljiv. S pravimi gibi in zavoji smučanje postane prava umetnost gibanja na snegu, ki krepi celotno telo in prinaša neverjetno veselje.
      </Text>

      <Text style={styles.sectionTitle}>Vrste smučanja</Text>

      {/* Slalom */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>1. Slalom</Text>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=80' }} 
          style={styles.image} 
        />
        <Text style={styles.cardText}>
          Slalom je tehnično izjemno zahtevna disciplina, kjer morajo smučarji čim hitreje premagati progo, ki je posejana s precej gosto postavljenimi količki (vrati). Zahteva hitre reflekse, izjemno natančnost, kratke in ostre zavoje ter popoln nadzor nad ravnotežjem.
        </Text>
      </View>

      {/* Veleslalom */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>2. Veleslalom</Text>
        <Image 
          source={{ uri: 'https://images.24ur.com/media/images/1106xX/Jan2026/1b691916f9b92aa659ad_63519368.jpg.webp?v=775e' }} 
          style={styles.image} 
        />
        <Text style={styles.cardText}>
          Veleslalom je nekakšna zlata sredina med slalomom in smukom. Vrata so postavljena precej širše narazen kot pri slalomu, kar omogoča daljše, hitrejše in bolj tekoče zavoje. Smučarji morajo združiti hitrost in dobro tehniko, saj proga zahteva veliko dinamičnega gibanja.
        </Text>
      </View>

      {/* Smuk */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>3. Smuk</Text>
        <Image 
          source={{ uri: 'https://sportklub.si/wp-content/uploads/2026/03/04/1772627534-profimedia-1079671484-550x360.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.cardText}>
          Smuk je kralj alpskih disciplin in velja za najhitrejšo ter najbolj drzen šport na snegu. Smučarji doseagajo vrtoglave hitrosti, ki pogosto presegajo 130 km/h, ter premagujejo dolge skoke in strme strmine. Za to disciplino so poleg vrhunske opreme potrebni izjemen pogum, moč in aerodinamična drža.
        </Text>
      </View>

      {/* Top 3 smučarji */}
      <Text style={styles.sectionTitle}>Top 3 najboljši smučarji na svetu</Text>

      <View style={styles.rankingCard}>
        <Text style={styles.rankNumber}>🥇 1. mesto</Text>
        <Text style={styles.rankName}>Marco Odermatt</Text>
        <Text style={styles.cardText}>Švicarski smučarski fenomen, ki blesti v veleslalomu, superveleslalomu in smuku ter podira rekorde.</Text>
      </View>

      <View style={styles.rankingCard}>
        <Text style={styles.rankNumber}>🥈 2. mesto</Text>
        <Text style={styles.rankName}>Aleksander Aamodt Kilde</Text>
        <Text style={styles.cardText}>Norveški kralj hitrih disciplin, znan po izjemni moči, pogumu in neverjetnih hitrostih na smuku.</Text>
      </View>

      <View style={styles.rankingCard}>
        <Text style={styles.rankNumber}>🥉 3. mesto</Text>
        <Text style={styles.rankName}>Marcel Hirscher</Text>
        <Text style={styles.cardText}>Legenda alpskega smučanja in eden najboljših tekmovalcev vseh časov z največ osvojenimi malimi in velikimi kristalnimi globusi.</Text>
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
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff69b4',
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1e2227',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff69b4',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 15,
    color: '#bbb',
    lineHeight: 22,
    textAlign: 'center',
  },
  rankingCard: {
    backgroundColor: '#1e2227',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    width: '100%',
    maxWidth: 500,
    borderLeftWidth: 4,
    borderLeftColor: '#ff69b4',
  },
  rankNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffd33d',
    marginBottom: 4,
  },
  rankName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
});