import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Surface } from 'react-native-paper';
import COLORS from '../../assets/const/colors';

const { width } = Dimensions.get('screen');

function Createnewproperty({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const [currentSection, setCurrentSection] = useState('Overview');
  const [selectedSection, setSelectedSection] = useState('Overview'); // Add this line
  const sections = ['Overview', 'Location', 'Amenities', 'Photo'];

  const [value, setValue] = useState(null);
  const [schoolChecked, setSchoolChecked] = useState(false);
  const [groundChecked, setGroundChecked] = useState(false);
  const [stationChecked, setStationChecked] = useState(false);

  const toggleCheckbox = (checkboxType) => {
    switch (checkboxType) {
      case 'school':
        setSchoolChecked(!schoolChecked);
        break;
      case 'ground':
        setGroundChecked(!groundChecked);
        break;
      case 'station':
        setStationChecked(!stationChecked);
        break;
      default:
        break;
    }
  };

  const handleSectionClick = (section) => {
    setCurrentSection(section);
  };

  const navigateToNextSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      setCurrentSection(nextSection);
    }
  };

  const navigateToPreviousSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      const previousSection = sections[currentIndex - 1];
      setCurrentSection(previousSection);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Surface style={styles.header}>
        <View style={{ marginLeft: 20 }}>
          <Feather
            name="arrow-left"
            size={25}
            style={{ color: '#15273F' }}
            onPress={navigation.goBack}
          />
        </View>
        <View style={{ marginLeft: 100 }}>
          <Text style={styles.headerText}>Create</Text>
        </View>
      </Surface>
      <ScrollView
        horizontal
        style={styles.optionaddproperty}
        showsHorizontalScrollIndicator={false}
      >
        {sections.map((section, index) => (
          <TouchableOpacity key={index} onPress={() => handleSectionClick(section)}>
            <View
              style={[
                styles.optionCardtopsearch,
                selectedSection === section && styles.activeSection,
              ]}
            >
              <Text style={{ marginTop: 6, fontSize: 18, color: 'white' }}>
                {section}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {currentSection === 'Overview' && (
        <View>
          {/* Overview Section Content */}
        </View>
      )}

{currentSection === 'Location' && <View>
      <Text style={{ fontSize: 18, color: 'black',marginBottom:5, }}>Property Address</Text>
                <TextInput
                  style={styles.otpInput}
                  keyboardType="default"
                  placeholder="Address"
                  textAlignVertical="top"
                />
                <Text style={{ fontSize: 18, color: 'black',marginBottom:5, }}>Property Location</Text>

                <TextInput
                  style={{ ...styles.otpInput, height: 50 }}
                  keyboardType="default"
                  placeholder="Location"
                  textAlignVertical="top"
                />
                <View style={styles.table}>
  <View style={styles.row}>
    <View style={styles.column}>
      <Text style={styles.headertable}>Add Utilities</Text>
    </View>
    <View style={styles.column}>
      <Text style={styles.headertable}>Distance in Time</Text>
    </View>
  </View>
  <View style={styles.row}>
    <View style={styles.column}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
        <FontAwesome5
          name="school"
          size={15}
          color="#15beae"
        />
        <Text style={styles.locationtext}>school</Text>
        {schoolChecked ? (
          <FontAwesome5
            name="check"
            size={20}
            color="#15beae"
            onPress={() => toggleCheckbox('school')}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={20}
            color="black"
            onPress={() => toggleCheckbox('school')}
          />
        )}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
        <FontAwesome5
          name="tree"
          size={15}
          color="#15beae"
        />
        <Text style={styles.locationtext}>Ground</Text>
        {groundChecked ? (
          <FontAwesome5
            name="check"
            size={20}
            color="#15beae"
            onPress={() => toggleCheckbox('ground')}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={20}
            color="black"
            onPress={() => toggleCheckbox('ground')}
          />
        )}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
        <FontAwesome5
          name="train"
          size={15}
          color="#15beae"
        />
        <Text style={styles.locationtext}>station</Text>
        {stationChecked ? (
          <FontAwesome5
            name="check"
            size={20}
            color="#15beae"
            onPress={() => toggleCheckbox('station')}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={20}
            color="black"
            onPress={() => toggleCheckbox('station')}
          />
        )}
      </View>
    </View>
    <View style={styles.column}>
      <Text style={styles.cell}>1km</Text>
      <Text style={styles.cell}>1km</Text>
      <Text style={styles.cell}>1km</Text>
    </View>
  </View>
</View>

        </View>}



      {currentSection === 'Amenities' && <View>
      <Text style={styles.headertableinternal}>External Facilities</Text>
        <View style={styles.table}>
                <View style={styles.row}>
                  <View style={styles.column}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
                      <Text style={styles.locationtext}>school</Text>
                      {schoolChecked ? (
                        <FontAwesome5
                          name="check"
                          size={20}
                          color="#15beae"
                          onPress={() => toggleCheckbox('school')}
                        />
                      ) : (
                        <FontAwesome5
                          name="square"
                          size={20}
                          color="black"
                          onPress={() => toggleCheckbox('school')}
                        />
                      )}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                      <Text style={styles.locationtext}>Ground</Text>
                      {groundChecked ? (
                        <FontAwesome5
                          name="check"
                          size={20}
                          color="#15beae"
                          onPress={() => toggleCheckbox('ground')}
                        />
                      ) : (
                        <FontAwesome5
                          name="square"
                          size={20}
                          color="black"
                          onPress={() => toggleCheckbox('ground')}
                        />
                      )}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                      <Text style={styles.locationtext}>station</Text>
                      {stationChecked ? (
                        <FontAwesome5
                          name="check"
                          size={20}
                          color="#15beae"
                          onPress={() => toggleCheckbox('station')}
                        />
                      ) : (
                        <FontAwesome5
                          name="square"
                          size={20}
                          color="black"
                          onPress={() => toggleCheckbox('station')}
                        />
                      )}
                    </View>
                  </View>
                  <View style={styles.column}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
                      <Text style={styles.locationtext}>school</Text>
                      {schoolChecked ? (
                        <FontAwesome5
                          name="check"
                          size={20}
                          color="#15beae"
                          onPress={() => toggleCheckbox('school')}
                        />
                      ) : (
                        <FontAwesome5
                          name="square"
                          size={20}
                          color="black"
                          onPress={() => toggleCheckbox('school')}
                        />
                      )}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                      <Text style={styles.locationtext}>Ground</Text>
                      {groundChecked ? (
                        <FontAwesome5
                          name="check"
                          size={20}
                          color="#15beae"
                          onPress={() => toggleCheckbox('ground')}
                        />
                      ) : (
                        <FontAwesome5
                          name="square"
                          size={20}
                          color="black"
                          onPress={() => toggleCheckbox('ground')}
                        />
                      )}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                      <Text style={styles.locationtext}>station</Text>
                      {stationChecked ? (
                        <FontAwesome5
                          name="check"
                          size={20}
                          color="#15beae"
                          onPress={() => toggleCheckbox('station')}
                        />
                      ) : (
                        <FontAwesome5
                          name="square"
                          size={20}
                          color="black"
                          onPress={() => toggleCheckbox('station')}
                        />
                      )}
                    </View>
                  </View>
                  <View style={styles.column}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
                      <Text style={styles.locationtext}>school</Text>
                      {schoolChecked ? (
                        <FontAwesome5
                          name="check"
                          size={20}
                          color="#15beae"
                          onPress={() => toggleCheckbox('school')}
                        />
                      ) : (
                        <FontAwesome5
                          name="square"
                          size={20}
                          color="black"
                          onPress={() => toggleCheckbox('school')}
                        />
                      )}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                      <Text style={styles.locationtext}>Ground</Text>
                      {groundChecked ? (
                        <FontAwesome5
                          name="check"
                          size={20}
                          color="#15beae"
                          onPress={() => toggleCheckbox('ground')}
                        />
                      ) : (
                        <FontAwesome5
                          name="square"
                          size={20}
                          color="black"
                          onPress={() => toggleCheckbox('ground')}
                        />
                      )}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                      <Text style={styles.locationtext}>station</Text>
                      {stationChecked ? (
                        <FontAwesome5
                          name="check"
                          size={20}
                          color="#15beae"
                          onPress={() => toggleCheckbox('station')}
                        />
                      ) : (
                        <FontAwesome5
                          name="square"
                          size={20}
                          color="black"
                          onPress={() => toggleCheckbox('station')}
                        />
                      )}
                    </View>
                  </View>
                </View>
  
        </View>

        <Text style={styles.headertableinternal}>Internal Facilities</Text>
<View style={styles.table}>
  <View style={styles.row}>
    <View style={styles.column}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
        <Text style={styles.locationtext}>school</Text>
        {schoolChecked ? (
          <FontAwesome5
            name="check"
            size={20}
            color="#15beae"
            onPress={() => toggleCheckbox('school')}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={20}
            color="black"
            onPress={() => toggleCheckbox('school')}
          />
        )}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
        <Text style={styles.locationtext}>Ground</Text>
        {groundChecked ? (
          <FontAwesome5
            name="check"
            size={20}
            color="#15beae"
            onPress={() => toggleCheckbox('ground')}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={20}
            color="black"
            onPress={() => toggleCheckbox('ground')}
          />
        )}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
        <Text style={styles.locationtext}>station</Text>
        {stationChecked ? (
          <FontAwesome5
            name="check"
            size={20}
            color="#15beae"
            onPress={() => toggleCheckbox('station')}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={20}
            color="black"
            onPress={() => toggleCheckbox('station')}
          />
        )}
      </View>
    </View>
    <View style={styles.column}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
        <Text style={styles.locationtext}>school</Text>
        {schoolChecked ? (
          <FontAwesome5
            name="check"
            size={20}
            color="#15beae"
            onPress={() => toggleCheckbox('school')}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={20}
            color="black"
            onPress={() => toggleCheckbox('school')}
          />
        )}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
        <Text style={styles.locationtext}>Ground</Text>
        {groundChecked ? (
          <FontAwesome5
            name="check"
            size={20}
            color="#15beae"
            onPress={() => toggleCheckbox('ground')}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={20}
            color="black"
            onPress={() => toggleCheckbox('ground')}
          />
        )}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
        <Text style={styles.locationtext}>station</Text>
        {stationChecked ? (
          <FontAwesome5
            name="check"
            size={20}
            color="#15beae"
            onPress={() => toggleCheckbox('station')}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={20}
            color="black"
            onPress={() => toggleCheckbox('station')}
          />
        )}
      </View>
    </View>
    <View style={styles.column}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
        <Text style={styles.locationtext}>school</Text>
        {schoolChecked ? (
          <FontAwesome5
            name="check"
            size={20}
            color="#15beae"
            onPress={() => toggleCheckbox('school')}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={20}
            color="black"
            onPress={() => toggleCheckbox('school')}
          />
        )}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
        <Text style={styles.locationtext}>Ground</Text>
        {groundChecked ? (
          <FontAwesome5
            name="check"
            size={20}
            color="#15beae"
            onPress={() => toggleCheckbox('ground')}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={20}
            color="black"
            onPress={() => toggleCheckbox('ground')}
          />
        )}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
        <Text style={styles.locationtext}>station</Text>
        {stationChecked ? (
          <FontAwesome5
            name="check"
            size={20}
            color="#15beae"
            onPress={() => toggleCheckbox('station')}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={20}
            color="black"
            onPress={() => toggleCheckbox('station')}
          />
        )}
      </View>
    </View>
  </View>
  
</View>
        </View>}


      {currentSection === 'Photo' && (
        <View>
        <View>
          <Text>Overview</Text>
           <View style={styles.container2}>
            
                <TouchableOpacity
                   style={{ ...styles.item, backgroundColor:'lightgray' }}
                  >
                  <Image source={require('../../assets/images/Addimg.png')}
                   style={{ ...styles.imageadd,}}
                  />
                  </TouchableOpacity>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/Buy_a_home.webp')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                   
                  >
                  <Image source={require('../../assets/images/transaction.jpg')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/document.png')} style={styles.image} />
                 </View>
              
            </View>
        </View>
        <View>
          <Text>Bedrooms</Text>
           <View style={styles.container2}>
            
                <TouchableOpacity
                  style={{ ...styles.item, backgroundColor:'lightgray' }}
                  >
                  <Image source={require('../../assets/images/Addimg.png')} style={styles.imageadd} />
                  </TouchableOpacity>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/Buy_a_home.webp')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                   
                  >
                  <Image source={require('../../assets/images/transaction.jpg')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/document.png')} style={styles.image} />
                 </View>
              
            </View>
        </View>
        <View>
          <Text>Bathrooms</Text>
           <View style={styles.container2}>
            
                <TouchableOpacity
                  style={{ ...styles.item, backgroundColor:'lightgray' }}
                  >
                  <Image source={require('../../assets/images/Addimg.png')} style={styles.imageadd} />
                  </TouchableOpacity>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/Buy_a_home.webp')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                   
                  >
                  <Image source={require('../../assets/images/transaction.jpg')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/document.png')} style={styles.image} />
                 </View>
              
            </View>
        </View>
        <View>
          <Text>Bathrooms</Text>
           <View style={styles.container2}>
            
                <TouchableOpacity
               style={{ ...styles.item, backgroundColor:'lightgray' }}
                  >
                  <Image source={require('../../assets/images/Addimg.png')} style={styles.imageadd} />
                  </TouchableOpacity>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/Buy_a_home.webp')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                   
                  >
                  <Image source={require('../../assets/images/transaction.jpg')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/document.png')} style={styles.image} />
                 </View>
              
            </View>
        </View></View>
      )}

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ marginBottom: 50 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#15273F',
              padding: 10,
              borderRadius: 10,
              width: 100, 
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
            onPress={navigateToPreviousSection}
          >
            <Feather name="chevron-left" size={25} style={{ color: 'white',  }} />
            <Text style={{ color: 'white' }}>Previous</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 50 }}>
          <TouchableOpacity
              style={{
                backgroundColor: '#15273F',
                padding: 10,
                borderRadius: 10,
                width: 100, 
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            onPress={navigateToNextSection}
          >
            <Text style={{ color: 'white' }}>Next</Text>
            <Feather name="chevron-right" size={25} style={{ color: 'white', marginLeft: 5 }} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    padding: 16,
    backgroundColor: 'white',
  },
      container2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
         margin: 10,
        justifyContent: 'center',
      },
      item: {
        width: '20%', 
        margin: 8,
        alignItems: 'center',
        elevation: 4,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingTop: 10,
        padding: 2,
      },
      image: {
        width: '100%',
        height: 50,
        marginBottom:5,
      },
      imageadd: {
        width: '100%',
        height: 55,
        marginBottom:5,
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
  optionCardtopsearch: {
    height: 40,
    width: 100,
    elevation: 5,
    backgroundColor: "#15beae",
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 10,
    marginRight: 15,
    marginBottom: 10,
    marginLeft: 5,
    paddingHorizontal: 10,
  },
  optionaddproperty: {
    marginTop: 10,
    marginBottom: 30,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    height: 70,
    marginVertical: 5,
    marginRight: 10,
  },
  table: {
   marginBottom: 20,
   marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
  },
  cell: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black'
  },
  activeSection: {
    backgroundColor: 'orange', // Change this to the desired color for the selected section
  },
  locationtext:{
    fontSize: 18,
    color:'black',
    marginLeft: 5,
    width : 80,
  },
  headertable :{
    textAlign: 'center',
    fontSize : 20,
    color: 'black'
  },
  headertableinternal :{
    // textAlign: 'center',
    fontSize : 20,
    color: 'black'
  },
  
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    width: '100%', // Set the width to 100% to take the full width
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    width: '100%', // Set the width to 100% to take the full width
  },

};


export default Createnewproperty;
