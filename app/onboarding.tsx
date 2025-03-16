import { Text, View } from 'react-native'
import React from 'react'

const onboarding = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-5xl font-bold text-accent'>Welcome !!!</Text>
      <Text className='text-primary text-3xl font-semibold'>On Boarding</Text>
    </View>
  )
}

export default onboarding

