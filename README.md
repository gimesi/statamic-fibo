# Statamic Fibo
"fibo" is a tiny [Statamic](http://www.statamic.com) plugin for developers that shows the current width of the parent element in which the tag has been inserted. It dynamically (re)calculates the width when the browser window is resized.

## Why using it?
I'm frequently testing different frameworks and adapt them to fit the respective project. This means changing gutter-width, base-font-size, breakpoints, number of columns an element should have, you name it. Since SASS (or any other preprocessor) does the calculation, it works like a charm and we get those clever percentage-based values without even having to scratch our heads. 

But: What if you have to serve responsive/high-res images? All solutions I know rely on a px-based approach to serve the appropriate images (and I don't consider setting large images only to `max-width: 100%;` as "responsive design"). I don't like the idea of fiddling around with a calculator to get the width of an element on certain breakpoints in order to know which image sizes I need for a responsive solution. (Quick! What's the px width of 4 columns on a vanilla [Foundation](http://foundation.zurb.com) installation? And for 8 columns on a tablet  layout if we change the base-font-size? Yeah, well…)

That's why "fibo", an hommage to [Leonardo Fibonacci](http://en.wikipedia.org/wiki/Fibonacci), does the math while we may just jovially resize the browser window and take notes regarding the optimal image widths for the {{ transform }} tags.

## Installation
- Download the zip file and unzip it (or clone the repo) into	`/_add-ons/`.
- Ensure that the folder name is `fibo` and that `pi.fibo.php` and the `js` folder and its contents are in it.

## How to use it
- Insert following code in your template file where you want the calculated width to be displayed: `{{ fibo }}`
- Be happy.

## Optional
- **jQuery**: In case you haven't included jQuery in your website already, you can inject it by adding `addjquery="true"` inside the tag.

## Notes
- I got the idea for "fibo" when I stumbled over Nathan Smith's [Unsemantic Grid](https://github.com/nathansmith/unsemantic). In  the demo he uses this nifty piece of js and I thought this would be useful in my workflow.
- The script is primarily intended for my personal use and is provided **"as is"**. I have no plans of making updates on a regular basis. There's no warranty expressed or implied. Use it at your own risk. 
- If you have suggestions, corrections, or just want to say hello, please feel free to drop me a line on Twitter ([@gimesi](http://twitter.com/gimesi)).