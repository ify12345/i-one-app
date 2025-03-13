import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {AccountType, Schedule, Service} from '@/src/types';

export type RootStackParamList = {
  Onboard: undefined;
  Offboard: undefined;
  Login: undefined;
  ProfileSetup: undefined;
  Register: undefined;
  AccountVerification: undefined;
  AccountVerificationSuccess: undefined;
  ForgotPassword: undefined;
  ProfilePhotoSetup: undefined;
  ResetPassword: {email: string};
  ResetPasswordSuccess: undefined;
  Verify: undefined;
  ValidateOtp: undefined;
  ChangePassword: undefined;
  Authentication: {account_type: AccountType};
  HomeTab: undefined;
  ProfileSetupSuccess: undefined;
  AssistProfileSetup: undefined;
  AssistPhotoSetup: undefined;
  Identification: undefined;
  BankInfo: undefined;
  AvailabilitySchedule: undefined;
  Search: undefined;
  MarketDetails: undefined;
  Chat: undefined;
  PersonalInfo: undefined;
  BottomTab: undefined;
  tournamentDetail: undefined;
};

export type HomeTabParamList = {
  Home: undefined;
  Market: undefined;
  Deals: undefined;
  Assist: undefined;
  Account: undefined;
};

export type ScheduleStackParamList = {
  Schedule: undefined;
  CreateSchedule: {service: Service; date?: string};
  ScheduleDetail: {schedule: Schedule};
  ScheduleBreak: {date: string; isHomeService: boolean};
};

export type ProfileStackParamList = {
  Profile: undefined;
  Address: undefined;
  Settings: undefined;
  ChangePassword: undefined;
};



export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = CompositeScreenProps<
  StackScreenProps<HomeStackParamList, T>,
  CompositeScreenProps<
    DrawerScreenProps<DrawerParamList>,
    RootStackScreenProps<keyof RootStackParamList>
  >
>;

export type ScheduleStackScreenProps<T extends keyof ScheduleStackParamList> = CompositeScreenProps<
  StackScreenProps<ScheduleStackParamList, T>,
  CompositeScreenProps<
    DrawerScreenProps<DrawerParamList>,
    RootStackScreenProps<keyof RootStackParamList>
  >
>;

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, T>,
  CompositeScreenProps<
    DrawerScreenProps<DrawerParamList>,
    RootStackScreenProps<keyof RootStackParamList>
  >
>;

declare global {
  namespace ReactNaigation {
    interface RootParamList extends RootStackParamList {}
  }
}
