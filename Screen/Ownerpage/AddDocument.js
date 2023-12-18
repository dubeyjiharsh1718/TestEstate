import React, { useState } from 'react';
import { View, Text, TouchableOpacity,TextInput, StyleSheet, Dimensions,ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../../assets/const/colors';
import Colors from '../../constants/Colors';
import { SpeedDial } from '@rneui/themed';


const { width } = Dimensions.get("screen");

function AddDocument({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = React.useState(false);

  const handltenentdetails = () => {
    navigation.navigate('Tenentdetails');
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
        <View style={{ marginLeft: 90 }}>
          <Text style={styles.headerText}>Add Document</Text>
        </View>
      </View>


    <View style={{flexDirection: 'row', justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  marginBottom: 10,
                  marginTop: 15,
                  }}>
                    <View style={styles.searchInputContainer}>
                        <Icon name="search" size={25} color={Colors.heilightcolor} />
                        <TextInput placeholder='Search address, city, location' />
                    </View>

                </View>

      <View style={styles.propertidata}>
      <View style={styles.itemmaincontainer}>
        <View style={styles.itemContainer }>
            
          <View style={styles.imageContainer}>
          <View style={{flexDirection: 'row',}}>
          <Icon name="edit-document" size={55} style={{paddingTop: 10,paddingLeft: 3}} color={Colors.heilightcolor} />
          <View style={{}}>
          <Text style={{paddingTop: 10,fontSize: 17,marginLeft: 5,color: '#353535',paddingBottom: 5}}>Harsh Dubey</Text>
          <Text style={{fontSize: 17,marginLeft: 5,color: '#353535'}}>6 Day ago</Text></View>
          </View>
          </View>
          <View>
          <Text style={{fontSize: 17,color:'black',paddingTop: 25}}>1.4 MB</Text></View>
          <TouchableOpacity style={styles.locationContainer}>
          <Icon name="more-vert" size={45} style={{paddingTop: 15}} color={Colors.btn} />
            </TouchableOpacity>
        </View>
        </View>
    </View>

    <View style={styles.propertidata}>
      <View style={styles.itemmaincontainer}>
        <View style={styles.itemContainer }>
            
          <View style={styles.imageContainer}>
          <View style={{flexDirection: 'row',}}>
          <Icon name="edit-document" size={55} style={{paddingTop: 10,paddingLeft: 3}} color={Colors.heilightcolor} />
          <View style={{}}>
          <Text style={{paddingTop: 10,fontSize: 17,marginLeft: 5,color: '#353535',paddingBottom: 5}}>Prashant Madival</Text>
          <Text style={{fontSize: 17,marginLeft: 5,color: '#353535'}}>6 Day ago</Text></View>
          </View>
          </View>
          <View>
          <Text style={{fontSize: 17,color:'black',paddingTop: 25}}>1.4 MB</Text></View>
          <TouchableOpacity style={styles.locationContainer}>
          <Icon name="more-vert" size={45} style={{paddingTop: 15}} color={Colors.btn} />
            </TouchableOpacity>
        </View>
        </View>
    </View>

    <View style={styles.propertidata}>
      <View style={styles.itemmaincontainer}>
        <View style={styles.itemContainer }>
            
          <View style={styles.imageContainer}>
          <View style={{flexDirection: 'row',}}>
          <Icon name="edit-document" size={55} style={{paddingTop: 10,paddingLeft: 3}} color={Colors.heilightcolor} />
          <View style={{}}>
          <Text style={{paddingTop: 10,fontSize: 17,marginLeft: 5,color: '#353535',paddingBottom: 5}}>Shivam Gupta</Text>
          <Text style={{fontSize: 17,marginLeft: 5,color: '#353535'}}>6 Day ago</Text></View>
          </View>
          </View>
          <View>
          <Text style={{fontSize: 17,color:'black',paddingTop: 25}}>1.4 MB</Text></View>
          <TouchableOpacity style={styles.locationContainer}>
          <Icon name="more-vert" size={45} style={{paddingTop: 15}} color={Colors.btn} />
            </TouchableOpacity>
        </View>
        </View>
    </View>

    <View style={[styles.propertidata,{marginBottom: 100}]}>
      <View style={styles.itemmaincontainer}>
        <View style={styles.itemContainer }>
            
          <View style={styles.imageContainer}>
          <View style={{flexDirection: 'row',}}>
          <Icon name="edit-document" size={55} style={{paddingTop: 10,paddingLeft: 3}} color={Colors.heilightcolor} />
          <View style={{}}>
          <Text style={{paddingTop: 10,fontSize: 17,marginLeft: 5,color: '#353535',paddingBottom: 5}}>Kiran Sen</Text>
          <Text style={{fontSize: 17,marginLeft: 5,color: '#353535'}}>6 Day ago</Text></View>
          </View>
          </View>
          <View>
          <Text style={{fontSize: 17,color:'black',paddingTop: 25}}>1.4 MB</Text></View>
          <TouchableOpacity style={styles.locationContainer}>
          <Icon name="more-vert" size={45} style={{paddingTop: 15}} color={Colors.btn} />
            </TouchableOpacity>
        </View>
        </View>
    </View>

    <SpeedDial
    isOpen={open}
    icon={{ name: 'edit', color: '#fff' }}
    openIcon={{ name: 'close', color: '#fff' }}
    onOpen={() => setOpen(!open)}
    onClose={() => setOpen(!open)}
    overlayColor="rgba(0, 0, 0, 0)"
    buttonStyle={{ backgroundColor: '#6f42c1' }} 
  >
    <SpeedDial.Action
      icon={{ name: 'add', color: '#fff' }}
      title="Add"
      buttonStyle={{ backgroundColor: '#6f42c1' }} 
      onPress={() => console.log('Add Something')}
    />
    <SpeedDial.Action
      icon={{ name: 'delete', color: '#fff' }}
      title="Delete"
      buttonStyle={{ backgroundColor: '#6f42c1' }} 
      onPress={() => console.log('Delete Something')}
    />
  </SpeedDial>
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
  propertidata:{
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 5,
    marginRight: 4,
    paddingRight:16,
    marginLeft: 10,
    marginBottom: 10,
    height: 75,
    backgroundColor: '#f5f6fa',
    elevation: 1,
  },
  locationContainer: {
    marginBottom: 5,
  },
  propertyLocation :{
    marginLeft: 50,
    color: 'black',
  },
  searchInputContainer: {
    backgroundColor: COLORS.light,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
},
hiiowner:{
    fontSize: 18,
    color: 'black',
    paddingTop: 12,
    paddingBottom: 5,
},
item:{
    width: '26%', 
    margin: 8,
    alignItems: 'center',
    elevation: 4,
    borderRadius: 10,
    paddingTop: 10,
    marginTop:10,
    padding: 6,
    height: 100,
},
itemmaincontainer:{
    // height: 120, 
    // borderColor: '#ccc',
    // borderWidth: 1, 
    // backgroundColor: COLORS.white,
    // elevation: 5,
    // borderRadius: 8,
},
imageContainer: {
    marginBottom: 12,
  },

});


export default AddDocument;
