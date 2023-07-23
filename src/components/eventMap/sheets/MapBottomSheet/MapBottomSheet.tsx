import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Text from 'components/common/Text/Text';
import MapEventCard from 'components/eventMap/cards/MapEventCard/MapEventCard';
import SortDialog from 'components/eventMap/dialogs/SortDialog/SortDialog';
import SelectBoxGroup from 'components/eventMap/groups/SelectBoxGroup/SelectBoxGroup';
import SelectDetailGroup from 'components/eventMap/groups/SelectDetailGroup/SelectDetailGroup';
import { Dispatch, SetStateAction, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { colors } from 'styles/theme';
import { Action, SelectBox } from 'types/apps/selectbox';
import { Event } from 'types/event';
import mapBottomSheetStyles from './MapBottomSheet.style';

interface SortInfo {
  dialog: boolean;
  value: string;
}

interface Props {
  snapTop: number;
  snapBottom: number;
  sort: SortInfo;
  setSort: Dispatch<SetStateAction<SortInfo>>;
  selectState: SelectBox;
  dispatch: Dispatch<Action>;
  eventList: Event[];
}

const MapBottomSheet = ({
  snapTop,
  snapBottom,
  sort,
  setSort,
  selectState,
  eventList,
  dispatch,
}: Props) => {
  const [isDetail, setIsDetail] = useState<boolean>(false);
  return (
    <>
      <BottomSheet
        index={0}
        snapPoints={[snapTop, snapBottom]}
        animateOnMount
        backgroundStyle={{ backgroundColor: colors.background }}
        handleIndicatorStyle={{
          backgroundColor: colors.white,
        }}
      >
        {!isDetail ? (
          <>
            <SelectBoxGroup
              selectState={selectState}
              dispatch={dispatch}
              openDetailGroup={() => {
                setIsDetail(true);
              }}
            />
            <View style={mapBottomSheetStyles.sortButton}>
              <TouchableOpacity
                onPress={() => setSort({ ...sort, dialog: true })}
              >
                <Text variant="body2" color="white">
                  {sort.value === 'distance' ? '거리순' : '날짜순'}
                </Text>
              </TouchableOpacity>
            </View>
            <BottomSheetScrollView
              style={mapBottomSheetStyles.bottomSheetContainer}
            >
              {eventList.map((event) => (
                <MapEventCard key={event.id} event={event} />
              ))}
            </BottomSheetScrollView>
          </>
        ) : (
          <BottomSheetScrollView
            style={mapBottomSheetStyles.bottomSheetContainer}
          >
            <SelectDetailGroup
              selectState={selectState}
              dispatch={dispatch}
              closeDetailGroup={() => {
                setIsDetail(false);
              }}
            />
          </BottomSheetScrollView>
        )}
      </BottomSheet>
      <SortDialog
        dialogShow={sort.dialog}
        value={sort.value}
        setValue={(value: string) =>
          setSort((sortInfo) => {
            return { ...sortInfo, value };
          })
        }
        handleDialog={() =>
          setSort((sortInfo) => {
            return { ...sortInfo, dialog: false };
          })
        }
      />
    </>
  );
};

export default MapBottomSheet;
