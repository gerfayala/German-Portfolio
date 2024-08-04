
import React from 'react';
import { View, Image, Text, StyleSheet, ImageSourcePropType } from 'react-native';


interface SkillComponentProps {
  imageSource: ImageSourcePropType;
  skillName: string;
}

const SkillComponent = ({ imageSource, skillName }: SkillComponentProps) => {
  return (
    <View style={styles.skillContainer}>
      <Image
        source={imageSource}
        style={styles.imageLogo}
      />
      <Text style={styles.text}>{skillName}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    skillContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#151E21',
        borderRadius: 8,
        width: '20%',
        paddingVertical: 10,
        margin: 5,
    },
    imageLogo: {
        width: 30,
        height: 34,
    },
     text: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'semibold',
      textAlign: 'center'
  }
});

export default SkillComponent;