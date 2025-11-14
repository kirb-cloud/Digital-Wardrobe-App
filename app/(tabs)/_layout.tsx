import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

      <Tabs.Screen
        name="closet"
        options={{
          title: 'Closet',
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />

      <Tabs.Screen
        name="saved-looks"
        options={{
          title: 'Saved Looks',
        }}
      />

      <Tabs.Screen
        name="upload-item"
        options={{
          title: 'Upload',
        }}
      />

      <Tabs.Screen
        name="outfit-builder"
        options={{
          title: 'Build Outfit',
        }}
      />
    </Tabs>
  );
}
