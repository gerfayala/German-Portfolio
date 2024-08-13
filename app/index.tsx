import React, { useRef } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import SkillComponent from './src/components/ui/SkillComponent';
import { Link } from 'expo-router';
import ContactButton from './src/components/ui/Button';
import { AntDesign, Fontisto, } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { db, expo, fb, git, js, node, rn, ts, image, domino } from '../constants/Image';
import ProjectComponent from './src/components/ProjectComponent';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const index = () => {
  const skills = [
    { name: 'React-Native', image: rn },
    { name: 'Expo', image: expo },
    { name: 'TypeScript', image: ts },
    { name: 'Javascript', image: js },
    { name: 'Node.js', image: node },
    { name: 'SQL', image: db },
    { name: 'NoSQL', image: db },
    { name: 'Firebase', image: fb },
    { name: 'Git', image: git },
  ];


  const contactButtonRef = useRef(null);

  return (
    <ScrollView className="bg-[#151E21]">
      <View className="flex  justify-center items-center ">
        {/* Navbar */}
        <View className="sticky flex   xl:w-7/12 flex-row justify-around my-5 border rounded-full border-slate-600 ">
          <Text className="text-white text-xs font-bold m-2 xs:text-xs">Experience</Text>
          <Text className="text-white text-xs font-bold m-2 xs:text-xs">Projects</Text>
          <Text className="text-white text-xs font-bold m-2 xs:text-xs">About Me</Text>
          <Text className="text-white text-xs font-bold m-2 xs:text-xs">Contact</Text>
        </View>

        {/* Basic Information and Programming Stack */}
        <View className="bg-[#0B1214] lg:w-10/12 xl:w-8/12  sm:w-11/12  w-11/12 justify-center  items-center  pb-5 shadow-lg">
          {/* Image and Resume Container */}
          <View className=" mt-5 flex-col items-center sm:flex-row sm:mt-20 lg:mx-14   sm:justify-items-center sm:content-center sm:px-28 ">
            <Image source={image} className="w-5 h-5 justify-self-center  rounded-full mb-5 border-4 border-[#00C8E0]" style={{ width: 128, height: 128, resizeMode: 'cover' }} />
         
            <View className="flex-1 flex-col mx-5">
              <Text className="text-white sm:text-2xl font-bold my-1">Hey, I'm German Ayala!</Text>
              <Text className="text-[#7DDFEE] sm:text-xl text-base font-semibold">Mobile Developer</Text>
              <Text className="text-white lg:text-md text-md mt-1 mb-2 text-left font-medium" numberOfLines={10}>
                Experience in mobile application development using technologies such as Javascript/TypeScript, React-Native, Expo, EAS. I am an enthusiastic learner, always seeking new challenges to enhance my skills and knowledge. A committed developer with solid technical abilities, ready to take on new challenges and contribute to the success of any project.
              </Text>

              {/* contacts buttons  */}
              <View className="flex-row justify-center items-center gap-5  mt-4">
                  <ContactButton
                    ref={contactButtonRef}
                    icon={<Fontisto name="email" size={18} color="white" />}
                    buttonText="Contact me"
                  />
                  <ContactButton
                    ref={contactButtonRef}
                    icon={<AntDesign name="linkedin-square" size={18} color="white" />}
                    buttonText="LinkedIn"
                  />

              </View>
            </View>
          </View>

          {/* Skill Container */}
          <View className="w-full justify-between px-5 pt-3 sm:px-28">
            <View className='flex-row mb-4'>
              <FontAwesome name="code" size={24} color="#00C8E0"/>
              <Text className="text-white   lg:text-2xl sm:text-xl ml-2 text-base font-bold ">Programming Skills</Text>
            </View>
            
            <View className=" grid grid-cols-2  sm:w-full sm-grid  sm:grid-cols-4 sm:gap-2 gap-2 md:grid md:grid-cols-4  md:w-full md:gap-2  w-full">
              {skills.map((skill, index) => (
                <SkillComponent key={index} imageSource={skill.image} skillName={skill.name} />
              ))}
            </View>
          </View>
        </View>
        {/* 
          Job Experience 

        <View className='flex flex-col  mt-5 w-full sm:w-11/12 sm:px-28  shadow-xl'>
          <View className='flex-col mx-5 justify-between'>
            <View className='flex-row  justify-start pb-4  '>
              <FontAwesome name="suitcase" size={24} color="#00C8E0" />
              <Text className="text-white text-lg  font-bold  justify-self-center ml-4">Job Experience</Text>
            </View>
      </View>
    </View>
      /*}
        



         {/* Portfolio */}
        <View className=' flex flex-col   mt-5   w-11/12 lg:w-10/12  xl:w-8/12 sm:w-11/12   shadow-xl'>
          <View className='flex-col  justify-around'>
            <View className='flex-row  px-28 pb-4 mt-4 '>
              <FontAwesome name="suitcase" size={24} color="#00C8E0" />
              <Text className="text-white lg:text-2xl sm:text-xl text-lg  font-bold  justify-self-center ml-4">Projects</Text>
            </View>
            {/* Projects */}

           
              <ProjectComponent
                imageSource={domino}
                title="Mobile Application - DominoPoints"
                description="Aplicación móvil para Android y IOS que permite facilitar anotar puntos en el domino por parejas al estilo venezolano. Disponible en espańol e inglés. Anota partidas rápidas o torneos de 4 o 5 personas en un todos contra todos."
                googlePlayLink="/"
                appStoreLink="/"
                googlePlayIcon="logo-google-playstore"
                appStoreIcon="apple1"
                buttonTextGooglePlay="Google Play"
                buttonTextAppStore="AppStore"
              />

              <ProjectComponent
                imageSource={domino}
                title="Mobile Application - PokeApp"
                description="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                googlePlayLink="/"
                appStoreLink="/"
                googlePlayIcon="logo-google-playstore"
                appStoreIcon="apple1"
                buttonTextGooglePlay="Google Play"
                buttonTextAppStore="AppStore"
              /> 
      
  
            
          </View>
        </View>

        {/* About Me */}

        <View className='flex flex-col lg:w-10/12 xl:w-8/12 px-5  mt-5  w-11/12  sm:w-11/12 sm:px-28  shadow-xl'>
          <View className='flex-row   justify-start  mt-4   '>
              <AntDesign name="user" size={24} color="#00C8E0" />
              <Text className="text-white sm:text-2xl text-xl  font-bold  justify-self-center ml-4">About Me</Text>
          </View>
          <View className='flex-col ml-4'>
              <Text className="text-[#7DDFEE] text-lg  font-semibold  justify-self-center ml-4 my-2">Academic Background</Text>
            <View className='flex-col justify-start  gap-3 ml-4'>
              <Text className="text-white text-md  font-light  justify-self-center ml-4">- USB - Simón Bolívar University </Text>
              <Text className="text-white text-md  font-light  justify-self-center ml-6">2016-2024</Text>
                <Text className="text-white text-md  font-light  justify-self-center ml-6">Electrical Techonology</Text>
            </View>
            <View className='flex-col justify-start my-2 gap-3 ml-4 pb-5'>
              <Text className="text-white text-md  font-light  justify-self-center ml-4">- UneWeb</Text>
              <Text className="text-white text-md  font-light  justify-self-center ml-6">2020</Text>
                <Text className="text-white text-md  font-light  justify-self-center ml-5">Specialization in Programming Certificate. </Text>
            </View>
          </View>
        </View>
      </View>

      <View className='pb-10'/>
    </ScrollView>
  );
};

export default index;