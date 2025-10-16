import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="user"
        options={{
          drawerLabel: 'User',
          title: 'User',
        }}
      />
      <Drawer.Screen
        name="details"
        options={{
          drawerLabel: 'Details',
          title: 'Details',
        }}
      />
    </Drawer>
  );
}
