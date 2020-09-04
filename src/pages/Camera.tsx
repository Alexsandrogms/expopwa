import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';

const Camera: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<Boolean>();

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <ExpoCamera style={{ flex: 1 }} type="front">
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        ></View>
      </ExpoCamera>
    </View>
  );
};

export default Camera;
