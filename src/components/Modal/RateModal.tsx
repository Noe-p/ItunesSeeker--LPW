import React, { useState } from 'react';
import { Alert, Modal, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { songDetailSelector } from '../../redux/songDetailSlice';
import { SongType } from '../../types';
import { SubmitButton } from '../Buttons';
import { rateModalStyle } from './rateModalStyle';

interface RateModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

export const RateModal = (props: RateModalProps) => {
  const { modalVisible, setModalVisible } = props;
  const song: SongType = useSelector(songDetailSelector).songDetail;
  const [rateValue, setRateValue] = useState(song.rate);

  const incrRate = () => {
    if (rateValue < 5) {
      setRateValue(rateValue + 1);
    }
  };

  const decrRate = () => {
    if (rateValue > 0) {
      setRateValue(rateValue - 1);
    }
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View style={rateModalStyle.centeredView}>
        <View style={rateModalStyle.modalView}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            Voulez-vous noter cette musique ?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
            }}
          >
            <Ionicons
              name={'chevron-back-outline'}
              onPress={() => decrRate()}
              color={'black'}
              size={50}
            />
            <Text style={rateModalStyle.modalInput}>{rateValue}</Text>
            <Ionicons
              name={'chevron-forward-outline'}
              onPress={() => incrRate()}
              color={'black'}
              size={50}
            />
          </View>
          <View style={rateModalStyle.modalSubmitContainer}>
            <SubmitButton
              content='Annuler'
              onPress={() => setModalVisible(!modalVisible)}
              color='#191414'
            />
            <SubmitButton
              content='Noter'
              onPress={() => setModalVisible(!modalVisible)}
              color='#1DB954'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
