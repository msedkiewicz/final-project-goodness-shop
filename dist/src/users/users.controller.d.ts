import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAll(): Promise<import(".prisma/client").User[]>;
    getById(id: string): Promise<import(".prisma/client").User>;
    delete(id: string): Promise<{
        success: boolean;
    }>;
}
