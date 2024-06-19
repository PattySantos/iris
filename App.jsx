import { View, Text, Linking, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApplicationContextProvider from './contexts/ApplicationContext';
import QuestionsContextProvider from './contexts/QuestionsContext';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import TermsScreen from './screens/TermsScreen';
import HomeScreen from './screens/HomeScreen';
import Question1 from './screens/Questions/Question1';
import Question2 from './screens/Questions/Question2';
import Question3 from './screens/Questions/Question3';
import Question4 from './screens/Questions/Question4';
import Question5 from './screens/Questions/Question5';
import Question6 from './screens/Questions/Question6';
import Question7 from './screens/Questions/Question7';
import Question8 from './screens/Questions/Question8';
import Question9 from './screens/Questions/Question9';
import Question10 from './screens/Questions/Question10';
import Question11 from './screens/Questions/Question11';
import Question12 from './screens/Questions/Question12';
import Question13 from './screens/Questions/Question13';
import Question14 from './screens/Questions/Question14';
import RegisterScreen from './screens/RegisterScreen';
import Finish from './screens/Questions/FinishStep';
import PlanosScreen from './screens/PlanosScreen';
import ArtigosScreen from './screens/ArtigosScreen';
import ResultadosScreen from './screens/ResultadosScreen';
import PdfScreen from './screens/PdfScreen';
import Payment from './screens/PaymentScreen';

const Stack = createNativeStackNavigator();

function Main({ component: Component, ...props }) {
    return <Component {...props} />;
}

function App() {

    return (
        <ApplicationContextProvider>
            <QuestionsContextProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
                        <Stack.Screen name="Terms" component={TermsScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Planos" component={PlanosScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Artigos" component={ArtigosScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Resultados" component={ResultadosScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Pdf" component={PdfScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Question1" component={Question1} options={{ headerShown: false }} />
                        <Stack.Screen name="Question2" component={Question2} options={{ headerShown: false }} />
                        <Stack.Screen name="Question3" component={Question3} options={{ headerShown: false }} />
                        <Stack.Screen name="Question4" component={Question4} options={{ headerShown: false }} />
                        <Stack.Screen name="Question5" component={Question5} options={{ headerShown: false }} />
                        <Stack.Screen name="Question6" component={Question6} options={{ headerShown: false }} />
                        <Stack.Screen name="Question7" component={Question7} options={{ headerShown: false }} />
                        <Stack.Screen name="Question8" component={Question8} options={{ headerShown: false }} />
                        <Stack.Screen name="Question9" component={Question9} options={{ headerShown: false }} />
                        <Stack.Screen name="Question10" component={Question10} options={{ headerShown: false }} />
                        <Stack.Screen name="Question11" component={Question11} options={{ headerShown: false }} />
                        <Stack.Screen name="Question12" component={Question12} options={{ headerShown: false }} />
                        <Stack.Screen name="Question13" component={Question13} options={{ headerShown: false }} />
                        <Stack.Screen name="Question14" component={Question14} options={{ headerShown: false }} />
                        <Stack.Screen name="Finish" component={Finish} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </QuestionsContextProvider>
        </ApplicationContextProvider>
    );
}

AppRegistry.registerComponent('appName', () => App);
