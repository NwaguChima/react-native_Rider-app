import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';
import tw from 'twrnc';

const data = [
  {
    id: 'Uber-X-123',
    title: 'Rider X',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-456',
    title: 'Rider XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX-789',
    title: 'Rider LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

const SURGE_CHARGE_RATE = 1.2;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute bottom-2 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text
          style={tw`text-center py-5 text-xl ${
            Platform.OS === 'android' ? '-mt-10' : '-mt-16'
          }`}
        >
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-8 py-0 ${
              id === selected?.id ? 'bg-gray-200' : ''
            }`}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                resizeMode: 'contain',
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {
                new Intl.NumberFormat('en-gb', {
                  style: 'currency',
                  currency: 'NGN',
                })
                  .format(
                    travelTimeInformation?.duration?.value *
                      SURGE_CHARGE_RATE *
                      multiplier
                  )
                  .replace('NGN', '₦')
                  .split('.')[0]
              }
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected ? 'bg-gray-300' : ''}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
