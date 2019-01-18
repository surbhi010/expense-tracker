import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AccountDetailComponent } from './accounts/account-detail/account-detail.component';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') appTooltip: string;
  constructor(private el: ElementRef ) {}
  @HostListener('mouseenter') onmouseenter() {
      console.log('Enter', this.appTooltip);
      this.el.nativeElement.classList.add(this.appTooltip);

  }
  @HostListener('mouseleave') onmouseleave() {
    console.log('Exit');
}
}