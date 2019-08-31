import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ConvertToSpaces"
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    // replacing the character with spaces
    return value.replace(character, " ");
  }
}
