import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center mt-4" >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold text-center text-teal-600 mb-6">Log In</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
            })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
