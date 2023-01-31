import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UPdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    async updateUser(
        userId: number,
        dto: UPdateUserDto
    ): Promise<Omit<User, 'hashedPassword'>> {
        const user = await this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                ...dto
            }
        });
        delete user.hashedPassword;
        return user;
    }
}
