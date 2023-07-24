// import StorybookUIRoot from './.ondevice/Storybook';
// export { StorybookUIRoot as default };

// 스토리북 실행을 원한다면 위에 코드 주석 해제, 아래 코드 주석처리
// 서비스 실행을 원한다면 아래 코드 주석 해제, 위에 코드 주석처리
import { NavigationContainer } from "@react-navigation/native";
import AuthorizeNavigator from "navigators/AuthorizeNavigator";
import Navigator from "navigators/Navigator";
import { useState } from 'react';
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { colors } from "styles/theme";

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  // useEffect(() => {
  //   Font.loadAsync({
  //     "Pretendard-Bold": require("./src/assets/fonts/Pretendard-Bold.ttf"),
  //     "Pretendard-SemiBold": require("./src/assets/fonts/Pretendard-SemiBold.ttf"),
  //     "Pretendard-Medium": require("./src/assets/fonts/Pretendard-Medium.ttf"),
  //     "Pretendard-Regular": require("./src/assets/fonts/Pretendard-Regular.ttf"),
  //     "Pretendard-Light": require("./src/assets/fonts/Pretendard-Light.ttf"),
  //   });
  // }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {isLogin ? (
            <Navigator />
          ) : (
            <AuthorizeNavigator setIsLogin={setIsLogin} />
          )}
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
    // <View style={{flex: 1, backgroundColor: 'black'}}>
    //   <EventSearchInput handleSearch={() => {}} handleCalendar={() => {}}/>
    // </View>
  );
};

export default App;
