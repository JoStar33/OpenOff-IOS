import AdvertisementCarousel from 'components/home/carousels/AdvertisementCarousel/AdvertisementCarousel';
import CategoryButtonGroup from 'components/home/groups/CategoryButtonGroup/CategoryButtonGroup';
import EventCardGroup from 'components/home/groups/EventCardGroup/EventCardGroup';
import advertisementList from 'data/lists/advertisementList';
import eventList from 'data/lists/eventList';
import * as Font from "expo-font";
import { useEffect } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import homeScreenStyles from './HomeScreen.style';

const HomeScreen = () => {
  useEffect(() => {
    Font.loadAsync({
      "Pretendard-Bold": require("../../../assets/fonts/Pretendard-Bold.ttf"),
      "Pretendard-SemiBold": require("../../../assets/fonts/Pretendard-SemiBold.ttf"),
      "Pretendard-Medium": require("../../../assets/fonts/Pretendard-Medium.ttf"),
      "Pretendard-Regular": require("../../../assets/fonts/Pretendard-Regular.ttf"),
      "Pretendard-Light": require("../../../assets/fonts/Pretendard-Light.ttf"),
    });
  }, []);
  return (
    <ScrollView style={homeScreenStyles.container}>
      <View style={homeScreenStyles.homeHeader}>
        <Image
          style={homeScreenStyles.logo}
          source={require('../../../assets/images/logo.png')}
        />
        <View />
        <View style={homeScreenStyles.controllerContainer}>
          <TouchableOpacity style={homeScreenStyles.controllerButton}>
            {/* <Icon name="IconBell" fill="white" size={20} /> */}
          </TouchableOpacity>
          <TouchableOpacity>
            {/* <Icon name="IconHeart" fill="white" size={20} /> */}
          </TouchableOpacity>
        </View>
      </View>
      <AdvertisementCarousel carouselData={advertisementList} />
      <CategoryButtonGroup />
      <EventCardGroup
        events={eventList}
        title="맞춤 이벤트 추천"
        subTitle="#공연 #파티"
      />
      <EventCardGroup
        events={eventList}
        title="인기 이벤트"
        subTitle="지금 핫한 인기 이벤트를 둘러보세요."
      />
    </ScrollView>
  );
};

export default HomeScreen;
