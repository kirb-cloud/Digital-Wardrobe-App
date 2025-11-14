import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-wardrobeBeige">
      <View className="bg-wardrobeBlue p-4 rounded-xl">
        <Text className="text-white font-bold text-center text-lg">
          Tailwind is working!
        </Text>
      </View>
    </View>
  );
}
