// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { createUnitTest } from './commands/createUnitTest';
import { createUnitTestForSymbol } from './commands/createUnitTestForSymbol';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('TheoSun-ai-test-helper.create-unit-test', createUnitTest),
		vscode.commands.registerCommand('TheoSun-ai-test-helper.create-unit-test-for-symbol', createUnitTestForSymbol),
	);
}

// This method is called when your extension is deactivated
export function deactivate() { }
