import { ElementRef } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
  selector:'[color]'
})
export class ColorDirective{

constructor(ele:ElementRef){

  ele.nativeElement.style.color = "red"
}


}