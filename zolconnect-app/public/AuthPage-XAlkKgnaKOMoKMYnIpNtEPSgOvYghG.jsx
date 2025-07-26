import { useState } from 'react';

export default function AuthPages() {
  const [mode, setMode] = useState('signin'); // 'signin' | 'signup' | 'verify'

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        {mode === 'signin' && (
          <>
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <input type="email" placeholder="Email" className="w-full border p-2 mb-4 rounded" />
            <input type="password" placeholder="Password" className="w-full border p-2 mb-4 rounded" />
            <button className="w-full bg-green-600 text-white py-2 rounded">Sign In</button>
            <p className="text-sm mt-4 text-center">
              Don't have an account?{' '}
              <button className="text-green-700 underline" onClick={() => setMode('signup')}>Sign Up</button>
            </p>
          </>
        )}

        {mode === 'signup' && (
          <>
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <input type="text" placeholder="Full Name" className="w-full border p-2 mb-4 rounded" />
            <input type="email" placeholder="Email" className="w-full border p-2 mb-4 rounded" />
            <input type="password" placeholder="Password" className="w-full border p-2 mb-4 rounded" />
            <button className="w-full bg-green-600 text-white py-2 rounded">Register</button>
            <p className="text-sm mt-4 text-center">
              Already have an account?{' '}
              <button className="text-green-700 underline" onClick={() => setMode('signin')}>Sign In</button>
            </p>
          </>
        )}

        {mode === 'verify' && (
          <>
            <h1 className="text-2xl font-bold mb-4">Verify Your Email</h1>
            <p className="text-sm mb-4">We sent a code to your email. Please enter it below.</p>
            <input type="text" placeholder="6-digit code" className="w-full border p-2 mb-4 rounded" />
            <button className="w-full bg-green-600 text-white py-2 rounded">Verify</button>
            <p className="text-sm mt-4 text-center">
              Didn't receive it? <button className="text-green-700 underline">Resend Code</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
