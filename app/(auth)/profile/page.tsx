"use client"

import { useSession } from "../login/_components/sessionProvider";

export const Profile = () => {
  const { user, loading } = useSession();

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Profil de {user?.firstName} {user?.lastName}</h1>
      <p>Email : {user?.email}</p>
      <p>Role : {user?.role}</p>
      {/* Autres informations utilisateur */}
    </div>
  );
}

export default Profile