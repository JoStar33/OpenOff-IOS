import Text from 'components/common/Text/Text';
import { Image, TouchableOpacity, View } from 'react-native';
import { Event } from 'types/event';
import eventCardStyles from './EventCard.style';

interface Props {
  event: Event;
  handlePress: () => void;
}

const EventCard = ({ event, handlePress }: Props) => {
  return (
    <View style={eventCardStyles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          style={eventCardStyles.image}
          source={{ uri: event.images[0] }}
        />
      </TouchableOpacity>
      <Text variant="body2" color="white">
        {event.name}
      </Text>
      <View style={eventCardStyles.iconText}>
        {/* <Icon name="IconPlace" size={10} fill="main" /> */}
        <Text variant="body3" color="white">
          {event.place}
        </Text>
      </View>
      <View style={eventCardStyles.iconText}>
        {/* <Icon name="IconUser" size={10} fill="main" /> */}
        <Text variant="body3" color="white">
          {event.participant}명 참여중
        </Text>
      </View>
      <TouchableOpacity style={eventCardStyles.likeButton}>
        {/* {event.like ? (
          // <Icon name="IconFillHeart" size={20} fill="main" />
        ) : (
          <Icon name="IconHeart" size={20} />
        )} */}
      </TouchableOpacity>
    </View>
  );
};

export default EventCard;
