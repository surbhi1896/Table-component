import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      for (let key in item) {
        if (item.hasOwnProperty(key) && typeof item[key] === 'string' && item[key].toLowerCase().includes(searchText)) {
          return true;
        }
      }
      return false;
    });
  }
}