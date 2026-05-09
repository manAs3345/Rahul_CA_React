import React from 'react';
import { Helmet } from 'react-helmet';
import sd_seo_Data from './sd_seo_Data.json';

export function SEO({
    serviceName
}) {
    let title = sd_seo_Data[serviceName].title;
    let description = sd_seo_Data[serviceName].description;
    let keywords = sd_seo_Data[serviceName].keywords;
    let url = sd_seo_Data[serviceName].url;
    return (
        
        <Helmet>
            
            {/* Primary SEO */}
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                name="keywords"
                content={keywords}
            />

            <meta
                name="robots"
                content="index, follow"
            />

            {/* Canonical */}
            <link
                rel="canonical"
                href={url}
            />

            {/* Open Graph */}
            <meta property="og:type" content="website" />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:url"
                content={url}
            />

            <meta
                property="og:image"
                content="https://www.casomani.com/preview-image.png"
            />
        </Helmet>
    );
}