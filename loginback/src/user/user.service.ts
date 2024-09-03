import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { UserLoginDTO, UserSignUpDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly UserModel: typeof User) { }

    // 유저 생성
    async create(createUser: UserSignUpDTO) {
        try {
            const { uid, upw, uname, uphone } = createUser;
            return await this.UserModel.create({
                uid, upw, uname, uphone
            })
        } catch (error) {
            console.log(error)
        }
    }

    // 유저 로그인
    async login(loginUser: UserLoginDTO) {
        const { uid, upw } = loginUser;

        const user = await this.UserModel.findOne({ where: { uid, upw } });
        if (!user) {
            throw new BadRequestException('Invalid ID')
        }

        if (user.upw !== upw) {
            throw new BadRequestException('Invalid PW');
        }

        return {
            user: {
                uid: user.dataValues.uid
            }
        };
    }
}

// + 암호화
// + 토큰유지
// jwt, recoil, bcrypt, zod
// wow amazing

// styled.components
// axios
