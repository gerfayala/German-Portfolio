import React from 'react';
import { View, Image, Text } from 'react-native';
import { ImageSourcePropType } from 'react-native';

interface SkillComponentProps {
  imageSource: ImageSourcePropType;
  skillName: string;
}

const SkillComponent = ({ imageSource, skillName }: SkillComponentProps) => {
  return (
    <View className="flex-row justify-evenly items-center content-center bg-[#151E21] rounded-lg xs:w-4/5 xs:h-12 m-1 shadow-lg" >
      <Image
        source={imageSource}
        className="ms:w-3 ms:h-3 xs:w-full xs:h-full"
      />
      <Text className="text-white xl:text-base  ms:text-xs xs:text-xs  font-semibold text-center" >{skillName}</Text>
    </View>
  );
};

export default SkillComponent;
