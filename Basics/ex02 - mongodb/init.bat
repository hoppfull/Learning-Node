@ECHO OFF

REM Downloads dependencies

CALL typings install

CALL npm install

CALL mkdir data

PAUSE