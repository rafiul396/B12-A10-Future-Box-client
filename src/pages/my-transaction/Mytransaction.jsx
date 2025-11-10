import React from 'react';
import Container from '../../components/layout/Container';
import Transactioncard from './Transactioncard';

const arr = [1, 2, 3, 4, 5, 6]

const Mytransaction = () => {
    return (
        <section className='bg-[#f5f5f5] py-10 min-h-screen'>
            <Container>
                <h2 className='font-semibold text-lg lg:text-3xl mb-8 text-center'>My <span className='text-primary'>Transactions</span></h2>
                <div className='grid px-5 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        arr.map(card => <Transactioncard />)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Mytransaction;