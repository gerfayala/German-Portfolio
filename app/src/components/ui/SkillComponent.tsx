import React from 'react';
import { View, Image, Text } from 'react-native';
import { ImageSourcePropType } from 'react-native';

interface SkillComponentProps {
  imageSource: ImageSourcePropType;
  skillName: string;
}

const SkillComponent = ({ imageSource, skillName }: SkillComponentProps) => {
  return (
    <View className="flex-row justify-center items-center content-center bg-[#151E21] rounded-lg  w-full h-12 sm:w-full sm:h-12  shadow-lg" >
      <Image
        source={imageSource}
        className="sm:w-3 sm:h-3 w-full h-full"
        resizeMode='contain'
        style={{ width: '25%', height: '50%' }}
      />
      <Text className="text-white xl:text-base md:text-xs text-xs  font-semibold text-center" >{skillName}</Text>
    </View>
  );
};

export default SkillComponent;
