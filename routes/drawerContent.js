import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'
import { userSignOut } from '../utils/authentication/user.js';

// Temp data
import { profileDetails } from '../shared/tempData';

export default function DrawerContent(props) {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection:'row',marginTop: 15}}>
                <Avatar.Image size={50} 
                    source={ profileDetails['profile pic'] }
                />
                <View style={{marginLeft:15, flexDirection:'column'}}>
                  <Title style={styles.title} onPress={() => props.navigation.navigate('Profile')}>{ profileDetails.name }</Title>
                  <Caption style={styles.caption} onPress={() => props.navigation.navigate('Profile')}>@{ profileDetails.username }</Caption>
                </View>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem 
                icon={({color, size}) => <MaterialIcons name="home" color={color} size={size} />}
                label="Home"
                onPress={() => props.navigation.navigate('Home')}
              />
              <DrawerItem 
                icon={({color, size}) => <MaterialIcons name="face" color={color} size={size} />}
                label="Profile"
                onPress={() => props.navigation.navigate('Profile')}
              />
              <DrawerItem 
                icon={({color, size}) => <MaterialIcons name="settings" color={color} size={size} />}
                label="Settings"
                onPress={() => props.navigation.navigate('Settings')}
              />
              <DrawerItem 
                icon={({color, size}) => <MaterialIcons name="bookmark" color={color} size={size} />}
                label="Bookmarks"
                onPress={() => console.log('Go to Bookmarks Page')}
              />
              <DrawerItem 
                icon={({color, size}) => <MaterialIcons name="help" color={color} size={size} />}
                label="Support"
                onPress={() => console.log('Go to Support Page/Site')}
              />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem 
            icon={({color, size}) => <MaterialIcons name="exit-to-app" color={color} size={size} />}
            label="Sign Out"
            onPress={userSignOut}
          />
        </Drawer.Section>
      </View>
    );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

