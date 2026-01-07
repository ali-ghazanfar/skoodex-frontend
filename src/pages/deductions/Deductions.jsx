import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Table from '../../components/Table';
import FormSelect from '../../components/FormSelect';
import DeleteModal from '../../components/DeleteModal';
import { statusOptions, deductionTypeOptions, deductionsData } from '../../constants/constants';
import { Search, Edit, Trash, Eye } from '../../svgs';

const Deductions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedDeduction, setSelectedDeduction] = useState(null);

  // Handle delete
  const handleDeleteClick = (deduction) => {
    setSelectedDeduction(deduction);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedDeduction) {
      // TODO: Implement actual delete API call
      console.log('Deleting deduction:', selectedDeduction.id);
      // After successful delete, close modal and refresh data
      setDeleteModalOpen(false);
      setSelectedDeduction(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
    setSelectedDeduction(null);
  };

  // Filter data
  const filteredData = useMemo(() => {
    return deductionsData.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesStatus = !selectedStatus || item.status === selectedStatus;
      const matchesType = !selectedType || item.type === selectedType;
      return matchesSearch && matchesStatus && matchesType;
    });
  }, [searchQuery, selectedStatus, selectedType]);

  // Table columns configuration
  const columns = useMemo(() => [
    {
      key: 'name',
      header: 'Name',
      accessor: 'name',
      render: (row) => (
        <div className="text-sm font-medium text-gray-900">{row.name}</div>
      ),
    },
    {
      key: 'amount',
      header: 'Amount',
      accessor: 'amount',
      render: (row) => (
        <div className="text-sm font-medium text-gray-900">Rs. {row.amount}</div>
      ),
    },
    {
      key: 'description',
      header: 'Description',
      accessor: 'description',
      render: (row) => (
        <div className="text-sm text-gray-600">{row.description || '-'}</div>
      ),
    },
    {
      key: 'type',
      header: 'Type',
      accessor: 'type',
      render: (row) => (
        <div className="text-sm text-gray-900">{row.type}</div>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      accessor: 'status',
      render: (row) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          row.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {row.status}
        </span>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      align: 'center',
      render: (row) => (
        <div className="flex items-center justify-center gap-1">
          <button className="p-2 rounded-lg text-gray-500 hover:text-primary transition-all">
            <Eye className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg text-gray-500 hover:text-primary transition-all">
            <Edit className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleDeleteClick(row)}
            className="p-2 rounded-lg text-gray-500 hover:text-red-600 transition-all"
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ], []);

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Search, Filters and Create Button Bar */}
      <div className="mb-4 flex items-center gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search deductions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="w-48 [&_button]:h-12 [&_button]:py-0">
          <FormSelect
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            options={statusOptions}
            placeholder="All Status"
            clearOptionLabel="All Status"
          />
        </div>
        <div className="w-48 [&_button]:h-12 [&_button]:py-0">
          <FormSelect
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            options={deductionTypeOptions}
            placeholder="All Types"
            clearOptionLabel="All Types"
          />
        </div>
        <Link to="/deductions/create">
          <Button className="w-auto px-6 whitespace-nowrap h-12 py-0 flex items-center justify-center">
            Create Deduction
          </Button>
        </Link>
      </div>

      {/* Deductions Table */}
      <Table
        columns={columns}
        data={filteredData}
        keyField="id"
        showPagination={true}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      />

      {/* Delete Modal */}
      <DeleteModal
        title="Delete Deduction"
        isOpen={deleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        message="Are you sure you want to delete this deduction? This action cannot be undone."
      />
    </div>
  );
};

export default Deductions;

