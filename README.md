CSugar
==

Keep a computer awake but in a new way, unlike allready impressive applications like Caffeine.

## Modes
CSugar has two modes and an OFF button.

### Do not sleep
Sends a command to the system that breifly changes how much space is needed to keep the mouse awake, in this case being less than most GPUs can even render into view (arround ~0.00000001 of a millimeter)
### Do not suspend
Sends a command to the system that halts demoting the computer's task to freeze the code activity of a program. This can allow to run tasks with the screen in the off mode.

## Distributions
The (current) main version of the application is in ONE format.

### Node, Electron and Binary in Package (Windows)
An exe file with a node.dll file, all of electronJS and comes in a little exe file. 100%  independent

## APIs
This application uses the Voga Archatex framework and the Voga Shared Resource Pipeline.
Also NodeJS, Electron and another API that can be found in the credits.md file.


## Installation
###Version - Sourcecode in Package
1. Ensure you have NodeJS and NPM installed and run the following command.
       $ npm install electron -g 
2. Run the executable file

### Version(s) - Electron & Binary in Package
Ensure you have NodeJS installed.


## Credits
**Main developer** - [Graham Dianaty](http://about.me/grahamdianaty)

**Guy that was an arse on the sidelines** - Jonas
=======
This only exists as a beta for a version I hope to one day release.
Rather then shipping with node.dll and electron pre-installed it relies on EXTERNAL copies
of both node and ElectronJS
REQUIRES both externally.
>>>>>>> wig
