import { Directive } from '@angular/core';

/** Element that can be used as a template for a `TreeComponent`  */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[treeNode]'
})
export class TreeNodeDirective {}
