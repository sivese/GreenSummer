import type { ReactNode } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function BodyLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default BodyLayout;