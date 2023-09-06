import React from 'react';
import { View, Image, Text, StyleSheet, FlatList} from 'react-native';
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({name, list, navigation}) => {
    if (list.length != 0){
    return(
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>{name}</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                data = {list}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return(
                        <ResultDetail
                            id = {item.id}
                            name = {item.name} 
                            rating = {item.rating} 
                            review={item.review_count}
                            pic = {item.image_url}
                        />
                    )
                }}
            />

        </View>
    )
    }
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 4

    },
    viewStyle: {
        borderWidth: 0.5,
        borderColor: 'rgb(201, 204, 209)',
        marginVertical: 5

    }
});

export default withNavigation(ResultsList);