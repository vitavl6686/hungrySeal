import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, ButtonGroup } from '@rneui/themed';

const SearchButton = () => {
    const [selectedIndexes, setSelectedIndexes] = useState([0, 1, 2])
    return(
        <View>
            <ButtonGroup
                    buttons={['Open Now', 'Best Reviews', 'Short Walk']}
                    selectMultiple
                    selectedIndexes={selectedIndexes}
                    onPress={(value) => {
                        setSelectedIndexes(value);
                    }}

                    containerStyle={{ marginBottom: 20 }}
                    buttonStyle = {styles.button}
                    textStyle = {styles.text}
                    selectedButtonStyle = {styles.selectedButton}
                    selectedTextStyle = {styles.text}

                />
        </View>
    );
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#cfd1d4',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontVariant: 'small-caps' as any, //to do: remove this line!
        letterSpacing: 0.25,
        color: 'black',
    },

    selectedButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },

    
});

export default SearchButton;