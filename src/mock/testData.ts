export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
}

export interface PostProps {
    id: number;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
    columnId: number;
}

export const testData: ColumnProps[] = [
    
]

export const testPosts: PostProps[] = [

]