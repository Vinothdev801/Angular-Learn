import { Directive, HostListener, HostBinding, Input} from "@angular/core";

@Directive({selector: '[colorchange]', standalone: true,})

export class HighlightDirective{

    @Input() color = '';


    @HostBinding('style.background') bg = 'transparent';
    @HostBinding('style.color') tc = 'green'

    @HostListener('mouseenter') onMouseEnter() {
     this.bg = this.color
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.bg = 'transparent'
    }
}
