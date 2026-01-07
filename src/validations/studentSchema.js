import { z } from 'zod';

export const studentSchema = z.object({
  profilePicture: z.instanceof(File).nullable().optional(),
  fullName: z.string().min(1, 'This field is required'),
  surname: z.string().optional(),
  dateOfBirth: z.string().min(1, 'This field is required'),
  admissionDate: z.string().min(1, 'This field is required'),
  gender: z.string().min(1, 'This field is required'),
  religion: z.string().optional(),
  bloodGroup: z.string().optional(),
  address: z.string().optional(),
  rollNumber: z.string().min(1, 'This field is required'),
  registrationNumber: z.string().min(1, 'This field is required'),
  grade: z.string().min(1, 'This field is required'),
  previousSchoolName: z.string().optional(),
  previousSchoolGrade: z.string().optional(),
  guardianSearch: z.string().min(1, 'This field is required'),
  guardianRelationship: z.string().min(1, 'This field is required'),
  studentDocuments: z.array(z.instanceof(File)).optional().default([]),
});

