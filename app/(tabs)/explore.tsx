import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View,
  Button,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemeContext } from "@/store/mycontext";
import { useContext } from "react";
import LottieView from "lottie-react-native";

export default function TabTwoScreen() {
  const { theme, toggleTheme, cart, removeFromCart } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme === "dark" ? "#353636" : "#D0D0D0",
      }}
    >
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Sepetim</Text>

        <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
          <Image
            source={require("../../assets/favicon.png")}
            style={styles.themeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Sepet boş değilse animasyon ve metinler görünmesin */}
      {cart.length === 0 && (
        <>
          <LottieView
            source={require("../../assets/animation/Cart.json")}
            style={{ width: Dimensions.get("window").width, height: 500 }}
            autoPlay
            loop
          />
          <Text style={theme === "dark" ? styles.titlecartDark : styles.titlecart}>Sepetin şu an boş</Text>
          <Text style={theme === "dark" ? styles.titlecartDark : styles.titlecart}>
            Sepetini Anasayfa'da bulunan ürünlerle doldurarak kumaş dünyasını
            keşfet!
          </Text>
        </>
      )}
      
      <ScrollView contentContainerStyle={styles.content}>
        {cart.map((item, index) =>
          theme === "dark" ? (
            <View style={styles.itemDark} key={index}>
              <Image style={styles.image} source={item.image} />
              <Text style={styles.textDark}>{item.name}</Text>
              <TouchableOpacity
                onPress={() => removeFromCart(item.id)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Sepetten{"\n"}Sil</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.item} key={index}>
              <Image style={styles.image} source={item.image} />
              <Text style={styles.text}>{item.name}</Text>
              <TouchableOpacity
                onPress={() => removeFromCart(item.id)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Sepetten{"\n"}Sil</Text>
              </TouchableOpacity>
            </View>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  header: {
    flexDirection: "row", // Yatay hizalama
    alignItems: "center", // Dikey ortalama
    justifyContent: "space-between", // Başlığı ortaya alıp dark butonu sağa aldım.
    padding: 20,
    marginTop: 40,
    backgroundColor: "#5660c3",
    borderRadius: 15,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    flex: 1, // Başlığı ortalamak için
    textAlign: "center",
  },
  titlecart: {
    fontSize: 20,
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  titlecartDark: {
    fontSize: 20,
    color: "#fff", 
    marginBottom: 10,
    textAlign: "center",
  },
  themeButton: {
    padding: 5,
    marginTop: 10,
  },
  themeIcon: {
    width: 24,
    height: 24,
  },
  content: {
    padding: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    fontFamily:"Poppins",
  },
  itemDark: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#353636",
    borderRadius: 5,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,    fontFamily:"SpaceMono"
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  textDark: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
  },
  button: {
    backgroundColor: "#5660c3",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
