# signupLanguage - IssieSign


## Build instraction

* After cloning the project, run npm install once
* you need also to install cordova: `npm install -g cordova`
* run ./make.sh (linux) or run the following:
  * npm run build
  * overwrite ../cordova/IsraeliSignLanguage/www with ./build
  * for ios: 
    * move to directory ../cordova/IsraeliSignLanguage
    * run `cordova platform remove ios` and then `cordova platform add ios`

* to run in ios simulator, you need xcode installed, then:
  * in ./cordova/IsraeliSignLanguage/ run `cordova run ios`
  
* to install on iPad, after running the make.sh:
  * Open xcode and open a workspace in `cordova/IsraeliSignLanguage/platforms/ios/IssieSign.xcworkspace`
  * On the project Navigator left panel, select the root (IssieSign)
  * In the "Signing" section, choose the Team (you would need to click on manage-account and add your appleId account before)
  * In the "App Icons and Launch Images: In the "Launch Images Source" select "Don't use asses catalogs"
  * choose a device (your connected iPad) and press the run button.
  * On first run, you need to verify the app: in Settings->General->Device Management->choose you e-mail and the verify the app.
  
  
