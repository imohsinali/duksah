import { defaultStyles } from '@/constants/Styles';
import { Listing } from '@/Interfaces/listing';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';

interface Props {
  listings: [];
  category: string;
}
const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
    console.log(listings.length);
  }, [category]);

  const renderRow: ListRenderItem<Listing> = ({ item }) => (
    <Link href={`/listing/${item?.id}`} asChild>
      <TouchableOpacity>
        <Animated.View entering={FadeInRight} exiting={FadeOutLeft}>
          <View style={styles.listing}>
            <Image source={{ uri: item.medium_url }} style={styles.image} />
            <TouchableOpacity
              style={{ position: 'absolute', top: 30, right: 30 }}
            >
              <Ionicons name='heart-outline' size={24} color={'#000'} />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {item.name}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name='star' size={16} />
                <Text style={{ fontFamily: 'mon-sb', fontWeight: 'semibold' }}>
                  {item.review_scores_rating / 20}
                </Text>
              </View>
            </View>
            <Text style={{ fontFamily: 'mon' }}>{item.room_type}</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
            >
              <Text style={{ fontFamily: 'mon-sb' }}>${item.price} night</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={[defaultStyles.container, { marginTop: 50 }]}>
      <FlatList
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : listings}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
});
export default Listings;
