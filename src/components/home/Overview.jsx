import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Container from '../layout/Container';
import Loader from '../../loader/Loader';
import StatCard from './hero-section/StatCard';

const Overview = () => {
    const { user } = use(AuthContext)
    const [infos, setInfos] = useState([])
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        if (!user) return;

        fetch(`https://finease-lyart.vercel.app/my-transaction?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(result => result.json())
            .then(data => {
                setInfos(data)
                setLoader(false)
            })
    }, [user])





    if (loader) {
        return <Loader />
    }


    const incomeData = infos.filter(info => info.type === 'Income');
    const totalIncome = incomeData.reduce((acc, item) => acc + Number(item.amount), 0)
    

    const expensData = infos.filter(info => info.type === 'Expense');
    const totalExpense = expensData.reduce((acc, item) => acc + Number(item.amount), 0)


    return (
        <section className='py-20 bg-neutral'>
            <h2 className='font-semibold text-lg lg:text-3xl mb-8 text-center'><span className='text-primary'>Overview</span></h2>
            <Container>
                <div className='flex flex-col md:flex-row justify-center items-center shadow-sm p-10 xl:px-52 rounded-xl bg-base-100 relative overflow-hidden'>
                    <div className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] bg-accent rounded-full absolute -top-12 -left-16 lg:-top-16 lg:-left-28 '></div>
                    <div className='w-[170px] h-[40px] bg-accent rounded-2xl absolute -right-5 -bottom-5'></div>
                    <div className='justify-center items-center flex-col space-y-4 hidden lg:flex'>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

                        <StatCard
                            title="Total Income"
                            amount={totalIncome}
                            change={totalIncome ? (totalExpense === totalIncome ? "Your income is equal to your expense." : (totalIncome > totalExpense ? "Great! You're earning more than you're spending." : "Warning: Your earning is lesser than your income.")) : "No income data found yet!"}
                            changeColor="text-green-500"
                        />

                        <StatCard
                            title="Total Expense"
                            amount={totalExpense}
                            change={totalExpense ? (totalExpense === totalIncome ? "Your expense is equal to your income." : (totalIncome < totalExpense ? "Warning: Your expense is higher than your income." : "Great! You're earning more than you're spending.")) : "No expense data found yet!"}
                            changeColor="text-orange-500"
                        />

                        <StatCard
                            title="Total Savings"
                            amount={(totalIncome - totalExpense) <= 0 ? 0 : (totalIncome - totalExpense)}
                            change={(totalIncome - totalExpense) <= 0 ? "No savings. Try reducing some expenses." : "Good job! You have savings this month."}
                            changeColor="text-blue-500"
                        />

                    </div>

                </div>
        </Container>
        </section >
    );
};

export default Overview;

// import React, { use, useEffect, useState } from 'react';
// import { AuthContext } from '../../provider/AuthProvider';
// import Container from '../layout/Container';
// import Loader from '../../loader/Loader';

// const Overview = () => {
//     const { user } = use(AuthContext);

//     const [infos, setInfos] = useState([]);
//     const [loader, setLoader] = useState(true);

//     useEffect(() => {
//         if (!user) return;

//         fetch(`https://finease-lyart.vercel.app/my-transaction?email=${user.email}`, {
//             headers: {
//                 authorization: `Bearer ${user.accessToken}`
//             }
//         })
//             .then(result => result.json())
//             .then(data => {
//                 setInfos(data);
//                 setLoader(false);
//             });

//     }, [user]);

//     if (!user || loader) {
//         return <Loader />
//     }

//     return (
//         <section>
//             <Container>
//                 <h1>Total data : {infos.length}</h1>
//             </Container>
//         </section>
//     );
// };

// export default Overview;
