import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Profile',
          title: 'Profile',
        }}
      />
      <Drawer.Screen
        name="parametres"
        options={{
          drawerLabel: 'Parametres',
          title: 'Parametres',
        }}
      />
    </Drawer>
  );
}
