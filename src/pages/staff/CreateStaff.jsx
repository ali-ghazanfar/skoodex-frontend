import { useNavigate, Link } from 'react-router-dom';

import { useFormValidation } from '../../hooks/useFormValidation';
import { staffSchema } from '../../validations/staffSchema';
import {
  genderOptions,
  religionOptions,
  bloodGroupOptions,
  maritalStatusOptions,
  designationOptions,
  staffStatusOptions,
} from '../../constants/constants';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import FormTextarea from '../../components/FormTextarea';
import ImageUpload from '../../components/ImageUpload';

const CreateStaff = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useFormValidation(staffSchema, {
    profilePicture: null,
  });

  const profilePicture = watch('profilePicture');

  const onSubmit = (data) => {
    console.log('Staff data:', data);
    navigate('/staff');
  };

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          to="/staff"
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
          Back to Staff
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
              placeholder="Enter full name"
              required
            />
            <FormInput
              label="Surname"
              {...register('surname')}
              error={errors.surname}
              placeholder="Enter surname"
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
              placeholder="923010000000"
              required
            />
            <FormInput
              label="Date of Birth"
              type="date"
              {...register('dateOfBirth')}
              error={errors.dateOfBirth}
            />
            <FormSelect
              label="Gender"
              {...register('gender')}
              error={errors.gender}
              options={genderOptions}
              placeholder="Select Gender"
              required
            />
            <FormSelect
              label="Religion"
              {...register('religion')}
              error={errors.religion}
              options={religionOptions}
              placeholder="Select Religion"
            />
            <FormSelect
              label="Blood Group"
              {...register('bloodGroup')}
              error={errors.bloodGroup}
              options={bloodGroupOptions}
              placeholder="Select Blood Group"
            />
            <FormSelect
              label="Marital Status"
              {...register('maritalStatus')}
              error={errors.maritalStatus}
              options={maritalStatusOptions}
              placeholder="Select Marital Status"
            />
            <FormInput
              label="Address"
              {...register('address')}
              error={errors.address}
              placeholder="Enter address"
            />
            <FormSelect
              label="Designation"
              {...register('designation')}
              error={errors.designation}
              options={designationOptions}
              placeholder="No Designation Selected"
              required
            />
            <FormSelect
              label="Status"
              {...register('status')}
              error={errors.status}
              options={staffStatusOptions}
              placeholder="Select Status"
              required
            />
            <FormInput
              label="Qualification"
              {...register('qualification')}
              error={errors.qualification}
              placeholder="Masters in Education"
            />
            <FormInput
              label="Experience"
              {...register('experience')}
              error={errors.experience}
              placeholder="5 years of teaching experience"
            />
            <FormInput
              label="Joining Date"
              type="date"
              {...register('joiningDate')}
              error={errors.joiningDate}
              required
            />
            <FormInput
              label="Salary"
              type="number"
              step="0.01"
              {...register('salary')}
              error={errors.salary}
              placeholder="50000.00"
              required
            />
            <FormInput
              label="Bank Name"
              {...register('bankName')}
              error={errors.bankName}
              placeholder="Allied Bank"
            />
            <FormInput
              label="Bank Account Number"
              {...register('bankAccountNumber')}
              error={errors.bankAccountNumber}
              placeholder="123456789012"
            />
            <FormInput
              label="Bank Branch Name"
              {...register('bankBranchName')}
              error={errors.bankBranchName}
              placeholder="Lahore Main Branch"
            />
          </div>

          {/* Form Actions */}
          <div className="grid grid-cols-4 gap-4 pt-4">
            <div className="col-start-3">
              <Button
                type="button"
                onClick={() => navigate('/staff')}
                variant="secondary"
                className="w-full"
              >
                Cancel
              </Button>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Creating...' : 'Create Staff'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStaff;

