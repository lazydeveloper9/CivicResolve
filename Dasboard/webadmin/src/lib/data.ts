    import { Issue, IssueStatus } from '../types';

    export const initialIssues = [
      { id: 'C-2301', category: 'Pothole', location: 'Main Street, Ranchi', status: 'New', submitted: '2025-08-28', details: 'Large pothole causing traffic issues near the main market. It is over 2 feet wide and is dangerous for two-wheelers.', reporter: 'Amit K.', imageUrl: 'https://placehold.co/600x400/cccccc/ffffff?text=Pothole+Image' },
      { id: 'C-2302', category: 'Streetlight', location: 'Kanke Road, Ranchi', status: 'In Progress', submitted: '2025-08-27', details: 'Streetlight out for 3 days. The entire block is dark, raising safety concerns.', reporter: 'Priya S.', imageUrl: 'https://placehold.co/600x400/cccccc/ffffff?text=Streetlight+Out' },
      { id: 'C-2303', category: 'Trash Bin', location: 'Circular Road, Jamshedpur', status: 'Resolved', submitted: '2025-08-26', details: 'Trash bin overflowing near the park. It has not been cleared for over a week and is attracting stray animals.', reporter: 'Rohan G.', imageUrl: 'https://placehold.co/600x400/cccccc/ffffff?text=Overflowing+Bin' },
      { id: 'C-2304', category: 'Water Leakage', location: 'Sector 4, Bokaro', status: 'New', submitted: '2025-08-28', details: 'Clean water pipe leaking for hours. A significant amount of water is being wasted.', reporter: 'Sunita M.', imageUrl: 'https://placehold.co/600x400/cccccc/ffffff?text=Water+Leakage' },
      { id: 'C-2305', category: 'Traffic Signal', location: 'Station Road, Dhanbad', status: 'In Progress', submitted: '2025-08-29', details: 'Traffic signal malfunction at major intersection causing congestion during peak hours.', reporter: 'Rahul P.', imageUrl: 'https://placehold.co/600x400/cccccc/ffffff?text=Traffic+Signal' },
      { id: 'C-2306', category: 'Drainage', location: 'Market Area, Hazaribagh', status: 'New', submitted: '2025-08-29', details: 'Blocked drainage causing waterlogging. Area becomes inaccessible during rain.', reporter: 'Meena D.', imageUrl: 'https://placehold.co/600x400/cccccc/ffffff?text=Blocked+Drainage' },
      { id: 'C-2307', category: 'Park Maintenance', location: 'Gandhi Maidan, Ranchi', status: 'Resolved', submitted: '2025-08-25', details: 'Children\'s play equipment damaged and requires immediate repair for safety.', reporter: 'Kumar S.', imageUrl: 'https://placehold.co/600x400/cccccc/ffffff?text=Park+Equipment' },
      { id: 'C-2308', category: 'Public Toilet', location: 'Bus Stand, Ramgarh', status: 'In Progress', submitted: '2025-08-28', details: 'Public toilet facility needs cleaning and maintenance. Basic amenities missing.', reporter: 'Sheela R.', imageUrl: 'https://placehold.co/600x400/cccccc/ffffff?text=Public+Toilet' },
      { id: 'C-2309', category: 'Road Sign', location: 'Industrial Area, Bokaro', status: 'New', submitted: '2025-08-30', details: 'Important direction signs damaged, creating confusion for commuters.', reporter: 'Vikram J.', imageUrl: 'http://192.168.31.225:8080/IMG-20250901-WA0000.jpeg' }
        ];

    export const statusColors = {
      'New': 'bg-blue-100 text-blue-800',
      'In Progress': 'bg-yellow-100 text-yellow-800',
      'Resolved': 'bg-green-100 text-green-800',
    };
    
