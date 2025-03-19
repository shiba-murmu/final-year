import React from 'react'

function UserProfile() {
  return (
    <> 
        <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
          <img src="https://picsum.photos/200" className="rounded-full w-24 h-24 mb-4" alt="Profile Picture" />
          <h1 className="text-2xl font-bold mb-4">Shiba Murmu</h1>
          <p className="text-gray-600 mb-4">This is your profile page. You can see your name, email and other details here.</p>
          <div className="flex flex-row space-x-4">
            <p className="text-gray-600">Name:</p>
            <p className="font-bold">Shiba Murmu</p>
          </div>
          <div className="flex flex-row space-x-4">
            <p className="text-gray-600">Email:</p>
              <p className="font-bold">shibamurmu001@gmail.com</p>
          </div>
        </div>
    </>
  )
}

export default UserProfile