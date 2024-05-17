import React from 'react';
import coin from '../../assets/dashboardAssets/Coins-rafiki.png'
import { useGetStatusQuery } from '../../redux/features/getStatusApi';
import Loading from '../Loading/Loading';

const TotalEarningSection = () => {
    const {data,isError,isLoading,isSuccess} = useGetStatusQuery();
    if(isLoading){
        return <Loading/>
    }
    function formatToK(number) {
        return (number / 1000).toFixed(2) + 'k';
    }
    return (
        <div className='flex justify-between items-center bg-white p-[32px] rounded-lg'>
            <div className=''>
                <h1 className='text-[24px]'>Total Earnings</h1>
                <h1 className='text-[44px] font-medium text-[#3BA6F6]'>${formatToK(data?.total) === 'NaNk' ? 0 : formatToK(data?.total)}</h1>
            </div>
            <div>
                <img src={coin} alt="" />
            </div>
        </div>
    );
}

export default TotalEarningSection;
