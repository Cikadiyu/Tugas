
"use client";

export default function DiskonForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br text-black from-blue-50 via-white to-blue-100">
      <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl space-y-6">
        {/* Judul */}
        <h2 className="text-2xl font-extrabold text-center text-blue-600">
          Form Barang
        </h2>

        {/* Input Nama Barang */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Nama Barang
          </label>
          <input
            type="text"
            placeholder="Masukkan nama barang"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Input Kategori */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Kategori Barang
          </label>
          <input
            type="text"
            placeholder="Masukkan kategori barang"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Input Harga */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Harga</label>
          <input
            type="number"
            placeholder="Masukkan harga"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Input Diskon */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Diskon (%)</label>
          <input
            type="number"
            placeholder="Masukkan diskon"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Tombol */}
        <div className="flex justify-between mt-6">
          <button className="flex-1 mr-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition">
            Hitung
          </button>
          <button className="flex-1 ml-2 px-4 py-2 bg-gray-400 text-white font-semibold rounded-lg shadow hover:bg-gray-500 transition">
            Bersih
          </button>
        </div>

        {/* Contoh Hasil (statis) */}
        <div className="mt-8 text-center space-y-4">
          <h2 className="text-xl font-extrabold text-green-600">
            Hasil Perhitungan
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg text-left shadow-inner">
            <p><strong>Nama Barang:</strong> Contoh Barang</p>
            <p><strong>Kategori:</strong> Elektronik</p>
            <p><strong>Nilai Diskon:</strong> Rp 10.000</p>
            <p><strong>Total Harga:</strong> Rp 90.000</p>
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition">
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

