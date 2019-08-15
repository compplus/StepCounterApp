import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View,  KeyboardAvoidingView, TouchableOpacity, ScrollView} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Avatar } from 'react-native-elements';


var items = [
{
  id: 1,
  name: 'Academic Advising Office',
},
{
  id: 2,
  name: 'Academic Services Office',
},
{
  id: 3,
  name: 'Academic Support and Examinations Section',
},
{
  id: 4,
  name: 'Admissions and Academic Liaison Section',
},
{
  id: 5,
  name: 'Advanced Dentistry, The Institute of',
},
{
  id: 6,
  name: 'Advancement in Inclusive and Special Education, Centre for',
},
{
  id: 7,
  name: 'Advancement of Chinese Language Education and Research, Centre for',
},
{
  id: 8,
  name: 'Ageing, Sau Po Centre on',
},
{
  id: 9,
  name: 'AIDS Institute',
},
{
  id: 10,
  name: 'Anaesthesiology, Department of',
},
{
  id: 11,
  name: 'Applied English Studies, Centre for',
},
{
  id: 12,
  name: 'Applied Spectroscopy and Analytical Sciences, Centre for',
},
{
  id: 13,
  name: 'Architecture, Department of',
},
{
  id: 14,
  name: 'Architecture and Urban Design for China and Hong Kong, Centre for',
},
{
  id: 15,
  name: 'Asia Case Research Centre',
},
{
  id: 16,
  name: 'Asia Global Institute',
},
{
  id: 17,
  name: 'Asian Entrepreneurship and Business Values, Centre for',
},
{
  id: 18,
  name: 'Asian Institute of International Financial Law',
},
{
  id: 19,
  name: 'Asian Studies, Centre of',
},
{
  id: 20,
  name: 'Behavioural Health, Centre on',
},
{
  id: 21,
  name: 'Biological Sciences, School of',
},
{
  id: 22,
  name: 'Biomedical Engineering Centre',
},
{
  id: 23,
  name: 'Biomedical Sciences, School of',
},
{
  id: 24,
  name: 'Buddhist Studies, Centre of',
},
{
  id: 25,
  name: 'Business and Economics, Faculty of',
},
{
  id: 26,
  name: 'Cardiovascular Science and Medicine, Institute of',
},
{
  id: 27,
  name: 'Chemistry, Department of',
},
{
  id: 28,
  name: 'Chemistry, Research Division for',
},
{
  id: 29,
  name: 'China Affairs Office',
},
{
  id: 30,
  name: 'China and Global Development, Institute for',
},
{
  id: 31,
  name: 'China Development Studies, International Centre for',
},
{
  id: 32,
  name: 'China Financial Research, Centre for',
},
{
  id: 33,
  name: 'Chinese, School of',
},
{
  id: 34,
  name: 'Chinese Law, Centre for',
},
{
  id: 35,
  name: 'Chinese Medicine, School of',
},
{
  id: 36,
  name: 'Chi Sun College',
},
{
  id: 37,
  name: 'Chong Yuet Ming Amenities Centre',
},
{
  id: 38,
  name: 'Civil Engineering, Department of',
},
{
  id: 39,
  name: 'Civil Society and Governance, Centre for',
},
{
  id: 40,
  name: 'Clinical Biochemistry Unit',
},
{
  id: 41,
  name: 'Clinical Oncology, Department of',
},
{
  id: 42,
  name: 'Clinical Trials Centre',
},
{
  id: 43,
  name: 'Common Core Curriculum Office',
},
{
  id: 44,
  name: 'Communications and Public Affairs Office',
},
{
  id: 45,
  name: 'Comparative and Public Law, Centre for',
},
{
  id: 46,
  name: 'Comparative Education Research Centre',
},
{
  id: 47,
  name: 'Comparative Literature, Department of',
},
{
  id: 48,
  name: 'Computer Science, Department of',
},
{
  id: 49,
  name: 'Construct I.T., Centre for',
},
{
  id: 50,
  name: 'Contemporary Marketing Centre',
},
{
  id: 51,
  name: 'Criminology, Centre for',
},
{
  id: 52,
  name: 'Cultural Management Office',
},
{
  id: 53,
  name: 'Curriculum Development and Quality Assurance Section',
},
{
  id: 54,
  name: 'Cyberport Institute of Hong Kong',
},
{
  id: 55,
  name: 'Development and Alumni Affairs Office',
},
{
  id: 56,
  name: 'Development and Resources for Students (CEDARS), Centre of',
},
{
  id: 57,
  name: 'Diagnostic Radiology, Department of',
},
{
  id: 58,
  name: 'Dr Li Dak-Sum Research Centre, The University of Hong Kong-Karolinska Institutet Collaboration in Regenerative Medicine',
},
{
  id: 59,
  name: 'Duchess of Kent Hall',
},
{
  id: 60,
  name: 'Earth and Planetary Science, Research Division for',
},
{
  id: 61,
  name: 'Earth Sciences, Department of',
},
{
  id: 62,
  name: 'Ecology and Biodiversity, Research Division for',
},
{
  id: 63,
  name: 'Educational Leadership, Centre for',
},
{
  id: 64,
  name: 'Electrical and Electronic Engineering, Department of',
},
{
  id: 65,
  name: 'Electrical Energy Systems, Centre for',
},
{
  id: 66,
  name: 'Electron Microscope Unit',
},
{
  id: 67,
  name: 'Emerging Technologies Institute',
},
{
  id: 68,
  name: 'English, School of',
},
{
  id: 69,
  name: 'Enhancement of Teaching and Learning, Centre for the',
},
{
  id: 70,
  name: 'Environmental Engineering Research, Centre for',
},
{
  id: 71,
  name: 'Environmental Engineering Research, Centre for',
},
{
  id: 72,
  name: 'Equal Opportunity Unit',
},
{
  id: 73,
  name: 'Estates Office',
},
{
  id: 74,
  name: 'Examinations Office',
},
{
  id: 75,
  name: 'Family Medicine and Primary Care, Department of',
},
{
  id: 76,
  name: 'Finance and Enterprises Office',
},
{
  id: 77,
  name: 'Financial Innovation and Development, Centre for',
},
{
  id: 78,
  name: 'Fine Arts, Department of',
},
{
  id: 79,
  name: 'Fong Shu Chuen Amenities Centre',
},
{
  id: 80,
  name: 'Genomic Sciences, Centre for',
},
{
  id: 81,
  name: 'Geographical/Land Information System Research Centre',
},
{
  id: 82,
  name: 'Geography, Department of',
},
{
  id: 83,
  name: 'Graduate House',
},
{
  id: 84,
  name: 'Graduate School',
},
{
  id: 85,
  name: 'Heart, Brain, Hormone & Healthy Aging, Research Centre of',
},
{
  id: 86,
  name: 'History, Department of',
},
{
  id: 87,
  name: 'HKU - Pasteur Research Pole',
},
{
  id: 88,
  name: 'HKU Common Core',
},
{
  id: 89,
  name: 'HKU Horizons',
},
{
  id: 90,
  name: 'HKU Online Learning',
},
{
  id: 91,
  name: 'Hong Kong Institute for the Humanities and Social Sciences',
},
{
  id: 92,
  name: 'Hong Kong Institute of Economics and Business Strategy',
},
{
  id: 93,
  name: 'Hong Kong Jockey Club Centre for Suicide Research and Prevention',
},
{
  id: 94,
  name: 'Hong Kong University Press',
},
{
  id: 95,
  name: 'Hornell Hall',
},
{
  id: 96,
  name: 'Humanities, School of',
},
{
  id: 97,
  name: 'Humanities and Medicine, Centre for the',
},
{
  id: 98,
  name: 'Human Resource Section',
},
{
  id: 99,
  name: 'HKU Online Learning',
},
{
  id: 100,
  name: 'Industrial and Manufacturing Systems Engineering, Department of',
},
{
  id: 101,
  name: 'Infection, Carol Yu Centre for',
},
{
  id: 102,
  name: 'Influenza Research, Centre of',
},
{
  id: 103,
  name: 'Information Security and Cryptography, Centre for',
},
{
  id: 104,
  name: 'Information Technology in Education, Centre for',
},
{
  id: 105,
  name: 'Information Technology Services',
},
{
  id: 106,
  name: 'Innovation in Construction and Infrastructure Development, Centre for',
},
{
  id: 107,
  name: 'Internal Audit Office',
},
{
  id: 108,
  name: 'International Affairs Office',
},
{
  id: 109,
  name: 'Jao Tsung-I Petite Ecole',
},
{
  id: 110,
  name: 'Japanese Studies, Department of',
},
{
  id: 111,
  name: 'Journalism and Media Studies Centre',
},
{
  id: 112,
  name: 'Kadoorie Centre',
},
{
  id: 113,
  name: 'Knowledge Exchange Office',
},
{
  id: 114,
  name: 'Laboratory Animal Unit',
},
{
  id: 115,
  name: 'Lady Ho Tung Hall',
},
{
  id: 116,
  name: 'Landscape Architecture, Division of',
},
{
  id: 117,
  name: 'Language Centre',
},
{
  id: 118,
  name: 'Lap-Chee College',
},
{
  id: 119,
  name: 'Law, Department of',
},
{
  id: 120,
  name: 'Law and Technology Centre',
},
{
  id: 121,
  name: 'Lee Chi Hung Hall',
},
{
  id: 122,
  name: 'Lee Hysan Hall',
},
{
  id: 123,
  name: 'Lee Shau Kee Hall',
},
{
  id: 124,
  name: 'Linguistics, Department of',
},
{
  id: 125,
  name: 'Lung Fu Shan Environmental Education Centre',
},
{
  id: 126,
  name: 'Madam S.H. Ho Residence for Medical Students',
},
{
  id: 127,
  name: 'Mainland Research Projects Office',
},
{
  id: 128,
  name: 'Mathematical and Statistical Science, Research Division for',
},
{
  id: 129,
  name: 'Mathematical Research, Institute of',
},
{
  id: 130,
  name: 'Mathematics, Department of',
},
{
  id: 131,
  name: 'Mechanical Engineering, Department of',
},
{
  id: 132,
  name: 'Medical and Health Sciences Education, Bau Institute of',
},
{
  id: 133,
  name: 'Medical Ethics and Humanities Unit',
},
{
  id: 134,
  name: 'Medical Ethics and Law, Centre for',
},
{
  id: 135,
  name: 'Medicine, Department of',
},
{
  id: 136,
  name: 'Microbiology, Department of',
},
{
  id: 137,
  name: 'Modern Languages and Cultures, School of',
},
{
  id: 138,
  name: 'Molecular and Cell Biology, Research Division for',
},
{
  id: 139,
  name: 'Morrison Hall',
},
{
  id: 140,
  name: 'Navigational Dentistry, International Centre for',
},
{
  id: 141,
  name: 'Neuroscience Research Centre',
},
{
  id: 142,
  name: 'New College',
},
{
  id: 143,
  name: 'Nursing, School of',
},
{
  id: 144,
  name: 'Obstetrics and Gynaecology, Department of',
},
{
  id: 145,
  name: 'Ophthalmology, Department of',
},
{
  id: 146,
  name: 'Orthopaedics and Traumatology, Department of',
},
{
  id: 147,
  name: 'Paediatrics and Adolescent Medicine, Department of',
},
{
  id: 148,
  name: 'Pathology, Department of',
},
{
  id: 149,
  name: 'Pharmacology and Pharmacy, Department of',
},
{
  id: 150,
  name: 'Philosophy, Department of',
},
{
  id: 151,
  name: 'Physics, Department of',
},
{
  id: 152,
  name: 'Physics and Astronomy, Research Divison for',
},
{
  id: 153,
  name: 'Pokfulam Amenities Centre',
},
{
  id: 154,
  name: 'Politics and Public Administration, Department of',
},
{
  id: 155,
  name: 'President\'s Office',
},
{
  id: 156,
  name: 'Professional Legal Education, Department of',
},
{
  id: 157,
  name: 'Property Rights Research, The Ronald Coase Centre for',
},
{
  id: 158,
  name: 'Psychiatry, Department of',
},
{
  id: 159,
  name: 'Psychology, Department of',
},
{
  id: 160,
  name: 'Public Health, School of',
},
{
  id: 161,
  name: 'R. C. Lee Hall',
},
{
  id: 162,
  name: 'Real Estate and Construction, Department of',
},
{
  id: 163,
  name: 'Registry',
},
{
  id: 164,
  name: 'Renewable Energy in Architecture, Centre on',
},
{
  id: 165,
  name: 'Research in Plant Drugs Development, Centre for',
},
{
  id: 166,
  name: 'Research Services Section',
},
{
  id: 167,
  name: 'Ricci Hall',
},
{
  id: 168,
  name: 'Robert Black College',
},
{
  id: 169,
  name: 'Safety Office',
},
{
  id: 170,
  name: 'Scholarships Office',
},
{
  id: 171,
  name: 'Science, Faculty of',
},
{
  id: 172,
  name: 'Shun Hing College',
},
{
  id: 173,
  name: 'Simon K. Y. Lee Hall',
},
{
  id: 174,
  name: 'SMARTER@HKU Programme Management Office',
},
{
  id: 175,
  name: 'Social Sciences, Faculty of',
},
{
  id: 176,
  name: 'Social Sciences Research Centre',
},
{
  id: 177,
  name: 'Social Work and Social Administration, Department of',
},
{
  id: 178,
  name: 'Sociology, Department of',
},
{
  id: 179,
  name: 'Sports and Exercise, The Centre for',
},
{
  id: 180,
  name: 'St. John\'s College',
},
{
  id: 181,
  name: 'Starr Hall',
},
{
  id: 182,
  name: 'Statistics and Actuarial Science, Department of',
},
{
  id: 183,
  name: 'Stephen Hui Geological Museum',
},
{
  id: 184,
  name: 'Strategic Planning and Provost’s Office',
},
{
  id: 185,
  name: 'Student Records Office',
},
{
  id: 186,
  name: 'Study of Globalization and Cultures, Centre for the',
},
{
  id: 187,
  name: 'Suen Chi Sun Hall',
},
{
  id: 188,
  name: 'Surgery, Department of',
},
{
  id: 189,
  name: 'Sustainability Office',
},
{
  id: 190,
  name: 'Swire Hall',
},
{
  id: 191,
  name: 'Swire Institute of Marine Science',
},
{
  id: 192,
  name: 'Teachers of English Language Education Centre',
},
{
  id: 193,
  name: 'Technology-Enriched Learning Initiative',
},
{
  id: 194,
  name: 'Teachers of English Language Education Centre',
},
{
  id: 195,
  name: 'Technology Transfer Office',
},
{
  id: 196,
  name: 'Theoretical and Computational Physics, Centre of',
},
{
  id: 197,
  name: 'Transport Studies, Institute of',
},
{
  id: 198,
  name: 'University Archives',
},
{
  id: 199,
  name: 'University Hall',
},
{
  id: 200,
  name: 'University Health Service',
},
{
  id: 201,
  name: 'University Libraries',
},
{
  id: 202,
  name: 'University Museum and Art Gallery',
},
{
  id: 203,
  name: 'Urban Planning and Design, Department of',
},
{
  id: 198,
  name: 'Urban Studies and Urban Planning, Centre of',
},
{
  id: 198,
  name: 'Versitech Limited',
},
{
  id: 198,
  name: 'Visitor Centre',
},
{
  id: 198,
  name: 'Wah Ching Centre of Research on Education in China',
},
{
  id: 198,
  name: 'Water Technology and Policy , Centre for',
},
{
  id: 198,
  name: 'Wei Lun Hall',
},
{
  id: 198,
  name: 'Women\'s Studies Research Centre',
},
];


export default class Info extends Component {

    state = {
        faculty: '',
        department: '',
        category: '',
        firstname: '',
        lastname: '',
        gender: '',
        age: '',
        height: '',
        weight: '',
    };

    render() {
        var nav_screen = this.props.go

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
            <ScrollView>
                <View style={styles.container}>
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 20, padding: 10, justifyContent: 'center', alignContent: 'center'}}>
                      <Avatar
                        rounded
                        size={100}
                        icon={{name: 'user', type: 'font-awesome'}}
                      />
                      
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignContent: 'stretch'}}>
                      <Text style={styles.username}>Username</Text>
                  </View>
                </View>

                <View style={{ paddingHorizontal: 50, }}> 
                    <Dropdown
                        label='Faculty'
                        data={[{
                              value: 'Faculty of Architecture',
                            }, {
                              value: 'Faculty of Arts',
                            }, {
                              value: 'Faculty of Business and Economics',
                            }, {
                              value: 'Faculty of Dentistry',
                            }, {
                              value: 'Faculty of Education',
                            }, {
                              value: 'Faculty of Engineering',
                            }, {
                              value: 'Faculty of Law',
                            }, {
                              value: 'Li Ka Shing Faculty of Medicine',
                            }, {
                              value: 'Faculty of Science',
                            }, {
                              value: 'Faculty of Social Sciences',
                            }, {
                              value: 'Graduate School',
                            }, {
                              value: 'Others',
                            }]}

                        onChangeText = {(data)=>this.setState({category: data})}
                    />

                    {/*<TextField
                        label='Department'
                        value={this.state.department}
                        onChangeText={(department)=>this.setState({department: department})}
                    />*/}

                    <SearchableDropdown
                      // onTextChange={text => this.setState({department: text})}
                      onItemSelect={{}}

                      containerStyle={{ padding: 0 }}
                      textInputStyle={{
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 0,
                      }}
                      itemStyle={{
                        padding: 10,
                        marginTop: 0,
                        backgroundColor: 'white',
                        borderColor: '#bbb',
                        borderWidth: 0,
                        borderRadius: 0,
                      }}
                      itemTextStyle={{ color: 'black' }}
                      itemsContainerStyle={{ maxHeight: 150 }}
                      items={items}
                      // defaultIndex={2}
                      placeholder="Department"
                      placeholderTextColor = 'grey'
                      resetValue={false}
                      underlineColorAndroid="transparent"
                    />

                    <Dropdown
                        label='Category'
                        data={[{
                              value: 'Staff',
                            }, {
                              value: 'Student',
                            }, {
                              value: 'Alumni',
                            }, {
                              value: 'Other',
                            }]}

                        onChangeText = {(data)=>this.setState({category: data})}
                    />

                    <Text style={styles.disclaimer}>
                        (To improve the accuracy of the data, please provide the following biometric information)
                    </Text>

                    <Dropdown
                        label='Gender'
                        data={[{
                              value: 'Female',
                            }, {
                              value: 'Male',
                            }, {
                              value: 'Other',
                            }]}

                        onChangeText = {(data)=>this.setState({gender: data})}
                    />

                    <TextField
                        label='First Name'
                        value={this.state.firstname}
                        onChangeText={(firstname)=>this.setState({firstname: firstname})}
                    />
                    <TextField
                        label='Last Name'
                        value={this.state.lastname}
                        onChangeText={(lastname)=>this.setState({lastname: lastname})}
                    />
                    <TextField
                        label='Age'
                        value={this.state.age}
                        onChangeText={(age)=>this.setState({age: age})}
                    />
                    <TextField
                        label='Height (cm)'
                        value={this.state.height}
                        onChangeText={(height)=>this.setState({height: height})}
                    />
                    <TextField
                        label='Weight (kg)'
                        value={this.state.weight}
                        onChangeText={(weight)=>this.setState({weight: weight})}
                    />

                    <TouchableOpacity onPress={()=>null} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#212121',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'stretch',
      height: height/4 - 20,
      shadowOffset:{  width: 5,  height: 5, },
      shadowColor: '#B0BEC5',
      shadowOpacity: 1.0,
    },

    username: {
      color: '#FFFFFF',
      flexDirection: 'row',
      fontSize: 25,
      fontFamily: 'Gill Sans',
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: 15,
    },

    wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#EFEFF4',
        justifyContent: 'center', 
        alignContent: 'stretch'
    },

    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#0097A7',
        paddingVertical: 15,
        borderRadius: 7
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: "400",
        fontSize: 17,
        fontFamily: 'Gill Sans'
    },

    disclaimer:{
        paddingTop: 20,
        fontSize: 14,
        color: 'grey',
    },

    titleText: {
        textAlign: 'left' ,
        color: 'rgba(0,51,51,1)',
        fontSize: 25,
        fontWeight: "400",
        fontFamily: 'Gill Sans'
    },
});
