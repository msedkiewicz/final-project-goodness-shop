import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RegisterDTO } from './dtos/register.dto';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private userService;
    private jwtService;
    private configService;
    constructor(userService: UsersService, jwtService: JwtService, configService: ConfigService);
    register(registrationData: RegisterDTO): Promise<import(".prisma/client").User>;
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").Role;
    }>;
    createSession(user: any): Promise<{
        access_token: string;
    }>;
}
