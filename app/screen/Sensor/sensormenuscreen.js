import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity,SafeAreaView,Text,View,ImageBackground,Image,ScrollView} from 'react-native';
import { Card, TextInput,Button,Title,Paragraph} from 'react-native-paper';
import { Menustyle } from '../Menu/menu.style';
import { RecipeContext } from '../../../Context/recipeContext';
import { AuthContext } from '../../../Context/authContext';
import { ExerciseContext } from '../../../Context/exerciseContext';


export const Sensormenu = ({ navigation, route }) => {
    const [state] = useContext(AuthContext);
    const [exercises] = useContext(ExerciseContext);
  
    return (
      <SafeAreaView style={Menustyle.content}>
        <View>
          <Card>
            <Card.Actions style={Menustyle.card}>
              <Image
                style={{ width: 35, height: 35, marginRight: 5 }}
                source={require('./asset/blacklogo.png')}
              />
              <Button onPress={() => navigation.navigate('Menu')}>Menu</Button>
              <Button onPress={() => navigation.navigate('Home')}>Home</Button>
              <Button onPress={() => navigation.navigate('About')}> About</Button>
              <Button onPress={() => navigation.navigate('Contact')}>Contact</Button>
              <Button onPress={() => navigation.navigate('Information')}>
                information
              </Button>
            </Card.Actions>
          </Card>
        </View>
  
        <ScrollView>
        {exercises.map((exercise) => (
          <React.Fragment key={exercise.id}>
            {exercise.sensoravailable ? (
              <Card
                TouchableOpacity
                onPress={() =>
                  navigation.navigate(exercise.exercise === 'Squat' ? 'Squatsensor' :
                  exercise.exercise === 'Dumbell Curls' ? 'Dumbellsensor' :
                  'Squatsensor'
                   )
                }
                style={Menustyle.card1}
              >
                <Card.Cover
                  style={Menustyle.cardcover}
                  resizeMode={`cover`}
                  source={{ uri: exercise.image }}
                />
                <Card.Title title={exercise.exercise}></Card.Title>
              </Card>
            ) : null}
          </React.Fragment>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};