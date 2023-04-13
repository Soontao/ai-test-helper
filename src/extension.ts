// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { createUnitTest } from './commands/createUnitTest';
import { createUnitTestForSymbol } from './commands/createUnitTestForSymbol';
import { setApiKey } from './commands/setApiKey';
import { setBaseUrl } from './commands/setBaseUrl';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'TheoSun-ai-test-helper.create-unit-test',
      () => createUnitTest(context)
    ),
    vscode.commands.registerCommand(
      'TheoSun-ai-test-helper.set-api-key',
      () => setApiKey(context)
    ),
    vscode.commands.registerCommand(
      'TheoSun-ai-test-helper.set-base-url',
      () => setBaseUrl(context)
    ),
    vscode.commands.registerCommand(
      'TheoSun-ai-test-helper.create-unit-test-for-symbol',
      () => createUnitTestForSymbol(context)
    ),
  );
}

// This method is called when your extension is deactivated
export function deactivate() { }
