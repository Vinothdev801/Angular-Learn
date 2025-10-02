import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'kebabCase',
  standalone: true,
})

export class KebabCasePipe implements PipeTransform{
  transform(value: any): string {
    return value.toLowerCase().replace(/ /g, '-');
  }

}
