import * as vscode from 'vscode';
import { getSymbolList, validConfiguration } from "./utils";


export async function createUnitTestForSymbol() {
  if (!await validConfiguration()) { return; }

  const symbols = await getSymbolList();
  await vscode.window.showQuickPick(symbols.map(sym => ({ label: sym.name })));
}