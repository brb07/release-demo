import {
  Controller,
  Get,
  Delete,
  Put,
  Param,
  Body,
  Post,
} from '@nestjs/common';
import { ThoughtsService } from 'src/thoughts/thoughts.service';

export interface IThought {
  id: number;
  thought: string;
}

@Controller('thoughts')
export class ThoughtsController {
  constructor(private readonly thoughtsService: ThoughtsService) {}

  @Get()
  getThoughts(): IThought[] {
    return this.thoughtsService.getThoughts();
  }

  @Get(':id')
  getThought(@Param('id') id: string): IThought {
    return this.thoughtsService.getThought(id);
  }

  @Post()
  createThought(@Body() thought: IThought): IThought {
    return this.thoughtsService.createThought(thought);
  }

  @Put(':id')
  updateThought(@Param('id') id: string, @Body() thought: IThought): IThought {
    return this.thoughtsService.updateThought(id, thought);
  }
}
