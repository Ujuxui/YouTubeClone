import React from 'react';
import { useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const CreateChannelDialog = ({ user, onCreate }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  }
  return (
    <div className="fixed inset-0 z-50 bg-gray-50 bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">How you'll appear</h2>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-3 flex items-center justify-center text-3xl text-gray-500">
          <AccountCircleOutlinedIcon sx={{fontSize:"40px"}}/>
          </div>
          <button className="text-blue-600 text-sm font-medium mb-4 hover:underline">
            Select picture
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              type="text"
              value={user.username}
              readOnly
              className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-gray-100"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Handle</label>
            <input
              type="text"
              value={`@${user.email.split('@')[0]}`}
              readOnly
              className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-gray-100"
            />
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4">
        By clicking Create Channel you agree to <span className='text-blue-600 hover:underline'>YouTube's Terms of Service</span>. Changes made to your name and
        profile picture are visible only on YouTube and not other Google services. <span className='text-blue-600 hover:underline'>Learn more.</span>
        </p>

        <div className="flex justify-end mt-6 space-x-6">
          <button onClick={handleClose} className="text-gray-600 hover:underline">Cancel</button>
          <button
            onClick={onCreate}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Create channel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateChannelDialog;
