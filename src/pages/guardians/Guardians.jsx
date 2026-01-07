import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';

import Table from '../../components/Table';
import Button from '../../components/Button';
import FormSelect from '../../components/FormSelect';
import DeleteModal from '../../components/DeleteModal';
import { Search, Edit, Trash, Eye } from '../../svgs';
import { occupationOptions, guardiansData } from '../../constants/constants';

const Guardians = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedGuardian, setSelectedGuardian] = useState(null);
  const [selectedOccupation, setSelectedOccupation] = useState('');

  // Handle delete
  const handleDeleteClick = (guardian) => {
    setSelectedGuardian(guardian);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedGuardian) {
      // TODO: Implement actual delete API call
      console.log('Deleting guardian:', selectedGuardian.id);
      // After successful delete, close modal and refresh data
      setDeleteModalOpen(false);
      setSelectedGuardian(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
    setSelectedGuardian(null);
  };

  // Table columns configuration
  const columns = useMemo(() => [
    {
      key: 'guardian',
      header: 'Guardian',
      render: (row) => (
        <div className="flex items-center gap-3">
          {row.profilePicture ? (
            <img
              src={row.profilePicture}
              alt={row.fullName}
              className="w-11 h-11 rounded-xl object-cover"
            />
          ) : (
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
              {row.fullName.charAt(0)}
            </div>
          )}
          <div>
            <div className="text-sm font-semibold text-gray-900">
              {row.fullName}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">{row.occupation}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'cnic',
      header: 'CNIC',
      accessor: 'cnic',
      render: (row) => (
        <div className="text-sm font-medium text-gray-900">{row.cnic}</div>
      ),
    },
    {
      key: 'phoneNumber',
      header: 'Phone Number',
      accessor: 'phoneNumber',
      render: (row) => (
        <div className="text-sm text-gray-900">{row.phoneNumber}</div>
      ),
    },
    {
      key: 'occupation',
      header: 'Occupation',
      accessor: 'occupation',
      render: (row) => (
        <div className="text-sm font-medium text-gray-900">{row.occupation}</div>
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
      {/* Search, Occupation Filter and Create Button Bar */}
      <div className="mb-4 flex items-center gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search guardians..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="w-48 [&_button]:h-12 [&_button]:py-0">
          <FormSelect
            value={selectedOccupation}
            onChange={(e) => setSelectedOccupation(e.target.value)}
            options={occupationOptions}
            placeholder="All Occupations"
            clearOptionLabel="All Occupations"
          />
        </div>
        <Link to="/guardians/create">
          <Button className="w-auto px-6 whitespace-nowrap h-12 py-0 flex items-center justify-center">
            Create Guardian
          </Button>
        </Link>
      </div>

      {/* Guardians Table */}
      <Table
        columns={columns}
        data={guardiansData}
        keyField="id"
        showPagination={true}
        currentPage={1}
        totalPages={2}
        onPageChange={() => {}}
      />

      {/* Delete Modal */}
      <DeleteModal
        title="Delete Guardian"
        isOpen={deleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        message="Are you sure you want to delete this guardian? This action cannot be undone."
      />
    </div>
  );
};

export default Guardians;

