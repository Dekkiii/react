import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Loginscreen } from './screen/login/login.screen';
import { Homescreen } from './screen/Home/homescreen';
import { Aboutscreen } from './screen/About/aboutscreen';
import { Contactscreen } from './screen/Contact/contactscreen';
import { Menuscreen } from './screen/Menu/menuscreen';
import { Recipescreen } from './screen/Recipe/recipescreen';
import { Food1 } from './screen/Recipe/recipescreen';
import { Food2 } from './screen/Recipe/recipescreen';
import { Food3 } from './screen/Recipe/recipescreen';
import { Food4 } from './screen/Recipe/recipescreen';
import { Food5 } from './screen/Recipe/recipescreen';
import { Food6 } from './screen/Recipe/recipescreen';
import { Food7 } from './screen/Recipe/recipescreen';
import { Food8 } from './screen/Recipe/recipescreen';
import { Food9 } from './screen/Recipe/recipescreen';
import { Food10 } from './screen/Recipe/recipescreen';
import { Bmiscreen } from './screen/BMI/bmiscreen';
import { Exerscreen } from './screen/Exercise/exerscreen';
import { AuthProvider } from '../Context/authContext';
import { Registerscreen } from './screen/Register/registerscreen';
import { RecipeProvider } from '../Context/recipeContext';
import { Informationscreen } from './screen/information';
import { RecipeDetails } from './screen/Recipe/recipedetails';
import { ExerciseDetails } from './screen/Workout/exercisedetails';
import { ExerciseProvider } from '../Context/exerciseContext';
import { Exercisescreen } from './screen/Workout/exercisescreen';
import { Sensormenu } from './screen/Sensor/sensormenuscreen';
import {Squatsensor} from './screen/Sensor/squatsensor';
import {SplashScreen} from './Splashscreen';
import {Dumbellsensor} from './screen/Sensor/dumbellsensor';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="About" component={Aboutscreen} />
        <Tab.Screen name="Menu" component={Menuscreen} />
      </Tab.Navigator>
    );
  };

export const AppNavigator = ({ navigation }) => {
  return (
    <NavigationContainer initialRouteName="Splashscreen">
      <AuthProvider>
        <RecipeProvider>
          <ExerciseProvider>
            <Stack.Navigator>
            <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Menu"
                component={Menuscreen}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Login"
                component={Loginscreen}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Register"
                component={Registerscreen}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Information"
                component={Informationscreen}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="RecipeDetails"
                component={Recipescreen}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="ExerciseDetails"
                component={Exercisescreen}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Home"
                component={HomeTabs}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="About"
                component={Aboutscreen}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Contact"
                component={Contactscreen}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Recipescreen"
                component={Recipescreen}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Exercisescreen"
                component={Exercisescreen}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Sensormenu"
                component={Sensormenu}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Squatsensor"
                component={Squatsensor}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Dumbellsensor"
                component={Dumbellsensor}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Gymsc"
                component={Exerscreen}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Splashscreen"
                component={SplashScreen}
              />
              <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="BMI"
                component={Bmiscreen}
              />
            </Stack.Navigator>
          </ExerciseProvider>
        </RecipeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};
     
export default AppNavigator;