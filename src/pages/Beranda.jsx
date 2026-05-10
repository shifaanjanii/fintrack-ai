import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Home, Receipt, PieChart as PieIcon, Target, BrainCircuit, 
  FileText, Settings, LogOut, Search, Bell, User, 
  CheckCircle2, ChevronRight, Laptop, Home as HomeIcon, ShoppingBag, PiggyBank, ScanLine, FileEdit
} from 'lucide-react';

// Data untuk Donut Chart (Disamakan Warnanya: Ungu, Hijau, Merah)
const dataAlokasi = [
  { name: 'Kebutuhan', value: 1200000, color: '#8B5CF6' }, // Ungu
  { name: 'Keinginan', value: 750000, color: '#10B981' },  // Hijau
  { name: 'Tabungan', value: 500000, color: '#EF4444' },   // Merah
];

// Custom Tooltip untuk Donut Chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100 font-poppins text-sm">
        <p className="font-semibold text-gray-800">{payload[0].name}</p>
        <p className="text-gray-600">Rp {payload[0].value.toLocaleString('id-ID')}</p>
      </div>
    );
  }
  return null;
};

export default function Beranda() {
  const navigate = useNavigate();

  // Animasi masuk halaman
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20 }
  };

  // Class untuk efek hover kartu terangkat (Glassmorphism + Hover)
  const cardHoverStyle = "bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer";

  return (
    <motion.div 
      className="flex h-screen bg-fintrack-bg font-poppins overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* 1. SIDEBAR */}
      <aside className="w-64 bg-white shadow-xl flex flex-col justify-between z-20">
        <div>
          <div className="p-6 flex justify-center items-center">
            {/* Ganti src dengan logo FinTrack AI kamu */}
            <img src="/assets/logo-fintrack.png" alt="FinTrack AI" className="h-12 object-contain" />
          </div>
          <nav className="mt-6 px-4 space-y-2">
            <button className="flex items-center w-full px-4 py-3 bg-indigo-50 text-indigo-600 rounded-xl font-semibold transition-all">
              <Home className="w-5 h-5 mr-3" /> Beranda
            </button>
            <button onClick={() => navigate('/transaksi')} className="flex items-center w-full px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-indigo-600 rounded-xl font-medium transition-all">
              <Receipt className="w-5 h-5 mr-3" /> Transaksi
            </button>
            <button onClick={() => navigate('/budget')} className="flex items-center w-full px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-indigo-600 rounded-xl font-medium transition-all">
              <PieIcon className="w-5 h-5 mr-3" /> Budget
            </button>
            <button onClick={() => navigate('/goals')} className="flex items-center w-full px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-indigo-600 rounded-xl font-medium transition-all">
              <Target className="w-5 h-5 mr-3" /> Goals
            </button>
            <button onClick={() => navigate('/ai')} className="flex items-center w-full px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-indigo-600 rounded-xl font-medium transition-all">
              <BrainCircuit className="w-5 h-5 mr-3" /> AI
            </button>
            <button className="flex items-center w-full px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-indigo-600 rounded-xl font-medium transition-all">
              <FileText className="w-5 h-5 mr-3" /> Laporan
            </button>
          </nav>
        </div>
        <div className="px-4 py-6 space-y-2 border-t border-gray-100">
          <button className="flex items-center w-full px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl font-medium transition-all">
            <Settings className="w-5 h-5 mr-3" /> Pengaturan
          </button>
          <button className="flex items-center w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-all">
            <LogOut className="w-5 h-5 mr-3" /> Logout
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto relative p-8">
        {/* Dekorasi Bola Holografik (Opsional) */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* HEADER */}
        <header className="flex justify-between items-center mb-8 relative z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800">Halo, Shifa Anjani ! 👋</h1>
            <div className="flex items-center bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
              <CheckCircle2 className="w-4 h-4 mr-1" /> Status : Hemat
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Cari..." className="pl-10 pr-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 w-64" />
            </div>
            <button className="p-2 bg-white rounded-xl shadow-sm hover:text-indigo-600 transition-colors"><Bell className="w-5 h-5 text-gray-500" /></button>
            <button className="p-2 bg-indigo-100 rounded-xl shadow-sm text-indigo-600 transition-colors"><User className="w-5 h-5" /></button>
          </div>
        </header>

        {/* HERO SECTION ROBOT */}
        <div className="mb-6 relative z-10 flex items-center">
           {/* Ganti dengan gambar Robot Finny aslimu */}
          <img src="/assets/finny-hero.png" alt="Finny AI" className="w-32 h-32 object-contain mr-4 drop-shadow-xl z-20" />
          <div className="bg-white px-6 py-4 rounded-t-2xl rounded-br-2xl rounded-bl-sm shadow-md border border-gray-100 ml-[-20px] z-10">
            <p className="text-gray-700 font-medium">Ayo kelola keuangan bulan <strong>Mei</strong> mu bersama<br/>Fintrack AI!</p>
          </div>
        </div>

        {/* DASHBOARD GRID */}
        <div className="grid grid-cols-12 gap-6 relative z-10">
          
          {/* KIRI: Ringkasan Keuangan (Klik ke /transaksi) */}
          <div className={`col-span-7 ${cardHoverStyle} p-6 flex flex-col`} onClick={() => navigate('/transaksi')}>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold text-gray-800">Ringkasan Keuangan</h2>
              <span className="text-xs text-indigo-400 font-medium bg-indigo-50 px-2 py-1 rounded-md">Catat Transaksi +</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Kondisi keuangan kamu hari ini terlihat <span className="text-green-500 font-medium">stabil</span></p>
            
            <div className="flex gap-4 mb-4">
              {/* Saldo */}
              <div className="flex-1 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 hover:bg-indigo-50 transition-colors">
                <div className="flex items-center text-indigo-500 mb-2"><Receipt className="w-4 h-4 mr-2"/> <span className="text-sm font-semibold">Total Saldo</span></div>
                <h3 className="text-xl font-bold text-indigo-900 mb-1">Rp 3.250.000</h3>
                <p className="text-xs text-gray-400">Sisa saldo yang bisa digunakan</p>
              </div>
              {/* Pemasukan */}
              <div className="flex-1 bg-green-50/50 p-4 rounded-xl border border-green-100 hover:bg-green-50 transition-colors">
                <div className="flex items-center text-green-500 mb-2"><Receipt className="w-4 h-4 mr-2"/> <span className="text-sm font-semibold">Pemasukan</span></div>
                <h3 className="text-xl font-bold text-green-600 mb-1">+ Rp 5.000.000</h3>
                <p className="text-xs text-gray-400">Total uang masuk bulan ini</p>
              </div>
              {/* Pengeluaran */}
              <div className="flex-1 bg-red-50/50 p-4 rounded-xl border border-red-100 hover:bg-red-50 transition-colors">
                <div className="flex items-center text-red-500 mb-2"><Receipt className="w-4 h-4 mr-2"/> <span className="text-sm font-semibold">Pengeluaran</span></div>
                <h3 className="text-xl font-bold text-red-600 mb-1">- Rp 1.750.000</h3>
                <p className="text-xs text-gray-400">Total uang keluar bulan ini</p>
              </div>
            </div>

            <div className="mt-auto bg-indigo-50 text-indigo-600 p-3 rounded-xl flex justify-between items-center group">
              <span className="text-sm font-medium">Pantau riwayat transaksimu setiap bulan!</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* KANAN ATAS: Alokasi Keuangan (Klik ke /budget) */}
          <div className={`col-span-5 ${cardHoverStyle} p-6`} onClick={() => navigate('/budget')}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Alokasi Keuangan <span className="text-xs font-normal text-gray-400">(50 - 30 - 20)</span></h2>
              <button className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Bulan Ini ⌄</button>
            </div>
            <div className="flex items-center">
              <div className="w-1/2 h-32 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={dataAlokasi} innerRadius={35} outerRadius={55} paddingAngle={5} dataKey="value" stroke="none">
                      {dataAlokasi.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                {/* Status Masih Aman Badge Tengah Grafik */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center border border-green-200">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Masih Aman
                </div>
              </div>
              <div className="w-1/2 pl-2 space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center text-xs font-semibold text-gray-700"><span className="w-2 h-2 rounded-full bg-fintrack-purple mr-2"></span>Kebutuhan (50%)</div>
                    <div className="text-[10px] text-gray-400 ml-4">45% Terpakai</div>
                  </div>
                  <span className="text-xs font-semibold">Rp 1.200.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center text-xs font-semibold text-gray-700"><span className="w-2 h-2 rounded-full bg-fintrack-green mr-2"></span>Keinginan (30%)</div>
                    <div className="text-[10px] text-gray-400 ml-4">25% Terpakai</div>
                  </div>
                  <span className="text-xs font-semibold">Rp 750.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center text-xs font-semibold text-gray-700"><span className="w-2 h-2 rounded-full bg-fintrack-red mr-2"></span>Tabungan (20%)</div>
                    <div className="text-[10px] text-gray-400 ml-4">10% Terpakai</div>
                  </div>
                  <span className="text-xs font-semibold">Rp 500.000</span>
                </div>
              </div>
            </div>
          </div>

          {/* KIRI BAWAH: Smart Budgeting (Klik ke /budget) */}
          <div className={`col-span-7 ${cardHoverStyle} p-6`} onClick={() => navigate('/budget')}>
             <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-800">Smart Budgeting</h2>
              <span className="text-xs text-indigo-400 font-medium border border-indigo-100 px-2 py-1 rounded-md hover:bg-indigo-50 transition">Detail Lengkap +</span>
            </div>
            
            <div className="space-y-6">
              {/* Kebutuhan (Ungu) */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-fintrack-purple text-white rounded-xl"><HomeIcon className="w-5 h-5"/></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-800">Kebutuhan (50%)</span>
                    <span className="text-sm font-semibold text-gray-800">Rp 1.200.000 / 1.500.000</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Makanan, Kos Kosan, dll</p>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-fintrack-purple h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-fintrack-purple w-16 text-right">80% Terpakai</span>
              </div>

              {/* Keinginan (Hijau) */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-fintrack-green text-white rounded-xl"><ShoppingBag className="w-5 h-5"/></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-800">Keinginan (30%)</span>
                    <span className="text-sm font-semibold text-gray-800">Rp 750.000 / 900.000</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Jajan, Nonton, dll</p>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-fintrack-green h-2 rounded-full" style={{width: '83%'}}></div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-fintrack-green w-16 text-right">83% Terpakai</span>
              </div>

              {/* Tabungan (Merah) */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-fintrack-red text-white rounded-xl"><PiggyBank className="w-5 h-5"/></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-800">Tabungan (20%)</span>
                    <span className="text-sm font-semibold text-gray-800">Rp 500.000 / 1.000.000</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Dana Darurat, Investasi, dll</p>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-fintrack-red h-2 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-fintrack-red w-16 text-right">50% Terpakai</span>
              </div>
            </div>
          </div>

          {/* KANAN BAWAH: Dipecah 3 Kartu */}
          <div className="col-span-5 flex flex-col gap-6">
            
            {/* Insight AI (Klik ke /ai) */}
            <div className={`flex-1 ${cardHoverStyle} p-5 relative overflow-hidden flex flex-col justify-between`} onClick={() => navigate('/ai')}>
              <h2 className="text-lg font-bold text-gray-800 mb-2 relative z-10">Insight AI</h2>
              <div className="bg-indigo-50/70 p-3 rounded-xl border border-indigo-100 relative z-10 w-3/4">
                <p className="text-xs text-gray-700 leading-relaxed">
                  Shifa, Pengeluaran kamu di kategori <strong>"Keinginan"</strong> hampir mencapai batas.<br/><br/>
                  Coba tahan dulu ya, biar tabungan tetap aman.
                </p>
              </div>
              {/* Ganti dengan robot bawa laptop */}
              <img src="/assets/finny-laptop.png" alt="Finny AI" className="absolute bottom-2 right-2 w-24 h-24 object-contain drop-shadow-md z-0" />
              
              <div className="mt-3 flex justify-between items-center group relative z-10 cursor-pointer">
                <div>
                  <h4 className="text-xs font-bold text-gray-800">Tips hari ini</h4>
                  <p className="text-[10px] text-gray-500">Catat setiap pengeluaran kecilmu, bisa bantu kamu lebih hemat!</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
              </div>
            </div>

            {/* Quick Action & Goals (Sejajar horizontal) */}
            <div className="flex gap-4">
              
              {/* Quick Action (Klik ke /transaksi) */}
              <div className={`w-1/2 flex flex-col justify-between p-4 ${cardHoverStyle}`} onClick={() => navigate('/transaksi')}>
                <h2 className="text-sm font-bold text-gray-800 mb-3">Quick Action</h2>
                <div className="flex gap-2">
                  <div className="flex-1 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-xl p-3 flex flex-col items-center justify-center transition-colors">
                    <FileEdit className="w-5 h-5 mb-1"/>
                    <span className="text-[10px] font-semibold text-center leading-tight">Catat<br/>Transaksi</span>
                  </div>
                  <div className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-xl p-3 flex flex-col items-center justify-center transition-colors">
                    <ScanLine className="w-5 h-5 mb-1"/>
                    <span className="text-[10px] font-semibold text-center leading-tight">Scan<br/>Struck</span>
                  </div>
                </div>
              </div>

              {/* Goals Setting (Klik ke /goals) */}
              <div className={`w-1/2 flex flex-col justify-between p-4 ${cardHoverStyle}`} onClick={() => navigate('/goals')}>
                <h2 className="text-sm font-bold text-gray-800 mb-3">Goals Setting</h2>
                <div className="flex justify-between items-center px-4 mb-2">
                   <ChevronRight className="w-4 h-4 text-gray-400 rotate-180 cursor-pointer hover:text-indigo-600" />
                   <Laptop className="w-8 h-8 text-gray-600 drop-shadow-sm" />
                   <ChevronRight className="w-4 h-4 text-gray-400 cursor-pointer hover:text-indigo-600" />
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                  <div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '60%'}}></div>
                </div>
                <p className="text-[10px] font-semibold text-indigo-900 text-center">60% Menuju mimpi kamu!</p>
              </div>

            </div>

          </div>
        </div>

      </main>
    </motion.div>
  );
}