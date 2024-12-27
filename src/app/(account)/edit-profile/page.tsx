import { Metadata } from 'next';
import EditProfileForm from '../components/EditProfileForm';

export const metadata: Metadata = {
  title: 'Edit Profile',
};

export default function EditProfilePage() {
  return <EditProfileForm />;
}
