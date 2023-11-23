import React, { useState } from 'react';
import { View, ScrollView, Pressable,TextInput, Image, Dimensions,StyleSheet } from 'react-native';
import { Text, Input, Icon as ElementsIcon, SearchBar } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
import { useBackHandler } from '@react-native-community/hooks';
import { StatusBar } from 'react-native';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card as ElementsCard } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../assets/const/colors';
import houses from '../assets/const/houses';
import Colors from '../constants/Colors';

const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  var location = "Kalyan";
  var PersonName = "Harsh Dubey";

  const isFocused = useIsFocused();

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const categoryList = ['Popular', 'Budget Friendly', 'Nearest'];

  const backActionHandler = () => {
    Alert.alert('', 'Are you sure to exit ?', [
      {
        text: 'No',
        onPress: () => null,
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: () => BackHandler.exitApp(),
      }
    ]);
    return true;
  };

  useBackHandler(isFocused ? backActionHandler : () => false);

  const ListCategories = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, marginTop: 50 }}>
        {categoryList.map((category, index) => (
          <Pressable key={index} onPress={() => setSelectedCategoryIndex(index)}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5, color: index === selectedCategoryIndex ? COLORS.dark : COLORS.gray }}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const ListOptions = () => {
    const optionsList = [
      { title: 'Kalyan', img: require('../assets/images/house.jpg') },
      { title: 'Thane', img: require('../assets/images/Buy_a_home.webp') },
      { title: 'Badlapur', img: require('../assets/images/real-estate-6688945_1280.jpg') },
      { title: 'Marine', img: require('../assets/images/house.jpg') },
    ];

    return (
      <View>
        <View style={{ marginTop: 14, alignItems: 'center' }}>
          <Text style={styles.Listtexttopsearch}>Highlight</Text>
        </View>
        <FlatList
          horizontal
          data={optionsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.optionCard}>
              <Image source={item.img} style={styles.optionCardImage} />
              <Text style={{ marginTop: 11, fontSize: 18, fontWeight: 'bold', color: COLORS.dark }}>{item.title}</Text>
            </View>
          )}
          contentContainerStyle={styles.optionListContainer}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ marginTop: 14, marginLeft: 25 }}>
          <Text style={styles.Listtext}>Top Search</Text>
        </View>
        <FlatList
          horizontal
          data={optionsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.optionCardtopsearch}>
              <Image source={item.img} style={styles.optionCardImagetop} />
              <Text style={{ marginTop: 11, fontSize: 18, color: COLORS.dark }}>{item.title}</Text>
            </View>
          )}
          contentContainerStyle={styles.optionListContainertop}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const Card = ({ house }) => {
    return (
      <Pressable onPress={() => navigation.navigate("DetailsScreen", house)}>
        <ElementsCard containerStyle={styles.card}>
          <Image source={house.image} style={styles.cardImage} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.dark, width: "65%" }} numberOfLines={1}>{house.title}</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.dark }}>
              Rs: <Text style={{ fontSize: 15, fontWeight: 'bold', color: "red" }}>{house.price}</Text>
            </Text>
          </View>
          <Text style={{ color: COLORS.gray, fontSize: 14, marginTop: 5 }}>{house.location}</Text>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <View style={styles.facility}>
              <Icon name='hotel' size={18} style={{ color: Colors.iconcolor }} />
              <Text style={styles.facilityText}>{house.bedrooms}</Text>
            </View>
            <View style={styles.facility}>
              <Icon name='bathtub' size={18} style={{ color: Colors.iconcolor }} />
              <Text style={styles.facilityText}>{house.bathrooms}</Text>
            </View>
            <View style={styles.facility}>
              <AwesomeIcon name='ruler-vertical' size={18} style={{ color: Colors.iconcolor }} />
              <Text style={styles.facilityText}>{house.area}</Text>
            </View>
          </View>
        </ElementsCard>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <StatusBar translucent={false} backgroundColor={COLORS.white} barStyle='dark-content' />
      <View style={{ paddingVertical: 7, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <View>
        <AwesomeIcon name='map-marker-alt' size={26} style={{ color: Colors.iconcolor }} />
          <Text style={{ color: 'black' }}>Location</Text>
        </View>
        <View>
          <Text style={{ marginTop: 7, fontSize: 12, marginRight: 5, textAlign: 'right' }}>Welcome Back</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginRight: 5, textAlign: 'right', color: COLORS.dark }}>{PersonName}</Text>
        </View>
        <Pressable onPress={() => navigation.navigate("UserProfile")}>
          <View>
            <Image source={require("../assets/images/house.jpg")} style={styles.profileImage} />
          </View>
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ paddingVertical: 7, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
      <View style={styles.searchInputContainer}>
                        <Icon name="search" size={25} style={{color:Colors.heilightcolor}} />
                        <TextInput placeholder='Search address, city, location' />
                    </View>
  <Pressable style={styles.sortbtn}>
    <Icon name='tune' type='material' color={COLORS.white} size={25} />
  </Pressable>
</View>

        <ListOptions />
        <ListCategories />
        <FlatList
          contentContainerStyle={{ alignItems:'center', marginVertical: 20 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={houses}
          renderItem={({ item }) => <Card house={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    searchInputContainer: {
        backgroundColor: COLORS.light,
        height: 43,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    sortbtn: {
        backgroundColor: Colors.btn,
        height: 40,
        width: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    optionListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 20,
        paddingHorizontal: 20,
    },
    optionListContainertop: {
        flexDirection: 'row',
      paddingHorizontal: 20,
  },
    optionCardtopsearch: {
      height: 100,
      width: 100,
      elevation: 15,
      backgroundColor: COLORS.white,
      alignItems: 'center',
      borderRadius: 100,
      paddingTop: 10,
      marginTop:10,
      marginRight:15,
      marginBottom: 25,
      paddingHorizontal: 10,
  },
    optionCard: {
        height: 210,
        width: width - 40,
        elevation: 15,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: 10,
        marginTop:20,
        paddingHorizontal: 10,
        marginRight: 10,
        marginBottom: 30,
    },
    optionCardImage: {
        height: 150,
        borderRadius: 10,
        width: '100%',
    },
    optionCardImagetop: {
      height: 80,
      borderRadius: 300,
      width: '100%',
  },
    categoryListContainer: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
    },
    categoryListText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.gray,
    },
    activeCategoryListText: {
        color: COLORS.dark,
        borderBottomWidth: 2,
        paddingBottom: 5,
    },
    card: {
        height: 320,
        backgroundColor: COLORS.white,
        elevation: 10,
        width: width - 40,
        marginBottom: 20,
        padding: 15,
        borderRadius: 20,
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 15,
    },
    facility: {
        flexDirection: 'row',
        marginRight: 15,
    },
    facilityText: {
        marginLeft: 5,
        color: COLORS.gray,
    },
    optionListtext:{
      marginTop: 14,
      alignItems: "center",
    },
    optionListtexttopseach:{
      marginTop: 14,
      marginLeft: 25,
    },
    Listtext:{
      fontSize: 20,
      paddingBottom: 3,
      color: "black",
    },
    Listtexttopsearch:{
     
      fontSize: 20,
      color: "black",
      paddingBottom: 3,
      borderBottomWidth: 2,
    },


});

