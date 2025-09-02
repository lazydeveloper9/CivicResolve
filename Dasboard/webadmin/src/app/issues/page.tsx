    'use client';

    import React, { useState, useMemo } from 'react';
    import { initialIssues, statusColors } from '../../lib/data';
    import { Issue, IssueStatus } from '../../types';
    import { IssueDetailModal } from '../../components/IssueDetailModal';

    export default function IssuesPage() {
        const [filter, setFilter] = useState<IssueStatus | 'All'>('All');
        const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

        const filteredIssues = useMemo(() => {
            if (filter === 'All') return initialIssues;
            return initialIssues.filter(issue => issue.status === filter);
        }, [filter]);
        
        const filters: Array<IssueStatus | 'All'> = ['All', 'New', 'In Progress', 'Resolved'];

        return (
            <div className="p-4 md:p-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold mb-4 sm:mb-0">All Reported Issues</h3>
                        <div className="flex flex-wrap gap-2">
                            {filters.map(f => (
                                <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 text-sm rounded-md ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">ID</th>
                                    <th scope="col" className="px-6 py-3">Category</th>
                                    <th scope="col" className="px-6 py-3">Location</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                    <th scope="col" className="px-6 py-3">Submitted</th>
                                    <th scope="col" className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredIssues.map(issue => (
                                    <tr key={issue.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{issue.id}</td>
                                        <td className="px-6 py-4">{issue.category}</td>
                                        <td className="px-6 py-4">{issue.location}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[issue.status as IssueStatus]}`}>{issue.status}</span>
                                        </td>
                                        <td className="px-6 py-4">{issue.submitted}</td>
                                        <td className="px-6 py-4">
                                            <button onClick={() => setSelectedIssue(issue as Issue)} className="font-medium text-blue-600 hover:underline">View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {selectedIssue && <IssueDetailModal issue={selectedIssue} onClose={() => setSelectedIssue(null)} />}
            </div>
        );
    }
    
