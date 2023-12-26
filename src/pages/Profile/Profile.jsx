import EditForm from '../../components/EditForm/EditFrom';

function Profile({ onLogout, onSubmit, successMessage, isSuccess }) {
  return (
    <>
      <EditForm
        onLogout={onLogout}
        onSubmit={onSubmit}
        successMessage={successMessage}
        isSuccess={isSuccess}
      />
    </>
  );
}

export default Profile;
