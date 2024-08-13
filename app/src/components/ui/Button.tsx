/* eslint-disable react/display-name */
import React, { ReactNode, forwardRef, useRef } from 'react';
import { Animated, Pressable, Text, PressableProps,StyleSheet } from 'react-native';


interface DynamicLinkButtonProps extends PressableProps {
  icon: ReactNode;
  buttonText: string;
}

 

const ContactButton = forwardRef<React.Ref<typeof Pressable>, DynamicLinkButtonProps>(({ icon, buttonText, ...props }, ref) => {

  const animatedScale = useRef(new Animated.Value(1)).current;

   const handleButtonsPress = () => {
      animatedScale.setValue(0.8);
      Animated.spring(animatedScale, {
        toValue: 1,
        bounciness: 10,
        speed: 10,
        useNativeDriver: true
      }).start();      
    };


  

    
  return (
   
    <Animated.View style={{transform: [{ scale: animatedScale }] }} >
      <Pressable 
        ref={ref}
        className="flex-row justify-center items-center bg-[#1F2937] rounded-2xl py-2 mx-1 border border-[#4B5963]  lg:w-36 lg:h-8    w-32 h-8" 
        {...props}
        onPress={handleButtonsPress}
        
    >
        {icon}
        
          <Text
            className="text-white xl:text-xs lg:text-base   sm:text-xs xs:text-xs  font-semibold text-center mx-2"
          >
            {buttonText}
          </Text>
      </Pressable>
    </Animated.View>
      
  );
});



export default ContactButton;
