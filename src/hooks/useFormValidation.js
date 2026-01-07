import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const useFormValidation = (schema, defaultValues = {}, options = {}) => {
  return useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange',
    ...options,
  });
};

