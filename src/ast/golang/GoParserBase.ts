import { Parser } from "antlr4";
import GoParser from "./GoParser";

export default class GoParserBase extends Parser {

  closingBracket(): boolean {
    const prevTokenType = this.getTokenStream().LA(1);
    return prevTokenType === GoParser.R_CURLY || prevTokenType === GoParser.R_PAREN;
  }
  
}