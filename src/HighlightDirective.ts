import { Directive, HostListener, HostBinding, Input} from "@angular/core";

@Directive({selector: '[colorchange]', standalone: true,})

export class HighlightDirective{

    @Input() color = '';


    @HostBinding('style.backgroundColor') bg = 'black';
    @HostBinding('style.color') tc = 'white'

    @HostListener('mouseenter') onMouseEnter() {
     this.bg = this.color
    }
    @HostListener('mouseenter') onMouseLeave() {
      this.bg = 'black'
    }
}
