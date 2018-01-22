import { Directive,OnInit,Renderer2,ElementRef } from "@angular/core";

@Directive({
    selector: '[headerDirective]'
})
export class headerDirective implements OnInit{
constructor(private elRef:ElementRef, private render:Renderer2){}

ngOnInit(){
    this.render.setStyle(this.elRef.nativeElement,'color','yellow');
}
}