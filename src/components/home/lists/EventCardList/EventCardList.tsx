import Text from 'components/common/Text/Text';
import EventCard from 'components/home/cards/EventCard/EventCard';
import { ScrollView, View } from 'react-native';
import { Event } from 'types/event';
import eventCardListStyles from './EventCardList.style';

interface Props {
  title: string;
  subTitle: string;
  events: Event[];
}

const EventCardList = ({ events, title, subTitle }: Props) => {
  return (
    <View style={eventCardListStyles.container}>
      <Text variant="h3" color="white">
        {title}
      </Text>
      <Text variant="body2" color="main">
        {subTitle}
      </Text>
      <ScrollView
        style={eventCardListStyles.scrollConatiner}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            handlePress={() => {
              return false;
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default EventCardList;
