

export default function BuyCard() {
    return (
        <div className='bg-slate-900 flex  items-start py-12'>
            <div className='flex flex-row justify-between p-24'>

                    <select name='test' className='w-64 h-9 border rounded-xl'>
                        <option value ="">select one</option>
                        <option value ="aaa">1 Month</option>
                        <option value ="aaa">2 Months</option>
                        <option value ="bbb">3 Months</option>
                        <option value ="ccc">4 Months</option>
                        <option value ="ddd">5 Months</option>
                    </select>
            </div>

        <div className='flex flex-col justify-center items-center p-24'>
            <button className='btn '>Rs.300/.</button>
        </div>
                    
            
        </div>
    
    )
}
