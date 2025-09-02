    'use client';

    import React, { useMemo } from 'react';
    import { initialIssues } from '@/lib/data';

    interface StatCardProps {
        title: string;
        value: number | string;
        color: string;
    }

    const StatCard: React.FC<StatCardProps> = ({ title, value, color }) => (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className={`mt-2 text-3xl font-bold ${color}`}>{value}</p>
        </div>
    );

    export default function DashboardPage() {
        const stats = useMemo(() => {
            const total = initialIssues.length;
            const newCount = initialIssues.filter(i => i.status === 'New').length;
            const inProgress = initialIssues.filter(i => i.status === 'In Progress').length;
            const resolved = initialIssues.filter(i => i.status === 'Resolved').length;
            return { total, newCount, inProgress, resolved };
        }, []);

        // Define status color mapping
        const statusColors: { [key: string]: string } = {
            'New': 'bg-blue-100 text-blue-800',
            'In Progress': 'bg-yellow-100 text-yellow-800',
            'Resolved': 'bg-green-100 text-green-800',
            // Add more statuses if needed
        };

        return (
            <>
                <div className="p-4 md:p-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard title="Total Reports" value={stats.total} color="text-gray-800" />
                        <StatCard title="New Reports" value={stats.newCount} color="text-blue-600" />
                        <StatCard title="In Progress" value={stats.inProgress} color="text-yellow-600" />
                        <StatCard title="Resolved" value={stats.resolved} color="text-green-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Recent Issues</h3>  
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">ID</th>
                                    <th scope="col" className="px-6 py-3">Category</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                    <th scope="col" className="px-6 py-3">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {initialIssues.slice(0, 5).map(issue => (
                                    <tr key={issue.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{issue.id}</td>
                                        <td className="px-6 py-4">{issue.category}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[issue.status]}`}>
                                                {issue.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">{issue.submitted}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
    
