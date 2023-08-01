import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { books, oldTestamentBooks, newTestamentBooks, avalibleBibleVersions } from '../Services/BibleService';

const BibleVersionButtonList = () => {
    return (
        <>
            {avalibleBibleVersions.map((version) => (
                <View key={version.value} style={{ marginBottom: 5 }}>
                    <Button style={styles.button} title={version.label} onPress={value => downloadBibleVersion(version.value)} />
                </View>
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3498db',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const downloadBibleVersion = async (version) => {
    try {
        await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}/BibleData/${version}`, { intermediates: true });
        await books.forEach(async (book) => {
            var bookIncludedInVersion = false;
            if (avalibleBibleVersions.some(({ value, ot }) => value === version && ot === true && oldTestamentBooks.includes(book[0])))
                bookIncludedInVersion = true;
            else {
                if (avalibleBibleVersions.some(({ value, nt }) => value === version && nt === true && newTestamentBooks.includes(book[0]))) 
                    bookIncludedInVersion = true;
                else
                    bookIncludedInVersion = false;
            }

            if (bookIncludedInVersion) {
                await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}/BibleData/${version}/${book[0]}`, { intermediates: true });
                for (let chapter = 1; chapter <= book[1]; chapter++) {
                    const downloadUrl = `https://raw.githubusercontent.com/kenyonbowers/HostedBibleVersions/main/${version}/${book[0]}/${chapter}.json`;
                    console.log(downloadUrl)
                    const fileUri = `${FileSystem.documentDirectory}/BibleData/${version}/${book[0]}/${chapter}.json`;

                    const downloadResult = await FileSystem.downloadAsync(downloadUrl, fileUri);

                    if (downloadResult.status === 200) {
                        console.log('File downloaded successfully!');
                        console.log('Downloaded file URI:', downloadResult.uri);

                        // Use the fileUri as needed, for example, to display or read the file
                    } else {
                        console.error('Failed to download the file. Status code:', downloadResult.status);
                    }
                };
            }
        })
    } catch (error) {
        console.error('Error downloading and saving the file:', error);
    }
};

export default BibleVersionButtonList;
