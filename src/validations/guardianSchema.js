import { z } from 'zod';
import { CNIC_REGEX, CNIC_ERROR_MESSAGE, PHONE_NUMBER_REGEX, PHONE_NUMBER_ERROR_MESSAGE, REQUIRED_FIELD_MESSAGE } from '../constants/constants';

export const guardianSchema = z.object({
  profilePicture: z.instanceof(File).nullable().optional(),
  fullName: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  cnic: z.string().min(1, 'CNIC is required').regex(CNIC_REGEX, CNIC_ERROR_MESSAGE),
  phoneNumber: z.string().min(1, 'Phone number is required').regex(PHONE_NUMBER_REGEX, PHONE_NUMBER_ERROR_MESSAGE),
  occupation: z.string().min(1, REQUIRED_FIELD_MESSAGE),
});

