import { Component } from "@angular/core";

@Component({
  selector: 'app-example',
  standalone: true,
  template: `<p>This example child component for Ng-content.</p>
              <p>The content from the parent component will be showed below.👇</p>
              <div>
                <ng-content></ng-content>
              </div>`,
})
export class Example{

}
