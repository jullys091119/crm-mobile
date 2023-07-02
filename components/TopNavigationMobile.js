
import React, {useContext, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Context } from '../appcontext/AppContext';
import { useNavigation } from '@react-navigation/native';

import {
  Avatar,
  Icon,
  IconElement,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button
} from '@ui-kitten/components';


const MenuIcon = () => (
  <Icon
    style={styles.icon}
    fill='#8F9BB3'
    name='more-vertical'
  />
);

const InfoIcon = () => (
  <Icon
    style={styles.icon}
    fill='#8F9BB3'
    name='info'
  />
);

const LogoutIcon = () => (
  <Icon
    style={styles.icon}
    fill='#8F9BB3'
    name='log-out' />
);


const TopNavigationMobile = (): React.ReactElement => {

  const [menuVisible, setMenuVisible] = useState(false);
  const {logout} = useContext(Context)
  const navigation = useNavigation();

  const sesionOut = async () => {
    let status = await logout()
    if (status == 200) {
      navigation.push("Login")
    }
  }

  const toggleMenu = (): void => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={toggleMenu}
    />
  );

  const renderOverflowMenuAction = (): React.ReactElement => (
    <OverflowMenu
      anchor={renderMenuAction}
      visible={menuVisible}
      onBackdropPress={toggleMenu}
    >
      <MenuItem
        accessoryLeft={InfoIcon}
        title='Perfil'
      />
      <MenuItem
        accessoryLeft={LogoutIcon}
        onPress={sesionOut}
        title='Logout'
      />
    </OverflowMenu>
  );

  return (
    <TopNavigation
      style={styles.container}
      accessoryRight={renderOverflowMenuAction}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
    marginTop: 20
  },
  container: {
    marginTop: 0,
    backgroundColor: "white"
  }
});

export default TopNavigationMobile