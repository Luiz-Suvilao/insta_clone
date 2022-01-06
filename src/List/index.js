import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const List = ({
  data: { name, imgProfile, publication, hasLike, qtdLike, description },
}) => {
  const loadingIcon = (liked: boolean) =>
    liked ? require('../img/likeada.png') : require('../img/like.png');

  const showLikes = likes => {
    if (likes === 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {likes} {likes > 1 ? 'Curtidas' : 'Curtida'}
      </Text>
    );
  };

  return (
    <View>
      <View style={styles.profile}>
        <Image source={{ uri: imgProfile }} style={styles.imgProfile} />

        <Text style={styles.name}> {name} </Text>
      </View>

      <Image
        resizeMode="cover"
        source={{ uri: publication }}
        style={styles.publication}
      />

      <View style={styles.areaButtons}>
        <TouchableOpacity>
          <Image source={loadingIcon(hasLike)} style={styles.iconLike} />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingLeft: 10 }}>
          <Image
            source={require('../img/comment.png')}
            style={styles.iconLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingLeft: 10 }}>
          <Image source={require('../img/send.png')} style={styles.iconLike} />
        </TouchableOpacity>
      </View>

      {showLikes(qtdLike)}

      <Text style={styles.footerName}>{name}</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },

  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  name: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000',
  },

  publication: {
    height: 400,
    alignItems: 'center',
  },

  areaButtons: {
    flexDirection: 'row',
    padding: 5,
  },

  iconLike: {
    width: 25,
    height: 25,
  },

  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },

  footerName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5,
  },

  description: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15,
  },
});

export default List;
