import { useNavigate, Link } from 'react-router-dom';

import { useFormValidation } from '../../hooks/useFormValidation';
import { deductionSchema } from '../../validations/deductionSchema';
import { statusOptions, deductionTypeOptions } from '../../constants/constants';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import FormTextarea from '../../components/FormTextarea';

const CreateDeduction = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useFormValidation(deductionSchema);

  const onSubmit = (data) => {
    console.log('Deduction data:', data);
    navigate('/deductions');
  };

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          to="/deductions"
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
          Back to Deductions
        </Link>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col flex-1 min-h-0">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Name"
              {...register('name')}
              error={errors.name}
              placeholder="Enter deduction name"
              required
            />
            <FormInput
              label="Amount"
              {...register('amount')}
              error={errors.amount}
              placeholder="0.00"
              required
            />
            <FormSelect
              label="Type"
              {...register('type')}
              error={errors.type}
              options={deductionTypeOptions}
              placeholder="Select Type"
              required
            />
            <FormSelect
              label="Status"
              {...register('status')}
              error={errors.status}
              options={statusOptions}
              placeholder="Select Status"
              required
            />
            <FormTextarea
              label="Description"
              {...register('description')}
              error={errors.description}
              placeholder="Enter description"
              rows={4}
              className="md:col-span-2"
            />
          </div>

          {/* Form Actions */}
          <div className="grid grid-cols-4 gap-4 pt-4">
            <div className="col-start-3">
              <Button
                type="button"
                onClick={() => navigate('/deductions')}
                variant="secondary"
                className="w-full"
              >
                Cancel
              </Button>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Creating...' : 'Create Deduction'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDeduction;

