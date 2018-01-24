import { Directive, ElementRef,Renderer2,HostListener, HostBinding} from "@angular/core";

@Directive({
    selector: "[hoverDirective]"
})
export class colorChangeDirective{
    @HostBinding('style.backgroundColor') backgroundColor: string = 'rgb(3, 0, 48)';
    constructor(private ref:ElementRef,private Render:Renderer2){}

    @HostListener('mouseenter') mouseEnter(eventData:Event){
        this.backgroundColor = 'orange';
    }
    @HostListener('mouseleave') mouseLeave(eventData:Event){
        this.backgroundColor = 'rgb(3, 0, 48)';
    }
}