import React from 'react';
import coin from '../../assets/dashboardAssets/Coins-rafiki.png'

const TotalEarningSection = () => {
    return (
        <div className='flex justify-between items-center bg-white p-[32px] rounded-lg'>
            <div className=''>
                <h1 className='text-[24px]'>Total Earnings</h1>
                <h1 className='text-[44px] font-medium text-[#3BA6F6]'>$146.36K</h1>
            </div>
            <div>
                <img src={coin} alt="" />
            </div>
        </div>
    );
}

export default TotalEarningSection;
