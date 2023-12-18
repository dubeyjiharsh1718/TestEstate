import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../../assets/const/colors';
import Colors from '../../constants/Colors';
import { Image } from 'react-native-elements';


function Tenentdetails({ navigation }) {
    const [currentSection, setCurrentSection] = useState('Transaction');
    const [selectedSection, setSelectedSection] = useState('Transaction');
    // const [selectedSection, setSelectedSection] = useState('Overview'); 
    const sections = ['Basic Info', 'Transaction', 'Documents', 'Emergency'];
    const handleSectionClick = (section) => {
        setCurrentSection(section);
        setSelectedSection(section);
      };

  return (
    <ScrollView style={styles.container}>
       <View style={styles.header}>
        <View style={{ marginLeft: 20 }}>
          <Feather
            name="arrow-left"
            size={25}
            style={{ color: '#15273F' }}
            onPress={navigation.goBack}
          />
        </View>
        <View style={{ marginLeft: 80 }}>
          <Text style={styles.headerText}>Tenant Details</Text>
        </View>
      </View>


<View>
<View style={[styles.propertidata,{marginTop: 20}]}>
      <View style={[styles.itemmaincontainer,{height: 230,elevation: 10,borderRadius: 15}]}>
        <View style={[styles.itemContainer,{backgroundColor: 'white',justifyContent: 'flex-start'}] }>
            
          <View style={[styles.imageContainer,{marginRight: 20}]}>
          <Image source={require("../../assets/images/tenent1.jpg")} style={styles.profileImage} />
          </View>
          <View style={[styles.locationContainer,{marginTop: 22}]}>
          <Text style={{fontSize: 22,color: 'black',marginBottom: 3}}>Hrithik Roshan</Text>
          <Text style={{fontSize: 15,marginBottom: 5,color: '#353535'}}>contact no : +91 7387440541</Text>
          <Text style={{fontSize: 15,marginBottom: 3,color: '#353535'}}>Email : hrithik123@gmail.com</Text>
          <Text style={{fontSize: 15,marginBottom: 3,color: '#353535'}}>Address : Nutan APT,B/101 </Text>
          <Text style={{fontSize: 15,marginBottom: 3,color: '#353535'}}>Joined : 10 Nov 2023</Text>
            </View>
        </View>
        </View>
    </View>
</View>
            
        <ScrollView
        horizontal
        style={styles.optionaddproperty}
        showsHorizontalScrollIndicator={false} >
        {sections.map((section, index) => (
          <TouchableOpacity key={index} onPress={() => handleSectionClick(section)}>
            <View
              style={[
                styles.optionCardtopsearch,
                selectedSection === section && styles.activeSection,
              ]}
            >
              <Text style={{ marginTop: 6, fontSize: 18, color: 'black' }}>
                {section}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {currentSection === 'Transaction' && (
        <View>
 <View><Text style={{fontSize: 24,color:'black',fontWeight: '600',marginBottom: 15}}>Transaction History</Text></View>

      <View style={styles.propertidata}>
      <View style={styles.itemmaincontainer}>
        <View style={styles.itemContainer }>
            
          <View style={styles.imageContainer}>
          <Text style={styles.transname}>Harsh Dubey</Text>
          <View style={{flexDirection: 'row',}}>
          <Icon name='add-link' type='material' color={Colors.btn} size={22} />
          <Text style={styles.attachment}>1 Attachemnt</Text>
          </View>
          <View style={{flexDirection: 'row',}}>
          <Icon name='home' type='material' color={Colors.heilightcolor} size={22} />
          <Text style={{fontSize: 17,marginLeft: 5,color: '#353535'}}>Nutan Apt 101</Text>
          </View>
          </View>
          <View style={styles.locationContainer}>
          <Text style={{fontSize: 20,color: 'red',marginBottom: 8}}>$256</Text>
          <Text style={{fontSize: 17,color: '#353535'}}>20 Jan 2023</Text>
            </View>
        </View>
        </View>
    </View>

    <View style={styles.propertidata}>
      <View style={styles.itemmaincontainer}>
        <View style={styles.itemContainer }>
            
          <View style={styles.imageContainer}>
          <Text style={styles.transname}>Abhi Dubey</Text>
          <View style={{flexDirection: 'row',}}>
          <Icon name='add-link' type='material' color={Colors.btn} size={22} />
          <Text style={styles.attachment}>1 Attachemnt</Text>
          </View>
          <View style={{flexDirection: 'row',}}>
          <Icon name='home' type='material' color={Colors.heilightcolor} size={22} />
          <Text style={{fontSize: 17,marginLeft: 5,color: '#353535'}}>Nutan Apt 101</Text>
          </View>
          </View>
          <View style={styles.locationContainer}>
          <Text style={{fontSize: 20,color: 'red',marginBottom: 8}}>$227</Text>
          <Text style={{fontSize: 17,color: '#353535'}}>20 Jan 2023</Text>
            </View>
        </View>
        </View>
    </View>

    <View style={styles.propertidata}>
      <View style={styles.itemmaincontainer}>
        <View style={styles.itemContainer }>
            
          <View style={styles.imageContainer}>
          <Text style={styles.transname}>Deep Dubey</Text>
          <View style={{flexDirection: 'row',}}>
          <Icon name='add-link' type='material' color={Colors.btn} size={22} />
          <Text style={styles.attachment}>1 Attachemnt</Text>
          </View>
          <View style={{flexDirection: 'row',}}>
          <Icon name='home' type='material' color={Colors.heilightcolor} size={22} />
          <Text style={{fontSize: 17,marginLeft: 5,color: '#353535'}}>Nutan Apt 101</Text>
          </View>
          </View>
          <View style={styles.locationContainer}>
          <Text style={{fontSize: 20,color: 'red',marginBottom: 8}}>$411</Text>
          <Text style={{fontSize: 17,color: '#353535'}}>20 Jan 2023</Text>
            </View>
        </View>
        </View>
    </View>

    <View style={styles.propertidata}>
      <View style={styles.itemmaincontainer}>
        <View style={styles.itemContainer }>
            
          <View style={styles.imageContainer}>
          <Text style={styles.transname}>Vishal Dubey</Text>
          <View style={{flexDirection: 'row',}}>
          <Icon name='add-link' type='material' color={Colors.btn} size={22} />
          <Text style={styles.attachment}>1 Attachemnt</Text>
          </View>
          <View style={{flexDirection: 'row',}}>
          <Icon name='home' type='material' color={Colors.heilightcolor} size={22} />
          <Text style={{fontSize: 17,marginLeft: 5,color: '#353535'}}>Nutan Apt 101</Text>
          </View>
          </View>
          <View style={styles.locationContainer}>
          <Text style={{fontSize: 20,color: 'red',marginBottom: 8}}>$256</Text>
          <Text style={{fontSize: 17,color: '#353535'}}>20 Jan 2023</Text>
            </View>
        </View>
        </View>
    </View>

    <View style={styles.propertidata}>
      <View style={styles.itemmaincontainer}>
        <View style={styles.itemContainer }>
            
          <View style={styles.imageContainer}>
          <Text style={styles.transname}>Avi Dubey</Text>
          <View style={{flexDirection: 'row',}}>
          <Icon name='add-link' type='material' color={Colors.btn} size={22} />
          <Text style={styles.attachment}>1 Attachemnt</Text>
          </View>
          <View style={{flexDirection: 'row',}}>
          <Icon name='home' type='material' color={Colors.heilightcolor} size={22} />
          <Text style={{fontSize: 17,marginLeft: 5,color: '#353535'}}>Nutan Apt 101</Text>
          </View>
          </View>
          <View style={styles.locationContainer}>
          <Text style={{fontSize: 20,color: 'red',marginBottom: 8}}>$300</Text>
          <Text style={{fontSize: 17,color: '#353535'}}>20 Jan 2023</Text>
            </View>
        </View>
        </View>
    </View>
    </View>
      )}
  </ScrollView>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    elevation: 4,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#15273F',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingRight:16,
    marginLeft: 10,
    marginBottom: 16,
    height: 100,
   backgroundColor: '#f5f6fa',
  },
  imageContainer: {
    marginBottom: 12,
  },
  locationContainer: {
    marginBottom: 5,
  },
  searchInputContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
},
ownerhii: {
    marginLeft: 25,
    marginTop: 20,
    marginBottom : 10,
},
hiiowner:{
    fontSize: 27,
    color: 'black',
},
containertenetlist:{
    flexDirection: 'row',
    flexWrap: 'wrap',
     margin: 10,
    justifyContent: 'center',
},
item:{
    width: '28%', 
    margin: 8,
    alignItems: 'center',
    elevation: 4,
    borderRadius: 10,
    paddingTop: 10,
    marginTop:10,
    padding: 6,
    height: 100,
},
image: {
    width: '80%',
    height: 50,
    marginBottom:5,
  },
  Total:{
    paddingTop: 15,
    fontSize: 20,
    color: 'white',
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 'bold',
  },
  totalnumber:{
    fontSize: 17,
    textAlign: "center",
    color:"white",
  },
  transname: {
    fontSize: 20,
    color: 'black',
    marginBottom: 3,
  },
  attachment:{
    fontSize: 17,
    marginLeft: 3,
    color: '#353535'
  },
  itemmaincontainer:{
    height: 120, 
    borderColor: '#ccc',
    borderWidth: 1, 
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 8,
  },
  propertidata:{
    marginBottom: 20,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginTop: 40,
    borderWidth: 3,
    borderColor: Colors.btn,
},
optionaddproperty: {
    marginTop: 10,
    marginBottom: 30,
  },
  optionCardtopsearch: {
    height: 40,
    width: 120,
    elevation: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // marginBottom: 5,
    marginLeft: 0,
    paddingHorizontal: 5,
  },
  activeSection: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },

});


export default Tenentdetails;
