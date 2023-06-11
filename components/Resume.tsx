import React from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import Profile from './Profile';
import Introduction from './Introduction';
import Skills from './Skills';
import Experiences from './Experiences';
import Achievements from './Achievements';
import Educations from './Educations';
import TrackPlayer from 'react-native-track-player';

let playerInitialized = false;

const start = async () => {
  // Set up the player
  if (!playerInitialized) {
    await TrackPlayer.setupPlayer();
    playerInitialized = true;
  } else {
    await TrackPlayer.reset();
  }

  // Add a track to the queue
  await TrackPlayer.add({
    id: 'trackId',
    url: require('../assets/noisee.mp3'),
    title: 'Track Title',
    artist: 'Track Artist',
  });

  // Start playing it
  await TrackPlayer.play();
};

function Resume(props: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[{}]}
        style={styles.listContainer}
        renderItem={() => {
          return (
            <>
              <View>
                {/* Add a pressable button to play audio noisee.mp3 using track player*/}
                {/* // write code to play audio */}
                <Profile />
                <Pressable
                  onPress={() => {
                    start();
                  }}
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed ? 'black' : '#222222',
                    },
                    styles.audioButton,
                  ]}>
                  <Text style={styles.audioButtonText}>Play Intro</Text>
                </Pressable>
                <Introduction />
                <Skills />
                <Educations />
                <Experiences />
                <Achievements />
                <Pressable
                  onPress={() => {
                    props.navigation.navigate('Edit');
                  }}
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed ? 'black' : '#222222',
                    },
                    styles.editButton,
                  ]}>
                  <Text style={styles.buttonText}>EDIT</Text>
                </Pressable>
              </View>
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  editButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  audioButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: '35%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  audioButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Resume;
