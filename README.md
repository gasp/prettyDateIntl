# dateme: a jQuery prettydate internationalized plugin

dateme() converts dates to more human-readable expressions. and is international

## Usage

First, load [jQuery](http://jquery.com/) and the plugin:

    <script src="jquery.min.js" type="text/javascript"></script>
    <script src="jquery.dateme.js" type="text/javascript"></script>

Now, let's attach it to your select boxes on DOM ready:

    <pre>
      jQuery(document).ready(function() {
        jQuery('.date').dateme();
      });
    </pre>

This will turn all elements with a `class` of `dateme`:

    <span class="date">2012-05-20 09:50:52</span>
	<span class="date" title="2012-05-20 09:50:52">Sunday, May 20th</span>

into something like that.

	<span class="date">about an hour ago</span>
	<span class="date" title="2012-05-20 09:50:52">about an hour ago</span>

And if you use
	jQuery('.date').dateme({lang:'fr'});
	
It will change it in something like
	<span class="date">il y a une heure</span>


**For more usage and examples**: [http://gasp.github.com/prettyDateIntl/](http://gasp.github.com/prettyDateIntl)

## Inspired by:

* [prettyDate](http://ejohn.org/blog/javascript-pretty-date/) by John Resig
