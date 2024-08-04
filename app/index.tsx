import React, { useRef } from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import SkillComponent from './src/components/ui/SkillComponent';
import { Link } from 'expo-router';
import ContactButton from './src/components/ui/Button';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { db, expo, fb, git, js, node, rn, ts, image } from '../constants/Image';

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
      <View className="flex-1 justify-center items-center xs:w-fit">
        {/* Navbar */}
        <View className="flex-row justify-center p-5">
          <Text className="text-white text-lg font-bold xs:m-2 xs:text-xs">Experience</Text>
          <Text className="text-white text-lg font-bold xs:m-2 xs:text-xs">Projects</Text>
          <Text className="text-white text-lg font-bold xs:m-2 xs:text-xs">About Me</Text>
          <Text className="text-white text-lg font-bold xs:m-2 xs:text-xs">Contact</Text>
        </View>

        {/* Basic Information and Programming Stack */}
        <View className="bg-[#0B1214] xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 justify-center  items-center  pb-5 shadow-lg">
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
                    buttonText="Contact"
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
            <View className="grid grid-cols-2 gap-4 w-full">
              {skills.map((skill, index) => (
                <SkillComponent key={index} imageSource={skill.image} skillName={skill.name} />
              ))}
            </View>
          </View>
        </View>

        {/* Job Experience */}
         {/* Portfolio */}
        <View className=' flex-col justify-center content-center items-start mt-5 xs:w-full mx-14'>
          <View className='flex-col mx-5'>
            <View className='flex-row  justify-start pb-4  '>
              <FontAwesome name="suitcase" size={24} color="#00C8E0" />
              <Text className="text-white text-lg  font-bold  justify-self-center ml-4">Projects</Text>
            </View>
            
            <View className='flex-col justify-evenly'>
              <Image source={image} className="xs:w-5 xs:h-5 rounded-2xl" style={{ width: '100%' , height: '100%' }} />
              <View className='grid gap-4 w-full mt-5 '>
                <Text className='text-white text-lg font-bold '>Mobile Aplication -  DominoPoints</Text>
                <Text className='text-white text-lg font-light text-left '>Aplicación móvil para Android y IOS que permite facilitar anotar puntos en el domino por parejas al estilo venezolano. Disponible en espańol e inglés. Juega partidas rápidas o torneos de 4 o 5 personas en un todos contra todos </Text>
            </View>

            </View>

          </View>

         
        </View>

        {/* About Me */}
        <View>
          {/* Aquí puedes añadir más contenido */}
        </View>
      </View>
    </ScrollView>
  );
};

export default index;