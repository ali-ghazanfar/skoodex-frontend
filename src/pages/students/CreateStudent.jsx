import { useNavigate, Link } from 'react-router-dom';

import { useFormValidation } from '../../hooks/useFormValidation';
import { studentSchema } from '../../validations/studentSchema';
import {
  gradeOptions,
  genderOptions,
  religionOptions,
  bloodGroupOptions,
  guardianRelationshipOptions,
} from '../../constants/studentOptions';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import FormTextarea from '../../components/FormTextarea';
import FileUpload from '../../components/FileUpload';
import ImageUpload from '../../components/ImageUpload';

const CreateStudent = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useFormValidation(studentSchema, {
    profilePicture: null,
    rollNumber: `RN001`,
    registrationNumber: `STN001`,
    studentDocuments: [],
  });

  const profilePicture = watch('profilePicture');
  const studentDocuments = watch('studentDocuments') || [];

  const onSubmit = (data) => {
    console.log('Student data:', data);
    navigate('/students');
  };


  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          to="/students"
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
          Back to Students
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
              label="Surname"
              {...register('surname')}
              error={errors.surname}
              placeholder="Smith"
            />
            <FormInput
              label="Date of Birth"
              type="date"
              {...register('dateOfBirth')}
              error={errors.dateOfBirth}
              required
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
            <FormTextarea
              label="Address"
              {...register('address')}
              error={errors.address}
              placeholder="Enter complete address"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Roll Number"
              {...register('rollNumber')}
              error={errors.rollNumber}
              disabled
              required
            />
            <FormInput
              label="Registration Number"
              {...register('registrationNumber')}
              error={errors.registrationNumber}
              disabled
              required
            />
            <FormInput
              label="Admission Date"
              type="date"
              {...register('admissionDate')}
              error={errors.admissionDate}
              required
            />
            <FormSelect
              label="Select Grade"
              {...register('grade')}
              error={errors.grade}
              options={gradeOptions}
              placeholder="Select Grade"
              required
            />
            <FormInput
              label="Previous School Name"
              {...register('previousSchoolName')}
              error={errors.previousSchoolName}
              placeholder="Enter previous school name"
            />
            <FormInput
              label="Previous School Grade"
              {...register('previousSchoolGrade')}
              error={errors.previousSchoolGrade}
              placeholder="Enter previous school grade"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Search Guardian"
              {...register('guardianSearch')}
              error={errors.guardianSearch}
              placeholder="Search by name, phone, or CNIC"
              required
            />
            <FormSelect
              label="Guardian Relationship"
              {...register('guardianRelationship')}
              error={errors.guardianRelationship}
              options={guardianRelationshipOptions}
              placeholder="Select Relationship"
              required
            />
          </div>

          {/* Documents */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Documents</h3>
            <FileUpload
              value={studentDocuments}
              onChange={(files) => setValue('studentDocuments', files, { shouldValidate: true })}
              error={errors.studentDocuments}
            />
          </div>

          {/* Form Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <Button
              type="button"
              onClick={() => navigate('/students')}
              variant="secondary"
              className="w-1/2"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="w-1/2">
              {isSubmitting ? 'Creating...' : 'Create Student'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
