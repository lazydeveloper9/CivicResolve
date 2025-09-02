'use client';

import React from 'react';
import { Issue } from '../types';

interface IssueDetailModalProps {
    issue: Issue;
    onClose: () => void;
}

export function IssueDetailModal({ issue, onClose }: IssueDetailModalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Issue Details</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {issue.imageUrl && (
                        <div>
                            <p className="text-sm text-gray-500 mb-2">Image</p>
                            <img
                                src={issue.imageUrl}
                                alt="Issue"
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    )}

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-900">ID</p>
                                <p className="font-medium text-gray-500">{issue.id}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-900">Category</p>
                                <p className="font-medium text-gray-500">{issue.category}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-900">Location</p>
                                <p className="font-medium text-gray-500">{issue.location}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-900">Status</p>
                                <p className="font-medium text-gray-500">{issue.status}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-900">Submitted</p>
                                <p className="font-medium text-gray-500">{issue.submitted}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-900">Reporter</p>
                                <p className="font-medium text-gray-500">{issue.reporter}</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 mb-2">Details</p>
                            <p className="text-gray-700 whitespace-pre-wrap">{issue.details}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

