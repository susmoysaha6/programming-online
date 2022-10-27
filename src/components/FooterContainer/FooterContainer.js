import React from 'react';
import { FaFacebook, FaFacebookMessenger, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

import po from '../../assets/po.png'

const FooterContainer = () => {
    return (
        <footer className='mt-10  text-slate-800 shadow-2xl py-5 bg-slate-200 dark:bg-sky-400 '>
            <img width={50} className='mx-auto my-5' src={po} alt="" />
            <h3 className='text-center text-2xl font-bold'>Programming Online</h3>
            <p className='text-center my-2 text-xl font-semibold'>Contact Us:</p>
            <div className='flex justify-evenly md:w-1/2 lg:w-1/3 mx-auto text-xl
            font-bol'>
                <FaFacebook />
                <FaFacebookMessenger />
                <FaWhatsapp />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />
                <FaGoogle />
            </div>
            <p className='text-center mt-2 py-2'>Copyright @ 2022</p>
        </footer>
    );
};

export default FooterContainer;