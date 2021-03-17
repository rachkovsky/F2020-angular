import { Company } from './company';

export interface User {
    address: any;
    company: Company;
    email: string;
    id: number | string;
    name: string;
    phone: string;
    username: string;
    website: string;
}
