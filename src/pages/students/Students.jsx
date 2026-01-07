import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Table from '../../components/Table';
import FormSelect from '../../components/FormSelect';
import DeleteModal from '../../components/DeleteModal';
import { gradeOptions } from '../../constants/studentOptions';
import { Search, Edit, Trash, Eye } from '../../svgs';

const Students = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Dummy data
  const students = [
    {
      id: 1,
      fullName: 'John Doe',
      surname: 'Doe',
      rollNumber: 'RN001',
      registrationNumber: 'REG001',
      grade: 'Grade 10',
      gender: 'Male',
      dateOfBirth: '2010-05-15',
      admissionDate: '2023-09-01',
      guardianName: 'Robert Doe',
      guardianRelationship: 'Father',
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      surname: 'Smith',
      rollNumber: 'RN002',
      registrationNumber: 'REG002',
      grade: 'Grade 11',
      gender: 'Female',
      dateOfBirth: '2009-08-20',
      admissionDate: '2022-09-01',
      guardianName: 'Mary Smith',
      guardianRelationship: 'Mother',
      email: 'jane.smith@example.com',
      phone: '+1 (555) 234-5678',
    },
    {
      id: 3,
      fullName: 'Alice Johnson',
      surname: 'Johnson',
      rollNumber: 'RN003',
      registrationNumber: 'REG003',
      grade: 'Grade 9',
      gender: 'Female',
      dateOfBirth: '2011-03-10',
      admissionDate: '2024-09-01',
      guardianName: 'David Johnson',
      guardianRelationship: 'Father',
      email: 'alice.johnson@example.com',
      phone: '+1 (555) 345-6789',
    },
    {
      id: 4,
      fullName: 'Bob Williams',
      surname: 'Williams',
      rollNumber: 'RN004',
      registrationNumber: 'REG004',
      grade: 'Grade 12',
      gender: 'Male',
      dateOfBirth: '2008-11-25',
      admissionDate: '2021-09-01',
      guardianName: 'Sarah Williams',
      guardianRelationship: 'Mother',
      email: 'bob.williams@example.com',
      phone: '+1 (555) 456-7890',
    },
    {
      id: 5,
      fullName: 'Charlie Brown',
      surname: 'Brown',
      rollNumber: 'RN005',
      registrationNumber: 'REG005',
      grade: 'Grade 10',
      gender: 'Male',
      dateOfBirth: '2010-07-12',
      admissionDate: '2023-09-01',
      guardianName: 'Emma Brown',
      guardianRelationship: 'Mother',
      email: 'charlie.brown@example.com',
      phone: '+1 (555) 567-8901',
    },
    {
      id: 6,
      fullName: 'Diana Prince',
      surname: 'Prince',
      rollNumber: 'RN006',
      registrationNumber: 'REG006',
      grade: 'Grade 11',
      gender: 'Female',
      dateOfBirth: '2009-12-05',
      admissionDate: '2022-09-01',
      guardianName: 'Michael Prince',
      guardianRelationship: 'Father',
      email: 'diana.prince@example.com',
      phone: '+1 (555) 678-9012',
    },
    {
      id: 7,
      fullName: 'Edward Norton',
      surname: 'Norton',
      rollNumber: 'RN007',
      registrationNumber: 'REG007',
      grade: 'Grade 9',
      gender: 'Male',
      dateOfBirth: '2011-01-18',
      admissionDate: '2024-09-01',
      guardianName: 'Lisa Norton',
      guardianRelationship: 'Mother',
      email: 'edward.norton@example.com',
      phone: '+1 (555) 789-0123',
    },
    {
      id: 8,
      fullName: 'Fiona Apple',
      surname: 'Apple',
      rollNumber: 'RN008',
      registrationNumber: 'REG008',
      grade: 'Grade 12',
      gender: 'Female',
      dateOfBirth: '2008-09-30',
      admissionDate: '2021-09-01',
      guardianName: 'James Apple',
      guardianRelationship: 'Father',
      email: 'fiona.apple@example.com',
      phone: '+1 (555) 890-1234',
    },
    {
      id: 9,
      fullName: 'George Lucas',
      surname: 'Lucas',
      rollNumber: 'RN009',
      registrationNumber: 'REG009',
      grade: 'Grade 10',
      gender: 'Male',
      dateOfBirth: '2010-04-22',
      admissionDate: '2023-09-01',
      guardianName: 'Patricia Lucas',
      guardianRelationship: 'Mother',
      email: 'george.lucas@example.com',
      phone: '+1 (555) 901-2345',
    },
    {
      id: 10,
      fullName: 'Helen Mirren',
      surname: 'Mirren',
      rollNumber: 'RN010',
      registrationNumber: 'REG010',
      grade: 'Grade 11',
      gender: 'Female',
      dateOfBirth: '2009-06-14',
      admissionDate: '2022-09-01',
      guardianName: 'Thomas Mirren',
      guardianRelationship: 'Father',
      email: 'helen.mirren@example.com',
      phone: '+1 (555) 012-3456',
    },
    {
      id: 11,
      fullName: 'Ian McKellen',
      surname: 'McKellen',
      rollNumber: 'RN011',
      registrationNumber: 'REG011',
      grade: 'Grade 9',
      gender: 'Male',
      dateOfBirth: '2011-02-28',
      admissionDate: '2024-09-01',
      guardianName: 'Jennifer McKellen',
      guardianRelationship: 'Mother',
      email: 'ian.mckellen@example.com',
      phone: '+1 (555) 123-4568',
    },
    {
      id: 12,
      fullName: 'Julia Roberts',
      surname: 'Roberts',
      rollNumber: 'RN012',
      registrationNumber: 'REG012',
      grade: 'Grade 12',
      gender: 'Female',
      dateOfBirth: '2008-10-08',
      admissionDate: '2021-09-01',
      guardianName: 'Christopher Roberts',
      guardianRelationship: 'Father',
      email: 'julia.roberts@example.com',
      phone: '+1 (555) 234-5679',
    },
  ];

  // Handle delete
  const handleDeleteClick = (student) => {
    setSelectedStudent(student);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedStudent) {
      // TODO: Implement actual delete API call
      console.log('Deleting student:', selectedStudent.id);
      // After successful delete, close modal and refresh data
      setDeleteModalOpen(false);
      setSelectedStudent(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
    setSelectedStudent(null);
  };

  // Table columns configuration
  const columns = useMemo(() => [
    {
      key: 'rollNumber',
      header: 'Roll Number',
      accessor: 'rollNumber',
      render: (row) => (
        <div className="text-sm font-medium text-gray-900">{row.rollNumber}</div>
      ),
    },
    {
      key: 'registrationNumber',
      header: 'Registration Number',
      accessor: 'registrationNumber',
      render: (row) => (
        <div className="text-sm font-medium text-gray-900">{row.registrationNumber}</div>
      ),
    },
    {
      key: 'student',
      header: 'Student',
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
            {row.fullName.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">
              {row.fullName} {row.surname}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 'guardian',
      header: 'Guardian',
      render: (row) => (
        <div>
          <div className="text-sm font-medium text-gray-900">{row.guardianName}</div>
          <div className="text-xs text-gray-500 mt-0.5">{row.guardianRelationship}</div>
        </div>
      ),
    },
    {
      key: 'grade',
      header: 'Grade',
      accessor: 'grade',
      render: (row) => (
        <div className="text-sm font-medium text-gray-900">{row.grade}</div>
      ),
    },
    {
      key: 'gender',
      header: 'Gender',
      accessor: 'gender',
      render: (row) => (
        <div className="text-sm text-gray-900">{row.gender}</div>
      ),
    },
    {
      key: 'admissionDate',
      header: 'Admission Date',
      accessor: 'admissionDate',
      render: (row) => (
        <div className="text-sm text-gray-900">
          {new Date(row.admissionDate).toLocaleDateString()}
        </div>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      align: 'right',
      render: (row) => (
        <div className="flex items-center justify-end gap-1">
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
      {/* Search, Grade Filter and Create Button Bar */}
      <div className="mb-4 flex items-center gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="w-48 [&_button]:h-12 [&_button]:py-0">
          <FormSelect
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            options={gradeOptions}
            placeholder="All Grades"
            clearOptionLabel="All Grades"
          />
        </div>
        <Link to="/students/create">
          <Button className="w-auto px-6 whitespace-nowrap h-12 py-0 flex items-center justify-center">
            Create Student
          </Button>
        </Link>
      </div>

      {/* Students Table */}
      <Table
        columns={columns}
        data={students}
        keyField="id"
        showPagination={true}
        currentPage={1}
        totalPages={2}
        onPageChange={() => {}}
      />

      {/* Delete Modal */}
      <DeleteModal
        title="Delete Student"
        isOpen={deleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        message="Are you sure you want to delete this student? This action cannot be undone."
      />
    </div>
  );
};

export default Students;

