import ButtonElements from "../elements/ButtonElements";

export default function Banner() {
    return (
        <>
            <div className="w-1/2 h-full flex justify-center items-center">
                <div className="flex flex-col">
                    <div>
                        <p className="text-white text-6xl mr-10">Aplikasi Wirausaha Lengkap Kelola Bisnis Maju</p>
                        <p className="text-white text-md py-4">Satu aplikasi dengan fitur lengkap untuk semua jenis usaha</p>
                    </div>

                    <div>
                        <div className="flex flex-wrap gap-4 mr-28">
                            <p className="text-white text-sm bg-yellow-400 p-2 rounded-full">Kasir Online</p>
                            <p className="text-white text-sm bg-blue-400 p-2 rounded-full">Akuntansi</p>
                            <p className="text-white text-sm bg-[#ff94a4] p-2 rounded-full">Aplikasi CRM</p>
                            <p className="text-white text-sm bg-[#7064ac] p-2 rounded-full">Aplikasi Owner</p>
                            <p className="text-white text-sm bg-[#d8a44c] p-2 rounded-full">Karyawan</p>
                            <p className="text-white text-sm bg-[#7084a4] p-2 rounded-full">Inventori</p>
                            <p className="text-white text-sm bg-green-400 p-2 rounded-full">Analisa Bisnis</p>
                            <p className="text-white text-sm bg-red-400 p-2 rounded-full">Toko Online</p>
                        </div>
                    </div>

                    <div className="flex gap-4 py-10">
                        <ButtonElements
                            classname="w-36 h-10 p-2 bg-white text-[#47baab] border-2 border-green-400 text-sm rounded-xl"
                        >
                            Coba Sekarang
                        </ButtonElements>
                        <ButtonElements
                            classname="w-36 h-10 p-2 bg-[#20cc9c] border-2 border-white text-white text-sm rounded-xl"
                        >
                            Jadwalkan Demo
                        </ButtonElements>
                    </div>

                    <div>
                        <ButtonElements
                            classname="w-52 h-10 p-2 text-white border-2 border-white text-sm rounded-full"
                        >
                            Kenapa Harus Majoo?
                        </ButtonElements>
                    </div>
                </div>
            </div>

            <div className="w-1/2 h-full flex">
                <div className="flex justify-center items-center">
                    <img
                        src="https://portal-gcs-cdn.majoo.id/v2/pages/home/hero/hero-home-fnb2.jpg"
                        className="rounded-tl-[100px] rounded-bl-[50px] shadow-lg shadow-yellow-300"
                    />
                </div>
            </div>
        </>
    )
}   