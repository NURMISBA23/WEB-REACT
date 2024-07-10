import { faBath, faBed, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

    const properties = [
    {
        type: "Kantor",
        title: "Dijual Segera Tanah dan Bangunan Eks kantor",
        price: "Rp 47.000.000.000",
        imgSrc: "images/properties/1.png",
        beds: 3,
        baths: 5,
        location: "Rappocini, Makassar Kota, Sulawesi Selatan",
        link: "https://www.olx.co.id/item/dijual-segera-tanah-dan-bangunan-eks-kantor-iid-921849977"
    },
    {
      type: "Apartement",
      title: "Rumah di kontrakkan per. Tahun",
      price: "Rp 23.000.000",
      imgSrc: "images/properties/2.png",
      beds: 3,
      baths: 2,
      location: "Makassar, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/rumah-di-kontrakkan-per-tahun-iid-921993454"
    },
    {
      type: "Kost",
      title: "Kost Eksekutif FIDIYAH Pettarani 2",
      price: "Rp 800.000",
      imgSrc: "images/properties/3.png",
      beds: 3,
      baths: 2,
      location: "Panakkukang, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/kost-eksekutif-fidiyah-pettarani-2-iid-854108885"
    },
    {
      type: "Apartement",
      title: "Dijual Cepat Rumah dekat kampus UNM Jl.Dg Tata",
      price: "Rp 590.000.000",
      imgSrc: "images/properties/4.png",
      beds: 3,
      baths: 2,
      location: "Tamalate, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/dijual-cepat-rumah-dekat-kampus-unm-jldg-tata-iid-900631754"
    },
    {
      type: "Ruko",
      title: "Gudang JUAL SEWA cocok untuk Hasil Bumi dan Espedisi Jemuran luas",
      price: "Rp 75.000.000",
      imgSrc: "images/properties/5.png",
      beds: 3,
      baths: 2,
      location: "Makassar, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/gudang-jual-sewa-cocok-untuk-hasil-bumi-dan-espedisi-jemuran-luasss-iid-896324477"
    },
    {
      type: "Gudang",
      title: "Gudang baru siap pakai sudah ada office jembatang timbang 24 jam",
      price: "Rp 1.978.000.000",
      imgSrc: "images/properties/6.png",
      beds: 3,
      baths: 2,
      location: "Makassar, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/gudang-baru-siap-pakai-sudah-ada-office-jembatang-timbang-24-jam-iid-896227434"
    },
    {
      type: "Ruko",
      title: "Jual Gudang Cocok untuk ekspedisi sudah sertifikat SHM unit siap pakai",
      price: "Rp 761.000.000",
      imgSrc: "images/properties/7.png",
      beds: 3,
      baths: 2,
      location: "Makassar, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/jual-gudang-cocok-untuk-ekspedisi-sudah-sertifikat-shm-unit-siap-pakai-iid-899168037"
    },
    {
      type: "Rumah",
      title: "Jual Rumah Mewah Lokasi Strategis Pusat Kota",
      price: "Rp 2.750.000.000",
      imgSrc: "images/properties/8.png",
      beds: 5,
      baths: 6,
      location: "Tamalate, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/jual-rumah-mewah-lokasi-strategis-pusat-kota-iid-922022342"
    },
    {
      type: "Rumah",
      title: "Rumah Baru 2 Lantai di Pusat Kota",
      price: "Rp 889.000.000",
      imgSrc: "images/properties/9.png",
      beds: 5,
      baths: 6,
      location: "Tamalate, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/rumah-baru-2-lantai-di-pusat-kota-iid-921012393"
    },
    {
      type: "Rumah",
      title: "Butuh dana cepat,dijual rumah tengah kota",
      price: "Rp 18.500.000.000",
      imgSrc: "images/properties/10.png",
      beds: 5,
      baths: 6,
      location: "Panakkukang, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/butuh-dana-cepatdijual-rumah-tengah-kota-iid-921469260"
    },
    {
      type: "Rumah",
      title: "Butuh dana cepat,dijual rumah tengah kota",
      price: "Rp 18.500.000.000",
      imgSrc: "images/properties/11.png",
      beds: 5,
      baths: 6,
      location: "Panakkukang, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/butuh-dana-cepatdijual-rumah-tengah-kota-iid-921469260"
    },
    {
      type: "Apartemen",
      title: "Rumah Baru Siap Huni Antang Makassar",
      price: "Rp 450.000.000",
      imgSrc: "images/properties/12.png",
      beds: 5,
      baths: 6,
      location: "Panakkukang, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/butuh-dana-cepatdijual-rumah-tengah-kota-iid-921469260"
    },
    ];

    const RecentsHome = () => {
    console.log(properties);

    return (
        <>
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
                Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {Array.isArray(properties) && properties.map((property, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md relative">
                    <img
                    src={property.imgSrc}
                    alt={property.title}
                    className="object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                    <div className="text-left md:text-center lg:text-left mb-6">
                        <div className="text-gray-600">{property.type}</div>
                        <h3 className="text-xl font-bold text-black">{property.title}</h3>
                    </div>
                    <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                        {property.price}
                    </h3>

                    <div className="flex justify-center gap-4 text-gray-500 mb-4">
                        <p>
                        <FontAwesomeIcon icon={faBed} size="sm" className="h-4" /> {property.beds}
                        <span className="md:hidden lg:inline"> Beds</span>
                        </p>
                        <p>
                        <FontAwesomeIcon icon={faBath} size="sm" className="h-4" /> {property.baths}
                        <span className="md:hidden lg:inline"> Baths</span>
                        </p>
                    </div>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                        <FontAwesomeIcon icon={faLocationDot} className="h-4 text-orange-700" />
                        <span className="text-orange-700">{property.location}</span>
                        </div>
                        <a
                        href={property.link}
                        className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                        >
                        Details
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
        </>
    );
    }

    export default RecentsHome;
