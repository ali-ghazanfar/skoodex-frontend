import { useNavigate, Link } from 'react-router-dom';

import { useFormValidation } from '../../hooks/useFormValidation';
import { guardianSchema } from '../../validations/guardianSchema';
import { occupationOptions } from '../../constants/constants';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import ImageUpload from '../../components/ImageUpload';

const CreateGuardian = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useFormValidation(guardianSchema, {
    profilePicture: null,
  });

  const profilePicture = watch('profilePicture');

  const onSubmit = (data) => {
    console.log('Guardian data:', data);
    navigate('/guardians');
  };

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          to="/guardians"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Guardians
        </Link>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col flex-1 min-h-0">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex-1 overflow-y-auto p-6 space-y-6">
          <ImageUpload
            value={profilePicture ? URL.createObjectURL(profilePicture) : null}
            onChange={(file) => setValue('profilePicture', file, { shouldValidate: true })}
            error={errors.profilePicture}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Full Name"
              {...register('fullName')}
              error={errors.fullName}
              placeholder="John Doe"
              required
            />
            <FormInput
              label="CNIC"
              {...register('cnic')}
              error={errors.cnic}
              placeholder="12345-1234567-1"
              required
            />
            <FormInput
              label="Phone Number"
              {...register('phoneNumber')}
              error={errors.phoneNumber}
              placeholder="+92 300 1234567"
              required
            />
            <FormSelect
              label="Occupation"
              {...register('occupation')}
              error={errors.occupation}
              options={occupationOptions}
              placeholder="Select Occupation"
              required
            />
          </div>

          {/* Form Actions */}
          <div className="grid grid-cols-4 gap-4 pt-4">
            <div className="col-start-3">
              <Button
                type="button"
                onClick={() => navigate('/guardians')}
                variant="secondary"
                className="w-full"
              >
                Cancel
              </Button>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Creating...' : 'Create Guardian'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGuardian;

