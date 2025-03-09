import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Post[], search: string = ''): Post[] {
    if (!search.trim())
    {
      return value;
    }

    return value.filter(post => {
      return post.title.toLowerCase().includes(search.toLowerCase()) || post.text.toLowerCase().includes(search.toLowerCase())
    })
  }

}
