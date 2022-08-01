
import Header from '../Header'
import Input from '../Input'
import { useForm } from 'react-hook-form';

export default function Rqst() {

    const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <div>
        <Header/>
        <div className='bg-black w-screen h-screen text-white p-32'>
            <div className='bg-gray-900 border rounded-xl w-96 flex flex-col justify-center items-center p-12'>
            <h1 className='text-xl'>Request a Book</h1>
            <h1>Book Name</h1>
            <Input label='Book Name' type='text' htmlFor='Bname' register={register} error={errors.Bname}/>
            Author Name
            <Input label='Author Name' type='text' htmlFor='Aname'register={register} error={errors.Aname}/>
            
            <button className='btn'>Submit</button>
            </div>          
        </div>
    </div>
  )
}

//s