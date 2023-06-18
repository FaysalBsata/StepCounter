import AppleHealthKit, {
  HealthKitPermissions,
  HealthInputOptions,
} from 'react-native-health';
import { useEffect, useState } from 'react';
const permissions: HealthKitPermissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.Steps,
      AppleHealthKit.Constants.Permissions.FlightsClimbed,
      AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
    ],
    write: [],
  },
};
const useHealthData = (date: Date) => {
  const [hasPermissions, setHasPermissions] = useState(false);
  const [steps, setSteps] = useState(0);
  const [Flights, setFlights] = useState(0);
  const [Distance, setDistance] = useState(0);
  useEffect(() => {
    AppleHealthKit.initHealthKit(permissions, (err) => {
      if (err) {
        console.log('Error getting permissions');
        return;
      }
      setHasPermissions(true);
    });
  }, []);
  useEffect(() => {
    if (!hasPermissions) {
      return;
    }
    const options: HealthInputOptions = {
      date: date.toISOString(),
      includeManuallyAdded: false,
    };
    AppleHealthKit.getStepCount(options, (err, results) => {
      if (err) {
        console.log('Error getting the steps!');
        return;
      }
      console.log(results);
      setSteps(results.value);
    });
    AppleHealthKit.getFlightsClimbed(options, (err, results) => {
      if (err) {
        console.log('Error getting the Flights climbed!');
        return;
      }
      console.log(results);
      setFlights(results.value);
    });
    AppleHealthKit.getDistanceWalkingRunning(options, (err, results) => {
      if (err) {
        console.log('Error getting the distance!');
        return;
      }
      console.log(results);
      setDistance(results.value);
    });
  }, [hasPermissions, date]);
  return { steps, Flights, Distance };
};
export default useHealthData;
