import React from 'react';  
import { useForm } from 'react-hook-form';  
import Codeditor from './Codeditor';
const SaveForm = () => {  
  const { register, handleSubmit, errors } = useForm();  
  
  const onSubmit = async (data) => {  
   // Add your form submission logic here  
   console.log(data);  
  };  
  
  return (  
   <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded shadow-md">  
    <label className="block mb-4">  
      <span className="text-gray-700">Title:</span>  
      <input  
       type="text"  
       {...register('title')}  
       className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  
      />  
 {/*      {errors.title && <div className="text-red-500 text-xs">{errors.title.message}</div>}   */}
    </label>  
    <label className="block mb-4">  
      <span className="text-gray-700">Context:</span>  
      <textarea  
       {...register('context')}  
       className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  
      />  
 {/*      {errors.context && <div className="text-red-500 text-xs">{errors.context.message}</div>}   */}
    </label>  
    <label className="block mb-4">  
      <span className="text-gray-700">Code:</span>  
      {/* Add your code editor component here */}  
      <Codeditor {...register('code')} />  
    </label>  
    <button  
      type="submit"  
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"  
    >  
      Submit  
    </button>  
   </form>  
  );  
};  
  
export default SaveForm;
