import React from 'react';
import Footer from './footer';
import { EuiPageTemplate, EuiEmptyPrompt } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';

const Page = ({ children }) => {
    return (
        <EuiPageTemplate
            pageHeader={{
                pageTitle: 'Wanderlust',
                description: 'Where to travel next?',
            }}>
            <EuiEmptyPrompt title={<span>Country List</span>} body={children} />
            <Footer />
        </EuiPageTemplate>
    );
};

export default Page;