import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>R V Somani & Co. - Trusted Chartered Accountants</title>
                <meta
                    name="description"
                    content="R V Somani & Co. provides expert Chartered Accountancy, taxation, audit, accounting, and business advisory services for businesses and individuals across India, UAE, UK, and the USA."
                />
                <meta
                    name="keywords"
                    content="CA India, 
                    Chartered Accountant India,
                    Ca firm India,
                    International CA services,
                    International Chartered Accountant services,
                    Accounting services UAE,
                    Business advisory UK,
                    Audit and assurance USA,
                    Tax consultants India,
                    FInancial advisory services,
                    Accounting and filing services,
                    GST filing India.
                    Corporate tax consultants,
                    International business accounting,
                    Affordable Chartered Accountant services,
                    "
                />
                <meta name="author" content="R V Somani & Co." />

                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href="https://casomani.com/"
                />
                <meta
                    property="og:title"
                    content="R V Somani & Co. | Global Affordable Chartered Accountancy Services"
                />
                <meta
                    property="og:description"
                    content="Trusted Chartered Accountancy, taxation, audit, accounting, and advisory services across India, UAE, UK, and the USA."
                />
                <meta
                    property="og:type"
                    content="website"
                />
                <meta
                    property="og:url"
                    content="https://yourdomain.com/"
                />
                <meta
                    property="og:image"
                    content="https://yourdomain.com/preview-image.jpg"
                />


    </Helmet>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
