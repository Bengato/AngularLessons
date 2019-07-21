import { Directive, HostListener, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[usPhoneInput]"
})
export class UsPhoneInputDirective {
  constructor(private el: ElementRef) {}
  @Input("usPhoneInput") format;
  @HostListener("focus") onFocus() {
    console.log("focus");
  }
  @HostListener("blur") onBlur() {
    let value: string = this.el.nativeElement.value;
    value =
      "(" +
      value.substr(0, 3) +
      ")" +
      value.substr(3, 3) +
      "-" +
      value.substr(6);
    if (this.format == "lowercase") {
      this.el.nativeElement.value = value.toLowerCase();
    }
    if (this.format == "uppercase") {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}
