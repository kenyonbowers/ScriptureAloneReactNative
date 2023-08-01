import React, { useState } from 'react';
import { StyleSheet, ScrollView, StatusBar, SafeAreaView, TextInput, Button, Alert, Text, Modal, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import BibleVersionButtonList from './src/Bible/Components/BibleVersionButtonList'
import BibleVersionDropdown from './src/Bible/Components/BibleVersionDropdown';
import { availableBibleVersions } from './src/Bible/Services/BibleService';

const bookOrder = {
  Genesis: 1,
  Exodus: 2,
  Leviticus: 3,
  Numbers: 4,
  Deuteronomy: 5,
  Joshua: 6,
  Judges: 7,
  Ruth: 8,
  '1 Samuel': 9,
  '2 Samuel': 10,
  '1 Kings': 11,
  '2 Kings': 12,
  '1 Chronicles': 13,
  '2 Chronicles': 14,
  Ezra: 15,
  Nehemiah: 16,
  Esther: 17,
  Job: 18,
  Psalms: 19,
  Proverbs: 20,
  Ecclesiastes: 21,
  'Song of Solomon': 22,
  Isaiah: 23,
  Jeremiah: 24,
  Lamentations: 25,
  Ezekiel: 26,
  Daniel: 27,
  Hosea: 28,
  Joel: 29,
  Amos: 30,
  Obadiah: 31,
  Jonah: 32,
  Micah: 33,
  Nahum: 34,
  Habakkuk: 35,
  Zephaniah: 36,
  Haggai: 37,
  Zechariah: 38,
  Malachi: 39
};

export default function App() {
  const [inputText, setInputText] = useState("");
  const [displayedValue, setDisplayedValue] = useState("");
  const [jsonData, setJsonData] = useState({ verses: [] });
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDropdownChange = (itemValue) => {
    setSelectedItem(itemValue);
  };

  function handleButtonPress() {
    Alert.alert('Text Input Value', inputText);
    getSearch(inputText)
  }

  async function getSearch(query) {
    var verses = [];
    await books.forEach(async (book, i) => {
      await book[1].forEach(async (chapter, ii) => {
        var data = await fetch(`./Bible/${book[0]
          }/${ii + 1
          }.json`);
        data = await data.json();
        await data.verses.forEach(async (verse, iii) => {
          let num = 0;
          query.forEach((qq) => {
            if (verse.text.includes(qq)) {
              verse.text = verse.text.replaceAll(qq, `<b>${qq}</b>`)
              num++;
            }
          })
          if (num == query.length) {
            verses.push(`${book[0]
              } ${ii + 1
              }:${verse.verse
              } - ${verse.text
              }<br>`)
          }
          if (i == books.length - 1 && ii == book[1].length - 1 && iii == data.verses.length - 1) {
            verses = await verses.sort(compareVerses);
            setDisplayedValue(verses.join("").toString());
          }
        })
      })
    })
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleLoadButtonClick = async () => {
    try {
      const filePath = FileSystem.documentDirectory + 'data.json';
      const data = await loadJSONFile(filePath);
      setJsonData(data);
    } catch (error) {
      console.error('Error loading JSON file:', error);
    }
  };

  const loadFile = async () => {
    try {
      const fileContents = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + "/BibleData/MT1525/Genesis/1.json");
      //Alert.alert("Data:", fileContents)
      setJsonData(JSON.parse(fileContents));
      //return jsonData;
    } catch (error) {
      console.error('Error loading JSON file:', error);
      return null;
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
          value={inputText}
          onChangeText={text => setInputText(text)}
          placeholder="Enter some text..."
        />
        <Button title="Submit" onPress={handleButtonPress} />
        <Text>{displayedValue}</Text>
        <Button onPress={toggleModal} title="Open Modal" />
        <Button title="Load Genesis 1:1" onPress={loadFile} />
        <Text>Book: {jsonData.book_name}</Text>
        <Text>Chapter: {jsonData.chapter}</Text>
        <BibleVersionDropdown
          selectedItem={selectedItem}
          onDropdownChange={handleDropdownChange}
          availableBibleVersions={availableBibleVersions}
        />
        <Text>{selectedItem}</Text>
        {jsonData.verses.map(verse => (
          <Text key={verse.verse} style={styles.textBible}><Text style={{ fontWeight: 'bold' }}>{verse.verse}</Text> {verse.text}</Text>
        ))}
      </ScrollView>

      <Modal
        visible={isModalVisible}
        onRequestClose={toggleModal} // Android back button handling
        animationType="slide" // or "fade" or "none"
      >
        <View style={{ flex: 1, paddingTop: 5, alignItems: 'center', width: '100%' }}>
          <View style={{ backgroundColor: 'white', width: '92%' }}>
            <BibleVersionButtonList />
            <Button onPress={toggleModal} title="Close" />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight + 5,
    width: '100%',
  },
  scrollView: {
    backgroundColor: '#fff',
    width: '92%'
  },
  textBible: {
    fontSize: 20,
    marginBottom: 10,
  }
});

function compareVerses(verse1, verse2) {
  const [, book1, chapter1, verseNum1] = verse1.match(/(\w+) (\d+):(\d+)/);
  const [, book2, chapter2, verseNum2] = verse2.match(/(\w+) (\d+):(\d+)/);

  const bookOrder1 = bookOrder[book1];
  const bookOrder2 = bookOrder[book2];

  if (bookOrder1 !== bookOrder2)
    return bookOrder1 - bookOrder2;


  if (parseInt(chapter1) !== parseInt(chapter2))
    return parseInt(chapter1) - parseInt(chapter2);


  return parseInt(verseNum1) - parseInt(verseNum2);
}