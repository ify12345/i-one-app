/* eslint-disable import/no-cycle */
import {
  Appointment,
  Bank,
  BrandImage,
  Country,
  Earning,
  Notification,
  Outlet,
  Schedule,
} from '~types';

export interface GetCountries {
  data: {
    countries: Country[];
  };
}

export interface Profile {
  id: number;
  jobTitle: null | string;
  businessName: string | null;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  streetAddress1: string;
  streetAddress2: null | string;
  city: string;
  countryId: number;
  zipCode: string;
  hasVerifiedEmail: boolean;
  profilePhotoUrl: string;
  state: null | string;
  country: {
    countryName: string;
    countryId: number;
    countryCode: string;
    countryDialCode: string;
  };
  doesHomeService: boolean;
  outlet: Outlet;
  roles: Role[];
}

export enum Role {
  ADMIN = 1,
  MANAGER = 2,
  STAFF = 3,
  CLIENT = 4,
}

export interface RegisterResponse {
  success: boolean;
  token: string;
  message: string;
  ref_id: string;
  first_name: string;
  last_name: string;
  email: string;
  account_type: string;
  is_active: boolean;
  profile_completed: boolean;
  created_at: string;
  updated_at: string;
}



export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  email: string;
  phone_number: string;
  user_id: string;
  email_verified: boolean;
  phone_verified: boolean;
  profile: object;
  user: {
    user_type_id: string;
    user_type: string;
  };
}

export interface RequestResponse {
  success: boolean;
  message: string;
}

export interface VerifyAccountResponse extends RequestResponse {}

export interface GetOverviewResponse {
  success: boolean;
  message: string;
  data: {
    overview: {
      totalEarning: number;
      totalBooked: number;
    };
  };
}

export interface PaginatedResponse {
  success: boolean;
  message: string;
  currentPage: number;
  lastPage: number;
}

export interface GetAppointmentsResponse extends PaginatedResponse {
  data: Appointment[];
}

export interface GetNotificationsResponse extends PaginatedResponse {
  data: Notification[];
}

export interface GetEarningsResponse extends PaginatedResponse {
  data: Earning[];
  totalEarnings: number;
}

export interface UpdateProfileResponse extends RequestResponse {
  data: Profile;
}

export interface GetSchedulesResponse extends PaginatedResponse {
  data: Schedule[];
}

export type MinuteInterval = 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30;

export interface GetIntervalResponse extends RequestResponse {
  data: {
    interval: MinuteInterval;
  };
}

export interface UpdateScheduleResponse extends RequestResponse {
  data: Schedule;
}

export interface ToggleScheduleResponse extends RequestResponse {
  data: Schedule;
}

export interface CreateBreakResponse extends PaginatedResponse {
  data: [Schedule];
}

export interface GetTimerOptionsResponse extends RequestResponse {
  data: {
    interval: number;
    options: string[];
  };
}

export interface GetOutletsResponse extends PaginatedResponse {
  data: Outlet[];
}

export interface GetUserResponse {
  message: string;
  data: {
    profile: Profile;
  };
}

export interface GetBanksResponse extends PaginatedResponse {
  data: Bank[];
}

export interface UpdateBankResponse extends RequestResponse {
  data: Outlet;
}

export interface GetBrandImagesResponse extends PaginatedResponse {
  data: BrandImage[];
}

export interface UploadBrandImageResponse extends RequestResponse {
  data: {
    id: number;
    name: string;
    url: string;
    createdAt: string;
  };
}

export interface GetTimeslotsResponse extends PaginatedResponse {
  data: TimeSlotType[];
}

export type TimeSlotType = {
  id: number;
  stylist: string;
  schedule_date: Date;
  start_time: string;
  closing_time: string;
  isAvailable: boolean;
  forHomeService: boolean;
};
