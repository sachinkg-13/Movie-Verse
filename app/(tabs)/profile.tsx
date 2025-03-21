import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { getUserDetails } from "@/services/appwrite";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {

  return (
    <SafeAreaView className="bg-primary flex-1">
      <Image source={icons.logo} className="w-12 h-10 mt-8 z-10 mx-auto" />
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.person} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 text-base">Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;