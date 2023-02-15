import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type RootStackParamList = {
  Home: undefined;
  AddTask: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddTask'
>;