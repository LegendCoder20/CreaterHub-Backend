import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  Length,
  Matches,
} from 'class-validator';

export class RegisterUserDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, {
    message: 'Password Must be Minimum of 8 Characters',
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  phoneCountryCode: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 15, {
    message: 'Phone No must be Between 10 to 15 Digits',
  })
  @Matches(/^\d+$/, {
    message: 'Phone No must contain only Digits',
  })
  phoneNumber: string;
}
