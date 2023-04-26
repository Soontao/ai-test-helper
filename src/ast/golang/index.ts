import GoParser from "./GoParser";
import GoLexer from "./GoLexer";
import { CharStream, CommonTokenStream } from "antlr4";

export function ast(input: string) {
  const chars = new CharStream(input); // replace this with a FileStream as required
  const lexer = new GoLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new GoParser(tokens);
  const tree = parser.sourceFile();
  return tree;
}