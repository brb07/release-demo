import { Injectable } from '@nestjs/common';
import type { IThought } from 'src/thoughts/thoughts.controller';
@Injectable()
export class ThoughtsService {
  private thoughts: IThought[] = [
    { id: 1, thought: 'I am a thought' },
    { id: 2, thought: 'I am another thought' },
  ];

  getThoughts(): IThought[] {
    return this.thoughts;
  }

  getThought(id: string): IThought {
    return this.thoughts.find((thought) => thought.id === parseInt(id));
  }

  createThought(thought: IThought): IThought {
    this.thoughts.push(thought);
    return thought;
  }

  updateThought(id: string, thought: IThought): IThought {
    const index = this.thoughts.findIndex(
      (thought) => thought.id === parseInt(id),
    );
    this.thoughts[index] = thought;
    return thought;
  }

  deleteThought(id: string): IThought {
    const index = this.thoughts.findIndex(
      (thought) => thought.id === parseInt(id),
    );
    const thought = this.thoughts[index];
    this.thoughts.splice(index, 1);
    return thought;
  }
}
