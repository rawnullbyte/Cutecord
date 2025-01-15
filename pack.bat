@echo off
REM Check if a folder is dropped onto the batch file
if "%~1"=="" (
    echo Drag and drop a folder onto this script to pack it into an .asar file.
    pause
    exit /b
)

REM Get the full path of the dropped folder
set "inputFolder=%~1"

REM Check if the dropped item is a folder
if not exist "%inputFolder%\*" (
    echo The dropped item is not a valid folder.
    pause
    exit /b
)

REM Define the output .asar file (same as folder name with .asar extension)
set "asarFile=%~dpn1.asar"

REM Ensure the .asar file doesn't already exist
if exist "%asarFile%" (
    echo The output file "%asarFile%" already exists.
    echo Please remove it or use a different folder.
    pause
    exit /b
)

REM Pack the folder into an .asar file
echo Packing "%inputFolder%" to "%asarFile%"...
npx asar pack "%inputFolder%" "%asarFile%"

REM Check for success
if errorlevel 1 (
    echo Packing failed. Make sure Node.js and the 'asar' package are installed.
    pause
    exit /b
)

echo Packing completed successfully: "%asarFile%"
pause
