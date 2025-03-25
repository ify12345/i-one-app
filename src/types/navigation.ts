import {StackScreenProps} from '@react-navigation/stack';
import {AccountType} from '@/src/types';

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
  Fixtures: undefined;
  EditBasicInfo: undefined;
  Notification: undefined;
  VerificationSuccess: undefined;
};

export type HomeTabParamList = {
  Home: undefined;
  Market: undefined;
  Deals: undefined;
  Assist: undefined;
  Account: undefined;
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

declare global {
  namespace ReactNaigation {
    interface RootParamList extends RootStackParamList {}
  }
}
