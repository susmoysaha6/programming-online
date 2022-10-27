import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 mt-12 mb-24 md:mb-96">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto  md:p-8">
                    <h2 className="text-2xl font-semibold text-center  sm:text-4xl mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg" open="">
                            <summary className="px-4 py-6 focus:outline-none text-2xl focus-visible:ring-sky-400">What are the payment method to purchase course from programming online?</summary>
                            <p className="px-4 text-xl py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">You can pay via any kind of debit or credit card. You can use any kind of online payment channel </p>
                        </details>
                        <details className="w-full border rounded-lg" open="">
                            <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-sky-400">How many days will I get access for premium access?</summary>
                            <p className="px-4 py-6 pt-0 text-xl ml-4 -mt-4 dark:text-gray-400">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                        </details>
                        <details className="w-full border rounded-lg" open="">
                            <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-sky-400">Will updated content available for premium access?</summary>
                            <p className="px-4 py-6 pt-0 text-xl ml-4 -mt-4 dark:text-gray-400">We updated our content on technology changes. And make it available for all of our premium users.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;