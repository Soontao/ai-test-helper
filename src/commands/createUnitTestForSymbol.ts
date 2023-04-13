import path = require('path');
import * as vscode from 'vscode';
import { SYSTEM_MSG_EXPERT_DEVELOPER } from '../prompts/coding';
import { aiResponse, currentFileInformation, firstCodeBlock, getSymbolList, validConfiguration } from "./utils";


export async function createUnitTestForSymbol(context: vscode.ExtensionContext) {
  if (!await validConfiguration(context)) { return; }

  const symbols = await getSymbolList();
  const sym = await vscode.window.showQuickPick(
    symbols.map(sym => ({ label: sym.name })),
    { title: "Please pick one symbol to create unit test" }
  );
  if (!sym) { return; }

  const additionalPrompt = await vscode.window.showInputBox({ title: "any additional prompt for AI?" });

  const { fileType, mdCodeContent } = currentFileInformation();

  vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Window,
      cancellable: false,
      title: 'Generating Unit Test'
    },
    async () => {

      const response = await aiResponse(
        {
          messages: [
            {
              role: "system",
              content: SYSTEM_MSG_EXPERT_DEVELOPER
            },
            {
              role: "user",
              content: `Please help to create unit test for '${sym.label}' in following ${fileType} code:\n${mdCodeContent}\n${additionalPrompt}`
            }
          ]
        },
        context
      );
      if (!response) { return; }

      // extract first group of AI response
      const unitTestContent = firstCodeBlock(response);

      // Show the text document in the right-hand editor pane
      await vscode.window.showTextDocument(
        await vscode.workspace.openTextDocument({ content: unitTestContent, language: fileType }),
        { viewColumn: vscode.ViewColumn.Two }
      );

      await vscode.window.showInformationMessage(
        "please review the generated unit test and copy to correct location"
      );

    });

}