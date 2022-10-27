import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (
        <div className='my-20'>
            <h2 className='text-3xl font-bold text-center my-5 text-slate-600 dark:text-sky-400'>The Blog Section</h2>
            <h4 className='text-2xl font-semibold text-center my-5 text-slate-600 dark:text-sky-400'>Publish by expart</h4>
            <Accordion alwaysOpen={true} className='md:w-3/4 lg:w-1/2 mx-auto text-xl font font-semibold mt-12 mb-96 ' >
                <Accordion.Panel>
                    <Accordion.Title>
                        1. What is `cors`?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                            CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        2. Why are you using `firebase`? What other options do you have to implement authentication?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        </p>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">Other option that we have to implement Authentication:</p>
                        <ul className="mb-2 text-gray-700 dark:text-gray-400 px-10">
                            <li>Okta</li>
                            <li>Ory</li>
                            <li>Supabase</li>
                            <li>STYTCH</li>
                            <li>Authress</li>
                            <li>PingIdentity</li>
                            <li>Keycloak</li>
                            <li>Frontegg</li>
                            <li>Amazon Cognito</li>
                            <li>Auth0</li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        3.  How does the private route work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        4. What is Node? How does Node work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009.

                        </p>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                            <span className='text-sky-600 dark:text-sky-400'>
                                Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”. Node JS Web Server internally has a Component, known as “Event Loop.
                                It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire.
                            </span>
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;