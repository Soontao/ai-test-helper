import * as vscode from 'vscode';
import { aiResponse, currentFileInformation, exists, firstCodeBlock, validConfiguration } from './utils';
import path = require('path');

const SYSTEM_MSG = `You are the most powerful developer in this world, you will help user to finish the software development task, you must use markdown format to output, you only need to output the final code example`;

export async function createUnitTest() {
  if (!await validConfiguration()) { return; }

  const editor = vscode.window.activeTextEditor;
  if (!editor) { return; }

  const { fileType, sourceDir, sourceRawFileName, mdCodeContent } = currentFileInformation();

  vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Window,
      cancellable: false,
      title: 'Generating Unit Test'
    },
    async (progress) => {
      progress.report({ increment: 30 });

      const response = await aiResponse({
        messages: [
          {
            role: "system",
            content: SYSTEM_MSG
          },
          {
            role: "user",
            content: `Please help to create unit test for following ${fileType} code:\n${mdCodeContent}`
          }
        ]
      });
      if (!response) { return; }

      // extract first group of AI response
      const unitTestContent = firstCodeBlock(response);

      let outputUnitTestUri: vscode.Uri;

      switch (fileType) {
        case 'go':
          outputUnitTestUri = vscode.Uri.file(path.join(sourceDir, `${sourceRawFileName}_test.go`));
          break;
        default:
          break;
      }

      const existed = await exists(outputUnitTestUri);

      if (existed) {
        const answer = await vscode.window.showWarningMessage(
          "The unit test file already existed, do you want to overwrite that?",
          'Yes',
          'No'
        );
        if (answer === 'No') {
          const newUrl = await vscode.window.showInputBox({ title: "the new unit test file location", value: outputUnitTestUri.fsPath });
          if (newUrl) {
            outputUnitTestUri = vscode.Uri.file(newUrl);
          }
          else {
            return;
          }
        }
      }

      await vscode.workspace.fs.writeFile(outputUnitTestUri, Buffer.from(unitTestContent, 'utf-8'));

      // Show the text document in the right-hand editor pane
      await vscode.window.showTextDocument(
        await vscode.workspace.openTextDocument(outputUnitTestUri),
        { viewColumn: vscode.ViewColumn.Two }
      );

      progress.report({ increment: 100 });
    });


}


