import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isScroll, setIsScroll] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;
            setIsScroll(!isVisible);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <>
            <div className={`w-full h-16 flex px-52 fixed ${isScroll ? 'bg-white text-black' : 'bg-[#47baab] text-white'}`}>
                <div className="flex justify-center items-center">
                    <img src="https://portal-gcs-cdn.majoo.id/v2/logo/main-logo-hires.png" className={`${isScroll ? null : 'filter brightness-0 invert'}`} alt="" />
                </div>

                <div className="w-1/3 flex justify-center items-center gap-16 ml-40 text-sm ">
                    <Link to={''}>Product</Link>
                    <Link to={''}>Layanan</Link>
                    <Link to={''}>Solusi Bisnis</Link>
                    <Link to={''}>Harga</Link>
                    <Link to={''}>Support</Link>
                </div>

                <div className="w-1/3 flex justify-end items-center gap-10 ml-40 text-white text-sm">
                    <Link to={''} className={`${isScroll ? 'text-black' : 'text-white'}`}>Login</Link>
                    <Link to={''} className={`${isScroll ? 'bg-[#47baab] text-white' : 'bg-white text-[#47baab]'} px-4 py-2 rounded`}>Coba Gratis</Link>
                </div>
            </div>
        </>
    )
}