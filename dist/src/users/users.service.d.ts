import { UpdateUserDto, UpdateUserLangueDto, UpdateUserPhotoDto, UpdateUserTelephoneDto } from './dto/users.dto';
import { UserEntity } from './entities/user.entity';
import { UsersRepository } from './repositories/users.repository';
export declare class UsersService {
    private readonly usersRepository;
    private readonly logger;
    constructor(usersRepository: UsersRepository);
    findOne(id: string): Promise<UserEntity>;
    update(id: string, dto: UpdateUserDto): Promise<UserEntity>;
    updatePhoto(id: string, dto: UpdateUserPhotoDto): Promise<UserEntity>;
    updateLangue(id: string, dto: UpdateUserLangueDto): Promise<UserEntity>;
    updateTelephone(id: string, dto: UpdateUserTelephoneDto): Promise<UserEntity>;
    remove(id: string): Promise<{
        message: string;
    }>;
    private ensureExists;
    private toEntity;
}
