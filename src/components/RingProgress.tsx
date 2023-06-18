import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import SVG, { Circle } from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
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
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const fill = useSharedValue(0);
  useEffect(() => {
    fill.value = withTiming(progress, { duration: 1500 });
  }, [progress]);
  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumferance * fill.value, circumferance],
  }));
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
        <AnimatedCircle
          r={innerRadius}
          cx={radius}
          cy={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          strokeLinecap="round"
          originX={radius}
          originY={radius}
          rotation={'-90'}
          {...{ animatedProps }}
        />
      </SVG>
    </View>
  );
};

export default RingProgress;

const styles = StyleSheet.create({});
