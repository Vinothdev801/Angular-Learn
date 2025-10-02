import { Directive, effect, ElementRef, inject, input} from "@angular/core";

@Directive({
    selector: '[TodoCompeletion]',
    standalone: true,
})

export class HighlightCompletedTodo {
    isCompleted  = input(false);

    el = inject(ElementRef); //angular service that injects the element reference
   stylesEffect = effect(() => {
    if(this.isCompleted()){
        this.el.nativeElement.style.background = 'lightgreen';
        this.el.nativeElement.style.textDecoration = 'line-through';
    }
    else{
        this.el.nativeElement.style.background = 'white';
        this.el.nativeElement.style.textDecoration = 'none';
    }
   })

}