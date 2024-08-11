import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Link, type Href } from 'expo-router';
import ContactButton from './ui/Button';
import { AntDesign, Ionicons } from '@expo/vector-icons';

interface DynamicComponentProps {
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  googlePlayLink: Href<string>;
  appStoreLink: Href<string>;
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
}: DynamicComponentProps) => {
  return (
   <View className="flex w-full sm:flex-row flex-col justify-between items-center p-5 ">
    <View className="w-full sm:w-1/2 justify-center items-center">
        <Image 
          source={imageSource} 
          className="w-32 h-32 rounded-2xl" 
          resizeMode="center"
          />
    </View>
  <View className="flex flex-1 w-full flex-col gap-4 mt-5 sm:mt-0">
    <Text className="text-white lg:text-2xl text-lg font-bold text-left">{title}</Text>
    <Text className="text-white lg:text-lg text-xs font-light text-left">{description}</Text>
    <View className="w-full flex-row flex-shrink space-x-4">
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

  );
};

export default ProjectComponent;
