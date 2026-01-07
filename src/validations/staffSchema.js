import { z } from 'zod';
import { CNIC_REGEX, CNIC_ERROR_MESSAGE, PHONE_NUMBER_REGEX, PHONE_NUMBER_ERROR_MESSAGE, SALARY_REGEX, SALARY_ERROR_MESSAGE, REQUIRED_FIELD_MESSAGE } from '../constants/constants';

export const staffSchema = z.object({
  profilePicture: z.instanceof(File).nullable().optional(),
  fullName: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  surname: z.string().optional(),
  cnic: z.string().min(1, 'CNIC is required').regex(CNIC_REGEX, CNIC_ERROR_MESSAGE),
  phoneNumber: z.string().min(1, 'Phone number is required').regex(PHONE_NUMBER_REGEX, PHONE_NUMBER_ERROR_MESSAGE),
  dateOfBirth: z.string().optional(),
  gender: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  religion: z.string().optional(),
  bloodGroup: z.string().optional(),
  maritalStatus: z.string().optional(),
  address: z.string().optional(),
  designation: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  status: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  qualification: z.string().optional(),
  experience: z.string().optional(),
  joiningDate: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  salary: z.string().min(1, 'Salary is required').regex(SALARY_REGEX, SALARY_ERROR_MESSAGE),
  bankName: z.string().optional(),
  bankAccountNumber: z.string().optional(),
  bankBranchName: z.string().optional(),
});

