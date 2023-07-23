import { NavigationProp, useNavigation } from '@react-navigation/native';
import MyCoordinateButton from 'components/eventMap/buttons/MyCoordinateButton/MyCoordinateButton';
import MapFieldButtonGroup from 'components/eventMap/groups/MapFieldButtonGroup/MapFieldButtonGroup';
import EventSearchInput from 'components/eventMap/inputs/EventSearchInput/EventSearchInput';
import MapBottomSheet from 'components/eventMap/sheets/MapBottomSheet/MapBottomSheet';
import { StackMenu } from 'constants/menu';
import eventList from 'data/lists/eventList';
import * as Font from "expo-font";
import useEventMapSelector from 'hooks/eventMap/useEventMapSelector';
import { useCallback, useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import { useAppStore } from 'stores/app';
import { Field } from 'types/apps/group';
import { RootStackParamList } from 'types/apps/menu';
import { Coordinate } from 'types/event';
import eventMapScreenStyles from './EventMapScreen.style';

const EventMapScreen = () => {
  const { setCallbackCoordinate } = useAppStore();
  const { sort, setSort, selectState, dispatch } =
    useEventMapSelector(eventList);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const saveScreenCoordinate = useCallback(
    (coordinate: Coordinate) => {
    },
    [],
  );
  const getFieldEvent = useCallback(
    (field: Field) => {
      setCallbackCoordinate(saveScreenCoordinate);
    },
    [navigation, saveScreenCoordinate, setCallbackCoordinate],
  );
  const handleEventSearch = useCallback((value: string) => {
    return false;
  }, []);
  const handleShowCalendar = useCallback(() => {
    navigation.navigate(StackMenu.DatePick);
  }, [navigation]);
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
    <View style={eventMapScreenStyles.container}>
      <EventSearchInput
        handleSearch={handleEventSearch}
        handleCalendar={handleShowCalendar}
      />
      <MapFieldButtonGroup getFieldEvent={getFieldEvent} />
      <View style={eventMapScreenStyles.mapContainer}>
        <MyCoordinateButton handlePress={() => {}} />
      </View>
      <MapBottomSheet
        snapTop={50}
        snapBottom={(2 / 3) * Dimensions.get('window').height}
        sort={sort}
        setSort={setSort}
        selectState={selectState}
        dispatch={dispatch}
        eventList={eventList}
      />
    </View>
  );
};

export default EventMapScreen;
