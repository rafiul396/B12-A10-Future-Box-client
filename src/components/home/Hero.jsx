import React from 'react';
import banner from '../../assets/hero-banner.png'
import ReportCard from './hero-section/ReportCard';
import StatCard from './hero-section/StatCard';
import leftChart from '../../assets/report2.png'
import rightChart from '../../assets/report1.png'
import { Link } from 'react-router';

const Hero = () => {
    return (
        <section className="h-[calc(100vh-66.73px)] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className='bg-gradient-to-b from-accent to-[#ff690000] h-full w-full py-32'>
                <div className="w-full py-20 px-6 lg:px-20 flex flex-col items-center text-center relative">
                    <h1 className="text-3xl xl:text-5xl font-bold leading-tight max-w-3xl">
                        Take control of your money, <br /> one smart step at a time
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-xl text-base">
                        No complications, just a smarter way to manage your money — Make peace with your money and watch your goals breathe easier.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <Link to="/signup" className="bg-primary font-semibold text-white text-sm px-5 py-4 rounded-full hover:bg-primary transition">
                            Get Started
                        </Link>
                    </div>


                    <div className="absolute -left-64 top-10 rotate-[8deg] hidden lg:block">
                        <ReportCard image={leftChart} />
                    </div>

                    <div className="absolute -right-72 top-10 rotate-[-8deg] hidden lg:block">
                        <ReportCard image={rightChart} />
                    </div>


                    <div className="hidden  md:grid grid-cols-3 gap-6 mt-14">

                        <StatCard
                            title="Total Income"
                            amount="18,532"
                            change="+11%"
                            changeColor="text-green-500"
                        />

                        <StatCard
                            title="Total Expense"
                            amount="3,177"
                            change="+11%"
                            changeColor="text-orange-500"
                        />

                        <StatCard
                            title="Total Savings"
                            amount="1658"
                            change="+8%"
                            changeColor="text-blue-500"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;