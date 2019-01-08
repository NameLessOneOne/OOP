export namespace Proxy {
	export interface Image {
		displayImage: () => void
	}
	
	export class RealImage implements Image {
		constructor(private readonly imageName: string) {
			this.loadImageFromDisk(imageName);
		}
		
		loadImageFromDisk(imageName: string) {
			console.log('loading image from disk');
		}
		
		displayImage() {
			console.log(`Image ${this.imageName} is displayed`);
		};
	}
	
	export class ProxyImage implements Image {
		private image: Image;
		
		constructor(private readonly imageName: string) {}
		
		displayImage() {
			if (this.image == null) {
				console.log('New Real Image');
				this.image = new RealImage(this.imageName);
			}
			
			this.image.displayImage();
		};
	}
}