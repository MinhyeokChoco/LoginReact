import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [UserModule, SequelizeModule.forRoot({
    username: "root",
    password: "dlalsgur12",
    dialect: "mysql",
    database: "user",
    synchronize: true,
    autoLoadModels: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
