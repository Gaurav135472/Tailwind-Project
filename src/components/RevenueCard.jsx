export const RevenueCard = ({
    title,
    amount,
    orderCount
}) => {

    return(
        <div className="bg-white rounded rounded shadow-md p-4">
            <div className="text-gray-700 flex">
               <div className="p-2">
                 {title}
                </div>
                <div className="pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M10 9.84615C10 8.82655 10.8954 8 12 8C13.1046 8 14 8.82655 14 9.84615C14 10.2137 13.8837 10.5561 13.6831 10.8438C13.0854 11.7012 12 12.5189 12 13.5385V14" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12 16.5H12.009" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
            
            </div>

            <div className="flex justify-between">
                <div className="font-semibold text-2xl">
                    $ {amount}
                </div>

                <div className="text-blue-700">
                    {orderCount ? <div className="flex cursor-pointer underline font-medium"> {orderCount} order(s) <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>  </div> : null }
                </div>
            </div>
            
        </div>
    )

}