import { z } from 'zod';
import { REQUIRED_FIELD_MESSAGE, SALARY_REGEX, SALARY_ERROR_MESSAGE } from '../constants/constants';

export const allowanceSchema = z.object({
  name: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  amount: z.string().min(1, REQUIRED_FIELD_MESSAGE).regex(SALARY_REGEX, SALARY_ERROR_MESSAGE),
  description: z.string().optional(),
  status: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  type: z.string().min(1, REQUIRED_FIELD_MESSAGE),
});

