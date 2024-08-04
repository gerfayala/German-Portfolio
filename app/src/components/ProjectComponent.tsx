import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Link, type Href } from 'expo-router'
import ContactButton from './ui/Button'
import { AntDesign, Ionicons } from '@expo/vector-icons'




interface DynamicComponentProps {
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  googlePlayLink: Href<string>;
  appStoreLink:Href<string>;
  googlePlayIcon: keyof typeof Ionicons.glyphMap;
  appStoreIcon: keyof typeof AntDesign.glyphMap;
  buttonTextGooglePlay: string;
  buttonTextAppStore: string;
}




const ProjectComponent = ({
  imageSource,
  title,
  description,
  googlePlayLink,
  appStoreLink,
  googlePlayIcon,
  appStoreIcon,
  buttonTextGooglePlay,
  buttonTextAppStore,
} : DynamicComponentProps )   => {
  return (
      <View className='xs:flex-col justify-evenly items-center p-5 rounded-2xl'>
      <Image source={imageSource} className="w-full h-64 rounded-2xl" style={{ resizeMode: 'cover' }} />
      <View className='grid gap-4 w-full mt-5 items-center'>
        <Text className='text-white text-lg font-bold text-left'>{title}</Text>
        <Text className='text-white text-md font-light text-left '>{description}</Text>
        <View className='flex-row space-x-4'>
          <Link href={googlePlayLink} asChild>
            <ContactButton
              icon={<Ionicons name={googlePlayIcon} size={18} color="white" />}
              buttonText={buttonTextGooglePlay}
            />
          </Link>
          <Link href={appStoreLink} asChild>
            <ContactButton
              icon={<AntDesign name={appStoreIcon} size={18} color="white" />}
              buttonText={buttonTextAppStore}
            />
          </Link>
        </View>
      </View>
    </View>
  )
}

export default ProjectComponent