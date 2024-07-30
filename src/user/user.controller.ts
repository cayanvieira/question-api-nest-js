import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    private userService

    constructor() {
        this.userService = new UserService;        
    }
    @Post('/create')
    create(@Body() data:any ): Promise<any> {
        return this.userService.create(data);
    }
}

