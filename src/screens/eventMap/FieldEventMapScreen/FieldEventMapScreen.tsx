import {
  HeaderBackButton,
  HeaderButtonProps,
} from '@react-navigation/elements';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import CurrentFindButton from 'components/eventMap/buttons/CurrentFindButton/CurrentFindButton';
import MapBottomSheet from 'components/eventMap/sheets/MapBottomSheet/MapBottomSheet';
import eventList from 'data/lists/eventList';
import * as Font from "expo-font";
import useEventMapSelector from 'hooks/eventMap/useEventMapSelector';
import { useEffect, useState } from 'react';
import { BackHandler, Dimensions, View } from 'react-native';
import { useAppStore } from 'stores/app';
import { Field } from 'types/apps/group';
import { Coordinate } from 'types/event';
import eventMapScreenStyles from '../EventMapScreen/EventMapScreen.style';

type ParamList = {
  mapData: {
    field: Field;
    coordinate: {
      latitude: number;
      longitude: number;
    };
  };
};

const FieldEventMapScreen = () => {
  const { sort, setSort, selectState, dispatch } =
    useEventMapSelector(eventList);
  const navigation = useNavigation<NavigationProp<ParamList>>();
  const { params } = useRoute<RouteProp<ParamList, 'mapData'>>();
  const [focusCoordinate, setFocusCoordinate] = useState<Coordinate>(
    params.coordinate,
  );
  const [isFindActive, setIsFindActive] = useState<boolean>(false);
  const { callbackCoordinate } = useAppStore();
  useEffect(() => {
    Font.loadAsync({
      "Pretendard-Bold": require("../../../assets/fonts/Pretendard-Bold.ttf"),
      "Pretendard-SemiBold": require("../../../assets/fonts/Pretendard-SemiBold.ttf"),
      "Pretendard-Medium": require("../../../assets/fonts/Pretendard-Medium.ttf"),
      "Pretendard-Regular": require("../../../assets/fonts/Pretendard-Regular.ttf"),
      "Pretendard-Light": require("../../../assets/fonts/Pretendard-Light.ttf"),
    });
  }, []);
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    navigation.setOptions({
      title: params.field.label,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: (props: HeaderButtonProps) => {
        return (
          <HeaderBackButton
            {...props}
            onPress={() => {
              navigation.goBack();
            }}
          />
        );
      },
    });
    return () => backHandler.remove();
  });
  return (
    <View style={eventMapScreenStyles.container}>
      <View style={eventMapScreenStyles.mapContainer}>
        <CurrentFindButton
          handlePress={() => {
            setIsFindActive(false);
          }}
          isFindActive={isFindActive}
        />
      </View>
      <MapBottomSheet
        snapTop={(1 / 3) * Dimensions.get('window').height}
        snapBottom={Dimensions.get('window').height}
        sort={sort}
        setSort={setSort}
        selectState={selectState}
        dispatch={dispatch}
        eventList={eventList}
      />
    </View>
  );
};

export default FieldEventMapScreen;
