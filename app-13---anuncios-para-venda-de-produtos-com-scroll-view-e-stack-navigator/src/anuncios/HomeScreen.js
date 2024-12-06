import React from 'react';
import { View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';

const products = [
 { id: 1, name: "Samsung Galaxy Note20", description: "256GB 6.7 Mystic Bronze", price: "R$ 1.300,00", imageUrl: "https://th.bing.com/th/id/R.a98a21278873054a250f7e30feec7686?rik=66P%2fUCcPZpcnew&pid=ImgRaw&r=0" },
  { id: 2, name: "Samsung Galaxy A55 5G", description: "128GB 6.6 Azul Escuro", price: "R$ 1.799,10", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-a556ezklzto/gallery/br-galaxy-a55-5g-sm-a556-sm-a556ezklzto-540317359?$1300_1038_PNG$" },
  { id: 3, name: "Samsung Galaxy A16 5G", description: "128GB 6.7 Verde Claro", price: "R$ 1.400,00", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-a166mlgdzto/gallery/br-galaxy-a16-5g-sm-a166-sm-a166mlgdzto-544258922?$1300_1038_PNG$" },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigation.navigate('Details', { product })}
          >
            <Text style={styles.detailsButtonText}>Ver detalhes</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
