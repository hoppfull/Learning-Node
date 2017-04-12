function InstallPackageInDir([string]$path) {
    Push-Location $path
    npm.cmd i
    Pop-Location
}

InstallPackageInDir "./server/"
InstallPackageInDir "./client/source/"
