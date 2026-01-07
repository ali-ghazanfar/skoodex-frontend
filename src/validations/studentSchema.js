import { z } from 'zod';
import { REQUIRED_FIELD_MESSAGE } from '../constants/constants';

export const studentSchema = z.object({
  profilePicture: z.instanceof(File).nullable().optional(),
  fullName: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  surname: z.string().optional(),
  dateOfBirth: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  admissionDate: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  gender: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  religion: z.string().optional(),
  bloodGroup: z.string().optional(),
  address: z.string().optional(),
  rollNumber: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  registrationNumber: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  grade: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  previousSchoolName: z.string().optional(),
  previousSchoolGrade: z.string().optional(),
  guardianSearch: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  guardianRelationship: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  studentDocuments: z.array(z.instanceof(File)).optional().default([]),
});

