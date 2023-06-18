import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SVG, { Circle } from 'react-native-svg';
type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
  progress: number;
};
const color = '#EE0F55';
const RingProgress = ({
  radius = 100,
  strokeWidth = 35,
  progress,
}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumferance = Math.PI * 2 * innerRadius;
  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        alignSelf: 'center',
      }}
    >
      <SVG>
        <Circle
          r={radius - strokeWidth / 2}
          cx={radius}
          cy={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          opacity={0.2}
        />
        <Circle
          r={innerRadius}
          cx={radius}
          cy={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          strokeDasharray={[circumferance * progress, circumferance]}
          strokeLinecap="round"
          originX={radius}
          originY={radius}
          rotation={'-90'}
        />
      </SVG>
    </View>
  );
};

export default RingProgress;

const styles = StyleSheet.create({});
