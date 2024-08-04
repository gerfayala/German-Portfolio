import React, { ReactNode } from 'react';
import { Pressable,Text, StyleSheet,  } from 'react-native';


interface DynamicLinkButtonProps {
  icon: ReactNode;
  buttonText: string;
}

const ContactButton: React.FC<DynamicLinkButtonProps> = ({  icon, buttonText }) => {
  return (
      <Pressable style={styles.button}>
       {icon}
        <Text style={styles.text}>{buttonText}</Text>
      </Pressable>
  );
};

const styles = StyleSheet.create({
 button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#151E21',
    borderRadius: 8,
    width: '30%',
    paddingVertical: 10,
    margin: 5,
    },
imageLogo: {
    width: '10%',
    height: 35,
},
text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'semibold',
    textAlign: 'center'
}
});

export default ContactButton;
