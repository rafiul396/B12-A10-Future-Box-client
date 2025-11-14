import React from 'react';
import Container from '../layout/Container';
import logo from '../../assets/logo1.png'
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookF, FaGithub, FaSquareInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='bg-info'>
            <Container>
                <div className="footer sm:footer-horizontal text-base-content p-10">
                    <nav className='space-y-3'>
                        <div>
                            <a className="text-xl cursor-pointer" title="Home" href="/">
                                <img className='w-[150px]' src={logo} alt="" />
                            </a>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Bank Town</h3>
                            <p className='text-secondary'>Savar, Dhaka (DHA).</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <AiOutlineMail className='text-xl' /><span className="hover:text-secondary cursor-pointer text-lg">skilliy@firebase.com</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaPhoneAlt className='text-xl' /><span className="hover:text-secondary cursor-pointer text-lg">+8801234567809</span>
                        </div>
                        <div className='flex gap-3'>
                            <a className="hover:text-secondary cursor-pointer text-2xl">
                                <FaGithub />
                            </a>
                            <a className="hover:text-secondary cursor-pointer text-2xl">
                                <FaFacebookF />
                            </a>
                            <a className="hover:text-secondary cursor-pointer text-2xl">
                                <FaSquareInstagram />
                            </a>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Category</h6>
                        <a className="hover:text-secondary cursor-pointer">Music</a>
                        <a className="hover:text-secondary cursor-pointer">Language</a>
                        <a className="hover:text-secondary cursor-pointer">Technology</a>
                        <a className="hover:text-secondary cursor-pointer">Art</a>
                        <a className="hover:text-secondary cursor-pointer">Health & Wellness</a>
                        <a className="hover:text-secondary cursor-pointer">Cooking</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="hover:text-secondary cursor-pointer">Privacy Policy</a>
                        <a className="hover:text-secondary cursor-pointer">Discussion</a>
                        <a className="hover:text-secondary cursor-pointer">Terms & Conditions</a>
                        <a className="hover:text-secondary cursor-pointer">Customer Support</a>
                        <a className="hover:text-secondary cursor-pointer">Course FAQ’s</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Subscribe</h6>
                        <fieldset className="w-80">
                            <label>Enter your email address</label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Email here"
                                    className="input input-bordered join-item" />
                                <button className="btn bg-[#309256d9] text-primary hover:bg-secondary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="border border-accent"></div>
                <div className='text-center py-5'>
                    <h2 className='font-semibold'>&copy; 2025 finease.web | All rights reserved.</h2>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;