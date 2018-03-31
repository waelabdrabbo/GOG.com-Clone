import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(games: any[], callback: (item: any) => boolean): any {
    if (!games || !callback) {
        return games;
    }
    return games.filter(item => callback(item));
}

}
