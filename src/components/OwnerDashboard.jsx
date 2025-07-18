import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OwnerDashboard = ({ user }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  // Pour l'instant, données statiques (tout à 0)
  const stats = [
    { label: "Published Listings", icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ) },
    { label: "Pending Listings", icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 2v4M16 2v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ) },
    { label: "Active Promotions", icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m4 4h1v-4h1m-6 4h-1v-4h-1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ) },
    { label: "Visits this week", icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ) },
  ];

  const periods = [
    { label: "Last 24 hours", value: "24h" },
    { label: "Last 7 days", value: "7d" },
    { label: "Last 30 days", value: "30d" },
  ];

  // Données fictives pour le chart
  const chartLabels = [
    "Jul 12", "Jul 13", "Jul 14", "Jul 15", "Jul 16", "Jul 17", "Jul 18"
  ];
  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Views",
        data: [0, 0.3, 0, 0, 0, 0, 0],
        borderColor: "#f43f5e",
        backgroundColor: "#f43f5e22",
        pointBackgroundColor: "#f43f5e",
        pointBorderColor: "#f43f5e",
        tension: 0.4,
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: "Unique views",
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f622",
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#3b82f6",
        tension: 0.4,
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        grid: {
          color: "#e5e7eb",
          borderDash: [4, 4],
        },
        beginAtZero: true,
        ticks: {
          color: "#6b7280",
          stepSize: 1,
        },
        min: 0,
        max: 1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Hello, {user?.name || "!"}</h1>
        {/* Statistiques principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="bg-red-500 rounded-lg shadow p-3 flex flex-col items-center justify-center text-white min-h-[90px]">
              <div className="mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold mb-0.5">0</div>
              <div className="text-xs font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Layout principal : 2 colonnes en desktop, tout en colonne sur mobile */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Colonne de gauche */}
          <div className="flex flex-col gap-4 flex-1 max-w-full lg:max-w-md">
            {/* Views */}
            <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-red-500 rounded-full p-1 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><circle cx="12" cy="12" r="3" strokeWidth="2" /></svg>
                </span>
                <span className="font-bold text-sm">Views</span>
              </div>
              <div className="flex justify-between mb-2">
                {periods.map(p => (
                  <div key={p.value} className="text-center flex flex-col items-center">
                    {/* Trois barres verticales */}
                    <div className="flex gap-0.5 mb-1">
                      <span className="w-0.5 h-3 bg-gray-300 rounded"></span>
                      <span className="w-0.5 h-4 bg-gray-400 rounded"></span>
                      <span className="w-0.5 h-2 bg-gray-200 rounded"></span>
                    </div>
                    <div className="text-base font-bold">0</div>
                    <div className="text-xs text-gray-500">{p.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Unique views */}
            <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-red-500 rounded-full p-1 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><circle cx="12" cy="12" r="3" strokeWidth="2" /></svg>
                </span>
                <span className="font-bold text-sm">Unique views</span>
              </div>
              <div className="flex justify-between mb-2">
                {periods.map(p => (
                  <div key={p.value} className="text-center flex flex-col items-center">
                    {/* Trois barres verticales */}
                    <div className="flex gap-0.5 mb-1">
                      <span className="w-0.5 h-3 bg-gray-300 rounded"></span>
                      <span className="w-0.5 h-4 bg-gray-400 rounded"></span>
                      <span className="w-0.5 h-2 bg-gray-200 rounded"></span>
                    </div>
                    <div className="text-base font-bold">0</div>
                    <div className="text-xs text-gray-500">{p.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Button clicks */}
            <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-red-500 rounded-full p-1 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M12 8v4l3 3" strokeWidth="2" /></svg>
                </span>
                <span className="font-bold text-sm">Button clicks</span>
              </div>
              <div className="text-gray-500 text-xs">No click stats recorded yet.</div>
            </div>
            {/* Devices */}
            <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-red-500 rounded-full p-1 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" /></svg>
                </span>
                <span className="font-bold text-sm">Devices</span>
              </div>
            </div>
            {/* Top Countries */}
            <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-red-500 rounded-full p-1 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M2 12l10 7 10-7-10-7-10 7z" strokeWidth="2" /></svg>
                </span>
                <span className="font-bold text-sm">Top Countries</span>
              </div>
            </div>
          </div>
          {/* Colonne de droite */}
          <div className="flex-1 flex flex-col gap-4 w-full lg:w-auto">
            {/* Visits (chart) */}
            <div className="bg-white rounded-lg shadow border border-gray-200 p-4 w-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-500 rounded-full p-1 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M8 12h8" strokeWidth="2" /></svg>
                </span>
                <span className="font-bold text-sm">Visits</span>
                <div className="ml-auto flex gap-1">
                  {periods.map(p => (
                    <button
                      key={p.value}
                      className={`px-2 py-0.5 rounded-full text-xs border ${selectedPeriod === p.value ? "bg-red-500 text-white" : "bg-white text-gray-700"}`}
                      onClick={() => setSelectedPeriod(p.value)}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full h-48">
                <Line data={chartData} options={{...chartOptions, maintainAspectRatio: false, responsive: true}} width={null} height={null} style={{ width: '100%' }} />
              </div>
              <div className="flex justify-center gap-4 mt-2 text-xs">
                <span className="flex items-center gap-1 text-red-500 font-bold"><span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>Views</span>
                <span className="flex items-center gap-1 text-blue-500 font-bold"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Unique views</span>
              </div>
            </div>
            {/* Grille à côté du chart : Top Referrers, Top Platforms, Top Browsers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {/* Top Referrers */}
              <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-red-500 rounded-full p-1 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2" /></svg>
                  </span>
                  <span className="font-bold text-sm">Top Referrers</span>
                </div>
              </div>
              {/* Top Platforms */}
              <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-red-500 rounded-full p-1 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" /></svg>
                  </span>
                  <span className="font-bold text-sm">Top Platforms</span>
                </div>
              </div>
              {/* Top Browsers */}
              <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-red-500 rounded-full p-1 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /></svg>
                  </span>
                  <span className="font-bold text-sm">Top Browsers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard; 