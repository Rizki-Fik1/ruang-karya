import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    instansi: '',
    verifikasiPassword: '',
    tanggalLahir: '',
    alamat: '',
    kartuPelajar: null
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e) => {
    setFormData({
      ...formData,
      kartuPelajar: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    navigate('/verification/step-2');
  };

  return (
    <div className="w-full">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
        Verifikasi <span className="text-blue-600">Identitas.</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-2 sm:space-y-3">
            {/* Username */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                Username:
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  placeholder="Masukkan Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-1.5 sm:py-2 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-xs sm:text-sm"
                />
                <div className="absolute right-2 sm:right-3 top-2 sm:top-2.5">
                  <svg width="12" height="12" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Instansi/Sekolah */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                Instansi/Sekolah:
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="instansi"
                  placeholder="Masukkan Nama Instansi"
                  value={formData.instansi}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-1.5 sm:py-2 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-xs sm:text-sm"
                />
                <div className="absolute right-2 sm:right-3 top-2 sm:top-3.5">
                  <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21H21M5 21V7L12 3L19 7V21M9 9H15M9 13H15M9 17H15" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Tanggal Lahir */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                Tanggal Lahir:
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="tanggalLahir"
                  placeholder="DD / MM / YY"
                  value={formData.tanggalLahir}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-1.5 sm:py-2 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-xs sm:text-sm"
                />
                <div className="absolute right-2 sm:right-3 top-2 sm:top-3.5">
                  <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#9CA3AF" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="#9CA3AF" strokeWidth="2"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="#9CA3AF" strokeWidth="2"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="#9CA3AF" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Alamat Tinggal */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                Alamat Tinggal:
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="alamat"
                  placeholder="Masukkan Alamat"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-1.5 sm:py-2 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-xs sm:text-sm"
                />
                <div className="absolute right-2 sm:right-3 top-2 sm:top-3.5">
                  <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#9CA3AF" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="#9CA3AF" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1 sm:mt-2">
                * Pastikan informasi yang kamu input cocok dan sesuai.
              </div>
            </div>
          </div>

          {/* Column 2: Password, Verifikasi Password, Kartu Pelajar, Checkbox */}
          <div className="space-y-2 sm:space-y-4">
            {/* Password */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                Password:
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Masukkan Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-1.5 sm:py-2 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-xs sm:text-sm"
                />
                <div className="absolute right-2 sm:right-3 top-2 sm:top-3.5">
                  <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="#9CA3AF" strokeWidth="2"/>
                    <circle cx="12" cy="16" r="1" fill="#9CA3AF"/>
                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#9CA3AF" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Verifikasi Password */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                Verifikasi Password:
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="verifikasiPassword"
                  placeholder="Masukkan Ulang Password"
                  value={formData.verifikasiPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-1.5 sm:py-2 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-xs sm:text-sm"
                />
                <div className="absolute right-2 sm:right-3 top-2 sm:top-3.5">
                  <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="#9CA3AF" strokeWidth="2"/>
                    <circle cx="12" cy="16" r="1" fill="#9CA3AF"/>
                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#9CA3AF" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Kartu Pelajar */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                Kartu Pelajar:
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="kartuPelajar"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="kartu-pelajar"
                  accept="image/*"
                />
                <label
                  htmlFor="kartu-pelajar"
                  style={{ background: '#5370FF' }}
                  className="w-full px-3 sm:px-6 lg:px-10 py-1.5 sm:py-2 border border-gray-300 rounded-lg cursor-pointer text-white flex items-start justify-start space-x-1 sm:space-x-2"
                >
                  <img src="/src/assets/svg/upload.svg" alt="Upload" className="w-6 h-10 sm:w-8 sm:h-12 md:h-14 lg:h-14" />
                  <div className="text-start">
                    <div className="font-semibold text-xs sm:text-sm">Upload Kartu Pelajar</div>
                    <div className="text-xs sm:text-sm">Kamu Disini!</div>
                    <div className="text-xs opacity-75">File size max 5 MB</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Checkbox and Button */}
            <div className="space-y-2">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-3 h-3 sm:w-4 sm:h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="privacy" className="text-xs text-gray-600">
                  Saya telah menyetujui Kebijakan Privasi & Syarat Penggunaan RuangKarya.
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  style={{ background: '#5370FF' }}
                  className="text-white font-semibold px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm"
                >
                  Verifikasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step1;


