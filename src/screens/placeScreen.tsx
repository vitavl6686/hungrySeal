import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar, Image, FlatList } from 'react-native';
import { NavigationStackProp } from "react-navigation-stack";

import { Text, ButtonGroup } from '@rneui/themed';
import { Entypo } from '@expo/vector-icons'; 

import useSearchPlace from "../hooks/useSearchPlace";

const notificationBarHeight = StatusBar.currentHeight;

const PlaceScreen =  ({ navigation }: {navigation: NavigationStackProp}) => {
    const id: String = navigation.getParam('id');
    const { placeDetails } = useSearchPlace(id);

    return(
        <View style = { styles.mainFrame }>

            <View style = { styles.block } >
            <Text h2 h2Style = { styles.name }> {placeDetails.name} </Text>
            </View>

            { placeDetails.photos.length !== 0 ? 
                <View style = { styles.block }>
                    <Image 
                        source = {{uri: placeDetails.photos[0]}} 
                        style = {styles.image } 
                    /> 
                </View>
                : null 
            }

            <View style = {{flexDirection: "row"}}>

                <FlatList 

                    data={ placeDetails.categories }
                    renderItem= {({item}) => {
                        return(
                            <View style = {{flexDirection: "row"}}>
                                <Entypo name="dot-single" size={24} color="black" />
                                <Text style = { styles.categories }> { item.title}</Text> 
                                <Entypo name="dot-single" size={24} color="black" />
                             </View>
                            );}}
                    />
            </View>

            <View style = { styles.block } >
                    <FlatList 
                        
                        data={ placeDetails.location.display_address }
                        renderItem= {({item}) => {
                            return(
                                <Text style = { styles.address }> { item }</Text>
                        );}}
                    />
            </View>

        </View>
    )
};

PlaceScreen.navigationOptions = {headerShown: false}


const styles = StyleSheet.create(
    {
        name: {
            fontVariant: 'small-caps' as any ,
            letterSpacing: 1,
            fontSize: 30
        }, 

        mainFrame: {
            flex: 1,
            top: notificationBarHeight
        },

        block: {
            marginVertical: 10
        },

        image: {
            height: 300,
            width: "100%",
            opacity: 0.85,
            borderRadius: 10,
            margin: 0
        },

        address: {
            fontVariant: 'small-caps' as any ,
            letterSpacing: 1,
            fontSize: 18
        },

        categories: {
            fontVariant: 'small-caps' as any ,
            letterSpacing: 0.5,
            fontSize: 20,
            fontWeight: '800',
            fontStyle: 'italic'
        }
    }
);

export default PlaceScreen;