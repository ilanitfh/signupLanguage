@ECHO OFF
ECHO Run this only once, it will download all the dependent modules and install them
ECHO.
ECHO You may have to re-run it if any new modules are added
ECHO.
ECHO Make sure you're connected to SAP-Internet and not SAP-Corporate
ECHO.
pause
ECHO.
ECHO Installing Dependent Modules.......
ECHO.
call npm install
ECHO.
ECHO Installation Complete.
ECHO.
ECHO Starting the Server
ECHO.
npm start