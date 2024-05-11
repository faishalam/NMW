export default function Card() {
    return (
        <>
            <div className="w-1/3 h-[400px] border-2 border-[#47baab] rounded-lg relative">
                <img src="https://portal-gcs-cdn.majoo.id/v2/retina/img-retina-kelola-transaksi.jpg" className="w-full object-cover h-3/4 rounded-lg" />

                <div className="w-full h-1/4 bg-white rounded-t-xl">
                    <p className="text-lg">Catat dan Kelola Semua Transaksi dari Satu Aplikasi</p>
                    <p className="text-sm">Maksimalkan keuntungan dengan pengelolaan penjualan, keuangan, dan inventori.</p>
                </div>
            </div>


            <div className="w-1/3 h-[400px] bg-black">
                <p>card</p>
            </div>
            <div className="w-1/3 h-[400px] bg-black">
                <p>card</p>
            </div>
        </>
    )
}