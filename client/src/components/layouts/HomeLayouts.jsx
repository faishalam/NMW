import ButtonElements from "../elements/ButtonElements";
import Banner from "../fragments/Banner";
import Card from "../fragments/Card";
import Navbar from "../fragments/Navbar";

export default function HomeLayout() {
    return (
        <>
            <div className="w-full h-screen">
                <div>
                    <Navbar />
                </div>

                <div className="bg-[#47baab] w-full h-5/6 flex px-52 justify-center items-center">
                    <Banner />
                </div>

                <div className="bg-[#f7faf2] ">
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-green-800 text-5xl font-semibold mt-24">Ragam Fitur Serba Otomatis</p>
                        <p className="text-black py-10">Kelola bisnis jadi lebih hemat biaya, hemat tenaga, dan hemat waktu</p>
                    </div>


                    <div className="flex gap-10 px-56">
                        <Card />
                    </div>


                </div>
            </div>
        </>
    )
}