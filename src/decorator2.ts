export namespace Decorator2 {
	export class VisualComponent {
		draw(): void {}
		resize(): void {}
	}

	export class Decorator2 implements VisualComponent {
		constructor(public component: VisualComponent) {}

		draw(): void {
			this.component.draw();
		}

		resize(): void {
			this.component.resize();
		}
	}

	export class BorderDecorator2 extends Decorator2 {
		constructor(public component: VisualComponent, public width: number) {
			super(component);
		}

		draw(): void {
			this.component.draw();
			this.drawBorder(this.width);
		}

		drawBorder(width: number) {
			console.log(`border is drawed with ${width} width`);
		}
	}
}