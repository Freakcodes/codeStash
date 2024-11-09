import React from 'react';
import { useForm } from 'react-hook-form';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Signup Data:', data);
    // Handle signup logic here
  };

  return (
    <div className="mt-2" >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold text-center text-teal-600 mb-6">Sign Up</h2>
        
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
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="name"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your email"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
