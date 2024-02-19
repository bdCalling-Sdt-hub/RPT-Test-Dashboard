import React from 'react';
import Status from '../../components/Shared/Status';
import BarChartIncomeRatio from './chart/BarChartIncomeRatio';
import GenderRatio from './chart/GenderRatio';
import RecentAppointments from '../../components/RecentAppointments/RecentAppointments';

const DashboardPage = () => {
    return (
        <div>
            <div className='ml-[24px]'>
                <Status/>
            </div>
            <div className='ml-[24px] flex gap-[16px]'>
                <BarChartIncomeRatio/>
                <GenderRatio/>
                
            </div>
            <div className='ml-[24px] '>
                <h1 className='my-[22px] text-[20px] font-medium'>Recent Appointments</h1>
               <RecentAppointments/>
            </div>
        </div>
    );
}

export default DashboardPage;
