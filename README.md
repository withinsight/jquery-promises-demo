jquery-promises-demo
====================

Demo of jQuery Promises

jQuery promises allow you to chain callbacks to be executed only after the previous function has completed. Why is this important? If you're building a mobile web app, or a hybrid mobile app, optimizing how files are downloaded by the user is extremely important. If you're pulling content from multiple sources, staggering the download of these files can make your app appear snappy and responsive to users.

This demo pulls four feeds from the TED Blog. If viewed in a browser, you'll see each feed's title written to the page as the download completes. More interesting, if you open up Chrome Developer Tools, and visit the "Network" tab, you'll actually be able to see each AJAX call, and how each subsequent AJAX call is not executed until the previous one completes.

This demo additionally caches the content using HTML5 localStorage, courtesy of Jared Novak's fantastic TotalStorage jQuery plugin. If you visit the "Resources" tab in Chrome Developer Tools, and open the "Local Storage" drop-down, you'll see the JSON data that's been pulled from the TED Blog feeds, stored in your local browser's cache.

This can be an extremely effective solution for pulling content from remote sources, storing it locally for offline usage, and doing both in a way that is optimized for performance and usability.
