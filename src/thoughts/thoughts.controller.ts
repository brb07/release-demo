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
  likes?: number;
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

  @Delete(':id')
  deleteThought(@Param('id') id: string): IThought {
    return this.thoughtsService.deleteThought(id);
  }

  @Post(':id/like')
  likeThought(@Param('id') id: string): IThought {
    return this.thoughtsService.likeThought(id);
  }
}
