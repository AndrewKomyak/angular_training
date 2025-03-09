import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'multby'
})
export class MultByPipe implements PipeTransform {
    transform(value: number, multiplier: number): number {
        return value * multiplier;
    }

}