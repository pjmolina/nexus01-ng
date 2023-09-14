import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user-profile/user-profile.component';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(users: User[], searchString: string): User[] {
    const text = (searchString || '').toLowerCase().trim();
    if (!text) {
        return users;
    }
    return users.filter(u => u.nombre.toLowerCase().includes(text));
  }
}
