import type { ReactNode } from 'react';

function BodyLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex justify-center w-full">
            <div className="relative w-full max-w-5xl pt-8 mx-auto">
                {/* Main Content starts at 15% left */}
                <main className="relative ml-[3%] mr-[5%] mt-4 leading-loose">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default BodyLayout;