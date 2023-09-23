'use client';

import { useRetrieveUserQuery, useAdminListUsersQuery, useAdminDeleteUserMutation, useAdminFetchUserByIdQuery } from '@/redux/features/authApiSlice';
import { useRouter } from "next/navigation";
import { List, Spinner } from "@/components/common";
import { UserEditModal, UserProfile } from "@/components/admin";
import { useState } from "react";

export default function Page() {
  const { data: user, isLoading: userLoading, isFetching: userFetching } = useRetrieveUserQuery();
  const { data: userList, isLoading: userListLoading, refetch } = useAdminListUsersQuery();
  const [adminDeleteUser, { isLoading: isDeleting, error: deleteError }] = useAdminDeleteUserMutation();
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleDelete = async (userId: number) => {
    try {
      await adminDeleteUser(userId);
      refetch();
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

    const handleEdit = (userId: number) => {
        const userToEdit = userList?.find(user => user.id === userId);
        if (userToEdit) {
            setSelectedUser(userToEdit);
            setIsModalOpen(true);
        }
    };

    const handleEditComplete = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
        // Refetch the user list here
        refetch();
      };

    const config = [
        {
            label: 'First Name',
            value: user?.first_name,
        },
        {
            label: 'Last Name',
            value: user?.last_name,
        },
        {
            label: 'Email',
            value: user?.email,
        },
    ];

    if (userLoading || userFetching || userListLoading) {
        return (
            <div className='flex justify-center my-8'>
                <Spinner lg />
            </div>
        );
    }

    return (
        <>
            <header className='bg-white shadow-sm'>
                <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
                        Admin Dashboard
                    </h1>
                </div>
            </header>

            <main className='mx-auto max-w-7xl p-6 bg-gray-100 rounded-lg shadow-sm'>
                <section className="mt-10 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Your Details</h2>
                    <List config={config} />
                </section>

                <section className="mt-10 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Users List</h2>
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    First Name
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Last Name
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList?.map(user => (
                                <tr key={user.id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.first_name}</td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.last_name}</td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.email}</td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button className="text-blue-500 hover:text-blue-600" onClick={() => handleEdit(user.id)}>Edit</button>
                                        <span className="border-l mx-2 h-4"></span>
                                        <button className="text-red-500 hover:text-red-600" onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
            {isModalOpen && selectedUser && (
            <div>
                <UserEditModal 
                    userId={selectedUser.id}
                    onClose={() => {
                        setIsModalOpen(false);
                        setSelectedUser(null);
                    }}
                    onEditComplete={handleEditComplete} 
                />
            </div>
        )}
        </>
    );
}
