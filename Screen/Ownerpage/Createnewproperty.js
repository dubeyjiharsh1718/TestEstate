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
import CheckBox from 'react-native-check-box';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Surface } from 'react-native-paper';
import COLORS from '../../assets/const/colors';
import { Input, Dropdown, } from 'react-native-elements';
import { Picker,} from '@react-native-picker/picker';
import Colors from '../../constants/Colors';


const { width } = Dimensions.get('screen');

function Createnewproperty({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isChecked, setChecked] = useState(false);


  const [currentSection, setCurrentSection] = useState('Overview');
  const [selectedSection, setSelectedSection] = useState('Overview');
  // const [selectedSection, setSelectedSection] = useState('Overview'); 
  const sections = ['Overview', 'Location', 'Amenities', 'Photo'];




  const [value, setValue] = useState(null);
  const [text, setText] = useState('');

  const handleInputChange = (value) => {
    setText(value);
  };

 

  // const handleSectionClick = (section) => {
  //   setCurrentSection(section);
  // };

  const handleSectionClick = (section) => {
    setCurrentSection(section);
    setSelectedSection(section);
  };

  const navigateToNextSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      setCurrentSection(nextSection);
      setSelectedSection(nextSection);
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
              <Text style={{ marginTop: 6, fontSize: 18, color: 'black' }}>
                {section}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {currentSection === 'Overview' && (
        <View>
          <View>
            <Text style={styles.overviewheading}>Property Name</Text>
            <Input
        placeholder="Type something"
        inputContainerStyle={{
          borderBottomWidth: 1,  
          borderWidth: 1,
          borderColor: '#000', 
          borderRadius: 8,
          paddingHorizontal: 10,
        }}
        inputStyle={{
          fontSize: 16, 
        }}
      />
          </View>

          <View>
      <Text style={styles.overviewheading}>Select Category</Text>
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        {/* Add more categories as needed */}
      </Picker>
    </View>
          </View>
        
          <View style={{marginTop: 15}}>
            <Text style={styles.overviewheading}>Description</Text>
            <Input
          placeholder="Type something..."
          multiline={true}
          numberOfLines={4}
          onChangeText={handleInputChange}
          value={text}
          inputStyle={styles.textArea}
        />
          </View>

        <View style={styles.containerpicker}>
            <View style={styles.pickerWrapper}>
              <Text style={styles.overviewheadin}>Bedroom</Text>
              <View style={styles.pickerContaine}>
                <Picker
                  selectedValue={value}
                  onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                  style={styles.picker1}
                >
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  {/* Add more categories as needed */}
                </Picker>
              </View>
            </View>

            <View style={styles.pickerWrapper}>
              <Text style={styles.overviewheadin}>Bathroom</Text>
              <View style={styles.pickerContaine}>
                <Picker
                  selectedValue={value}
                  onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                  style={styles.picker1}
                >
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  {/* Add more categories as needed */}
                </Picker>
              </View>
            </View>

            <View style={styles.pickerWrapper}>
              <Text style={styles.overviewheadin}>Kitchen</Text>
              <View style={styles.pickerContaine}>
                <Picker
                  selectedValue={value}
                  onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                  style={styles.picker1}
                >
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  {/* Add more categories as needed */}
                </Picker>
              </View>
            </View>

          </View>
        </View>
      )}


{currentSection === 'Location' && <View>
      <Text style={{ fontSize: 18, color: 'black',marginBottom:5, }}>Property Address</Text>
          <Input
          placeholder="Property Address"
          multiline={true}
          numberOfLines={4}
          onChangeText={handleInputChange}
          value={text}
          inputStyle={styles.textArea}
        />
       <Text style={{ fontSize: 18, color: 'black',marginBottom:5, }}>Property Location</Text>

        <Input
        placeholder="Property Location"
        inputContainerStyle={{
          borderBottomWidth: 1,  
          borderWidth: 1,
          borderColor: '#000', 
          borderRadius: 8,
          paddingHorizontal: 10,
        }}
        inputStyle={{
          fontSize: 16, 
        }}
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
          color= {Colors.heilightcolor}
        />
        <Text style={styles.locationtext}>school</Text>
        
         <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
        style={{marginLeft: -7}}
       />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
        <FontAwesome5
          name="tree"
          size={15}
          color= {Colors.heilightcolor}
        />
        <Text style={styles.locationtext}>Ground</Text>
        <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
        <FontAwesome5
          name="train"
          size={15}
          color= {Colors.heilightcolor}
        />
        <Text style={styles.locationtext}>station</Text>
        <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
         style={{marginLeft: -1}}
       />
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
        <View style={[styles.table,{ alignItems: 'center', }]}>
                <View style={[styles.row,{justifyContent: 'center',marginLeft: -12}]}>
                  <View style={[styles.column,{alignItems: 'center',}]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
                      <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>school</Text>
                      
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                         <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>Ground</Text>
                   
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                       <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>station</Text>
                     
                    </View>
                  </View>
                  <View style={[styles.column,{alignItems: 'center',}]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
                      <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>school</Text>
                      
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                         <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>Ground</Text>
                   
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                       <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>station</Text>
                     
                    </View>
                  </View>
                 <View style={[styles.column,{alignItems: 'center',}]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
                      <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>school</Text>
                      
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                         <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>Ground</Text>
                   
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                       <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>station</Text>
                     
                    </View>
                  </View>
                </View>
  
        </View>

        <Text style={styles.headertableinternal}>Internal Facilities</Text>
     <View style={[styles.table,{ alignItems: 'center', }]}>
                <View style={[styles.row,{justifyContent: 'center',marginLeft: -12}]}>
                  <View style={[styles.column,{alignItems: 'center',}]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
                      <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>school</Text>
                      
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                         <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>Ground</Text>
                   
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                       <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>station</Text>
                     
                    </View>
                  </View>
                  <View style={[styles.column,{alignItems: 'center',}]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
                      <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>school</Text>
                      
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                         <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>Ground</Text>
                   
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                       <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>station</Text>
                     
                    </View>
                  </View>
                 <View style={[styles.column,{alignItems: 'center',}]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14, }}>
                      <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>school</Text>
                      
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                         <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>Ground</Text>
                   
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 14, }}>
                       <CheckBox
         isChecked={isChecked}
         onClick={() => setChecked(!isChecked)}
         checkedCheckBoxColor= {Colors.btn} 
         uncheckedCheckBoxColor= {Colors.heilightcolor} 
       />
                      <Text style={styles.locationtext}>station</Text>
                     
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

<View style={{ flexDirection: 'row', position: "relative", alignItems: 'center', justifyContent: 'space-between' }}>
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
            <Feather name="chevron-left" size={25} style={{ color: 'white', }} />
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
    width: 120,
    elevation: 5,
    backgroundColor: 'white',
    // color: 'black',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 0,
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
    backgroundColor: Colors.heilightcolor,
  },
  locationtext:{
    fontSize: 18,
    color:'black',
    marginLeft: 5,
    width : 80,
  },
  headertable :{
    // textAlign: 'center',
    fontSize : 20,
    color: 'black',
    marginLeft: 10,
  },
  headertableinternal :{
    fontSize : 20,
    color: 'black',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', 
    borderBottomWidth: 1,  
    borderWidth: 1,
    borderColor: '#000', 
    borderRadius: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    textAlignVertical: 'top', 
    borderBottomWidth: 1, 
    marginRight: 10,
    marginLeft: 10
  },
   pickerContaine: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    textAlignVertical: 'top', 
    borderBottomWidth: 1,  
    marginLeft: 10
  },
  picker: {
    height: 50,
    paddingHorizontal: 10,
  },
  containerpicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  pickerWrapper: {
    flex: 1,
    marginRight: 16,
  },
  picker1: {
    height: 50,
    width: '110%',
  },
  overviewheading:{
    fontSize: 18,
    marginBottom: 7,
    marginTop: 5,
    color: 'black',
  },
    overviewheadin:{
    fontSize: 18,
    marginBottom: 7,
    marginTop: 5,
    color: 'black',
    marginLeft: 10
  }
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
    width: '100%',
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    width: '100%', 
  },

};


export default Createnewproperty;
