
import { Pipe } from "@angular/core";


@Pipe({ name: 'orderBy' })
export class OrderByPipe {
  public static sort = 'daysInProcess';
  public static asc = true;
  transform(array: Array<string>, args: string): Array<string> {
    array.sort(compare);
    return array;
  }
}
function compare(a, b) {
  console.log(a[OrderByPipe.sort]);
  if (!isNaN(Date.parse(a[OrderByPipe.sort])) && !isNaN(Date.parse(b[OrderByPipe.sort]))) {
    console.log(Date.parse(a[OrderByPipe.sort]));
    a = Date.parse(a[OrderByPipe.sort]);
    b = Date.parse(b[OrderByPipe.sort]);
    return (OrderByPipe.asc ? -1 : 1) * (a - b);
  }

  if (a[OrderByPipe.sort] < b[OrderByPipe.sort])
    return (OrderByPipe.asc ? -1 : 1) * -1;
  if (a[OrderByPipe.sort] > b[OrderByPipe.sort])
    return (OrderByPipe.asc ? -1 : 1) * 1;
  return 0;
}