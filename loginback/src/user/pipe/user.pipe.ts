import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class UserSignUpPipe implements PipeTransform {
    length: string = null
    constructor(length: string) {
        this.length = length;
    }
    transform(value: any, metadata: ArgumentMetadata) {

        if (!value || typeof value !== 'object') {
            throw new BadRequestException('Invalid input format.');
        }

        const { uid, upw } = value;

        if (!uid || !upw) {
            throw new BadRequestException('아이디 또는 비밀번호를 잘 입력해줘');
        }
        if (uid.length < 2 || uid.length > 15) {
            throw new BadRequestException('아이디 최소 2자 이상, 최대 15자 까지 입력해줘');
        }

        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/.test(upw)) {
            console.log('비밀번호 한글 제외, 영대소문자, 숫자, 특수문자 1개 이상 포함 되어 있음')
            if ((upw.length >= (this.length || 8)) && (upw.length <= (this.length))) {
                console.log('비밀번호 값이 8자 이상, 15자 이하로 잘 적었습니다.')
                return value
            } else {
                throw new BadRequestException('비밀번호를 최소 8자 이상, 최대 15자 이하 까지 써줘');
            }
        } else {
            throw new BadRequestException('비밀번호를 한글 제외, 영대소문자, 숫자, 특수문자 포함해서 1개 이상으로 써줘')
        }
    }
}

export class UserLoginPipe implements PipeTransform {
    private readonly minLength: number;
    private readonly maxLength: number;

    constructor(minLength: number = 0, maxLength: number = 15) {
        this.minLength = minLength;
        this.maxLength = maxLength;
    }

    transform(value: any, metadata: ArgumentMetadata) {
        if (!value || typeof value !== 'object') {
            throw new BadRequestException('Invalid input format.');
        }

        const { uid, upw } = value;

        if (!uid || !upw) {
            throw new BadRequestException('아이디 또는 비밀번호를 잘 입력해줘');
        }

        if (uid.length < 2 || uid.length > this.maxLength) {
            throw new BadRequestException('아이디는 최소 2자, 최대 15자까지 적어줘');
        }

        const isValidFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/.test(upw);
        if (!isValidFormat) {
            throw new BadRequestException(`${upw} must contain at least one letter, one number, and one special character.`);
        }

        if (upw.length < this.minLength || upw.length > 60) {
            throw new BadRequestException(`${upw} must be between ${this.minLength} and ${this.maxLength} characters.`)
        }

        return value;
    }
}