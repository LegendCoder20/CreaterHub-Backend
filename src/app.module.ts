import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// Modules
import { UsersModule } from './users/users.module.js';

import chalk from 'chalk';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!, {
      connectionFactory: (connection) => {
        connection.asPromise().then(() => {
          console.log(
            chalk.bgGreen.black(' 🍃 MongoDB Connected Successfully '),
          );
        });

        connection.on('error', (error: Error) => {
          console.log(
            chalk.bgRed.white(`❌ MongoDB Connection Failed ${error.message}`),
          );
        });
        return connection;
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
