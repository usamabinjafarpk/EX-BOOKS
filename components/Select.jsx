import { BsChevronDown } from "react-icons/bs";

export default function Select({label, name, register, error}){

  const values = name == 'gender' 
  ? ['Male','Female'] 
  : ['Kasargode','Kannur','Wayanad','Kozhikode','Malappuram','Trissur','Eranakulam','Idukki','Alappuzha'
    ,'Kottayam','Pathanamthitta','Kollam','Thiruvananthapuram']

  return(
    <div className="flex items-center space-x-2 relative ">
        <select {...register(name, { required: 'This field is required' })}
            className='bg-white outline-none border border-white text-black
            rounded-xl px-3 w-52 h-11 focus:border-blue-600'
            defaultValue={label}>

            <option value={label} hidden disabled >{label}</option>
            {values?.map((item)=> 
                <option key={item} value={item} >{item}</option>
            )}
        </select>
        <BsChevronDown className='w-4 h-4 absolute right-3 text-white'/>
    </div>
  )
}