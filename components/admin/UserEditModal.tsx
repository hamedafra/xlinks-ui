// UserEditModal.tsx
import { useState, useEffect } from 'react';
import { useAdminUpdateUserMutation, useAdminFetchUserByIdQuery } from '@/redux/features/authApiSlice';

interface UserEditModalProps {
  userId: number;
  onClose: () => void;
  onEditComplete: () => void;
}

export type UserProfile = {
    id: number;
    email: string;
    first_name?: string;
    last_name?: string;
    bio?: string;
    traffic_limit?: number;
    traffic_used?: number;
    ip?: string;
    mobile?: string;
    avatar?: string;
    is_active?: boolean;
    is_staff?: boolean;
    is_superuser?: boolean;
    date_joined?: Date;
};

const UserEditModal: React.FC<UserEditModalProps> = ({ userId, onClose, onEditComplete }) => {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const { data: user, refetch } = useAdminFetchUserByIdQuery(userId);
  const [updateUser, { isLoading }] = useAdminUpdateUserMutation();

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;
    setUserData((prev) => (prev ? { ...prev, [name]: checked } : null));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData(prev => (prev ? { ...prev, [name]: value } : null));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userData) {
      await updateUser(userData);
      onEditComplete();
      refetch();
    }
  };

  if (!userData) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        onClick={e => e.stopPropagation()} 
        className="bg-white p-8 rounded-lg shadow-lg w-3/4 relative z-10"
      >
        <h2 className="text-xl font-semibold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={userData.email}
              onChange={handleInputChange}
              className="p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" id="first_name" value={userData.first_name || ''} onChange={handleInputChange} className="p-2 border rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" id="last_name" value={userData.last_name || ''} onChange={handleInputChange} className="p-2 border rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="bio">Bio</label>
            <textarea name="bio" id="bio" value={userData.bio || ''} onChange={handleInputChange} className="p-2 border rounded-md w-full"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="mobile">Mobile</label>
            <input type="tel" name="mobile" id="mobile" value={userData.mobile || ''} onChange={handleInputChange} className="p-2 border rounded-md w-full" />
          </div>
          <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Permissions</label>
          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="is_superuser"
                checked={userData.is_superuser || false}
                onChange={handleCheckboxChange} // Keep the onChange handler
                className="form-checkbox text-blue-600 h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent"
              />
              <span className="ml-2 text-gray-700">Admin</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                name="is_staff"
                checked={userData.is_staff || false}
                onChange={handleCheckboxChange} // Keep the onChange handler
                className="form-checkbox text-green-600 h-5 w-5 border border-gray-300 rounded-md checked:bg-green-600 checked:border-transparent"
              />
              <span className="ml-2 text-gray-700">Staff</span>
            </label>
          </div>
          </div>
          <div className="flex justify-between items-center">
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-gray-900">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" disabled={isLoading}>
              {isLoading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
      </div>
      <div className="fixed inset-0 bg-black opacity-50" onClick={e => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}></div>
    </div>
  );
};

export default UserEditModal;
