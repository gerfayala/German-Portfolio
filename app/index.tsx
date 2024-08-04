import React, { useRef } from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import SkillComponent from './src/components/ui/SkillComponent';
import { Link } from 'expo-router';
import ContactButton from './src/components/ui/Button';
import { AntDesign, Fontisto, Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { db, expo, fb, git, js, node, rn, ts, image, domino } from '../constants/Image';
import ProjectComponent from './src/components/ProjectComponent';

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
      <View className="flex-1 justify-center items-center ">
        {/* Navbar */}
        <View className="flex-row justify-center p-5">
          <Text className="text-white text-lg font-bold xs:m-2 xs:text-xs">Experience</Text>
          <Text className="text-white text-lg font-bold xs:m-2 xs:text-xs">Projects</Text>
          <Text className="text-white text-lg font-bold xs:m-2 xs:text-xs">About Me</Text>
          <Text className="text-white text-lg font-bold xs:m-2 xs:text-xs">Contact</Text>
        </View>

        {/* Basic Information and Programming Stack */}
        <View className="bg-[#0B1214] xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12  xs:w-11/12 justify-center  items-center  pb-5 shadow-lg">
          {/* Image and Resume Container */}
          <View className="xs:flex-col sm:mx-14">
            <View className="xs:flex-row justify-start items-center  xs:mx-4 xs:mt-7 xs:mb-5">
              <Image source={image} className="xs:w-5 xs:h-5 rounded-full border-4 border-[#00C8E0]" style={{ width: 80, height: 80 }} />
              <Text className="text-white xs:text-xs font-bold border-2 rounded-full border-solid border-green-600  xs:ml-5 px-4 py-2">Open to Work</Text>
            </View>
            <View className="flex-1 flex-col mx-5">
              <Text className="text-white xs:text-lg font-bold my-1">Hey, I'm German Ayala!</Text>
              <Text className="text-[#7DDFEE] xs:text-base font-semibold">Mobile Developer</Text>
              <Text className="text-white xs:text-md mt-1 mb-2 text-left font-medium" numberOfLines={10}>
                Experience in mobile application development using technologies such as Javascript/TypeScript, React-Native, Expo, EAS. I am an enthusiastic learner, always seeking new challenges to enhance my skills and knowledge. A committed developer with solid technical abilities, ready to take on new challenges and contribute to the success of any project.
              </Text>
              
              <View className="flex-row justify-center items-center gap-5  mt-4">
                <Link href={'/'} asChild>
                  <ContactButton
                    ref={contactButtonRef}
                    icon={<Fontisto name="email" size={18} color="white" />}
                    buttonText="Contact me"
                  />
                </Link>
                <Link href={'/'} asChild>
                  <ContactButton
                    ref={contactButtonRef}
                    icon={<AntDesign name="linkedin-square" size={18} color="white" />}
                    buttonText="LinkedIn"
                  />
                </Link>
               

              </View>
            </View>
          </View>

          {/* Skill Container */}
           <View className="xs:w-full justify-around p-5 mx-14">
            <Text className="text-white xl:text-lg lg:text-sm md:text-lg sm:text-xs font-bold my-2">Programming Skills</Text>
            <View className=" xs:grid xs:grid-cols-2 gap-4 w-full">
              {skills.map((skill, index) => (
                <SkillComponent key={index} imageSource={skill.image} skillName={skill.name} />
              ))}
            </View>
          </View>
        </View>

        {/* Job Experience */}

        <View className=' flex-col justify-center items-start mt-5 xs:w-full mx-14 '>
          <View className='flex-col mx-5 justify-between'>
            <View className='flex-row  justify-start pb-4  '>
              <FontAwesome name="suitcase" size={24} color="#00C8E0" />
              <Text className="text-white text-lg  font-bold  justify-self-center ml-4">Job Experience</Text>
            </View>
            {/* Projects */}
            
          </View>
        </View>




         {/* Portfolio */}
        <View className=' flex-col justify-center items-start mt-5 xs:w-full mx-14 shadow-xl'>
          <View className='flex-col  justify-between'>
            <View className='flex-row mx-5 justify-start pb-4 mt-4 '>
              <FontAwesome name="suitcase" size={24} color="#00C8E0" />
              <Text className="text-white text-lg  font-bold  justify-self-center ml-4">Projects</Text>
            </View>
            {/* Projects */}

            <View className='flex flex-col justify-between'>
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
        </View>

        {/* About Me */}

        <View className='flex-col xs:w-full  py-10'>
          <View className='xs:flex-row mx-5'>
              <AntDesign name="user" size={24} color="#00C8E0" />
              <Text className="text-white text-xl  font-bold  justify-self-center ml-4">About Me</Text>
          </View>
          <View className='xs:flex-col mx-5'>
              <Text className="text-[#7DDFEE] text-lg  font-semibold  justify-self-center ml-4 my-2">Academic Background</Text>
            <View className='flex-col justify-start  gap-3'>
              <Text className="text-white text-md  font-light  justify-self-center ml-4">- USB - Simón Bolívar University </Text>
              <Text className="text-white text-md  font-light  justify-self-center ml-6">2016-2024</Text>
                <Text className="text-white text-md  font-light  justify-self-center ml-6">Electrical Techonology</Text>
            </View>
            <View className='flex-col justify-start my-2 gap-3'>
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