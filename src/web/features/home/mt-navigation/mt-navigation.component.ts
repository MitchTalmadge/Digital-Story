import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, AnimationBuilder, AnimationFactory, style} from "@angular/animations";

@Component({
    selector: 'mt-navigation',
    templateUrl: 'mt-navigation.component.html',
    styleUrls: ['mt-navigation.component.css']
})

export class MTNavigationComponent implements OnInit, AfterViewInit {

    /**
     * The current position in the carousel.
     */
    currentPos: number = 0;

    animating: boolean = false;

    testStrings: string[] = ["one", "two", "three", "four"];

    @ViewChild("previousLabel")
    previousLabel: ElementRef;

    @ViewChild("currentLabel")
    currentLabel: ElementRef;

    constructor(private animationBuilder: AnimationBuilder) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        (<HTMLDivElement>this.currentLabel.nativeElement).innerHTML = this.testStrings[0];
    }

    onLeftArrowClicked(): void {
        if(this.animating)
            return;

        if (this.currentPos > 0) {
            this.currentPos--;

            // Init previous label
            (<HTMLDivElement>this.previousLabel.nativeElement).innerHTML = this.testStrings[this.currentPos];
            (<HTMLDivElement>this.previousLabel.nativeElement).style.transform = "translateX(-100%)";

            // Init current label
            (<HTMLDivElement>this.currentLabel.nativeElement).innerHTML = this.testStrings[this.currentPos + 1];
            (<HTMLDivElement>this.currentLabel.nativeElement).style.transform = null;

            // Animations
            let previousAnimationFactory = this.animationBuilder.build([
                animate("1s ease-in-out", style({transform: "translateX(0%)"}))
            ]);

            let currentAnimationFactory = this.animationBuilder.build([
                animate("1s ease-in-out", style({transform: "translateX(100%)"}))
            ]);

            this.animating = true;

            let previousAnimation = previousAnimationFactory.create(this.previousLabel.nativeElement);
            previousAnimation.onDone(() => {
                (<HTMLDivElement>this.previousLabel.nativeElement).innerHTML = null;
                (<HTMLDivElement>this.previousLabel.nativeElement).style.transform = null;
                previousAnimation.destroy();
            });
            previousAnimation.play();

            let currentAnimation = currentAnimationFactory.create(this.currentLabel.nativeElement);
            currentAnimation.onDone(() => {
                (<HTMLDivElement>this.currentLabel.nativeElement).innerHTML = this.testStrings[this.currentPos];
                (<HTMLDivElement>this.currentLabel.nativeElement).style.transform = null;
                currentAnimation.destroy();
                this.animating = false;
            });
            currentAnimation.play();
        }
    }

    onRightArrowClicked(): void {
        if(this.animating)
            return;

        if (this.currentPos < this.testStrings.length - 1) {
            this.currentPos++;

            // Init previous label
            (<HTMLDivElement>this.previousLabel.nativeElement).innerHTML = this.testStrings[this.currentPos - 1];
            (<HTMLDivElement>this.previousLabel.nativeElement).style.transform = null;

            // Init current label
            (<HTMLDivElement>this.currentLabel.nativeElement).innerHTML = this.testStrings[this.currentPos];
            (<HTMLDivElement>this.currentLabel.nativeElement).style.transform = "translateX(100%)";

            // Animations
            let previousAnimationFactory = this.animationBuilder.build([
                animate("1s ease-in-out", style({transform: "translateX(-100%)"}))
            ]);

            let currentAnimationFactory = this.animationBuilder.build([
                animate("1s ease-in-out", style({transform: "translateX(0%)"}))
            ]);

            this.animating = true;

            let previousAnimation = previousAnimationFactory.create(this.previousLabel.nativeElement);
            previousAnimation.onDone(() => {
                (<HTMLDivElement>this.previousLabel.nativeElement).innerHTML = null;
                (<HTMLDivElement>this.previousLabel.nativeElement).style.transform = null;
                previousAnimation.destroy();
            });
            previousAnimation.play();

            let currentAnimation = currentAnimationFactory.create(this.currentLabel.nativeElement);
            currentAnimation.onDone(() => {
                (<HTMLDivElement>this.previousLabel.nativeElement).innerHTML = this.testStrings[this.currentPos];
                (<HTMLDivElement>this.currentLabel.nativeElement).style.transform = null;
                currentAnimation.destroy();
                this.animating = false;
            });
            currentAnimation.play();
        }
    }
}