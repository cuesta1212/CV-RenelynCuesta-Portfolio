$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
if ($nodeCommand) {
    $nodePath = $nodeCommand.Source
} else {
    $nodePath = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
}
if (-not (Test-Path -LiteralPath $nodePath)) {
    throw 'Node.js is missing. Install Node.js LTS and restart VS Code.'
}
if (-not (Test-Path -LiteralPath 'node_modules\vite\bin\vite.js')) {
    throw 'Project dependencies are missing. Run npm install in the project folder.'
}
& $nodePath 'node_modules\vite\bin\vite.js' --host 127.0.0.1 --port 5173 --strictPort
exit $LASTEXITCODE
