import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namaDepan: '',
    namaBelakang: '',
    email: '',
    nomorTelpon: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validasi
    console.log('Form data:', formData);

    //Navigasi 
    navigate('/verification');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-8 shadow-lg max-h-fit max-w-xxl w-full rounded-lg"
      style={{
        background: '#ECECEC', 
        }}>

      <div className="flex justify-between items-center mb-4">
        <h2 style={{ color: '#2B2B2B' }} className="text-md font-bold">RuangKarya.</h2>
        <div className="relative w-8 h-8 flex items-center justify-center">
          <img src="/src/assets/svg/Ellipse 20.svg" alt="Circle" className="w-12 h-12" />
          <img src="/src/assets/svg/mdi_hamburger-menu.svg" alt="Menu" className="w-6 h-6 absolute" />
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-3 text-center">
          Hi, <span style={{ color: '#5370FF' }}>Selamat Datang</span>
          <br />
          di RuangKarya!
        </h1>
        <p className="text-gray-600 text-xs text-center">
          Segera gabung sekarang dan tunjukkan karya
          <br />
          luar biasa kamu dari bangku sekolah.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Depan:
            </label>
            <input
              type="text"
              name="namaDepan"
              placeholder="Isi Nama Depan"
              value={formData.namaDepan}
              onChange={handleInputChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Belakang:
            </label>
            <input
              type="text"
              name="namaBelakang"
              placeholder="Isi Nama Belakang"
              value={formData.namaBelakang}
              onChange={handleInputChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address:
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Isi Alamat Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-10 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <img src="/src/assets/svg/mail.svg" alt="Email" className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nomor Telpon:
          </label>
          <div className="relative">
            <input
              type="tel"
              name="nomorTelpon"
              placeholder="Isi Nomor Telpon"
              value={formData.nomorTelpon}
              onChange={handleInputChange}
              className="w-full px-10 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <img src="/src/assets/svg/phone.svg" alt="Phone" className="w-4 h-4" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white py-2.5 rounded-lg font-semibold"
          style={{
            background: '#5370FF',
          }}
        >
          Daftar Akun!
        </button>
      </form>

      <p className="text-center text-xs text-gray-600 mt-4">
        Sudah Punya Akun? <span className="text-blue-600 cursor-pointer">Masuk Sekarang.</span>
      </p>
    </div>
  );
};

export default RegisterForm;





