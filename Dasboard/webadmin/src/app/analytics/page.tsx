    'use client';

    import React, { useMemo } from 'react';
    import { Bar } from 'react-chartjs-2';
    import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
    import { initialIssues } from '../../lib/data';

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    export default function AnalyticsPage() {
        const chartData = useMemo(() => {
            const categories = [...new Set(initialIssues.map(i => i.category))];
            const data = categories.map(cat => initialIssues.filter(i => i.category === cat).length);
            return {
                labels: categories,
                datasets: [
                    {
                        label: 'Reports by Category',
                        data: data,
                        backgroundColor: 'rgba(59, 130, 246, 0.5)',
                        borderColor: 'rgba(59, 130, 246, 1)',
                        borderWidth: 1,
                    },
                ],
            };
        }, []);

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: { display: true, text: 'Number of Reports per Category' },
            },
            scales: { y: { beginAtZero: true } }
        };

        return (
            <div className="p-4 md:p-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="h-96 relative">
                        <Bar options={chartOptions} data={chartData} />
                    </div>
                </div>
            </div>
        );
    }
    
