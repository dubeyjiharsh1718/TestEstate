import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  ScrollView,
  Pressable, 
  BackHandler,
  TouchableOpacity,
  Alert,
  Image,
  View,
  Text,
  Dimensions
} from 'react-native';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useBackHandler } from '@react-native-community/hooks';
import { Modal } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { useIsFocused } from '@react-navigation/native';
import COLORS from '../../assets/const/colors';
import Colors from '../../constants/Colors';


const { width, height } = Dimensions.get('screen');

const OwnerLanddpage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');

  const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
    var location = "Kalyan";
    var PersonName = "Harsh Dubey";

    const handlAlltenentPress = () => {
      navigation.navigate('Alltenents');
    };
    const Addtenents = () => {
      navigation.navigate('Addtenents');
    };
    const handluploadpropertyPress = () => {
        navigation.navigate('Createnewproperty');
      }; 

      const handluptransaction = () => {
        navigation.navigate('Transactiondetails');
      };
    const isFocused = useIsFocused();

    function backActionHandler() {
        Alert.alert('', 'Are you sure to exit ?', [
            {
                text: 'No',
                onPress: () => null,
                style: 'cancel'
            },
            {
                text: 'Yes',
                onPress: () => BackHandler.exitApp(),
            }]
            );
            return true;
    }

    useBackHandler(isFocused ? backActionHandler:()=>false);

    useEffect(() => {
      // Function to retrieve selected location from local storage
      const getSelectedLocation = async () => {
        try {
          const storedLocation = await AsyncStorage.getItem('selectedLocationName');
          if (storedLocation) {
            setSelectedLocation(storedLocation);
          }
        } catch (error) {
          console.error('Error retrieving data from local storage:', error);
        }
      };
  
      // Call the function when the component mounts
      getSelectedLocation();
    }, []);

    
    const ListOptions = () => {
        return (
          <ScrollView>
            <View style={styles.ownerLandpage}>
            <View style={styles.ownerhii}>
              <Text style={styles.hiiowner}>Hii, Owner!</Text>
              <Text style={styles.ownerwelcome}>Welcome back</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                   style={styles.item}
                   onPress={handluploadpropertyPress}
                  >
                  <Image source={require('../../assets/images/addproperti.png')} style={[styles.image,{height: 50}]} />
                  <Text style={styles.addtext}>Add Property</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={styles.item}
                   onPress={Addtenents}
                  >
                  <Image source={require('../../assets/images/Buy_a_home.webp')} style={styles.image} />
                  <Text style={styles.addtext}>Add Tenant</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={styles.item}
                   onPress={handluptransaction}
                  >
                  <Image source={require('../../assets/images/addtransaction.jpg')} style={styles.image} />
                  <Text style={styles.addtext}>Transaction</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={styles.item}
                   onPress={toggleModal}
                  >
                  <Image source={require('../../assets/images/document.png')} style={styles.image} />
                  <Text style={styles.addtext}>Add Document</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/addreport.jpg')} style={styles.image} />
                  <Text style={styles.addtext}>Report</Text>
                </TouchableOpacity><TouchableOpacity
                   onPress={handlAlltenentPress}
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/tenent.png')} style={styles.image} />
                  <Text style={styles.addtext}>Tenent</Text>
                </TouchableOpacity>
            </View>
            <View>
            <View style={styles.containerproperty}>
            <Text style={styles.totalProperty}>Total property</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>120</Text>
            </View>
            </View>
            <View style={styles.containeroccupied}>
            <Text style={styles.totalProperty}>Occupied</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>40</Text>
            </View>
            </View>
            <View style={styles.containervacant}>
            <Text style={styles.totalProperty}>Vacant</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>22</Text>
            </View>
            </View>
            </View>
            
          </View>
          <Modal
    animationIn="slideInUp"
    animationOut="slideOutDown"
    backdropOpacity={0.5}
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
    <View style={styles.overlay} />

    <View style={[styles.bottomSheetContent, { height: height * 0.5 }]}>
      <Text style={{ fontSize: 20, color: 'black',paddingLeft:20,paddingBottom: 5, }}>Property Tour Request</Text>
      <Text style={{ fontSize: 15,paddingLeft: 20,color: '#353535'  }}>Accept or Decline the request to let the buyer know about availability</Text>
     <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,marginBottom: 10, backgroundColor: '#f9f9f9',
    elevation: 5,padding: 7, }}>
  <Image source={require('../../assets/images/house.jpg')} style={{ width: 80, height: 80, marginRight: 10 }} />
 <View style={{marginLeft: 10}}>
  <Text style={{color: 'black', fontSize: 18,fontWeight: '700'}}>Shivam Apt</Text>
  <Text style={{width: 200,color: '#353535'}}>New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503</Text></View>
</View>

  
      <View style={{marginLeft: 2,}}> 
      <Button
            title={'Accept Request'}
            onPress={toggleModal}
            buttonStyle={[styles.closemodalButton,{backgroundColor: '#d2fed2', marginBottom: 10, marginTop: 10,}]}
            titleStyle={{ color: 'green' }}
          /></View>
           <View style={{marginLeft: 2,}}> 
      <Button
            title={'Deny Request'}
            onPress={toggleModal}
            buttonStyle={[styles.closemodalButton,{backgroundColor: '#fed2d2'}]}
            titleStyle={{ color: 'red' }}
          /></View>
    </View>
  </Modal>
          </ScrollView>
        );
    }


    return (
        <SafeAreaView
            style={{ backgroundColor: COLORS.white, flex: 1, }}>
            <StatusBar
                translucent={false}
                backgroundColor={COLORS.white}
                barStyle='dark-content'
            />
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Selectlocation")}>
                    <AwesomeIcon name='map-marker-alt' size={26} style={{ color: Colors.iconcolor }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: Colors.heilightcolor,marginLeft: 5, fontSize: 19, fontWeight: 'bold' }}>
                        {selectedLocation}
                        </Text>
                    </View>
                </View>
                <View>
          <Text style={{ marginTop: 7, fontSize: 12, marginRight: 5, textAlign: 'right' }}>Welcome Back</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginRight: 5, textAlign: 'right', color: COLORS.dark }}>{PersonName}</Text>
        </View>
        <Pressable onPress={() => navigation.navigate("UserProfile")}>
          <View>
            <Image source={require("../../assets/images/house.jpg")} style={styles.profileImage} />
          </View>
        </Pressable>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListOptions />

                <FlatList
                    contentContainerStyle={{ paddingLeft: 20, marginVertical: 20 }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                   
                />
            </ScrollView>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        // paddingVertical: 20,
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        elevation: 4,
        paddingTop: 5,

    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
        justifyContent: 'center',
      },
      ownerLandpage:{
        // elevation: 4,
        backgroundColor: COLORS.white,
        // margin: 10,
      },
      item: {
        width: '26%', 
        margin: 10,
        marginBottom: 20,
        alignItems: 'center',
        elevation: 4,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingTop: 10,
        marginTop:10,
        padding: 4,
      },
      image: {
        width: '80%',
        height: 50,
        marginBottom:5,
      },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    ownerhii: {
        marginLeft: 25,
        marginTop: 20,
    },
    hiiowner:{
        fontSize: 20,
        color: 'black',
    },
    ownerwelcome : {
        fontSize: 16,
    },
    totalProperty: {
        fontSize: 20, 
        color: 'white',
      },
      valueContainer: {
        marginLeft: 8,
      },
      value: {
        fontSize: 20,
        color: 'white'
      },
      containeroccupied :{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 17,
        backgroundColor: 'orange',
        padding : 10,
      },
      containervacant:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 17,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#00b3db',
        padding : 10,
      },
      containerproperty:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 17,
        backgroundColor: '#635cbb',
        padding : 10,
      },
      bottomSheetContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.background,
        // padding: 60,
        justifyContent: 'center',
        borderTopLeftRadius: width * 0.07,
        borderTopRightRadius: width * 0.07,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        margin: 0,
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      closemodalButton: {
        borderRadius: 10,
        height: 46,
      },
      addtext:{
        color: '#353535'
      },
    

});

export default OwnerLanddpage;