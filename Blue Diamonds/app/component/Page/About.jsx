import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/'

export default function About() {
    return (
      <ScrollView>
        <View style={styles.contanier}>
          <Image source={require("../../assets/images/logoLarge.png")} />
        </View>

        <View style={styles.contanierText}>
          <Text style={styles.text}>
            <Text style={styles.bold}> Welcome to Blue Diamond </Text>, where we
            blend artistry with elegance to offer a captivating range of
            meticulously crafted jewelry. Our passion lies in helping you
            discover pieces that resonate with your individuality and enhance
            life's most special moments. With a commitment to ethical sourcing,
            personalized service, and a diverse collection that caters to every
            style and occasion, we invite you to explore our world of timeless
            beauty. At Blue Diamond, we believe that each gemstone tells a
            unique story, and we are here to help you find the perfect piece
            that adds a touch of brilliance to your life.
          </Text>
          {/*     Blue Diamond Store is one of the chief precious stone adornments
            producers. Serving more than 5000 clients crosswise over the USA,
            UK, Latin America, Australia, and Canada.By owning all parts of the
            store network, including precious stone sourcing, cutting,
            combination, and gems fabricating.MK Store is resolved to
            give the most ideal incentive to Jewelers all through the world. We
            will probably enable the autonomous gem dealer to remain in front of
            their */}
        </View>
      </ScrollView>
    );
}


const styles = StyleSheet.create({
  contanier: {
    height: 300,
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  contanierText: {
    padding: 20,
  },
  text: {
    color: "#4cb1fe",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 10,
    marginTop: 10,
  },
  bold: {
    fontWeight: "700",
  },
});