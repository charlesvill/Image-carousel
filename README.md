# Image-carousel
Minimalist image slider carousel style with navigation indicator dots

### Implementation: 
- The following need to be present in the HTML prior to this script running: 
	1. data-index dataset on each of the circle navigator buttons
	2. 4 images with the same size dimensions on a 1:1 aspect ratio
		- Any desire to change this will need to mess with the CSS file
- To initialize the carousel: 
	1. import 'initializeImgCarousel' from './path'
	2. Assign const variable to the function passing through the following in this order: 
		- className for circle buttons (they all have to share one className)
		- className for the slide container (that houses the photos)
		- className for images (again, need to share one className)
		- Size of the images (hypothetically if they're all atleast the same width, you should be fine)
	3. You should be good to go!
