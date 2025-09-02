    export type IssueStatus = 'New' | 'In Progress' | 'Resolved';

    export interface Issue {
      id: string;
      category: string;
      location: string;
      status: IssueStatus;
      submitted: string;
      details: string;
      reporter: string;
      imageUrl: string;
    }
    
