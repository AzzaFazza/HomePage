HomePage
========
HomePage is an Application that enables users to setup a homepage on their browser with all their favourite webpages. 

As the project is open source users can alter the CSS, HTML and Javascript in order to alter the pages they want displayed.

To use, alter your browser settings to open index.html on startup.

Here is an article explaining how: 
http://www.pcworld.com/article/241716/how_to_change_your_web_browser_home_page.html

You can drag and resize the different windows around within the browser. 

To add another website insert:
```html
<div class="window noselect" id="html">
  <div class="pew">BBC</div>
  <div class="container">
  	<iframe width="490" height="290" src="http://www.bbc.com" style="-webkit-transform:scale(1.0);-moz-transform-scale(1.0);"></iframe>
  </div>
```
into index.html

![](http://imgur.com/fJvaaTI.jpg)
