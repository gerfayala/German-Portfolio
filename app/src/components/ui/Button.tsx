/* eslint-disable react/display-name */
import React, { ReactNode, forwardRef } from 'react';
import { Pressable, Text, PressableProps } from 'react-native';

interface DynamicLinkButtonProps extends PressableProps {
  icon: ReactNode;
  buttonText: string;
}

const ContactButton = forwardRef<React.Ref<typeof Pressable>, DynamicLinkButtonProps>(({ icon, buttonText, ...props }, ref) => {
  return (
    <Pressable 
      ref={ref} 
      className="flex-row justify-center items-center bg-[#1F2937] rounded-2xl py-2 mx-1 border border-[#4B5963] xl:w-32 xl:h-8 lg:w-32 lg:h-8 md:w-32 md:h-8  sm:w-32 sm:h-8 xs:w-32 xs:h-8" 
      {...props}
    >
      {icon}
      <Text className="text-white xl:text-xs lg:text-xs  md:text-xs sm:text-xs xs:text-xs  font-semibold text-center mx-2">{buttonText}</Text>
    </Pressable>
  );
});

export default ContactButton;
