import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any[], args: [string, boolean]): any[] {
    if (!value || !Array.isArray(value) || !args || args.length !== 2) {
      return value;
    }

    const [key, desc] = args;

    return value.slice().sort((a, b) => {
      const comparison = a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
      return desc ? -comparison : comparison;
    });
  }
}
