import { View, Text, StyleSheet, ScrollView, Image, FlatList, Pressable } from 'react-native'
import React from 'react'


import { db,expo,fb,git,js,node,rn,ts, image,} from '../constants/Image'
import SkillComponent from './src/components/ui/SkillComponent'
import { Link } from 'expo-router'
import ContactButton from './src/components/ui/Button'
import { AntDesign, Fontisto } from '@expo/vector-icons'

const index = () => {

  const skills = [
  { name: 'React-Native', image: rn },
  { name: 'Expo', image: expo },
  { name: 'TypeScript', image: ts },
  { name: 'Javascript', image: js},
  { name: 'Node.js', image: node},
  { name: 'SQL', image: db},
  { name: 'NoSQL', image: db},
  { name: 'Firebase', image: fb},
  { name: 'Git',  image: git},
];

 
  return (

    <ScrollView  style = {{backgroundColor: '#151E21'}}>
    <View style = {styles.container}>
      {/* navbar */}

      <View style ={ styles.navbarContainer} >
        {/* TODO: CREATE TEXT COMPONENT WITH PRESSABLE */}
        <Text style = {styles.navbarText}>Experience</Text>
        <Text style = {styles.navbarText}> Projects</Text>
        <Text style = {styles.navbarText}>About Me</Text>
        <Text style = {styles.navbarText}> Contact</Text>
      </View>

      {/* Basic Information and programing Stack */}
        <View style={styles.resumeContainer}>
          
          {/* Image and Resume Container */}

          <View style = {styles.imageAndResumeContainer}>
            <View style = {styles.imageContainer}>
              <Image
                source={image}
                style = {styles.image}
              />

            </View>
            <View style = {styles.informationContainer}>
              <Text style = {styles.titleText}>Hey, I'm German Ayala!</Text>
              <Text style = {styles.subTitleText}>Mobile Developer</Text>
              <Text style={styles.paragraphText} numberOfLines={5} >
               Experience in mobile application development using technologies such as Javascript/TypeScript, React-Native, Expo, EAS. I am an enthusiastic learner, always seeking new challenges to enhance my skills and knowledge. A committed developer with solid technical abilities,ready to take on new challenges and contribute to the success ofany project.
              </Text>

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                
                <Link href={'/'} asChild > 
                  <ContactButton
                  icon={<Fontisto name="email" size={24} color="white" />}  
                    buttonText="Contact"
                  />          
                </Link>
               <Link href={'/'} asChild > 
                  <ContactButton 
                    icon= {<AntDesign name="linkedin-square" size={24} color="white" />}
                    buttonText="LinkedIn"
                  />          
                </Link>
              </View>
            </View>
          </View>


          {/* Skill Container */}

          <View  style={styles.programingSkillContainer}>
            <Text style={{ color: 'white',fontSize: 16, fontWeight: 'bold', marginVertical: 10
            }}> Programming Skills</Text>
            <View
              style={{ flexDirection: 'row', flexWrap: 'wrap',}}>
              
            
              {skills.map((skill, index) => (
                <SkillComponent
                  key={index}
                  imageSource={skill.image}
                  skillName={skill.name}
                />
              ))}
              

            </View>

            </View>

      </View>

      {/* Job Experience */}

        <View>
          
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginVertical: 10 }}>Job Experience</Text>

      </View>


      {/* About Me */}


      <View>

      </View>
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  navbarContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
  },
  navbarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20
  },
  resumeContainer: {
    backgroundColor: '#0B1214',
    width: '90%',
    alignContent: 'center',
    paddingBottom: 20,
     shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 6
  },
  imageAndResumeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginHorizontal: 60,
    marginTop: 50,
  },
  imageContainer: {
    flexDirection: 'row',
    width: 'auto',
    justifyContent: 'center',
    marginTop: 30,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 70,
    borderColor: '#00C8E0',
    borderWidth: 6
  },
  informationContainer: {
    flex: 1,    
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: 20
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
    marginVertical: 2,
  },
  subTitleText: {
    color: '#7DDFEE',
    fontSize: 18,
    fontWeight: 'semibold',
  },
  paragraphText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 25,
    marginTop: 5,
    flexWrap: 'wrap',
    textAlign: 'justify',
    fontWeight: '500',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#1F2937',
    borderRadius: 15,
    width: '30%',
    borderWidth: 3,
    borderColor: '#4B5963',    
    justifyContent: 'space-evenly',
    alignContent: 'center',
    marginVertical: 10,
  },
  programingSkillContainer: {
    width: '100%',
    justifyContent: 'space-around',
    padding: 20,
    marginHorizontal: 60,
  },
 

})

export default index