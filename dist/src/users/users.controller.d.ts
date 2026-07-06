import { UsersService } from './users.service';
import { UpdateUserDto, UpdateUserLangueDto, UpdateUserPhotoDto, UpdateUserTelephoneDto } from './dto/users.dto';
import { UserEntity } from './entities/user.entity';
import { MessageResponseEntity } from '../common/entities/message-response.entity';
import type { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(user: AuthenticatedUser): Promise<UserEntity>;
    updateMe(user: AuthenticatedUser, dto: UpdateUserDto): Promise<UserEntity>;
    updatePhoto(user: AuthenticatedUser, dto: UpdateUserPhotoDto): Promise<UserEntity>;
    updateLangue(user: AuthenticatedUser, dto: UpdateUserLangueDto): Promise<UserEntity>;
    updateTelephone(user: AuthenticatedUser, dto: UpdateUserTelephoneDto): Promise<UserEntity>;
    removeMe(user: AuthenticatedUser): Promise<MessageResponseEntity>;
    findOne(id: string): Promise<UserEntity>;
}
