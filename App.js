import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native'; // Text 컴포넌트 추가

// 페이지/스크린 컴포넌트들을 임포트합니다.
// 이 파일들은 'screens' 폴더에 위치한다고 가정합니다.
import HomeScreen from './screens/HomeScreen';
import DisasterManagementScreen from './screens/DisasterManagementScreen';
import SafetyAccidentScreen from './screens/SafetyAccidentScreen';
import FacilityManagementScreen from './screens/FacilityManagementScreen';
import EmotionalLaborScreen from './screens/EmotionalLaborScreen';
import EthicalManagementScreen from './screens/EthicalManagementScreen';
import HumanRightsScreen from './screens/HumanRightsScreen';

// Stack Navigator를 생성합니다.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer는 내비게이션 트리를 관리하는 컨테이너입니다.
    <NavigationContainer>
      {/* Stack.Navigator는 화면 스택을 관리합니다. */}
      <Stack.Navigator initialRouteName="Home">
        {/*
          Stack.Screen 컴포넌트는 내비게이션 스택에 포함될 각 화면을 정의합니다.
          - name: 내비게이션에서 이 화면을 참조할 때 사용할 고유 이름입니다.
          - component: 이 화면에 렌더링될 React 컴포넌트입니다.
          - options: 화면의 헤더 제목 등을 설정할 수 있습니다.
        */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DisasterManagement"
          component={DisasterManagementScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SafetyAccident"
          component={SafetyAccidentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FacilityManagement"
          component={FacilityManagementScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmotionalLabor"
          component={EmotionalLaborScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EthicalManagement"
          component={EthicalManagementScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HumanRights"
          component={HumanRightsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 스타일 시트는 App.js에서는 필수는 아니지만, 앱 전체적인 레이아웃이나
// 최상위 컨테이너에 스타일을 적용할 때 사용할 수 있습니다.
const styles = StyleSheet.create({
  container: {
    flex: 1, // 화면 전체를 차지하도록 합니다.
    backgroundColor: '#fff',
  },
});
