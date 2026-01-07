import { z } from 'zod';

export const guardianSchema = z.object({
  profilePicture: z.instanceof(File).nullable().optional(),
  fullName: z.string().min(1, 'This field is required'),
  cnic: z.string().min(1, 'CNIC is required').regex(/^\d{5}-\d{7}-\d{1}$/, 'CNIC must be in format XXXXX-XXXXXXX-X'),
  phoneNumber: z.string().min(1, 'Phone number is required').regex(/^(\+92|0)?[0-9]{10}$/, 'Invalid phone number format'),
  occupation: z.string().min(1, 'Occupation is required'),
});

