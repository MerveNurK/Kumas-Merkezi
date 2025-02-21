import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Modal,
} from "react-native";
import { useContext } from "react";
import { ThemeContext } from "@/store/mycontext";
import LottieView from "lottie-react-native";

export default function HomeScreen() {
  const { theme, toggleTheme, addToCart } = useContext(ThemeContext);
  const [showCartAnimation, setShowCartAnimation] = useState(false); // Animasyon görünürlüğü için durum

  // Sepete ekleme animasyonu gösterme
  const showAnimation = () => {
    setShowCartAnimation(true); // Animasyonu başlat
  };

  // Animasyon bittikten sonra modalı kapat
  const closeAnimation = () => {
    setShowCartAnimation(false); // Modalı kapat
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme === "dark" ? "#353636" : "#D0D0D0",
      }}
    >
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Kumaş Merkezi</Text>

        <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
          <Image
            source={require("../../assets/favicon.png")}
            style={styles.themeIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Ürün Listesi */}
        {[
          {
            id: 0,
            name: "Denim",
            image: require("../../assets/Denim.png"),
            description:
              "Yaygın olarak 'jean' adı verilen, indigo boyalı, diagonal dokuma kumaştır.",
          },
          {
            id: 1,
            name: "Ribana",
            image: require("../../assets/Ribana.png"),
            description: "Düz ve ters ilmekle örülen esnek yapılı kumaştır.",
          },
          {
            id: 2,
            name: "Örme Pike",
            image: require("../../assets/Örme Pike.png"),
            description:
              "Genellikle %100 pamuktan yapılan ilmek ve askı hareketiyle oluşan örme kumaştır.",
          },
          {
            id: 3,
            name: "Poplin",
            image: require("../../assets/Poplin.png"),
            description:
              "Bezayağı, arkası önü aynı pamuklu dokuma kumaştır; kırışsa da kolay ütülenir.",
          },
          {
            id: 4,
            name: "Süprem",
            image: require("../../assets/Süprem.png"),
            description:
              "Penye, önü ve arkası farklı, rahat giyim sağlayan yuvarlak örme kumaştır.",
          },
          {
            id: 5,
            name: "Gabardin",
            image: require("../../assets/Gabardin.png"),
            description:
              "Diagonal dokulu, genelde pamuklu, sıkı dokuma kumaştır.",
          },
          {
            id: 6,
            name: "İnterlok",
            image: require("../../assets/İnterlok.png"),
            description:
              "Ön ve arka görüntüsü aynı, sıkı örme kumaştır; genellikle çelik örgü denir.",
          },
          {
            id: 7,
            name: "Dokuma Pike",
            image: require("../../assets/Dokuma Pike.png"),
            description: "Jakarlı kumaş, %100 pamuktan yapılır ve zor kırışır.",
          },
          {
            id: 8,
            name: "2-3 İplik",
            image: require("../../assets/2-3 iplik.png"),
            description:
              "Genellikle 2-3 iplik örme kumaş, sweatshirt kumaşı olarak bilinir.",
          },
        ].map((item, index) =>
          theme === "dark" ? (
            <View style={styles.itemDark} key={index}>
              <Image style={styles.image} source={item.image} />
              <Text style={styles.textDark}>{item.description}</Text>
              <TouchableOpacity
                onPress={() => {
                  showAnimation(); // Animasyonu başlat
                  addToCart(item); // Sepete ekle
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Sepete{"\n"}Ekle</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.item} key={index}>
              <Image style={styles.image} source={item.image} />
              <Text style={styles.text}>{item.description}</Text>
              <TouchableOpacity
                onPress={() => {
                  showAnimation(); // Animasyonu başlat
                  addToCart(item); // Sepete ekle
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Sepete{"\n"}Ekle</Text>
              </TouchableOpacity>
            </View>
          )
        )}
      </ScrollView>

      {/* Modal ile animasyonu gösterme */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={showCartAnimation}
        onRequestClose={closeAnimation}
      >
        <View style={styles.modalBackground}>
          <LottieView
            source={require("../../assets/animation/Main Scene.json")} // Animasyon dosyasının yolu
            style={{ width: Dimensions.get("window").width, height: 400 }} // Ekran genişliğine göre animasyonu ayarlıyoruz
            autoPlay
            loop={false}
            onAnimationFinish={closeAnimation} // Animasyon tamamlandığında modalı kapat
          />
        </View>
      </Modal>
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
    elevation: 3,
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
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
