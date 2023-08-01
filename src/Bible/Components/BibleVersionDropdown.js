import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BibleVersionDropdown = ({ selectedItem, onDropdownChange, availableBibleVersions }) => {
    return (
        <View>
            <Picker
                style={{ borderColor: 'black', borderWidth: 10, borderStyle: 'solid' }}
                selectedValue={selectedItem}
                onValueChange={(itemValue) => {
                    onDropdownChange(itemValue);
                }}
            >
                {availableBibleVersions.map((item) => (
                    <Picker.Item key={item.value} label={item.label} value={item.value} />
                ))}
            </Picker>
        </View>
    );
};

export default BibleVersionDropdown;
