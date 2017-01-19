## Synopsis

Tired of navigating back to your 'Collection' page to be able to generate a random record search? Worry no more! I have included what is needed to build two extensions. "Extension" is the workhorse that will generate the random search. "Discogs Extension" is the 'trigger' extension ("Extension" works on open or reload. "Discogs Extension" reloads / updates).

## Code Example

Basic JS / JSON. If unfamiliar with how to create extensions, visit https://developer.chrome.com/extensions/manifest to learn more.

## Motivation

See Synopsis :D

## Installation

Once you download the two folders, place were desired and create the extensions to point to the locations. Note: I hid my 'extension' that is being reference in the chrome menu to lessen the confusion on which one works on click. Also, you will of course have to change your file location in the manifest.json and .js files as well as point to the correct extension id in the discogs extension.

## Click The 45 Adapter In The Toolbar...
![45](/extension/4538.png)
## ... And I'll Find You Something To Listen To
![search](https://media.giphy.com/media/ioQmkofNomRfq/giphy.gif)

## .bat File (Windows Users)

Added .bat file to be run as admin. This will remove the annoying 'Developer Extention' message you see everytime you open Chrome. Prior to running this, you'll need to add the following to your **PATH** environment variable:

~~~
%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\
~~~
