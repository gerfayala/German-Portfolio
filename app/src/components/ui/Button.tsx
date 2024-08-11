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
      className="flex-row justify-center items-center bg-[#1F2937] rounded-2xl py-2 mx-1 border border-[#4B5963]  lg:w-36 lg:h-8    w-32 h-8" 
      {...props}
    >
      {icon}
      <Text className="text-white xl:text-xs lg:text-base   sm:text-xs xs:text-xs  font-semibold text-center mx-2">{buttonText}</Text>
    </Pressable>
  );
});

export default ContactButton;
