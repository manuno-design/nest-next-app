import { IsOptional, IsString } from "class-validator";

export class UPdateUserDto {
    @IsString()
    @IsOptional()
    nickName?: string;
}