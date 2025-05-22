import type { ReactNode } from 'react';
import Header from '../components/header';

function BodyLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default BodyLayout;