import { BadRequestException, Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLoginDTO, UserSignUpDTO } from './dto/user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('login')
  async login(@Body() login: UserLoginDTO, @Res() res: Response) {
    try {
      console.log('1234');
      const result = await this.userService.login(login);
      // const type = 'login'
      console.log(result)
      res.send(result)
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Post('signup')
  async signup(@Body() signup: UserSignUpDTO) {
    try {
      console.log('1234');
      const result = await this.userService.create(signup);
      console.log(result);
      return result
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

}
