@echo off
REM Check if a file is dropped onto the batch file
if "%~1"=="" (
    echo Drag and drop an .asar file onto this script to unpack it.
    pause
    exit /b
)

REM Get the full path of the dropped file
set "asarFile=%~1"

REM Check if the dropped file has the .asar extension
if /i not "%~x1"==".asar" (
    echo The dropped file is not an .asar file.
    pause
    exit /b
)

REM Define the output directory (same as filename without .asar)
set "outputDir=%~dpn1"

REM Ensure the output directory doesn't already exist
if exist "%outputDir%" (
    echo The output directory "%outputDir%" already exists.
    echo Please remove it or use a different file.
    pause
    exit /b
)

REM Extract the .asar file
echo Extracting "%asarFile%" to "%outputDir%"...
npx asar extract "%asarFile%" "%outputDir%"

REM Check for success
if errorlevel 1 (
    echo Extraction failed. Make sure Node.js and the 'asar' package are installed.
    pause
    exit /b
)

echo Extraction completed successfully.
pause
