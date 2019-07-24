import {Navigation} from 'react-native-navigation'

const startTabs = () => {

    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'awesome-places.SharePlaceScreen',
                                    passProps: {
                                        text: 'This is tab 1',
                                        label: 'This is tab 1',
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 'Tab 1',
                                    icon: require('../../assets/baseline_accessibility_black_18dp.png'),
                                    testID: 'FIRST_TAB_BAR_BUTTON'
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'awesome-places.FindPlaceScreen',
                                    passProps: {
                                        text: 'awesome-places.FindPlaceScreen',
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 'Tab 2',
                                    icon: require('../../assets/baseline_3d_rotation_black_18dp.png'),
                                    testID: 'SECOND_TAB_BAR_BUTTON'
                                }
                            }
                        }
                    },
                ],
                sideMenu: {
                    left: {
                        component: {
                            name: 'awesome-places.SideDrawer'
                        }
                    }
                }
            }
        }
    })
};

export default startTabs

