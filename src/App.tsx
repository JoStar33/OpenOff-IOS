// import StorybookUIRoot from './.ondevice/Storybook';
// export { StorybookUIRoot as default };

// 스토리북 실행을 원한다면 위에 코드 주석 해제, 아래 코드 주석처리
// 서비스 실행을 원한다면 아래 코드 주석 해제, 위에 코드 주석처리
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CategoryEventScreen from "screens/home/CategoryEventScreen/CategoryEventScreen";
import { colors } from "styles/theme";

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    Font.loadAsync({
      "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.ttf"),
      "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.ttf"),
      "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.ttf"),
      "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.ttf"),
      "Pretendard-Light": require("./assets/fonts/Pretendard-Light.ttf"),
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <CategoryEventScreen/>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
    // <View style={{flex: 1, backgroundColor: 'black'}}>
    //   <EventSearchInput handleSearch={() => {}} handleCalendar={() => {}}/>
    // </View>
  );
};

export default App;
