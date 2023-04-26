// Generated from GoParser.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
  ATN,
  ATNDeserializer, DecisionState, DFA, FailedPredicateException,
  RecognitionException, NoViableAltException, BailErrorStrategy,
  Parser, ParserATNSimulator,
  RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
  TerminalNode, RuleNode,
  Token, TokenStream,
  Interval, IntervalSet,
} from 'antlr4';
import GoParserListener from "./GoParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import GoParserBase from './GoParserBase';

export default class GoParser extends GoParserBase {
  public static readonly BREAK = 1;
  public static readonly DEFAULT = 2;
  public static readonly FUNC = 3;
  public static readonly INTERFACE = 4;
  public static readonly SELECT = 5;
  public static readonly CASE = 6;
  public static readonly DEFER = 7;
  public static readonly GO = 8;
  public static readonly MAP = 9;
  public static readonly STRUCT = 10;
  public static readonly CHAN = 11;
  public static readonly ELSE = 12;
  public static readonly GOTO = 13;
  public static readonly PACKAGE = 14;
  public static readonly SWITCH = 15;
  public static readonly CONST = 16;
  public static readonly FALLTHROUGH = 17;
  public static readonly IF = 18;
  public static readonly RANGE = 19;
  public static readonly TYPE = 20;
  public static readonly CONTINUE = 21;
  public static readonly FOR = 22;
  public static readonly IMPORT = 23;
  public static readonly RETURN = 24;
  public static readonly VAR = 25;
  public static readonly NIL_LIT = 26;
  public static readonly IDENTIFIER = 27;
  public static readonly L_PAREN = 28;
  public static readonly R_PAREN = 29;
  public static readonly L_CURLY = 30;
  public static readonly R_CURLY = 31;
  public static readonly L_BRACKET = 32;
  public static readonly R_BRACKET = 33;
  public static readonly ASSIGN = 34;
  public static readonly COMMA = 35;
  public static readonly SEMI = 36;
  public static readonly COLON = 37;
  public static readonly DOT = 38;
  public static readonly PLUS_PLUS = 39;
  public static readonly MINUS_MINUS = 40;
  public static readonly DECLARE_ASSIGN = 41;
  public static readonly ELLIPSIS = 42;
  public static readonly LOGICAL_OR = 43;
  public static readonly LOGICAL_AND = 44;
  public static readonly EQUALS = 45;
  public static readonly NOT_EQUALS = 46;
  public static readonly LESS = 47;
  public static readonly LESS_OR_EQUALS = 48;
  public static readonly GREATER = 49;
  public static readonly GREATER_OR_EQUALS = 50;
  public static readonly OR = 51;
  public static readonly DIV = 52;
  public static readonly MOD = 53;
  public static readonly LSHIFT = 54;
  public static readonly RSHIFT = 55;
  public static readonly BIT_CLEAR = 56;
  public static readonly EXCLAMATION = 57;
  public static readonly PLUS = 58;
  public static readonly MINUS = 59;
  public static readonly CARET = 60;
  public static readonly STAR = 61;
  public static readonly AMPERSAND = 62;
  public static readonly RECEIVE = 63;
  public static readonly DECIMAL_LIT = 64;
  public static readonly BINARY_LIT = 65;
  public static readonly OCTAL_LIT = 66;
  public static readonly HEX_LIT = 67;
  public static readonly FLOAT_LIT = 68;
  public static readonly DECIMAL_FLOAT_LIT = 69;
  public static readonly HEX_FLOAT_LIT = 70;
  public static readonly IMAGINARY_LIT = 71;
  public static readonly RUNE_LIT = 72;
  public static readonly BYTE_VALUE = 73;
  public static readonly OCTAL_BYTE_VALUE = 74;
  public static readonly HEX_BYTE_VALUE = 75;
  public static readonly LITTLE_U_VALUE = 76;
  public static readonly BIG_U_VALUE = 77;
  public static readonly RAW_STRING_LIT = 78;
  public static readonly INTERPRETED_STRING_LIT = 79;
  public static readonly WS = 80;
  public static readonly COMMENT = 81;
  public static readonly TERMINATOR = 82;
  public static readonly LINE_COMMENT = 83;
  public static readonly WS_NLSEMI = 84;
  public static readonly COMMENT_NLSEMI = 85;
  public static readonly LINE_COMMENT_NLSEMI = 86;
  public static readonly EOS = 87;
  public static readonly OTHER = 88;
  public static readonly EOF = Token.EOF;
  public static readonly RULE_sourceFile = 0;
  public static readonly RULE_packageClause = 1;
  public static readonly RULE_importDecl = 2;
  public static readonly RULE_importSpec = 3;
  public static readonly RULE_importPath = 4;
  public static readonly RULE_declaration = 5;
  public static readonly RULE_constDecl = 6;
  public static readonly RULE_constSpec = 7;
  public static readonly RULE_identifierList = 8;
  public static readonly RULE_expressionList = 9;
  public static readonly RULE_typeDecl = 10;
  public static readonly RULE_typeSpec = 11;
  public static readonly RULE_functionDecl = 12;
  public static readonly RULE_methodDecl = 13;
  public static readonly RULE_receiver = 14;
  public static readonly RULE_varDecl = 15;
  public static readonly RULE_varSpec = 16;
  public static readonly RULE_block = 17;
  public static readonly RULE_statementList = 18;
  public static readonly RULE_statement = 19;
  public static readonly RULE_simpleStmt = 20;
  public static readonly RULE_expressionStmt = 21;
  public static readonly RULE_sendStmt = 22;
  public static readonly RULE_incDecStmt = 23;
  public static readonly RULE_assignment = 24;
  public static readonly RULE_assign_op = 25;
  public static readonly RULE_shortVarDecl = 26;
  public static readonly RULE_emptyStmt = 27;
  public static readonly RULE_labeledStmt = 28;
  public static readonly RULE_returnStmt = 29;
  public static readonly RULE_breakStmt = 30;
  public static readonly RULE_continueStmt = 31;
  public static readonly RULE_gotoStmt = 32;
  public static readonly RULE_fallthroughStmt = 33;
  public static readonly RULE_deferStmt = 34;
  public static readonly RULE_ifStmt = 35;
  public static readonly RULE_switchStmt = 36;
  public static readonly RULE_exprSwitchStmt = 37;
  public static readonly RULE_exprCaseClause = 38;
  public static readonly RULE_exprSwitchCase = 39;
  public static readonly RULE_typeSwitchStmt = 40;
  public static readonly RULE_typeSwitchGuard = 41;
  public static readonly RULE_typeCaseClause = 42;
  public static readonly RULE_typeSwitchCase = 43;
  public static readonly RULE_typeList = 44;
  public static readonly RULE_selectStmt = 45;
  public static readonly RULE_commClause = 46;
  public static readonly RULE_commCase = 47;
  public static readonly RULE_recvStmt = 48;
  public static readonly RULE_forStmt = 49;
  public static readonly RULE_forClause = 50;
  public static readonly RULE_rangeClause = 51;
  public static readonly RULE_goStmt = 52;
  public static readonly RULE_type_ = 53;
  public static readonly RULE_typeName = 54;
  public static readonly RULE_typeLit = 55;
  public static readonly RULE_arrayType = 56;
  public static readonly RULE_arrayLength = 57;
  public static readonly RULE_elementType = 58;
  public static readonly RULE_pointerType = 59;
  public static readonly RULE_interfaceType = 60;
  public static readonly RULE_sliceType = 61;
  public static readonly RULE_mapType = 62;
  public static readonly RULE_channelType = 63;
  public static readonly RULE_methodSpec = 64;
  public static readonly RULE_functionType = 65;
  public static readonly RULE_signature = 66;
  public static readonly RULE_result = 67;
  public static readonly RULE_parameters = 68;
  public static readonly RULE_parameterDecl = 69;
  public static readonly RULE_expression = 70;
  public static readonly RULE_primaryExpr = 71;
  public static readonly RULE_conversion = 72;
  public static readonly RULE_nonNamedType = 73;
  public static readonly RULE_operand = 74;
  public static readonly RULE_literal = 75;
  public static readonly RULE_basicLit = 76;
  public static readonly RULE_integer = 77;
  public static readonly RULE_operandName = 78;
  public static readonly RULE_qualifiedIdent = 79;
  public static readonly RULE_compositeLit = 80;
  public static readonly RULE_literalType = 81;
  public static readonly RULE_literalValue = 82;
  public static readonly RULE_elementList = 83;
  public static readonly RULE_keyedElement = 84;
  public static readonly RULE_key = 85;
  public static readonly RULE_element = 86;
  public static readonly RULE_structType = 87;
  public static readonly RULE_fieldDecl = 88;
  public static readonly RULE_string_ = 89;
  public static readonly RULE_embeddedField = 90;
  public static readonly RULE_functionLit = 91;
  public static readonly RULE_index = 92;
  public static readonly RULE_slice_ = 93;
  public static readonly RULE_typeAssertion = 94;
  public static readonly RULE_arguments = 95;
  public static readonly RULE_methodExpr = 96;
  public static readonly RULE_receiverType = 97;
  public static readonly RULE_eos = 98;
  public static readonly literalNames: (string | null)[] = [ null, "'break'", 
    "'default'", 
    "'func'", "'interface'", 
    "'select'", 
    "'case'", "'defer'", 
    "'go'", "'map'", 
    "'struct'", 
    "'chan'", "'else'", 
    "'goto'", "'package'", 
    "'switch'", 
    "'const'", "'fallthrough'", 
    "'if'", "'range'", 
    "'type'", "'continue'", 
    "'for'", "'import'", 
    "'return'", 
    "'var'", "'nil'", 
    null, "'('", 
    "')'", "'{'", 
    "'}'", "'['", 
    "']'", "'='", 
    "','", "';'", 
    "':'", "'.'", 
    "'++'", "'--'", 
    "':='", "'...'", 
    "'||'", "'&&'", 
    "'=='", "'!='", 
    "'<'", "'<='", 
    "'>'", "'>='", 
    "'|'", "'/'", 
    "'%'", "'<<'", 
    "'>>'", "'&^'", 
    "'!'", "'+'", 
    "'-'", "'^'", 
    "'*'", "'&'", 
    "'<-'" ];
  public static readonly symbolicNames: (string | null)[] = [ null, "BREAK", 
    "DEFAULT", 
    "FUNC", "INTERFACE", 
    "SELECT", "CASE", 
    "DEFER", "GO", 
    "MAP", "STRUCT", 
    "CHAN", "ELSE", 
    "GOTO", "PACKAGE", 
    "SWITCH", "CONST", 
    "FALLTHROUGH", 
    "IF", "RANGE", 
    "TYPE", "CONTINUE", 
    "FOR", "IMPORT", 
    "RETURN", "VAR", 
    "NIL_LIT", 
    "IDENTIFIER", 
    "L_PAREN", 
    "R_PAREN", 
    "L_CURLY", 
    "R_CURLY", 
    "L_BRACKET", 
    "R_BRACKET", 
    "ASSIGN", "COMMA", 
    "SEMI", "COLON", 
    "DOT", "PLUS_PLUS", 
    "MINUS_MINUS", 
    "DECLARE_ASSIGN", 
    "ELLIPSIS", 
    "LOGICAL_OR", 
    "LOGICAL_AND", 
    "EQUALS", "NOT_EQUALS", 
    "LESS", "LESS_OR_EQUALS", 
    "GREATER", 
    "GREATER_OR_EQUALS", 
    "OR", "DIV", 
    "MOD", "LSHIFT", 
    "RSHIFT", "BIT_CLEAR", 
    "EXCLAMATION", 
    "PLUS", "MINUS", 
    "CARET", "STAR", 
    "AMPERSAND", 
    "RECEIVE", 
    "DECIMAL_LIT", 
    "BINARY_LIT", 
    "OCTAL_LIT", 
    "HEX_LIT", 
    "FLOAT_LIT", 
    "DECIMAL_FLOAT_LIT", 
    "HEX_FLOAT_LIT", 
    "IMAGINARY_LIT", 
    "RUNE_LIT", 
    "BYTE_VALUE", 
    "OCTAL_BYTE_VALUE", 
    "HEX_BYTE_VALUE", 
    "LITTLE_U_VALUE", 
    "BIG_U_VALUE", 
    "RAW_STRING_LIT", 
    "INTERPRETED_STRING_LIT", 
    "WS", "COMMENT", 
    "TERMINATOR", 
    "LINE_COMMENT", 
    "WS_NLSEMI", 
    "COMMENT_NLSEMI", 
    "LINE_COMMENT_NLSEMI", 
    "EOS", "OTHER" ];
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "sourceFile", "packageClause", "importDecl", "importSpec", "importPath", 
    "declaration", "constDecl", "constSpec", "identifierList", "expressionList", 
    "typeDecl", "typeSpec", "functionDecl", "methodDecl", "receiver", "varDecl", 
    "varSpec", "block", "statementList", "statement", "simpleStmt", "expressionStmt", 
    "sendStmt", "incDecStmt", "assignment", "assign_op", "shortVarDecl", "emptyStmt", 
    "labeledStmt", "returnStmt", "breakStmt", "continueStmt", "gotoStmt", 
    "fallthroughStmt", "deferStmt", "ifStmt", "switchStmt", "exprSwitchStmt", 
    "exprCaseClause", "exprSwitchCase", "typeSwitchStmt", "typeSwitchGuard", 
    "typeCaseClause", "typeSwitchCase", "typeList", "selectStmt", "commClause", 
    "commCase", "recvStmt", "forStmt", "forClause", "rangeClause", "goStmt", 
    "type_", "typeName", "typeLit", "arrayType", "arrayLength", "elementType", 
    "pointerType", "interfaceType", "sliceType", "mapType", "channelType", 
    "methodSpec", "functionType", "signature", "result", "parameters", "parameterDecl", 
    "expression", "primaryExpr", "conversion", "nonNamedType", "operand", 
    "literal", "basicLit", "integer", "operandName", "qualifiedIdent", "compositeLit", 
    "literalType", "literalValue", "elementList", "keyedElement", "key", "element", 
    "structType", "fieldDecl", "string_", "embeddedField", "functionLit", 
    "index", "slice_", "typeAssertion", "arguments", "methodExpr", "receiverType", 
    "eos",
  ];
  public get grammarFileName(): string { return "GoParser.g4"; }
  public get literalNames(): (string | null)[] { return GoParser.literalNames; }
  public get symbolicNames(): (string | null)[] { return GoParser.symbolicNames; }
  public get ruleNames(): string[] { return GoParser.ruleNames; }
  public get serializedATN(): number[] { return GoParser._serializedATN; }

  protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(this, GoParser._ATN, GoParser.DecisionsToDFA, new PredictionContextCache());
  }
  // @RuleVersion(0)
  public sourceFile(): SourceFileContext {
    let localctx: SourceFileContext = new SourceFileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GoParser.RULE_sourceFile);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 198;
        this.packageClause();
        this.state = 199;
        this.eos();
        this.state = 205;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la===23) {
          {
            {
              this.state = 200;
              this.importDecl();
              this.state = 201;
              this.eos();
            }
          }
          this.state = 207;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 217;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 34668552) !== 0)) {
          {
            {
              this.state = 211;
              this._errHandler.sync(this);
              switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
              case 1:
                {
                  this.state = 208;
                  this.functionDecl();
                }
                break;
              case 2:
                {
                  this.state = 209;
                  this.methodDecl();
                }
                break;
              case 3:
                {
                  this.state = 210;
                  this.declaration();
                }
                break;
              }
              this.state = 213;
              this.eos();
            }
          }
          this.state = 219;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 220;
        this.match(GoParser.EOF);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public packageClause(): PackageClauseContext {
    let localctx: PackageClauseContext = new PackageClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GoParser.RULE_packageClause);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 222;
        this.match(GoParser.PACKAGE);
        this.state = 223;
        localctx._packageName = this.match(GoParser.IDENTIFIER);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public importDecl(): ImportDeclContext {
    let localctx: ImportDeclContext = new ImportDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GoParser.RULE_importDecl);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 225;
        this.match(GoParser.IMPORT);
        this.state = 237;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case 27:
        case 38:
        case 78:
        case 79:
          {
            this.state = 226;
            this.importSpec();
          }
          break;
        case 28:
          {
            this.state = 227;
            this.match(GoParser.L_PAREN);
            this.state = 233;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===27 || _la===38 || _la===78 || _la===79) {
              {
                {
                  this.state = 228;
                  this.importSpec();
                  this.state = 229;
                  this.eos();
                }
              }
              this.state = 235;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 236;
            this.match(GoParser.R_PAREN);
          }
          break;
        default:
          throw new NoViableAltException(this);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public importSpec(): ImportSpecContext {
    let localctx: ImportSpecContext = new ImportSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, GoParser.RULE_importSpec);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 240;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la===27 || _la===38) {
          {
            this.state = 239;
            localctx._alias = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===27 || _la===38)) {
				    localctx._alias = this._errHandler.recoverInline(this);
            }
            else {
              this._errHandler.reportMatch(this);
				    this.consume();
            }
          }
        }

        this.state = 242;
        this.importPath();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public importPath(): ImportPathContext {
    let localctx: ImportPathContext = new ImportPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, GoParser.RULE_importPath);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 244;
        this.string_();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public declaration(): DeclarationContext {
    let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, GoParser.RULE_declaration);
    try {
      this.state = 249;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
      case 16:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 246;
          this.constDecl();
        }
        break;
      case 20:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 247;
          this.typeDecl();
        }
        break;
      case 25:
        this.enterOuterAlt(localctx, 3);
        {
          this.state = 248;
          this.varDecl();
        }
        break;
      default:
        throw new NoViableAltException(this);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public constDecl(): ConstDeclContext {
    let localctx: ConstDeclContext = new ConstDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, GoParser.RULE_constDecl);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 251;
        this.match(GoParser.CONST);
        this.state = 263;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case 27:
          {
            this.state = 252;
            this.constSpec();
          }
          break;
        case 28:
          {
            this.state = 253;
            this.match(GoParser.L_PAREN);
            this.state = 259;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===27) {
              {
                {
                  this.state = 254;
                  this.constSpec();
                  this.state = 255;
                  this.eos();
                }
              }
              this.state = 261;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 262;
            this.match(GoParser.R_PAREN);
          }
          break;
        default:
          throw new NoViableAltException(this);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public constSpec(): ConstSpecContext {
    let localctx: ConstSpecContext = new ConstSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, GoParser.RULE_constSpec);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 265;
        this.identifierList();
        this.state = 271;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
        case 1:
          {
            this.state = 267;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402656792) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2684354561) !== 0)) {
              {
                this.state = 266;
                this.type_();
              }
            }

            this.state = 269;
            this.match(GoParser.ASSIGN);
            this.state = 270;
            this.expressionList();
          }
          break;
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public identifierList(): IdentifierListContext {
    let localctx: IdentifierListContext = new IdentifierListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, GoParser.RULE_identifierList);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 273;
        this.match(GoParser.IDENTIFIER);
        this.state = 278;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 274;
                this.match(GoParser.COMMA);
                this.state = 275;
                this.match(GoParser.IDENTIFIER);
              }
            }
          }
          this.state = 280;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public expressionList(): ExpressionListContext {
    let localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, GoParser.RULE_expressionList);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 281;
        this.expression(0);
        this.state = 286;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 282;
                this.match(GoParser.COMMA);
                this.state = 283;
                this.expression(0);
              }
            }
          }
          this.state = 288;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public typeDecl(): TypeDeclContext {
    let localctx: TypeDeclContext = new TypeDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, GoParser.RULE_typeDecl);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 289;
        this.match(GoParser.TYPE);
        this.state = 301;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case 27:
          {
            this.state = 290;
            this.typeSpec();
          }
          break;
        case 28:
          {
            this.state = 291;
            this.match(GoParser.L_PAREN);
            this.state = 297;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===27) {
              {
                {
                  this.state = 292;
                  this.typeSpec();
                  this.state = 293;
                  this.eos();
                }
              }
              this.state = 299;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 300;
            this.match(GoParser.R_PAREN);
          }
          break;
        default:
          throw new NoViableAltException(this);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public typeSpec(): TypeSpecContext {
    let localctx: TypeSpecContext = new TypeSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, GoParser.RULE_typeSpec);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 303;
        this.match(GoParser.IDENTIFIER);
        this.state = 305;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la===34) {
          {
            this.state = 304;
            this.match(GoParser.ASSIGN);
          }
        }

        this.state = 307;
        this.type_();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public functionDecl(): FunctionDeclContext {
    let localctx: FunctionDeclContext = new FunctionDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, GoParser.RULE_functionDecl);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 309;
        this.match(GoParser.FUNC);
        this.state = 310;
        this.match(GoParser.IDENTIFIER);
        {
          this.state = 311;
          this.signature();
          this.state = 313;
          this._errHandler.sync(this);
          switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
          case 1:
            {
              this.state = 312;
              this.block();
            }
            break;
          }
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public methodDecl(): MethodDeclContext {
    let localctx: MethodDeclContext = new MethodDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, GoParser.RULE_methodDecl);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 315;
        this.match(GoParser.FUNC);
        this.state = 316;
        this.receiver();
        this.state = 317;
        this.match(GoParser.IDENTIFIER);
        {
          this.state = 318;
          this.signature();
          this.state = 320;
          this._errHandler.sync(this);
          switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
          case 1:
            {
              this.state = 319;
              this.block();
            }
            break;
          }
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public receiver(): ReceiverContext {
    let localctx: ReceiverContext = new ReceiverContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, GoParser.RULE_receiver);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 322;
        this.parameters();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public varDecl(): VarDeclContext {
    let localctx: VarDeclContext = new VarDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, GoParser.RULE_varDecl);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 324;
        this.match(GoParser.VAR);
        this.state = 336;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case 27:
          {
            this.state = 325;
            this.varSpec();
          }
          break;
        case 28:
          {
            this.state = 326;
            this.match(GoParser.L_PAREN);
            this.state = 332;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===27) {
              {
                {
                  this.state = 327;
                  this.varSpec();
                  this.state = 328;
                  this.eos();
                }
              }
              this.state = 334;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 335;
            this.match(GoParser.R_PAREN);
          }
          break;
        default:
          throw new NoViableAltException(this);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public varSpec(): VarSpecContext {
    let localctx: VarSpecContext = new VarSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, GoParser.RULE_varSpec);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 338;
        this.identifierList();
        this.state = 346;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case 3:
        case 4:
        case 9:
        case 10:
        case 11:
        case 27:
        case 28:
        case 32:
        case 61:
        case 63:
          {
            this.state = 339;
            this.type_();
            this.state = 342;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
            case 1:
              {
                this.state = 340;
                this.match(GoParser.ASSIGN);
                this.state = 341;
                this.expressionList();
              }
              break;
            }
          }
          break;
        case 34:
          {
            this.state = 344;
            this.match(GoParser.ASSIGN);
            this.state = 345;
            this.expressionList();
          }
          break;
        default:
          throw new NoViableAltException(this);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public block(): BlockContext {
    let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, GoParser.RULE_block);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 348;
        this.match(GoParser.L_CURLY);
        this.state = 350;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
        case 1:
          {
            this.state = 349;
            this.statementList();
          }
          break;
        }
        this.state = 352;
        this.match(GoParser.R_CURLY);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public statementList(): StatementListContext {
    let localctx: StatementListContext = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, GoParser.RULE_statementList);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 366;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
          case 1:
            {
              {
                this.state = 361;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
                case 1:
                  {
                    this.state = 355;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===36) {
                      {
                        this.state = 354;
                        this.match(GoParser.SEMI);
                      }
                    }

                  }
                  break;
                case 2:
                  {
                    this.state = 358;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===87) {
                      {
                        this.state = 357;
                        this.match(GoParser.EOS);
                      }
                    }

                  }
                  break;
                case 3:
                  {
                    this.state = 360;
                    if (!(this.closingBracket())) {
                      throw this.createFailedPredicateException("this.closingBracket()");
                    }
                  }
                  break;
                }
                this.state = 363;
                this.statement();
                this.state = 364;
                this.eos();
              }
            }
            break;
          default:
            throw new NoViableAltException(this);
          }
          this.state = 368;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, GoParser.RULE_statement);
    try {
      this.state = 385;
      this._errHandler.sync(this);
      switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 370;
          this.declaration();
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 371;
          this.labeledStmt();
        }
        break;
      case 3:
        this.enterOuterAlt(localctx, 3);
        {
          this.state = 372;
          this.simpleStmt();
        }
        break;
      case 4:
        this.enterOuterAlt(localctx, 4);
        {
          this.state = 373;
          this.goStmt();
        }
        break;
      case 5:
        this.enterOuterAlt(localctx, 5);
        {
          this.state = 374;
          this.returnStmt();
        }
        break;
      case 6:
        this.enterOuterAlt(localctx, 6);
        {
          this.state = 375;
          this.breakStmt();
        }
        break;
      case 7:
        this.enterOuterAlt(localctx, 7);
        {
          this.state = 376;
          this.continueStmt();
        }
        break;
      case 8:
        this.enterOuterAlt(localctx, 8);
        {
          this.state = 377;
          this.gotoStmt();
        }
        break;
      case 9:
        this.enterOuterAlt(localctx, 9);
        {
          this.state = 378;
          this.fallthroughStmt();
        }
        break;
      case 10:
        this.enterOuterAlt(localctx, 10);
        {
          this.state = 379;
          this.block();
        }
        break;
      case 11:
        this.enterOuterAlt(localctx, 11);
        {
          this.state = 380;
          this.ifStmt();
        }
        break;
      case 12:
        this.enterOuterAlt(localctx, 12);
        {
          this.state = 381;
          this.switchStmt();
        }
        break;
      case 13:
        this.enterOuterAlt(localctx, 13);
        {
          this.state = 382;
          this.selectStmt();
        }
        break;
      case 14:
        this.enterOuterAlt(localctx, 14);
        {
          this.state = 383;
          this.forStmt();
        }
        break;
      case 15:
        this.enterOuterAlt(localctx, 15);
        {
          this.state = 384;
          this.deferStmt();
        }
        break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public simpleStmt(): SimpleStmtContext {
    let localctx: SimpleStmtContext = new SimpleStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, GoParser.RULE_simpleStmt);
    try {
      this.state = 392;
      this._errHandler.sync(this);
      switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 387;
          this.sendStmt();
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 388;
          this.incDecStmt();
        }
        break;
      case 3:
        this.enterOuterAlt(localctx, 3);
        {
          this.state = 389;
          this.assignment();
        }
        break;
      case 4:
        this.enterOuterAlt(localctx, 4);
        {
          this.state = 390;
          this.expressionStmt();
        }
        break;
      case 5:
        this.enterOuterAlt(localctx, 5);
        {
          this.state = 391;
          this.shortVarDecl();
        }
        break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public expressionStmt(): ExpressionStmtContext {
    let localctx: ExpressionStmtContext = new ExpressionStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, GoParser.RULE_expressionStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 394;
        this.expression(0);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public sendStmt(): SendStmtContext {
    let localctx: SendStmtContext = new SendStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, GoParser.RULE_sendStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 396;
        localctx._channel = this.expression(0);
        this.state = 397;
        this.match(GoParser.RECEIVE);
        this.state = 398;
        this.expression(0);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public incDecStmt(): IncDecStmtContext {
    let localctx: IncDecStmtContext = new IncDecStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, GoParser.RULE_incDecStmt);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 400;
        this.expression(0);
        this.state = 401;
        _la = this._input.LA(1);
        if(!(_la===39 || _la===40)) {
          this._errHandler.recoverInline(this);
        }
        else {
          this._errHandler.reportMatch(this);
			    this.consume();
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public assignment(): AssignmentContext {
    let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, GoParser.RULE_assignment);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 403;
        this.expressionList();
        this.state = 404;
        this.assign_op();
        this.state = 405;
        this.expressionList();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public assign_op(): Assign_opContext {
    let localctx: Assign_opContext = new Assign_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, GoParser.RULE_assign_op);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 408;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 4031) !== 0)) {
          {
            this.state = 407;
            _la = this._input.LA(1);
            if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 4031) !== 0))) {
              this._errHandler.recoverInline(this);
            }
            else {
              this._errHandler.reportMatch(this);
				    this.consume();
            }
          }
        }

        this.state = 410;
        this.match(GoParser.ASSIGN);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public shortVarDecl(): ShortVarDeclContext {
    let localctx: ShortVarDeclContext = new ShortVarDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, GoParser.RULE_shortVarDecl);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 412;
        this.identifierList();
        this.state = 413;
        this.match(GoParser.DECLARE_ASSIGN);
        this.state = 414;
        this.expressionList();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public emptyStmt(): EmptyStmtContext {
    let localctx: EmptyStmtContext = new EmptyStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, GoParser.RULE_emptyStmt);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 416;
        _la = this._input.LA(1);
        if(!(_la===36 || _la===87)) {
          this._errHandler.recoverInline(this);
        }
        else {
          this._errHandler.reportMatch(this);
			    this.consume();
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public labeledStmt(): LabeledStmtContext {
    let localctx: LabeledStmtContext = new LabeledStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, GoParser.RULE_labeledStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 418;
        this.match(GoParser.IDENTIFIER);
        this.state = 419;
        this.match(GoParser.COLON);
        this.state = 421;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
        case 1:
          {
            this.state = 420;
            this.statement();
          }
          break;
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public returnStmt(): ReturnStmtContext {
    let localctx: ReturnStmtContext = new ReturnStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, GoParser.RULE_returnStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 423;
        this.match(GoParser.RETURN);
        this.state = 425;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
        case 1:
          {
            this.state = 424;
            this.expressionList();
          }
          break;
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public breakStmt(): BreakStmtContext {
    let localctx: BreakStmtContext = new BreakStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, GoParser.RULE_breakStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 427;
        this.match(GoParser.BREAK);
        this.state = 429;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
        case 1:
          {
            this.state = 428;
            this.match(GoParser.IDENTIFIER);
          }
          break;
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public continueStmt(): ContinueStmtContext {
    let localctx: ContinueStmtContext = new ContinueStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, GoParser.RULE_continueStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 431;
        this.match(GoParser.CONTINUE);
        this.state = 433;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
        case 1:
          {
            this.state = 432;
            this.match(GoParser.IDENTIFIER);
          }
          break;
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public gotoStmt(): GotoStmtContext {
    let localctx: GotoStmtContext = new GotoStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, GoParser.RULE_gotoStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 435;
        this.match(GoParser.GOTO);
        this.state = 436;
        this.match(GoParser.IDENTIFIER);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public fallthroughStmt(): FallthroughStmtContext {
    let localctx: FallthroughStmtContext = new FallthroughStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, GoParser.RULE_fallthroughStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 438;
        this.match(GoParser.FALLTHROUGH);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public deferStmt(): DeferStmtContext {
    let localctx: DeferStmtContext = new DeferStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, GoParser.RULE_deferStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 440;
        this.match(GoParser.DEFER);
        this.state = 441;
        this.expression(0);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public ifStmt(): IfStmtContext {
    let localctx: IfStmtContext = new IfStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, GoParser.RULE_ifStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 443;
        this.match(GoParser.IF);
        this.state = 452;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
        case 1:
          {
            this.state = 444;
            this.expression(0);
          }
          break;
        case 2:
          {
            this.state = 445;
            this.eos();
            this.state = 446;
            this.expression(0);
          }
          break;
        case 3:
          {
            this.state = 448;
            this.simpleStmt();
            this.state = 449;
            this.eos();
            this.state = 450;
            this.expression(0);
          }
          break;
        }
        this.state = 454;
        this.block();
        this.state = 460;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
        case 1:
          {
            this.state = 455;
            this.match(GoParser.ELSE);
            this.state = 458;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case 18:
              {
                this.state = 456;
                this.ifStmt();
              }
              break;
            case 30:
              {
                this.state = 457;
                this.block();
              }
              break;
            default:
              throw new NoViableAltException(this);
            }
          }
          break;
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public switchStmt(): SwitchStmtContext {
    let localctx: SwitchStmtContext = new SwitchStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, GoParser.RULE_switchStmt);
    try {
      this.state = 464;
      this._errHandler.sync(this);
      switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 462;
          this.exprSwitchStmt();
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 463;
          this.typeSwitchStmt();
        }
        break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public exprSwitchStmt(): ExprSwitchStmtContext {
    let localctx: ExprSwitchStmtContext = new ExprSwitchStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, GoParser.RULE_exprSwitchStmt);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 466;
        this.match(GoParser.SWITCH);
        this.state = 477;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
        case 1:
          {
            this.state = 468;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 6344703) !== 0)) {
              {
                this.state = 467;
                this.expression(0);
              }
            }

          }
          break;
        case 2:
          {
            this.state = 471;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
            case 1:
              {
                this.state = 470;
                this.simpleStmt();
              }
              break;
            }
            this.state = 473;
            this.eos();
            this.state = 475;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 6344703) !== 0)) {
              {
                this.state = 474;
                this.expression(0);
              }
            }

          }
          break;
        }
        this.state = 479;
        this.match(GoParser.L_CURLY);
        this.state = 483;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la===2 || _la===6) {
          {
            {
              this.state = 480;
              this.exprCaseClause();
            }
          }
          this.state = 485;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 486;
        this.match(GoParser.R_CURLY);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public exprCaseClause(): ExprCaseClauseContext {
    let localctx: ExprCaseClauseContext = new ExprCaseClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, GoParser.RULE_exprCaseClause);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 488;
        this.exprSwitchCase();
        this.state = 489;
        this.match(GoParser.COLON);
        this.state = 491;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
        case 1:
          {
            this.state = 490;
            this.statementList();
          }
          break;
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public exprSwitchCase(): ExprSwitchCaseContext {
    let localctx: ExprSwitchCaseContext = new ExprSwitchCaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, GoParser.RULE_exprSwitchCase);
    try {
      this.state = 496;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
      case 6:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 493;
          this.match(GoParser.CASE);
          this.state = 494;
          this.expressionList();
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 495;
          this.match(GoParser.DEFAULT);
        }
        break;
      default:
        throw new NoViableAltException(this);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public typeSwitchStmt(): TypeSwitchStmtContext {
    let localctx: TypeSwitchStmtContext = new TypeSwitchStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, GoParser.RULE_typeSwitchStmt);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 498;
        this.match(GoParser.SWITCH);
        this.state = 507;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
        case 1:
          {
            this.state = 499;
            this.typeSwitchGuard();
          }
          break;
        case 2:
          {
            this.state = 500;
            this.eos();
            this.state = 501;
            this.typeSwitchGuard();
          }
          break;
        case 3:
          {
            this.state = 503;
            this.simpleStmt();
            this.state = 504;
            this.eos();
            this.state = 505;
            this.typeSwitchGuard();
          }
          break;
        }
        this.state = 509;
        this.match(GoParser.L_CURLY);
        this.state = 513;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la===2 || _la===6) {
          {
            {
              this.state = 510;
              this.typeCaseClause();
            }
          }
          this.state = 515;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 516;
        this.match(GoParser.R_CURLY);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public typeSwitchGuard(): TypeSwitchGuardContext {
    let localctx: TypeSwitchGuardContext = new TypeSwitchGuardContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, GoParser.RULE_typeSwitchGuard);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 520;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
        case 1:
          {
            this.state = 518;
            this.match(GoParser.IDENTIFIER);
            this.state = 519;
            this.match(GoParser.DECLARE_ASSIGN);
          }
          break;
        }
        this.state = 522;
        this.primaryExpr(0);
        this.state = 523;
        this.match(GoParser.DOT);
        this.state = 524;
        this.match(GoParser.L_PAREN);
        this.state = 525;
        this.match(GoParser.TYPE);
        this.state = 526;
        this.match(GoParser.R_PAREN);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public typeCaseClause(): TypeCaseClauseContext {
    let localctx: TypeCaseClauseContext = new TypeCaseClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, GoParser.RULE_typeCaseClause);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 528;
        this.typeSwitchCase();
        this.state = 529;
        this.match(GoParser.COLON);
        this.state = 531;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
        case 1:
          {
            this.state = 530;
            this.statementList();
          }
          break;
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public typeSwitchCase(): TypeSwitchCaseContext {
    let localctx: TypeSwitchCaseContext = new TypeSwitchCaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, GoParser.RULE_typeSwitchCase);
    try {
      this.state = 536;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
      case 6:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 533;
          this.match(GoParser.CASE);
          this.state = 534;
          this.typeList();
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 535;
          this.match(GoParser.DEFAULT);
        }
        break;
      default:
        throw new NoViableAltException(this);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public typeList(): TypeListContext {
    let localctx: TypeListContext = new TypeListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, GoParser.RULE_typeList);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 540;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case 3:
        case 4:
        case 9:
        case 10:
        case 11:
        case 27:
        case 28:
        case 32:
        case 61:
        case 63:
          {
            this.state = 538;
            this.type_();
          }
          break;
        case 26:
          {
            this.state = 539;
            this.match(GoParser.NIL_LIT);
          }
          break;
        default:
          throw new NoViableAltException(this);
        }
        this.state = 549;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la===35) {
          {
            {
              this.state = 542;
              this.match(GoParser.COMMA);
              this.state = 545;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
              case 3:
              case 4:
              case 9:
              case 10:
              case 11:
              case 27:
              case 28:
              case 32:
              case 61:
              case 63:
                {
                  this.state = 543;
                  this.type_();
                }
                break;
              case 26:
                {
                  this.state = 544;
                  this.match(GoParser.NIL_LIT);
                }
                break;
              default:
                throw new NoViableAltException(this);
              }
            }
          }
          this.state = 551;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public selectStmt(): SelectStmtContext {
    let localctx: SelectStmtContext = new SelectStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, GoParser.RULE_selectStmt);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 552;
        this.match(GoParser.SELECT);
        this.state = 553;
        this.match(GoParser.L_CURLY);
        this.state = 557;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la===2 || _la===6) {
          {
            {
              this.state = 554;
              this.commClause();
            }
          }
          this.state = 559;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 560;
        this.match(GoParser.R_CURLY);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public commClause(): CommClauseContext {
    let localctx: CommClauseContext = new CommClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, GoParser.RULE_commClause);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 562;
        this.commCase();
        this.state = 563;
        this.match(GoParser.COLON);
        this.state = 565;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
        case 1:
          {
            this.state = 564;
            this.statementList();
          }
          break;
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public commCase(): CommCaseContext {
    let localctx: CommCaseContext = new CommCaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, GoParser.RULE_commCase);
    try {
      this.state = 573;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
      case 6:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 567;
          this.match(GoParser.CASE);
          this.state = 570;
          this._errHandler.sync(this);
          switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
          case 1:
            {
              this.state = 568;
              this.sendStmt();
            }
            break;
          case 2:
            {
              this.state = 569;
              this.recvStmt();
            }
            break;
          }
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 572;
          this.match(GoParser.DEFAULT);
        }
        break;
      default:
        throw new NoViableAltException(this);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public recvStmt(): RecvStmtContext {
    let localctx: RecvStmtContext = new RecvStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, GoParser.RULE_recvStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 581;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
        case 1:
          {
            this.state = 575;
            this.expressionList();
            this.state = 576;
            this.match(GoParser.ASSIGN);
          }
          break;
        case 2:
          {
            this.state = 578;
            this.identifierList();
            this.state = 579;
            this.match(GoParser.DECLARE_ASSIGN);
          }
          break;
        }
        this.state = 583;
        localctx._recvExpr = this.expression(0);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public forStmt(): ForStmtContext {
    let localctx: ForStmtContext = new ForStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, GoParser.RULE_forStmt);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 585;
        this.match(GoParser.FOR);
        this.state = 593;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 60, this._ctx) ) {
        case 1:
          {
            this.state = 587;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 6344703) !== 0)) {
              {
                this.state = 586;
                this.expression(0);
              }
            }

          }
          break;
        case 2:
          {
            this.state = 589;
            this.forClause();
          }
          break;
        case 3:
          {
            this.state = 591;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595657155) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 6344703) !== 0)) {
              {
                this.state = 590;
                this.rangeClause();
              }
            }

          }
          break;
        }
        this.state = 595;
        this.block();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public forClause(): ForClauseContext {
    let localctx: ForClauseContext = new ForClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, GoParser.RULE_forClause);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 598;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
        case 1:
          {
            this.state = 597;
            localctx._initStmt = this.simpleStmt();
          }
          break;
        }
        this.state = 600;
        this.eos();
        this.state = 602;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
        case 1:
          {
            this.state = 601;
            this.expression(0);
          }
          break;
        }
        this.state = 604;
        this.eos();
        this.state = 606;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 6344703) !== 0)) {
          {
            this.state = 605;
            localctx._postStmt = this.simpleStmt();
          }
        }

      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public rangeClause(): RangeClauseContext {
    let localctx: RangeClauseContext = new RangeClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, GoParser.RULE_rangeClause);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 614;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 64, this._ctx) ) {
        case 1:
          {
            this.state = 608;
            this.expressionList();
            this.state = 609;
            this.match(GoParser.ASSIGN);
          }
          break;
        case 2:
          {
            this.state = 611;
            this.identifierList();
            this.state = 612;
            this.match(GoParser.DECLARE_ASSIGN);
          }
          break;
        }
        this.state = 616;
        this.match(GoParser.RANGE);
        this.state = 617;
        this.expression(0);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public goStmt(): GoStmtContext {
    let localctx: GoStmtContext = new GoStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, GoParser.RULE_goStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 619;
        this.match(GoParser.GO);
        this.state = 620;
        this.expression(0);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public type_(): Type_Context {
    let localctx: Type_Context = new Type_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 106, GoParser.RULE_type_);
    try {
      this.state = 628;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
      case 27:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 622;
          this.typeName();
        }
        break;
      case 3:
      case 4:
      case 9:
      case 10:
      case 11:
      case 32:
      case 61:
      case 63:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 623;
          this.typeLit();
        }
        break;
      case 28:
        this.enterOuterAlt(localctx, 3);
        {
          this.state = 624;
          this.match(GoParser.L_PAREN);
          this.state = 625;
          this.type_();
          this.state = 626;
          this.match(GoParser.R_PAREN);
        }
        break;
      default:
        throw new NoViableAltException(this);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public typeName(): TypeNameContext {
    let localctx: TypeNameContext = new TypeNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, GoParser.RULE_typeName);
    try {
      this.state = 632;
      this._errHandler.sync(this);
      switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 630;
          this.qualifiedIdent();
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 631;
          this.match(GoParser.IDENTIFIER);
        }
        break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public typeLit(): TypeLitContext {
    let localctx: TypeLitContext = new TypeLitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, GoParser.RULE_typeLit);
    try {
      this.state = 642;
      this._errHandler.sync(this);
      switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 634;
          this.arrayType();
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 635;
          this.structType();
        }
        break;
      case 3:
        this.enterOuterAlt(localctx, 3);
        {
          this.state = 636;
          this.pointerType();
        }
        break;
      case 4:
        this.enterOuterAlt(localctx, 4);
        {
          this.state = 637;
          this.functionType();
        }
        break;
      case 5:
        this.enterOuterAlt(localctx, 5);
        {
          this.state = 638;
          this.interfaceType();
        }
        break;
      case 6:
        this.enterOuterAlt(localctx, 6);
        {
          this.state = 639;
          this.sliceType();
        }
        break;
      case 7:
        this.enterOuterAlt(localctx, 7);
        {
          this.state = 640;
          this.mapType();
        }
        break;
      case 8:
        this.enterOuterAlt(localctx, 8);
        {
          this.state = 641;
          this.channelType();
        }
        break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public arrayType(): ArrayTypeContext {
    let localctx: ArrayTypeContext = new ArrayTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, GoParser.RULE_arrayType);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 644;
        this.match(GoParser.L_BRACKET);
        this.state = 645;
        this.arrayLength();
        this.state = 646;
        this.match(GoParser.R_BRACKET);
        this.state = 647;
        this.elementType();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public arrayLength(): ArrayLengthContext {
    let localctx: ArrayLengthContext = new ArrayLengthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, GoParser.RULE_arrayLength);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 649;
        this.expression(0);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public elementType(): ElementTypeContext {
    let localctx: ElementTypeContext = new ElementTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, GoParser.RULE_elementType);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 651;
        this.type_();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public pointerType(): PointerTypeContext {
    let localctx: PointerTypeContext = new PointerTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, GoParser.RULE_pointerType);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 653;
        this.match(GoParser.STAR);
        this.state = 654;
        this.type_();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public interfaceType(): InterfaceTypeContext {
    let localctx: InterfaceTypeContext = new InterfaceTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, GoParser.RULE_interfaceType);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 656;
        this.match(GoParser.INTERFACE);
        this.state = 657;
        this.match(GoParser.L_CURLY);
        this.state = 666;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la===27) {
          {
            {
              this.state = 660;
              this._errHandler.sync(this);
              switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
              case 1:
                {
                  this.state = 658;
                  this.methodSpec();
                }
                break;
              case 2:
                {
                  this.state = 659;
                  this.typeName();
                }
                break;
              }
              this.state = 662;
              this.eos();
            }
          }
          this.state = 668;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 669;
        this.match(GoParser.R_CURLY);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public sliceType(): SliceTypeContext {
    let localctx: SliceTypeContext = new SliceTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, GoParser.RULE_sliceType);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 671;
        this.match(GoParser.L_BRACKET);
        this.state = 672;
        this.match(GoParser.R_BRACKET);
        this.state = 673;
        this.elementType();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public mapType(): MapTypeContext {
    let localctx: MapTypeContext = new MapTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, GoParser.RULE_mapType);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 675;
        this.match(GoParser.MAP);
        this.state = 676;
        this.match(GoParser.L_BRACKET);
        this.state = 677;
        this.type_();
        this.state = 678;
        this.match(GoParser.R_BRACKET);
        this.state = 679;
        this.elementType();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public channelType(): ChannelTypeContext {
    let localctx: ChannelTypeContext = new ChannelTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, GoParser.RULE_channelType);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 686;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
        case 1:
          {
            this.state = 681;
            this.match(GoParser.CHAN);
          }
          break;
        case 2:
          {
            this.state = 682;
            this.match(GoParser.CHAN);
            this.state = 683;
            this.match(GoParser.RECEIVE);
          }
          break;
        case 3:
          {
            this.state = 684;
            this.match(GoParser.RECEIVE);
            this.state = 685;
            this.match(GoParser.CHAN);
          }
          break;
        }
        this.state = 688;
        this.elementType();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public methodSpec(): MethodSpecContext {
    let localctx: MethodSpecContext = new MethodSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, GoParser.RULE_methodSpec);
    try {
      this.state = 696;
      this._errHandler.sync(this);
      switch ( this._interp.adaptivePredict(this._input, 71, this._ctx) ) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 690;
          this.match(GoParser.IDENTIFIER);
          this.state = 691;
          this.parameters();
          this.state = 692;
          this.result();
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 694;
          this.match(GoParser.IDENTIFIER);
          this.state = 695;
          this.parameters();
        }
        break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public functionType(): FunctionTypeContext {
    let localctx: FunctionTypeContext = new FunctionTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 130, GoParser.RULE_functionType);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 698;
        this.match(GoParser.FUNC);
        this.state = 699;
        this.signature();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public signature(): SignatureContext {
    let localctx: SignatureContext = new SignatureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 132, GoParser.RULE_signature);
    try {
      this.state = 705;
      this._errHandler.sync(this);
      switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 701;
          this.parameters();
          this.state = 702;
          this.result();
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 704;
          this.parameters();
        }
        break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public result(): ResultContext {
    let localctx: ResultContext = new ResultContext(this, this._ctx, this.state);
    this.enterRule(localctx, 134, GoParser.RULE_result);
    try {
      this.state = 709;
      this._errHandler.sync(this);
      switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 707;
          this.parameters();
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 708;
          this.type_();
        }
        break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public parameters(): ParametersContext {
    let localctx: ParametersContext = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 136, GoParser.RULE_parameters);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 711;
        this.match(GoParser.L_PAREN);
        this.state = 723;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402656792) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2684355585) !== 0)) {
          {
            this.state = 712;
            this.parameterDecl();
            this.state = 717;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 74, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 713;
                    this.match(GoParser.COMMA);
                    this.state = 714;
                    this.parameterDecl();
                  }
                }
              }
              this.state = 719;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 74, this._ctx);
            }
            this.state = 721;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===35) {
              {
                this.state = 720;
                this.match(GoParser.COMMA);
              }
            }

          }
        }

        this.state = 725;
        this.match(GoParser.R_PAREN);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public parameterDecl(): ParameterDeclContext {
    let localctx: ParameterDeclContext = new ParameterDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 138, GoParser.RULE_parameterDecl);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 728;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
        case 1:
          {
            this.state = 727;
            this.identifierList();
          }
          break;
        }
        this.state = 731;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la===42) {
          {
            this.state = 730;
            this.match(GoParser.ELLIPSIS);
          }
        }

        this.state = 733;
        this.type_();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }

  public expression(): ExpressionContext;
  public expression(_p: number): ExpressionContext;
  // @RuleVersion(0)
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
    let _prevctx: ExpressionContext = localctx;
    let _startState: number = 140;
    this.enterRecursionRule(localctx, 140, GoParser.RULE_expression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 739;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
        case 1:
          {
            this.state = 736;
            this.primaryExpr(0);
          }
          break;
        case 2:
          {
            this.state = 737;
            localctx._unary_op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 127) !== 0))) {
				    localctx._unary_op = this._errHandler.recoverInline(this);
            }
            else {
              this._errHandler.reportMatch(this);
				    this.consume();
            }
            this.state = 738;
            this.expression(6);
          }
          break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 758;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 81, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 756;
              this._errHandler.sync(this);
              switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
              case 1:
                {
                  localctx = new ExpressionContext(this, _parentctx, _parentState);
                  this.pushNewRecursionContext(localctx, _startState, GoParser.RULE_expression);
                  this.state = 741;
                  if (!(this.precpred(this._ctx, 5))) {
                    throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                  }
                  this.state = 742;
                  localctx._mul_op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if(!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 1567) !== 0))) {
						    localctx._mul_op = this._errHandler.recoverInline(this);
                  }
                  else {
                    this._errHandler.reportMatch(this);
						    this.consume();
                  }
                  this.state = 743;
                  this.expression(6);
                }
                break;
              case 2:
                {
                  localctx = new ExpressionContext(this, _parentctx, _parentState);
                  this.pushNewRecursionContext(localctx, _startState, GoParser.RULE_expression);
                  this.state = 744;
                  if (!(this.precpred(this._ctx, 4))) {
                    throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                  }
                  this.state = 745;
                  localctx._add_op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 897) !== 0))) {
						    localctx._add_op = this._errHandler.recoverInline(this);
                  }
                  else {
                    this._errHandler.reportMatch(this);
						    this.consume();
                  }
                  this.state = 746;
                  this.expression(5);
                }
                break;
              case 3:
                {
                  localctx = new ExpressionContext(this, _parentctx, _parentState);
                  this.pushNewRecursionContext(localctx, _startState, GoParser.RULE_expression);
                  this.state = 747;
                  if (!(this.precpred(this._ctx, 3))) {
                    throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                  }
                  this.state = 748;
                  localctx._rel_op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 63) !== 0))) {
						    localctx._rel_op = this._errHandler.recoverInline(this);
                  }
                  else {
                    this._errHandler.reportMatch(this);
						    this.consume();
                  }
                  this.state = 749;
                  this.expression(4);
                }
                break;
              case 4:
                {
                  localctx = new ExpressionContext(this, _parentctx, _parentState);
                  this.pushNewRecursionContext(localctx, _startState, GoParser.RULE_expression);
                  this.state = 750;
                  if (!(this.precpred(this._ctx, 2))) {
                    throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                  }
                  this.state = 751;
                  this.match(GoParser.LOGICAL_AND);
                  this.state = 752;
                  this.expression(3);
                }
                break;
              case 5:
                {
                  localctx = new ExpressionContext(this, _parentctx, _parentState);
                  this.pushNewRecursionContext(localctx, _startState, GoParser.RULE_expression);
                  this.state = 753;
                  if (!(this.precpred(this._ctx, 1))) {
                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                  }
                  this.state = 754;
                  this.match(GoParser.LOGICAL_OR);
                  this.state = 755;
                  this.expression(2);
                }
                break;
              }
            }
          }
          this.state = 760;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 81, this._ctx);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }

  public primaryExpr(): PrimaryExprContext;
  public primaryExpr(_p: number): PrimaryExprContext;
  // @RuleVersion(0)
  public primaryExpr(_p?: number): PrimaryExprContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let localctx: PrimaryExprContext = new PrimaryExprContext(this, this._ctx, _parentState);
    let _prevctx: PrimaryExprContext = localctx;
    let _startState: number = 142;
    this.enterRecursionRule(localctx, 142, GoParser.RULE_primaryExpr, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 765;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
        case 1:
          {
            this.state = 762;
            this.operand();
          }
          break;
        case 2:
          {
            this.state = 763;
            this.conversion();
          }
          break;
        case 3:
          {
            this.state = 764;
            this.methodExpr();
          }
          break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 778;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              {
                localctx = new PrimaryExprContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, GoParser.RULE_primaryExpr);
                this.state = 767;
                if (!(this.precpred(this._ctx, 1))) {
                  throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                }
                this.state = 774;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 83, this._ctx) ) {
                case 1:
                  {
                    {
                      this.state = 768;
                      this.match(GoParser.DOT);
                      this.state = 769;
                      this.match(GoParser.IDENTIFIER);
                    }
                  }
                  break;
                case 2:
                  {
                    this.state = 770;
                    this.index();
                  }
                  break;
                case 3:
                  {
                    this.state = 771;
                    this.slice_();
                  }
                  break;
                case 4:
                  {
                    this.state = 772;
                    this.typeAssertion();
                  }
                  break;
                case 5:
                  {
                    this.state = 773;
                    this.arguments();
                  }
                  break;
                }
              }
            }
          }
          this.state = 780;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  // @RuleVersion(0)
  public conversion(): ConversionContext {
    let localctx: ConversionContext = new ConversionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 144, GoParser.RULE_conversion);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 781;
        this.nonNamedType();
        this.state = 782;
        this.match(GoParser.L_PAREN);
        this.state = 783;
        this.expression(0);
        this.state = 785;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la===35) {
          {
            this.state = 784;
            this.match(GoParser.COMMA);
          }
        }

        this.state = 787;
        this.match(GoParser.R_PAREN);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public nonNamedType(): NonNamedTypeContext {
    let localctx: NonNamedTypeContext = new NonNamedTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 146, GoParser.RULE_nonNamedType);
    try {
      this.state = 794;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
      case 3:
      case 4:
      case 9:
      case 10:
      case 11:
      case 32:
      case 61:
      case 63:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 789;
          this.typeLit();
        }
        break;
      case 28:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 790;
          this.match(GoParser.L_PAREN);
          this.state = 791;
          this.nonNamedType();
          this.state = 792;
          this.match(GoParser.R_PAREN);
        }
        break;
      default:
        throw new NoViableAltException(this);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public operand(): OperandContext {
    let localctx: OperandContext = new OperandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 148, GoParser.RULE_operand);
    try {
      this.state = 802;
      this._errHandler.sync(this);
      switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 796;
          this.literal();
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 797;
          this.operandName();
        }
        break;
      case 3:
        this.enterOuterAlt(localctx, 3);
        {
          this.state = 798;
          this.match(GoParser.L_PAREN);
          this.state = 799;
          this.expression(0);
          this.state = 800;
          this.match(GoParser.R_PAREN);
        }
        break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public literal(): LiteralContext {
    let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 150, GoParser.RULE_literal);
    try {
      this.state = 807;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
      case 26:
      case 64:
      case 65:
      case 66:
      case 67:
      case 68:
      case 71:
      case 72:
      case 78:
      case 79:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 804;
          this.basicLit();
        }
        break;
      case 9:
      case 10:
      case 27:
      case 32:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 805;
          this.compositeLit();
        }
        break;
      case 3:
        this.enterOuterAlt(localctx, 3);
        {
          this.state = 806;
          this.functionLit();
        }
        break;
      default:
        throw new NoViableAltException(this);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public basicLit(): BasicLitContext {
    let localctx: BasicLitContext = new BasicLitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 152, GoParser.RULE_basicLit);
    try {
      this.state = 813;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
      case 26:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 809;
          this.match(GoParser.NIL_LIT);
        }
        break;
      case 64:
      case 65:
      case 66:
      case 67:
      case 71:
      case 72:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 810;
          this.integer();
        }
        break;
      case 78:
      case 79:
        this.enterOuterAlt(localctx, 3);
        {
          this.state = 811;
          this.string_();
        }
        break;
      case 68:
        this.enterOuterAlt(localctx, 4);
        {
          this.state = 812;
          this.match(GoParser.FLOAT_LIT);
        }
        break;
      default:
        throw new NoViableAltException(this);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public integer(): IntegerContext {
    let localctx: IntegerContext = new IntegerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 154, GoParser.RULE_integer);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 815;
        _la = this._input.LA(1);
        if(!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 399) !== 0))) {
          this._errHandler.recoverInline(this);
        }
        else {
          this._errHandler.reportMatch(this);
			    this.consume();
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public operandName(): OperandNameContext {
    let localctx: OperandNameContext = new OperandNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 156, GoParser.RULE_operandName);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 817;
        this.match(GoParser.IDENTIFIER);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public qualifiedIdent(): QualifiedIdentContext {
    let localctx: QualifiedIdentContext = new QualifiedIdentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 158, GoParser.RULE_qualifiedIdent);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 819;
        this.match(GoParser.IDENTIFIER);
        this.state = 820;
        this.match(GoParser.DOT);
        this.state = 821;
        this.match(GoParser.IDENTIFIER);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public compositeLit(): CompositeLitContext {
    let localctx: CompositeLitContext = new CompositeLitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 160, GoParser.RULE_compositeLit);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 823;
        this.literalType();
        this.state = 824;
        this.literalValue();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public literalType(): LiteralTypeContext {
    let localctx: LiteralTypeContext = new LiteralTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 162, GoParser.RULE_literalType);
    try {
      this.state = 835;
      this._errHandler.sync(this);
      switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 826;
          this.structType();
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 827;
          this.arrayType();
        }
        break;
      case 3:
        this.enterOuterAlt(localctx, 3);
        {
          this.state = 828;
          this.match(GoParser.L_BRACKET);
          this.state = 829;
          this.match(GoParser.ELLIPSIS);
          this.state = 830;
          this.match(GoParser.R_BRACKET);
          this.state = 831;
          this.elementType();
        }
        break;
      case 4:
        this.enterOuterAlt(localctx, 4);
        {
          this.state = 832;
          this.sliceType();
        }
        break;
      case 5:
        this.enterOuterAlt(localctx, 5);
        {
          this.state = 833;
          this.mapType();
        }
        break;
      case 6:
        this.enterOuterAlt(localctx, 6);
        {
          this.state = 834;
          this.typeName();
        }
        break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public literalValue(): LiteralValueContext {
    let localctx: LiteralValueContext = new LiteralValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 164, GoParser.RULE_literalValue);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 837;
        this.match(GoParser.L_CURLY);
        this.state = 842;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 729809347) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 6344703) !== 0)) {
          {
            this.state = 838;
            this.elementList();
            this.state = 840;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===35) {
              {
                this.state = 839;
                this.match(GoParser.COMMA);
              }
            }

          }
        }

        this.state = 844;
        this.match(GoParser.R_CURLY);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public elementList(): ElementListContext {
    let localctx: ElementListContext = new ElementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 166, GoParser.RULE_elementList);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 846;
        this.keyedElement();
        this.state = 851;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 847;
                this.match(GoParser.COMMA);
                this.state = 848;
                this.keyedElement();
              }
            }
          }
          this.state = 853;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public keyedElement(): KeyedElementContext {
    let localctx: KeyedElementContext = new KeyedElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 168, GoParser.RULE_keyedElement);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 857;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
        case 1:
          {
            this.state = 854;
            this.key();
            this.state = 855;
            this.match(GoParser.COLON);
          }
          break;
        }
        this.state = 859;
        this.element();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public key(): KeyContext {
    let localctx: KeyContext = new KeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 170, GoParser.RULE_key);
    try {
      this.state = 863;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
      case 3:
      case 4:
      case 9:
      case 10:
      case 11:
      case 26:
      case 27:
      case 28:
      case 32:
      case 57:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 65:
      case 66:
      case 67:
      case 68:
      case 71:
      case 72:
      case 78:
      case 79:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 861;
          this.expression(0);
        }
        break;
      case 30:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 862;
          this.literalValue();
        }
        break;
      default:
        throw new NoViableAltException(this);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public element(): ElementContext {
    let localctx: ElementContext = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 172, GoParser.RULE_element);
    try {
      this.state = 867;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
      case 3:
      case 4:
      case 9:
      case 10:
      case 11:
      case 26:
      case 27:
      case 28:
      case 32:
      case 57:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 65:
      case 66:
      case 67:
      case 68:
      case 71:
      case 72:
      case 78:
      case 79:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 865;
          this.expression(0);
        }
        break;
      case 30:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 866;
          this.literalValue();
        }
        break;
      default:
        throw new NoViableAltException(this);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public structType(): StructTypeContext {
    let localctx: StructTypeContext = new StructTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 174, GoParser.RULE_structType);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 869;
        this.match(GoParser.STRUCT);
        this.state = 870;
        this.match(GoParser.L_CURLY);
        this.state = 876;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la===27 || _la===61) {
          {
            {
              this.state = 871;
              this.fieldDecl();
              this.state = 872;
              this.eos();
            }
          }
          this.state = 878;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 879;
        this.match(GoParser.R_CURLY);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public fieldDecl(): FieldDeclContext {
    let localctx: FieldDeclContext = new FieldDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 176, GoParser.RULE_fieldDecl);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 885;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 98, this._ctx) ) {
        case 1:
          {
            this.state = 881;
            this.identifierList();
            this.state = 882;
            this.type_();
          }
          break;
        case 2:
          {
            this.state = 884;
            this.embeddedField();
          }
          break;
        }
        this.state = 888;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
        case 1:
          {
            this.state = 887;
            localctx._tag = this.string_();
          }
          break;
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public string_(): String_Context {
    let localctx: String_Context = new String_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 178, GoParser.RULE_string_);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 890;
        _la = this._input.LA(1);
        if(!(_la===78 || _la===79)) {
          this._errHandler.recoverInline(this);
        }
        else {
          this._errHandler.reportMatch(this);
			    this.consume();
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public embeddedField(): EmbeddedFieldContext {
    let localctx: EmbeddedFieldContext = new EmbeddedFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 180, GoParser.RULE_embeddedField);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 893;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la===61) {
          {
            this.state = 892;
            this.match(GoParser.STAR);
          }
        }

        this.state = 895;
        this.typeName();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public functionLit(): FunctionLitContext {
    let localctx: FunctionLitContext = new FunctionLitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 182, GoParser.RULE_functionLit);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 897;
        this.match(GoParser.FUNC);
        this.state = 898;
        this.signature();
        this.state = 899;
        this.block();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public index(): IndexContext {
    let localctx: IndexContext = new IndexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 184, GoParser.RULE_index);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 901;
        this.match(GoParser.L_BRACKET);
        this.state = 902;
        this.expression(0);
        this.state = 903;
        this.match(GoParser.R_BRACKET);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public slice_(): Slice_Context {
    let localctx: Slice_Context = new Slice_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 186, GoParser.RULE_slice_);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 905;
        this.match(GoParser.L_BRACKET);
        this.state = 921;
        this._errHandler.sync(this);
        switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
        case 1:
          {
            this.state = 907;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 6344703) !== 0)) {
              {
                this.state = 906;
                this.expression(0);
              }
            }

            this.state = 909;
            this.match(GoParser.COLON);
            this.state = 911;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 6344703) !== 0)) {
              {
                this.state = 910;
                this.expression(0);
              }
            }

          }
          break;
        case 2:
          {
            this.state = 914;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 6344703) !== 0)) {
              {
                this.state = 913;
                this.expression(0);
              }
            }

            this.state = 916;
            this.match(GoParser.COLON);
            this.state = 917;
            this.expression(0);
            this.state = 918;
            this.match(GoParser.COLON);
            this.state = 919;
            this.expression(0);
          }
          break;
        }
        this.state = 923;
        this.match(GoParser.R_BRACKET);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public typeAssertion(): TypeAssertionContext {
    let localctx: TypeAssertionContext = new TypeAssertionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 188, GoParser.RULE_typeAssertion);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 925;
        this.match(GoParser.DOT);
        this.state = 926;
        this.match(GoParser.L_PAREN);
        this.state = 927;
        this.type_();
        this.state = 928;
        this.match(GoParser.R_PAREN);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public arguments(): ArgumentsContext {
    let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 190, GoParser.RULE_arguments);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 930;
        this.match(GoParser.L_PAREN);
        this.state = 945;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 6344703) !== 0)) {
          {
            this.state = 937;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
            case 1:
              {
                this.state = 931;
                this.expressionList();
              }
              break;
            case 2:
              {
                this.state = 932;
                this.nonNamedType();
                this.state = 935;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
                case 1:
                  {
                    this.state = 933;
                    this.match(GoParser.COMMA);
                    this.state = 934;
                    this.expressionList();
                  }
                  break;
                }
              }
              break;
            }
            this.state = 940;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===42) {
              {
                this.state = 939;
                this.match(GoParser.ELLIPSIS);
              }
            }

            this.state = 943;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===35) {
              {
                this.state = 942;
                this.match(GoParser.COMMA);
              }
            }

          }
        }

        this.state = 947;
        this.match(GoParser.R_PAREN);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public methodExpr(): MethodExprContext {
    let localctx: MethodExprContext = new MethodExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 192, GoParser.RULE_methodExpr);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 949;
        this.nonNamedType();
        this.state = 950;
        this.match(GoParser.DOT);
        this.state = 951;
        this.match(GoParser.IDENTIFIER);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public receiverType(): ReceiverTypeContext {
    let localctx: ReceiverTypeContext = new ReceiverTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 194, GoParser.RULE_receiverType);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 953;
        this.type_();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public eos(): EosContext {
    let localctx: EosContext = new EosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 196, GoParser.RULE_eos);
    try {
      this.state = 959;
      this._errHandler.sync(this);
      switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        {
          this.state = 955;
          this.match(GoParser.SEMI);
        }
        break;
      case 2:
        this.enterOuterAlt(localctx, 2);
        {
          this.state = 956;
          this.match(GoParser.EOF);
        }
        break;
      case 3:
        this.enterOuterAlt(localctx, 3);
        {
          this.state = 957;
          this.match(GoParser.EOS);
        }
        break;
      case 4:
        this.enterOuterAlt(localctx, 4);
        {
          this.state = 958;
          if (!(this.closingBracket())) {
            throw this.createFailedPredicateException("this.closingBracket()");
          }
        }
        break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return localctx;
  }

  public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
    case 18:
      return this.statementList_sempred(localctx as StatementListContext, predIndex);
    case 70:
      return this.expression_sempred(localctx as ExpressionContext, predIndex);
    case 71:
      return this.primaryExpr_sempred(localctx as PrimaryExprContext, predIndex);
    case 98:
      return this.eos_sempred(localctx as EosContext, predIndex);
    }
    return true;
  }
  private statementList_sempred(localctx: StatementListContext, predIndex: number): boolean {
    switch (predIndex) {
    case 0:
      return this.closingBracket();
    }
    return true;
  }
  private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
    case 1:
      return this.precpred(this._ctx, 5);
    case 2:
      return this.precpred(this._ctx, 4);
    case 3:
      return this.precpred(this._ctx, 3);
    case 4:
      return this.precpred(this._ctx, 2);
    case 5:
      return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private primaryExpr_sempred(localctx: PrimaryExprContext, predIndex: number): boolean {
    switch (predIndex) {
    case 6:
      return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private eos_sempred(localctx: EosContext, predIndex: number): boolean {
    switch (predIndex) {
    case 7:
      return this.closingBracket();
    }
    return true;
  }

  public static readonly _serializedATN: number[] = [4,1,88,962,2,0,7,0,2,
    1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
    10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
    7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
    24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
    2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
    39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
    7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,
    53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,
    2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,
    68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,
    7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,
    82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,
    2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,
    97,7,97,2,98,7,98,1,0,1,0,1,0,1,0,1,0,5,0,204,8,0,10,0,12,0,207,9,0,1,0,
    1,0,1,0,3,0,212,8,0,1,0,1,0,5,0,216,8,0,10,0,12,0,219,9,0,1,0,1,0,1,1,1,
    1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,232,8,2,10,2,12,2,235,9,2,1,2,3,2,238,
    8,2,1,3,3,3,241,8,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,3,5,250,8,5,1,6,1,6,1,6,
    1,6,1,6,1,6,5,6,258,8,6,10,6,12,6,261,9,6,1,6,3,6,264,8,6,1,7,1,7,3,7,268,
    8,7,1,7,1,7,3,7,272,8,7,1,8,1,8,1,8,5,8,277,8,8,10,8,12,8,280,9,8,1,9,1,
    9,1,9,5,9,285,8,9,10,9,12,9,288,9,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,
    296,8,10,10,10,12,10,299,9,10,1,10,3,10,302,8,10,1,11,1,11,3,11,306,8,11,
    1,11,1,11,1,12,1,12,1,12,1,12,3,12,314,8,12,1,13,1,13,1,13,1,13,1,13,3,
    13,321,8,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,5,15,331,8,15,10,15,
    12,15,334,9,15,1,15,3,15,337,8,15,1,16,1,16,1,16,1,16,3,16,343,8,16,1,16,
    1,16,3,16,347,8,16,1,17,1,17,3,17,351,8,17,1,17,1,17,1,18,3,18,356,8,18,
    1,18,3,18,359,8,18,1,18,3,18,362,8,18,1,18,1,18,1,18,4,18,367,8,18,11,18,
    12,18,368,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
    19,1,19,1,19,3,19,386,8,19,1,20,1,20,1,20,1,20,1,20,3,20,393,8,20,1,21,
    1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,3,25,409,
    8,25,1,25,1,25,1,26,1,26,1,26,1,26,1,27,1,27,1,28,1,28,1,28,3,28,422,8,
    28,1,29,1,29,3,29,426,8,29,1,30,1,30,3,30,430,8,30,1,31,1,31,3,31,434,8,
    31,1,32,1,32,1,32,1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,
    1,35,1,35,1,35,3,35,453,8,35,1,35,1,35,1,35,1,35,3,35,459,8,35,3,35,461,
    8,35,1,36,1,36,3,36,465,8,36,1,37,1,37,3,37,469,8,37,1,37,3,37,472,8,37,
    1,37,1,37,3,37,476,8,37,3,37,478,8,37,1,37,1,37,5,37,482,8,37,10,37,12,
    37,485,9,37,1,37,1,37,1,38,1,38,1,38,3,38,492,8,38,1,39,1,39,1,39,3,39,
    497,8,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,508,8,40,1,40,
    1,40,5,40,512,8,40,10,40,12,40,515,9,40,1,40,1,40,1,41,1,41,3,41,521,8,
    41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,3,42,532,8,42,1,43,1,43,
    1,43,3,43,537,8,43,1,44,1,44,3,44,541,8,44,1,44,1,44,1,44,3,44,546,8,44,
    5,44,548,8,44,10,44,12,44,551,9,44,1,45,1,45,1,45,5,45,556,8,45,10,45,12,
    45,559,9,45,1,45,1,45,1,46,1,46,1,46,3,46,566,8,46,1,47,1,47,1,47,3,47,
    571,8,47,1,47,3,47,574,8,47,1,48,1,48,1,48,1,48,1,48,1,48,3,48,582,8,48,
    1,48,1,48,1,49,1,49,3,49,588,8,49,1,49,1,49,3,49,592,8,49,3,49,594,8,49,
    1,49,1,49,1,50,3,50,599,8,50,1,50,1,50,3,50,603,8,50,1,50,1,50,3,50,607,
    8,50,1,51,1,51,1,51,1,51,1,51,1,51,3,51,615,8,51,1,51,1,51,1,51,1,52,1,
    52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,3,53,629,8,53,1,54,1,54,3,54,633,
    8,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,3,55,643,8,55,1,56,1,56,1,
    56,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,59,1,60,1,60,1,60,1,60,3,60,
    661,8,60,1,60,1,60,5,60,665,8,60,10,60,12,60,668,9,60,1,60,1,60,1,61,1,
    61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,3,63,
    687,8,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,3,64,697,8,64,1,65,1,65,
    1,65,1,66,1,66,1,66,1,66,3,66,706,8,66,1,67,1,67,3,67,710,8,67,1,68,1,68,
    1,68,1,68,5,68,716,8,68,10,68,12,68,719,9,68,1,68,3,68,722,8,68,3,68,724,
    8,68,1,68,1,68,1,69,3,69,729,8,69,1,69,3,69,732,8,69,1,69,1,69,1,70,1,70,
    1,70,1,70,3,70,740,8,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,
    70,1,70,1,70,1,70,1,70,1,70,5,70,757,8,70,10,70,12,70,760,9,70,1,71,1,71,
    1,71,1,71,3,71,766,8,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,775,8,71,
    5,71,777,8,71,10,71,12,71,780,9,71,1,72,1,72,1,72,1,72,3,72,786,8,72,1,
    72,1,72,1,73,1,73,1,73,1,73,1,73,3,73,795,8,73,1,74,1,74,1,74,1,74,1,74,
    1,74,3,74,803,8,74,1,75,1,75,1,75,3,75,808,8,75,1,76,1,76,1,76,1,76,3,76,
    814,8,76,1,77,1,77,1,78,1,78,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,81,1,
    81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,3,81,836,8,81,1,82,1,82,1,82,3,82,
    841,8,82,3,82,843,8,82,1,82,1,82,1,83,1,83,1,83,5,83,850,8,83,10,83,12,
    83,853,9,83,1,84,1,84,1,84,3,84,858,8,84,1,84,1,84,1,85,1,85,3,85,864,8,
    85,1,86,1,86,3,86,868,8,86,1,87,1,87,1,87,1,87,1,87,5,87,875,8,87,10,87,
    12,87,878,9,87,1,87,1,87,1,88,1,88,1,88,1,88,3,88,886,8,88,1,88,3,88,889,
    8,88,1,89,1,89,1,90,3,90,894,8,90,1,90,1,90,1,91,1,91,1,91,1,91,1,92,1,
    92,1,92,1,92,1,93,1,93,3,93,908,8,93,1,93,1,93,3,93,912,8,93,1,93,3,93,
    915,8,93,1,93,1,93,1,93,1,93,1,93,3,93,922,8,93,1,93,1,93,1,94,1,94,1,94,
    1,94,1,94,1,95,1,95,1,95,1,95,1,95,3,95,936,8,95,3,95,938,8,95,1,95,3,95,
    941,8,95,1,95,3,95,944,8,95,3,95,946,8,95,1,95,1,95,1,96,1,96,1,96,1,96,
    1,97,1,97,1,98,1,98,1,98,1,98,3,98,960,8,98,1,98,0,2,140,142,99,0,2,4,6,
    8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
    56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,
    104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,
    140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,
    176,178,180,182,184,186,188,190,192,194,196,0,10,2,0,27,27,38,38,1,0,39,
    40,2,0,51,56,58,62,2,0,36,36,87,87,1,0,57,63,2,0,52,56,61,62,2,0,51,51,
    58,60,1,0,45,50,2,0,64,67,71,72,1,0,78,79,1022,0,198,1,0,0,0,2,222,1,0,
    0,0,4,225,1,0,0,0,6,240,1,0,0,0,8,244,1,0,0,0,10,249,1,0,0,0,12,251,1,0,
    0,0,14,265,1,0,0,0,16,273,1,0,0,0,18,281,1,0,0,0,20,289,1,0,0,0,22,303,
    1,0,0,0,24,309,1,0,0,0,26,315,1,0,0,0,28,322,1,0,0,0,30,324,1,0,0,0,32,
    338,1,0,0,0,34,348,1,0,0,0,36,366,1,0,0,0,38,385,1,0,0,0,40,392,1,0,0,0,
    42,394,1,0,0,0,44,396,1,0,0,0,46,400,1,0,0,0,48,403,1,0,0,0,50,408,1,0,
    0,0,52,412,1,0,0,0,54,416,1,0,0,0,56,418,1,0,0,0,58,423,1,0,0,0,60,427,
    1,0,0,0,62,431,1,0,0,0,64,435,1,0,0,0,66,438,1,0,0,0,68,440,1,0,0,0,70,
    443,1,0,0,0,72,464,1,0,0,0,74,466,1,0,0,0,76,488,1,0,0,0,78,496,1,0,0,0,
    80,498,1,0,0,0,82,520,1,0,0,0,84,528,1,0,0,0,86,536,1,0,0,0,88,540,1,0,
    0,0,90,552,1,0,0,0,92,562,1,0,0,0,94,573,1,0,0,0,96,581,1,0,0,0,98,585,
    1,0,0,0,100,598,1,0,0,0,102,614,1,0,0,0,104,619,1,0,0,0,106,628,1,0,0,0,
    108,632,1,0,0,0,110,642,1,0,0,0,112,644,1,0,0,0,114,649,1,0,0,0,116,651,
    1,0,0,0,118,653,1,0,0,0,120,656,1,0,0,0,122,671,1,0,0,0,124,675,1,0,0,0,
    126,686,1,0,0,0,128,696,1,0,0,0,130,698,1,0,0,0,132,705,1,0,0,0,134,709,
    1,0,0,0,136,711,1,0,0,0,138,728,1,0,0,0,140,739,1,0,0,0,142,765,1,0,0,0,
    144,781,1,0,0,0,146,794,1,0,0,0,148,802,1,0,0,0,150,807,1,0,0,0,152,813,
    1,0,0,0,154,815,1,0,0,0,156,817,1,0,0,0,158,819,1,0,0,0,160,823,1,0,0,0,
    162,835,1,0,0,0,164,837,1,0,0,0,166,846,1,0,0,0,168,857,1,0,0,0,170,863,
    1,0,0,0,172,867,1,0,0,0,174,869,1,0,0,0,176,885,1,0,0,0,178,890,1,0,0,0,
    180,893,1,0,0,0,182,897,1,0,0,0,184,901,1,0,0,0,186,905,1,0,0,0,188,925,
    1,0,0,0,190,930,1,0,0,0,192,949,1,0,0,0,194,953,1,0,0,0,196,959,1,0,0,0,
    198,199,3,2,1,0,199,205,3,196,98,0,200,201,3,4,2,0,201,202,3,196,98,0,202,
    204,1,0,0,0,203,200,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,206,1,0,
    0,0,206,217,1,0,0,0,207,205,1,0,0,0,208,212,3,24,12,0,209,212,3,26,13,0,
    210,212,3,10,5,0,211,208,1,0,0,0,211,209,1,0,0,0,211,210,1,0,0,0,212,213,
    1,0,0,0,213,214,3,196,98,0,214,216,1,0,0,0,215,211,1,0,0,0,216,219,1,0,
    0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,220,1,0,0,0,219,217,1,0,0,0,220,
    221,5,0,0,1,221,1,1,0,0,0,222,223,5,14,0,0,223,224,5,27,0,0,224,3,1,0,0,
    0,225,237,5,23,0,0,226,238,3,6,3,0,227,233,5,28,0,0,228,229,3,6,3,0,229,
    230,3,196,98,0,230,232,1,0,0,0,231,228,1,0,0,0,232,235,1,0,0,0,233,231,
    1,0,0,0,233,234,1,0,0,0,234,236,1,0,0,0,235,233,1,0,0,0,236,238,5,29,0,
    0,237,226,1,0,0,0,237,227,1,0,0,0,238,5,1,0,0,0,239,241,7,0,0,0,240,239,
    1,0,0,0,240,241,1,0,0,0,241,242,1,0,0,0,242,243,3,8,4,0,243,7,1,0,0,0,244,
    245,3,178,89,0,245,9,1,0,0,0,246,250,3,12,6,0,247,250,3,20,10,0,248,250,
    3,30,15,0,249,246,1,0,0,0,249,247,1,0,0,0,249,248,1,0,0,0,250,11,1,0,0,
    0,251,263,5,16,0,0,252,264,3,14,7,0,253,259,5,28,0,0,254,255,3,14,7,0,255,
    256,3,196,98,0,256,258,1,0,0,0,257,254,1,0,0,0,258,261,1,0,0,0,259,257,
    1,0,0,0,259,260,1,0,0,0,260,262,1,0,0,0,261,259,1,0,0,0,262,264,5,29,0,
    0,263,252,1,0,0,0,263,253,1,0,0,0,264,13,1,0,0,0,265,271,3,16,8,0,266,268,
    3,106,53,0,267,266,1,0,0,0,267,268,1,0,0,0,268,269,1,0,0,0,269,270,5,34,
    0,0,270,272,3,18,9,0,271,267,1,0,0,0,271,272,1,0,0,0,272,15,1,0,0,0,273,
    278,5,27,0,0,274,275,5,35,0,0,275,277,5,27,0,0,276,274,1,0,0,0,277,280,
    1,0,0,0,278,276,1,0,0,0,278,279,1,0,0,0,279,17,1,0,0,0,280,278,1,0,0,0,
    281,286,3,140,70,0,282,283,5,35,0,0,283,285,3,140,70,0,284,282,1,0,0,0,
    285,288,1,0,0,0,286,284,1,0,0,0,286,287,1,0,0,0,287,19,1,0,0,0,288,286,
    1,0,0,0,289,301,5,20,0,0,290,302,3,22,11,0,291,297,5,28,0,0,292,293,3,22,
    11,0,293,294,3,196,98,0,294,296,1,0,0,0,295,292,1,0,0,0,296,299,1,0,0,0,
    297,295,1,0,0,0,297,298,1,0,0,0,298,300,1,0,0,0,299,297,1,0,0,0,300,302,
    5,29,0,0,301,290,1,0,0,0,301,291,1,0,0,0,302,21,1,0,0,0,303,305,5,27,0,
    0,304,306,5,34,0,0,305,304,1,0,0,0,305,306,1,0,0,0,306,307,1,0,0,0,307,
    308,3,106,53,0,308,23,1,0,0,0,309,310,5,3,0,0,310,311,5,27,0,0,311,313,
    3,132,66,0,312,314,3,34,17,0,313,312,1,0,0,0,313,314,1,0,0,0,314,25,1,0,
    0,0,315,316,5,3,0,0,316,317,3,28,14,0,317,318,5,27,0,0,318,320,3,132,66,
    0,319,321,3,34,17,0,320,319,1,0,0,0,320,321,1,0,0,0,321,27,1,0,0,0,322,
    323,3,136,68,0,323,29,1,0,0,0,324,336,5,25,0,0,325,337,3,32,16,0,326,332,
    5,28,0,0,327,328,3,32,16,0,328,329,3,196,98,0,329,331,1,0,0,0,330,327,1,
    0,0,0,331,334,1,0,0,0,332,330,1,0,0,0,332,333,1,0,0,0,333,335,1,0,0,0,334,
    332,1,0,0,0,335,337,5,29,0,0,336,325,1,0,0,0,336,326,1,0,0,0,337,31,1,0,
    0,0,338,346,3,16,8,0,339,342,3,106,53,0,340,341,5,34,0,0,341,343,3,18,9,
    0,342,340,1,0,0,0,342,343,1,0,0,0,343,347,1,0,0,0,344,345,5,34,0,0,345,
    347,3,18,9,0,346,339,1,0,0,0,346,344,1,0,0,0,347,33,1,0,0,0,348,350,5,30,
    0,0,349,351,3,36,18,0,350,349,1,0,0,0,350,351,1,0,0,0,351,352,1,0,0,0,352,
    353,5,31,0,0,353,35,1,0,0,0,354,356,5,36,0,0,355,354,1,0,0,0,355,356,1,
    0,0,0,356,362,1,0,0,0,357,359,5,87,0,0,358,357,1,0,0,0,358,359,1,0,0,0,
    359,362,1,0,0,0,360,362,4,18,0,0,361,355,1,0,0,0,361,358,1,0,0,0,361,360,
    1,0,0,0,362,363,1,0,0,0,363,364,3,38,19,0,364,365,3,196,98,0,365,367,1,
    0,0,0,366,361,1,0,0,0,367,368,1,0,0,0,368,366,1,0,0,0,368,369,1,0,0,0,369,
    37,1,0,0,0,370,386,3,10,5,0,371,386,3,56,28,0,372,386,3,40,20,0,373,386,
    3,104,52,0,374,386,3,58,29,0,375,386,3,60,30,0,376,386,3,62,31,0,377,386,
    3,64,32,0,378,386,3,66,33,0,379,386,3,34,17,0,380,386,3,70,35,0,381,386,
    3,72,36,0,382,386,3,90,45,0,383,386,3,98,49,0,384,386,3,68,34,0,385,370,
    1,0,0,0,385,371,1,0,0,0,385,372,1,0,0,0,385,373,1,0,0,0,385,374,1,0,0,0,
    385,375,1,0,0,0,385,376,1,0,0,0,385,377,1,0,0,0,385,378,1,0,0,0,385,379,
    1,0,0,0,385,380,1,0,0,0,385,381,1,0,0,0,385,382,1,0,0,0,385,383,1,0,0,0,
    385,384,1,0,0,0,386,39,1,0,0,0,387,393,3,44,22,0,388,393,3,46,23,0,389,
    393,3,48,24,0,390,393,3,42,21,0,391,393,3,52,26,0,392,387,1,0,0,0,392,388,
    1,0,0,0,392,389,1,0,0,0,392,390,1,0,0,0,392,391,1,0,0,0,393,41,1,0,0,0,
    394,395,3,140,70,0,395,43,1,0,0,0,396,397,3,140,70,0,397,398,5,63,0,0,398,
    399,3,140,70,0,399,45,1,0,0,0,400,401,3,140,70,0,401,402,7,1,0,0,402,47,
    1,0,0,0,403,404,3,18,9,0,404,405,3,50,25,0,405,406,3,18,9,0,406,49,1,0,
    0,0,407,409,7,2,0,0,408,407,1,0,0,0,408,409,1,0,0,0,409,410,1,0,0,0,410,
    411,5,34,0,0,411,51,1,0,0,0,412,413,3,16,8,0,413,414,5,41,0,0,414,415,3,
    18,9,0,415,53,1,0,0,0,416,417,7,3,0,0,417,55,1,0,0,0,418,419,5,27,0,0,419,
    421,5,37,0,0,420,422,3,38,19,0,421,420,1,0,0,0,421,422,1,0,0,0,422,57,1,
    0,0,0,423,425,5,24,0,0,424,426,3,18,9,0,425,424,1,0,0,0,425,426,1,0,0,0,
    426,59,1,0,0,0,427,429,5,1,0,0,428,430,5,27,0,0,429,428,1,0,0,0,429,430,
    1,0,0,0,430,61,1,0,0,0,431,433,5,21,0,0,432,434,5,27,0,0,433,432,1,0,0,
    0,433,434,1,0,0,0,434,63,1,0,0,0,435,436,5,13,0,0,436,437,5,27,0,0,437,
    65,1,0,0,0,438,439,5,17,0,0,439,67,1,0,0,0,440,441,5,7,0,0,441,442,3,140,
    70,0,442,69,1,0,0,0,443,452,5,18,0,0,444,453,3,140,70,0,445,446,3,196,98,
    0,446,447,3,140,70,0,447,453,1,0,0,0,448,449,3,40,20,0,449,450,3,196,98,
    0,450,451,3,140,70,0,451,453,1,0,0,0,452,444,1,0,0,0,452,445,1,0,0,0,452,
    448,1,0,0,0,453,454,1,0,0,0,454,460,3,34,17,0,455,458,5,12,0,0,456,459,
    3,70,35,0,457,459,3,34,17,0,458,456,1,0,0,0,458,457,1,0,0,0,459,461,1,0,
    0,0,460,455,1,0,0,0,460,461,1,0,0,0,461,71,1,0,0,0,462,465,3,74,37,0,463,
    465,3,80,40,0,464,462,1,0,0,0,464,463,1,0,0,0,465,73,1,0,0,0,466,477,5,
    15,0,0,467,469,3,140,70,0,468,467,1,0,0,0,468,469,1,0,0,0,469,478,1,0,0,
    0,470,472,3,40,20,0,471,470,1,0,0,0,471,472,1,0,0,0,472,473,1,0,0,0,473,
    475,3,196,98,0,474,476,3,140,70,0,475,474,1,0,0,0,475,476,1,0,0,0,476,478,
    1,0,0,0,477,468,1,0,0,0,477,471,1,0,0,0,478,479,1,0,0,0,479,483,5,30,0,
    0,480,482,3,76,38,0,481,480,1,0,0,0,482,485,1,0,0,0,483,481,1,0,0,0,483,
    484,1,0,0,0,484,486,1,0,0,0,485,483,1,0,0,0,486,487,5,31,0,0,487,75,1,0,
    0,0,488,489,3,78,39,0,489,491,5,37,0,0,490,492,3,36,18,0,491,490,1,0,0,
    0,491,492,1,0,0,0,492,77,1,0,0,0,493,494,5,6,0,0,494,497,3,18,9,0,495,497,
    5,2,0,0,496,493,1,0,0,0,496,495,1,0,0,0,497,79,1,0,0,0,498,507,5,15,0,0,
    499,508,3,82,41,0,500,501,3,196,98,0,501,502,3,82,41,0,502,508,1,0,0,0,
    503,504,3,40,20,0,504,505,3,196,98,0,505,506,3,82,41,0,506,508,1,0,0,0,
    507,499,1,0,0,0,507,500,1,0,0,0,507,503,1,0,0,0,508,509,1,0,0,0,509,513,
    5,30,0,0,510,512,3,84,42,0,511,510,1,0,0,0,512,515,1,0,0,0,513,511,1,0,
    0,0,513,514,1,0,0,0,514,516,1,0,0,0,515,513,1,0,0,0,516,517,5,31,0,0,517,
    81,1,0,0,0,518,519,5,27,0,0,519,521,5,41,0,0,520,518,1,0,0,0,520,521,1,
    0,0,0,521,522,1,0,0,0,522,523,3,142,71,0,523,524,5,38,0,0,524,525,5,28,
    0,0,525,526,5,20,0,0,526,527,5,29,0,0,527,83,1,0,0,0,528,529,3,86,43,0,
    529,531,5,37,0,0,530,532,3,36,18,0,531,530,1,0,0,0,531,532,1,0,0,0,532,
    85,1,0,0,0,533,534,5,6,0,0,534,537,3,88,44,0,535,537,5,2,0,0,536,533,1,
    0,0,0,536,535,1,0,0,0,537,87,1,0,0,0,538,541,3,106,53,0,539,541,5,26,0,
    0,540,538,1,0,0,0,540,539,1,0,0,0,541,549,1,0,0,0,542,545,5,35,0,0,543,
    546,3,106,53,0,544,546,5,26,0,0,545,543,1,0,0,0,545,544,1,0,0,0,546,548,
    1,0,0,0,547,542,1,0,0,0,548,551,1,0,0,0,549,547,1,0,0,0,549,550,1,0,0,0,
    550,89,1,0,0,0,551,549,1,0,0,0,552,553,5,5,0,0,553,557,5,30,0,0,554,556,
    3,92,46,0,555,554,1,0,0,0,556,559,1,0,0,0,557,555,1,0,0,0,557,558,1,0,0,
    0,558,560,1,0,0,0,559,557,1,0,0,0,560,561,5,31,0,0,561,91,1,0,0,0,562,563,
    3,94,47,0,563,565,5,37,0,0,564,566,3,36,18,0,565,564,1,0,0,0,565,566,1,
    0,0,0,566,93,1,0,0,0,567,570,5,6,0,0,568,571,3,44,22,0,569,571,3,96,48,
    0,570,568,1,0,0,0,570,569,1,0,0,0,571,574,1,0,0,0,572,574,5,2,0,0,573,567,
    1,0,0,0,573,572,1,0,0,0,574,95,1,0,0,0,575,576,3,18,9,0,576,577,5,34,0,
    0,577,582,1,0,0,0,578,579,3,16,8,0,579,580,5,41,0,0,580,582,1,0,0,0,581,
    575,1,0,0,0,581,578,1,0,0,0,581,582,1,0,0,0,582,583,1,0,0,0,583,584,3,140,
    70,0,584,97,1,0,0,0,585,593,5,22,0,0,586,588,3,140,70,0,587,586,1,0,0,0,
    587,588,1,0,0,0,588,594,1,0,0,0,589,594,3,100,50,0,590,592,3,102,51,0,591,
    590,1,0,0,0,591,592,1,0,0,0,592,594,1,0,0,0,593,587,1,0,0,0,593,589,1,0,
    0,0,593,591,1,0,0,0,594,595,1,0,0,0,595,596,3,34,17,0,596,99,1,0,0,0,597,
    599,3,40,20,0,598,597,1,0,0,0,598,599,1,0,0,0,599,600,1,0,0,0,600,602,3,
    196,98,0,601,603,3,140,70,0,602,601,1,0,0,0,602,603,1,0,0,0,603,604,1,0,
    0,0,604,606,3,196,98,0,605,607,3,40,20,0,606,605,1,0,0,0,606,607,1,0,0,
    0,607,101,1,0,0,0,608,609,3,18,9,0,609,610,5,34,0,0,610,615,1,0,0,0,611,
    612,3,16,8,0,612,613,5,41,0,0,613,615,1,0,0,0,614,608,1,0,0,0,614,611,1,
    0,0,0,614,615,1,0,0,0,615,616,1,0,0,0,616,617,5,19,0,0,617,618,3,140,70,
    0,618,103,1,0,0,0,619,620,5,8,0,0,620,621,3,140,70,0,621,105,1,0,0,0,622,
    629,3,108,54,0,623,629,3,110,55,0,624,625,5,28,0,0,625,626,3,106,53,0,626,
    627,5,29,0,0,627,629,1,0,0,0,628,622,1,0,0,0,628,623,1,0,0,0,628,624,1,
    0,0,0,629,107,1,0,0,0,630,633,3,158,79,0,631,633,5,27,0,0,632,630,1,0,0,
    0,632,631,1,0,0,0,633,109,1,0,0,0,634,643,3,112,56,0,635,643,3,174,87,0,
    636,643,3,118,59,0,637,643,3,130,65,0,638,643,3,120,60,0,639,643,3,122,
    61,0,640,643,3,124,62,0,641,643,3,126,63,0,642,634,1,0,0,0,642,635,1,0,
    0,0,642,636,1,0,0,0,642,637,1,0,0,0,642,638,1,0,0,0,642,639,1,0,0,0,642,
    640,1,0,0,0,642,641,1,0,0,0,643,111,1,0,0,0,644,645,5,32,0,0,645,646,3,
    114,57,0,646,647,5,33,0,0,647,648,3,116,58,0,648,113,1,0,0,0,649,650,3,
    140,70,0,650,115,1,0,0,0,651,652,3,106,53,0,652,117,1,0,0,0,653,654,5,61,
    0,0,654,655,3,106,53,0,655,119,1,0,0,0,656,657,5,4,0,0,657,666,5,30,0,0,
    658,661,3,128,64,0,659,661,3,108,54,0,660,658,1,0,0,0,660,659,1,0,0,0,661,
    662,1,0,0,0,662,663,3,196,98,0,663,665,1,0,0,0,664,660,1,0,0,0,665,668,
    1,0,0,0,666,664,1,0,0,0,666,667,1,0,0,0,667,669,1,0,0,0,668,666,1,0,0,0,
    669,670,5,31,0,0,670,121,1,0,0,0,671,672,5,32,0,0,672,673,5,33,0,0,673,
    674,3,116,58,0,674,123,1,0,0,0,675,676,5,9,0,0,676,677,5,32,0,0,677,678,
    3,106,53,0,678,679,5,33,0,0,679,680,3,116,58,0,680,125,1,0,0,0,681,687,
    5,11,0,0,682,683,5,11,0,0,683,687,5,63,0,0,684,685,5,63,0,0,685,687,5,11,
    0,0,686,681,1,0,0,0,686,682,1,0,0,0,686,684,1,0,0,0,687,688,1,0,0,0,688,
    689,3,116,58,0,689,127,1,0,0,0,690,691,5,27,0,0,691,692,3,136,68,0,692,
    693,3,134,67,0,693,697,1,0,0,0,694,695,5,27,0,0,695,697,3,136,68,0,696,
    690,1,0,0,0,696,694,1,0,0,0,697,129,1,0,0,0,698,699,5,3,0,0,699,700,3,132,
    66,0,700,131,1,0,0,0,701,702,3,136,68,0,702,703,3,134,67,0,703,706,1,0,
    0,0,704,706,3,136,68,0,705,701,1,0,0,0,705,704,1,0,0,0,706,133,1,0,0,0,
    707,710,3,136,68,0,708,710,3,106,53,0,709,707,1,0,0,0,709,708,1,0,0,0,710,
    135,1,0,0,0,711,723,5,28,0,0,712,717,3,138,69,0,713,714,5,35,0,0,714,716,
    3,138,69,0,715,713,1,0,0,0,716,719,1,0,0,0,717,715,1,0,0,0,717,718,1,0,
    0,0,718,721,1,0,0,0,719,717,1,0,0,0,720,722,5,35,0,0,721,720,1,0,0,0,721,
    722,1,0,0,0,722,724,1,0,0,0,723,712,1,0,0,0,723,724,1,0,0,0,724,725,1,0,
    0,0,725,726,5,29,0,0,726,137,1,0,0,0,727,729,3,16,8,0,728,727,1,0,0,0,728,
    729,1,0,0,0,729,731,1,0,0,0,730,732,5,42,0,0,731,730,1,0,0,0,731,732,1,
    0,0,0,732,733,1,0,0,0,733,734,3,106,53,0,734,139,1,0,0,0,735,736,6,70,-1,
    0,736,740,3,142,71,0,737,738,7,4,0,0,738,740,3,140,70,6,739,735,1,0,0,0,
    739,737,1,0,0,0,740,758,1,0,0,0,741,742,10,5,0,0,742,743,7,5,0,0,743,757,
    3,140,70,6,744,745,10,4,0,0,745,746,7,6,0,0,746,757,3,140,70,5,747,748,
    10,3,0,0,748,749,7,7,0,0,749,757,3,140,70,4,750,751,10,2,0,0,751,752,5,
    44,0,0,752,757,3,140,70,3,753,754,10,1,0,0,754,755,5,43,0,0,755,757,3,140,
    70,2,756,741,1,0,0,0,756,744,1,0,0,0,756,747,1,0,0,0,756,750,1,0,0,0,756,
    753,1,0,0,0,757,760,1,0,0,0,758,756,1,0,0,0,758,759,1,0,0,0,759,141,1,0,
    0,0,760,758,1,0,0,0,761,762,6,71,-1,0,762,766,3,148,74,0,763,766,3,144,
    72,0,764,766,3,192,96,0,765,761,1,0,0,0,765,763,1,0,0,0,765,764,1,0,0,0,
    766,778,1,0,0,0,767,774,10,1,0,0,768,769,5,38,0,0,769,775,5,27,0,0,770,
    775,3,184,92,0,771,775,3,186,93,0,772,775,3,188,94,0,773,775,3,190,95,0,
    774,768,1,0,0,0,774,770,1,0,0,0,774,771,1,0,0,0,774,772,1,0,0,0,774,773,
    1,0,0,0,775,777,1,0,0,0,776,767,1,0,0,0,777,780,1,0,0,0,778,776,1,0,0,0,
    778,779,1,0,0,0,779,143,1,0,0,0,780,778,1,0,0,0,781,782,3,146,73,0,782,
    783,5,28,0,0,783,785,3,140,70,0,784,786,5,35,0,0,785,784,1,0,0,0,785,786,
    1,0,0,0,786,787,1,0,0,0,787,788,5,29,0,0,788,145,1,0,0,0,789,795,3,110,
    55,0,790,791,5,28,0,0,791,792,3,146,73,0,792,793,5,29,0,0,793,795,1,0,0,
    0,794,789,1,0,0,0,794,790,1,0,0,0,795,147,1,0,0,0,796,803,3,150,75,0,797,
    803,3,156,78,0,798,799,5,28,0,0,799,800,3,140,70,0,800,801,5,29,0,0,801,
    803,1,0,0,0,802,796,1,0,0,0,802,797,1,0,0,0,802,798,1,0,0,0,803,149,1,0,
    0,0,804,808,3,152,76,0,805,808,3,160,80,0,806,808,3,182,91,0,807,804,1,
    0,0,0,807,805,1,0,0,0,807,806,1,0,0,0,808,151,1,0,0,0,809,814,5,26,0,0,
    810,814,3,154,77,0,811,814,3,178,89,0,812,814,5,68,0,0,813,809,1,0,0,0,
    813,810,1,0,0,0,813,811,1,0,0,0,813,812,1,0,0,0,814,153,1,0,0,0,815,816,
    7,8,0,0,816,155,1,0,0,0,817,818,5,27,0,0,818,157,1,0,0,0,819,820,5,27,0,
    0,820,821,5,38,0,0,821,822,5,27,0,0,822,159,1,0,0,0,823,824,3,162,81,0,
    824,825,3,164,82,0,825,161,1,0,0,0,826,836,3,174,87,0,827,836,3,112,56,
    0,828,829,5,32,0,0,829,830,5,42,0,0,830,831,5,33,0,0,831,836,3,116,58,0,
    832,836,3,122,61,0,833,836,3,124,62,0,834,836,3,108,54,0,835,826,1,0,0,
    0,835,827,1,0,0,0,835,828,1,0,0,0,835,832,1,0,0,0,835,833,1,0,0,0,835,834,
    1,0,0,0,836,163,1,0,0,0,837,842,5,30,0,0,838,840,3,166,83,0,839,841,5,35,
    0,0,840,839,1,0,0,0,840,841,1,0,0,0,841,843,1,0,0,0,842,838,1,0,0,0,842,
    843,1,0,0,0,843,844,1,0,0,0,844,845,5,31,0,0,845,165,1,0,0,0,846,851,3,
    168,84,0,847,848,5,35,0,0,848,850,3,168,84,0,849,847,1,0,0,0,850,853,1,
    0,0,0,851,849,1,0,0,0,851,852,1,0,0,0,852,167,1,0,0,0,853,851,1,0,0,0,854,
    855,3,170,85,0,855,856,5,37,0,0,856,858,1,0,0,0,857,854,1,0,0,0,857,858,
    1,0,0,0,858,859,1,0,0,0,859,860,3,172,86,0,860,169,1,0,0,0,861,864,3,140,
    70,0,862,864,3,164,82,0,863,861,1,0,0,0,863,862,1,0,0,0,864,171,1,0,0,0,
    865,868,3,140,70,0,866,868,3,164,82,0,867,865,1,0,0,0,867,866,1,0,0,0,868,
    173,1,0,0,0,869,870,5,10,0,0,870,876,5,30,0,0,871,872,3,176,88,0,872,873,
    3,196,98,0,873,875,1,0,0,0,874,871,1,0,0,0,875,878,1,0,0,0,876,874,1,0,
    0,0,876,877,1,0,0,0,877,879,1,0,0,0,878,876,1,0,0,0,879,880,5,31,0,0,880,
    175,1,0,0,0,881,882,3,16,8,0,882,883,3,106,53,0,883,886,1,0,0,0,884,886,
    3,180,90,0,885,881,1,0,0,0,885,884,1,0,0,0,886,888,1,0,0,0,887,889,3,178,
    89,0,888,887,1,0,0,0,888,889,1,0,0,0,889,177,1,0,0,0,890,891,7,9,0,0,891,
    179,1,0,0,0,892,894,5,61,0,0,893,892,1,0,0,0,893,894,1,0,0,0,894,895,1,
    0,0,0,895,896,3,108,54,0,896,181,1,0,0,0,897,898,5,3,0,0,898,899,3,132,
    66,0,899,900,3,34,17,0,900,183,1,0,0,0,901,902,5,32,0,0,902,903,3,140,70,
    0,903,904,5,33,0,0,904,185,1,0,0,0,905,921,5,32,0,0,906,908,3,140,70,0,
    907,906,1,0,0,0,907,908,1,0,0,0,908,909,1,0,0,0,909,911,5,37,0,0,910,912,
    3,140,70,0,911,910,1,0,0,0,911,912,1,0,0,0,912,922,1,0,0,0,913,915,3,140,
    70,0,914,913,1,0,0,0,914,915,1,0,0,0,915,916,1,0,0,0,916,917,5,37,0,0,917,
    918,3,140,70,0,918,919,5,37,0,0,919,920,3,140,70,0,920,922,1,0,0,0,921,
    907,1,0,0,0,921,914,1,0,0,0,922,923,1,0,0,0,923,924,5,33,0,0,924,187,1,
    0,0,0,925,926,5,38,0,0,926,927,5,28,0,0,927,928,3,106,53,0,928,929,5,29,
    0,0,929,189,1,0,0,0,930,945,5,28,0,0,931,938,3,18,9,0,932,935,3,146,73,
    0,933,934,5,35,0,0,934,936,3,18,9,0,935,933,1,0,0,0,935,936,1,0,0,0,936,
    938,1,0,0,0,937,931,1,0,0,0,937,932,1,0,0,0,938,940,1,0,0,0,939,941,5,42,
    0,0,940,939,1,0,0,0,940,941,1,0,0,0,941,943,1,0,0,0,942,944,5,35,0,0,943,
    942,1,0,0,0,943,944,1,0,0,0,944,946,1,0,0,0,945,937,1,0,0,0,945,946,1,0,
    0,0,946,947,1,0,0,0,947,948,5,29,0,0,948,191,1,0,0,0,949,950,3,146,73,0,
    950,951,5,38,0,0,951,952,5,27,0,0,952,193,1,0,0,0,953,954,3,106,53,0,954,
    195,1,0,0,0,955,960,5,36,0,0,956,960,5,0,0,1,957,960,5,87,0,0,958,960,4,
    98,7,0,959,955,1,0,0,0,959,956,1,0,0,0,959,957,1,0,0,0,959,958,1,0,0,0,
    960,197,1,0,0,0,111,205,211,217,233,237,240,249,259,263,267,271,278,286,
    297,301,305,313,320,332,336,342,346,350,355,358,361,368,385,392,408,421,
    425,429,433,452,458,460,464,468,471,475,477,483,491,496,507,513,520,531,
    536,540,545,549,557,565,570,573,581,587,591,593,598,602,606,614,628,632,
    642,660,666,686,696,705,709,717,721,723,728,731,739,756,758,765,774,778,
    785,794,802,807,813,835,840,842,851,857,863,867,876,885,888,893,907,911,
    914,921,935,937,940,943,945,959];

  private static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!GoParser.__ATN) {
      GoParser.__ATN = new ATNDeserializer().deserialize(GoParser._serializedATN);
    }

    return GoParser.__ATN;
  }


  static DecisionsToDFA = GoParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class SourceFileContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public packageClause(): PackageClauseContext {
    return this.getTypedRuleContext(PackageClauseContext, 0) as PackageClauseContext;
  }
  public eos_list(): EosContext[] {
    return this.getTypedRuleContexts(EosContext) as EosContext[];
  }
  public eos(i: number): EosContext {
    return this.getTypedRuleContext(EosContext, i) as EosContext;
  }
  public EOF(): TerminalNode {
    return this.getToken(GoParser.EOF, 0);
  }
  public importDecl_list(): ImportDeclContext[] {
    return this.getTypedRuleContexts(ImportDeclContext) as ImportDeclContext[];
  }
  public importDecl(i: number): ImportDeclContext {
    return this.getTypedRuleContext(ImportDeclContext, i) as ImportDeclContext;
  }
  public functionDecl_list(): FunctionDeclContext[] {
    return this.getTypedRuleContexts(FunctionDeclContext) as FunctionDeclContext[];
  }
  public functionDecl(i: number): FunctionDeclContext {
    return this.getTypedRuleContext(FunctionDeclContext, i) as FunctionDeclContext;
  }
  public methodDecl_list(): MethodDeclContext[] {
    return this.getTypedRuleContexts(MethodDeclContext) as MethodDeclContext[];
  }
  public methodDecl(i: number): MethodDeclContext {
    return this.getTypedRuleContext(MethodDeclContext, i) as MethodDeclContext;
  }
  public declaration_list(): DeclarationContext[] {
    return this.getTypedRuleContexts(DeclarationContext) as DeclarationContext[];
  }
  public declaration(i: number): DeclarationContext {
    return this.getTypedRuleContext(DeclarationContext, i) as DeclarationContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_sourceFile;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterSourceFile) {
	 		listener.enterSourceFile(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitSourceFile) {
	 		listener.exitSourceFile(this);
    }
  }
}


export class PackageClauseContext extends ParserRuleContext {
  public _packageName!: Token;
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public PACKAGE(): TerminalNode {
    return this.getToken(GoParser.PACKAGE, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_packageClause;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterPackageClause) {
	 		listener.enterPackageClause(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitPackageClause) {
	 		listener.exitPackageClause(this);
    }
  }
}


export class ImportDeclContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public IMPORT(): TerminalNode {
    return this.getToken(GoParser.IMPORT, 0);
  }
  public importSpec_list(): ImportSpecContext[] {
    return this.getTypedRuleContexts(ImportSpecContext) as ImportSpecContext[];
  }
  public importSpec(i: number): ImportSpecContext {
    return this.getTypedRuleContext(ImportSpecContext, i) as ImportSpecContext;
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GoParser.L_PAREN, 0);
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GoParser.R_PAREN, 0);
  }
  public eos_list(): EosContext[] {
    return this.getTypedRuleContexts(EosContext) as EosContext[];
  }
  public eos(i: number): EosContext {
    return this.getTypedRuleContext(EosContext, i) as EosContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_importDecl;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterImportDecl) {
	 		listener.enterImportDecl(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitImportDecl) {
	 		listener.exitImportDecl(this);
    }
  }
}


export class ImportSpecContext extends ParserRuleContext {
  public _alias!: Token;
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public importPath(): ImportPathContext {
    return this.getTypedRuleContext(ImportPathContext, 0) as ImportPathContext;
  }
  public DOT(): TerminalNode {
    return this.getToken(GoParser.DOT, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_importSpec;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterImportSpec) {
	 		listener.enterImportSpec(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitImportSpec) {
	 		listener.exitImportSpec(this);
    }
  }
}


export class ImportPathContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public string_(): String_Context {
    return this.getTypedRuleContext(String_Context, 0) as String_Context;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_importPath;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterImportPath) {
	 		listener.enterImportPath(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitImportPath) {
	 		listener.exitImportPath(this);
    }
  }
}


export class DeclarationContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public constDecl(): ConstDeclContext {
    return this.getTypedRuleContext(ConstDeclContext, 0) as ConstDeclContext;
  }
  public typeDecl(): TypeDeclContext {
    return this.getTypedRuleContext(TypeDeclContext, 0) as TypeDeclContext;
  }
  public varDecl(): VarDeclContext {
    return this.getTypedRuleContext(VarDeclContext, 0) as VarDeclContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_declaration;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterDeclaration) {
	 		listener.enterDeclaration(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitDeclaration) {
	 		listener.exitDeclaration(this);
    }
  }
}


export class ConstDeclContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public CONST(): TerminalNode {
    return this.getToken(GoParser.CONST, 0);
  }
  public constSpec_list(): ConstSpecContext[] {
    return this.getTypedRuleContexts(ConstSpecContext) as ConstSpecContext[];
  }
  public constSpec(i: number): ConstSpecContext {
    return this.getTypedRuleContext(ConstSpecContext, i) as ConstSpecContext;
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GoParser.L_PAREN, 0);
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GoParser.R_PAREN, 0);
  }
  public eos_list(): EosContext[] {
    return this.getTypedRuleContexts(EosContext) as EosContext[];
  }
  public eos(i: number): EosContext {
    return this.getTypedRuleContext(EosContext, i) as EosContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_constDecl;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterConstDecl) {
	 		listener.enterConstDecl(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitConstDecl) {
	 		listener.exitConstDecl(this);
    }
  }
}


export class ConstSpecContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public identifierList(): IdentifierListContext {
    return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
  }
  public ASSIGN(): TerminalNode {
    return this.getToken(GoParser.ASSIGN, 0);
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_constSpec;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterConstSpec) {
	 		listener.enterConstSpec(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitConstSpec) {
	 		listener.exitConstSpec(this);
    }
  }
}


export class IdentifierListContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(GoParser.IDENTIFIER);
  }
  public IDENTIFIER(i: number): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, i);
  }
  public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GoParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(GoParser.COMMA, i);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_identifierList;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterIdentifierList) {
	 		listener.enterIdentifierList(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitIdentifierList) {
	 		listener.exitIdentifierList(this);
    }
  }
}


export class ExpressionListContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GoParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(GoParser.COMMA, i);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_expressionList;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterExpressionList) {
	 		listener.enterExpressionList(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitExpressionList) {
	 		listener.exitExpressionList(this);
    }
  }
}


export class TypeDeclContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public TYPE(): TerminalNode {
    return this.getToken(GoParser.TYPE, 0);
  }
  public typeSpec_list(): TypeSpecContext[] {
    return this.getTypedRuleContexts(TypeSpecContext) as TypeSpecContext[];
  }
  public typeSpec(i: number): TypeSpecContext {
    return this.getTypedRuleContext(TypeSpecContext, i) as TypeSpecContext;
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GoParser.L_PAREN, 0);
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GoParser.R_PAREN, 0);
  }
  public eos_list(): EosContext[] {
    return this.getTypedRuleContexts(EosContext) as EosContext[];
  }
  public eos(i: number): EosContext {
    return this.getTypedRuleContext(EosContext, i) as EosContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_typeDecl;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterTypeDecl) {
	 		listener.enterTypeDecl(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitTypeDecl) {
	 		listener.exitTypeDecl(this);
    }
  }
}


export class TypeSpecContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
  }
  public ASSIGN(): TerminalNode {
    return this.getToken(GoParser.ASSIGN, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_typeSpec;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterTypeSpec) {
	 		listener.enterTypeSpec(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitTypeSpec) {
	 		listener.exitTypeSpec(this);
    }
  }
}


export class FunctionDeclContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public FUNC(): TerminalNode {
    return this.getToken(GoParser.FUNC, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public signature(): SignatureContext {
    return this.getTypedRuleContext(SignatureContext, 0) as SignatureContext;
  }
  public block(): BlockContext {
    return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_functionDecl;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterFunctionDecl) {
	 		listener.enterFunctionDecl(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitFunctionDecl) {
	 		listener.exitFunctionDecl(this);
    }
  }
}


export class MethodDeclContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public FUNC(): TerminalNode {
    return this.getToken(GoParser.FUNC, 0);
  }
  public receiver(): ReceiverContext {
    return this.getTypedRuleContext(ReceiverContext, 0) as ReceiverContext;
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public signature(): SignatureContext {
    return this.getTypedRuleContext(SignatureContext, 0) as SignatureContext;
  }
  public block(): BlockContext {
    return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_methodDecl;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterMethodDecl) {
	 		listener.enterMethodDecl(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitMethodDecl) {
	 		listener.exitMethodDecl(this);
    }
  }
}


export class ReceiverContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public parameters(): ParametersContext {
    return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_receiver;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterReceiver) {
	 		listener.enterReceiver(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitReceiver) {
	 		listener.exitReceiver(this);
    }
  }
}


export class VarDeclContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public VAR(): TerminalNode {
    return this.getToken(GoParser.VAR, 0);
  }
  public varSpec_list(): VarSpecContext[] {
    return this.getTypedRuleContexts(VarSpecContext) as VarSpecContext[];
  }
  public varSpec(i: number): VarSpecContext {
    return this.getTypedRuleContext(VarSpecContext, i) as VarSpecContext;
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GoParser.L_PAREN, 0);
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GoParser.R_PAREN, 0);
  }
  public eos_list(): EosContext[] {
    return this.getTypedRuleContexts(EosContext) as EosContext[];
  }
  public eos(i: number): EosContext {
    return this.getTypedRuleContext(EosContext, i) as EosContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_varDecl;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterVarDecl) {
	 		listener.enterVarDecl(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitVarDecl) {
	 		listener.exitVarDecl(this);
    }
  }
}


export class VarSpecContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public identifierList(): IdentifierListContext {
    return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
  }
  public ASSIGN(): TerminalNode {
    return this.getToken(GoParser.ASSIGN, 0);
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_varSpec;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterVarSpec) {
	 		listener.enterVarSpec(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitVarSpec) {
	 		listener.exitVarSpec(this);
    }
  }
}


export class BlockContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public L_CURLY(): TerminalNode {
    return this.getToken(GoParser.L_CURLY, 0);
  }
  public R_CURLY(): TerminalNode {
    return this.getToken(GoParser.R_CURLY, 0);
  }
  public statementList(): StatementListContext {
    return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_block;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
    }
  }
}


export class StatementListContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public statement_list(): StatementContext[] {
    return this.getTypedRuleContexts(StatementContext) as StatementContext[];
  }
  public statement(i: number): StatementContext {
    return this.getTypedRuleContext(StatementContext, i) as StatementContext;
  }
  public eos_list(): EosContext[] {
    return this.getTypedRuleContexts(EosContext) as EosContext[];
  }
  public eos(i: number): EosContext {
    return this.getTypedRuleContext(EosContext, i) as EosContext;
  }
  public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(GoParser.SEMI);
  }
  public SEMI(i: number): TerminalNode {
    return this.getToken(GoParser.SEMI, i);
  }
  public EOS_list(): TerminalNode[] {
	    	return this.getTokens(GoParser.EOS);
  }
  public EOS(i: number): TerminalNode {
    return this.getToken(GoParser.EOS, i);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_statementList;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterStatementList) {
	 		listener.enterStatementList(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitStatementList) {
	 		listener.exitStatementList(this);
    }
  }
}


export class StatementContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public declaration(): DeclarationContext {
    return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
  }
  public labeledStmt(): LabeledStmtContext {
    return this.getTypedRuleContext(LabeledStmtContext, 0) as LabeledStmtContext;
  }
  public simpleStmt(): SimpleStmtContext {
    return this.getTypedRuleContext(SimpleStmtContext, 0) as SimpleStmtContext;
  }
  public goStmt(): GoStmtContext {
    return this.getTypedRuleContext(GoStmtContext, 0) as GoStmtContext;
  }
  public returnStmt(): ReturnStmtContext {
    return this.getTypedRuleContext(ReturnStmtContext, 0) as ReturnStmtContext;
  }
  public breakStmt(): BreakStmtContext {
    return this.getTypedRuleContext(BreakStmtContext, 0) as BreakStmtContext;
  }
  public continueStmt(): ContinueStmtContext {
    return this.getTypedRuleContext(ContinueStmtContext, 0) as ContinueStmtContext;
  }
  public gotoStmt(): GotoStmtContext {
    return this.getTypedRuleContext(GotoStmtContext, 0) as GotoStmtContext;
  }
  public fallthroughStmt(): FallthroughStmtContext {
    return this.getTypedRuleContext(FallthroughStmtContext, 0) as FallthroughStmtContext;
  }
  public block(): BlockContext {
    return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
  }
  public ifStmt(): IfStmtContext {
    return this.getTypedRuleContext(IfStmtContext, 0) as IfStmtContext;
  }
  public switchStmt(): SwitchStmtContext {
    return this.getTypedRuleContext(SwitchStmtContext, 0) as SwitchStmtContext;
  }
  public selectStmt(): SelectStmtContext {
    return this.getTypedRuleContext(SelectStmtContext, 0) as SelectStmtContext;
  }
  public forStmt(): ForStmtContext {
    return this.getTypedRuleContext(ForStmtContext, 0) as ForStmtContext;
  }
  public deferStmt(): DeferStmtContext {
    return this.getTypedRuleContext(DeferStmtContext, 0) as DeferStmtContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_statement;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
    }
  }
}


export class SimpleStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public sendStmt(): SendStmtContext {
    return this.getTypedRuleContext(SendStmtContext, 0) as SendStmtContext;
  }
  public incDecStmt(): IncDecStmtContext {
    return this.getTypedRuleContext(IncDecStmtContext, 0) as IncDecStmtContext;
  }
  public assignment(): AssignmentContext {
    return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
  }
  public expressionStmt(): ExpressionStmtContext {
    return this.getTypedRuleContext(ExpressionStmtContext, 0) as ExpressionStmtContext;
  }
  public shortVarDecl(): ShortVarDeclContext {
    return this.getTypedRuleContext(ShortVarDeclContext, 0) as ShortVarDeclContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_simpleStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterSimpleStmt) {
	 		listener.enterSimpleStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitSimpleStmt) {
	 		listener.exitSimpleStmt(this);
    }
  }
}


export class ExpressionStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_expressionStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterExpressionStmt) {
	 		listener.enterExpressionStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitExpressionStmt) {
	 		listener.exitExpressionStmt(this);
    }
  }
}


export class SendStmtContext extends ParserRuleContext {
  public _channel!: ExpressionContext;
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public RECEIVE(): TerminalNode {
    return this.getToken(GoParser.RECEIVE, 0);
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_sendStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterSendStmt) {
	 		listener.enterSendStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitSendStmt) {
	 		listener.exitSendStmt(this);
    }
  }
}


export class IncDecStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public PLUS_PLUS(): TerminalNode {
    return this.getToken(GoParser.PLUS_PLUS, 0);
  }
  public MINUS_MINUS(): TerminalNode {
    return this.getToken(GoParser.MINUS_MINUS, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_incDecStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterIncDecStmt) {
	 		listener.enterIncDecStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitIncDecStmt) {
	 		listener.exitIncDecStmt(this);
    }
  }
}


export class AssignmentContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public expressionList_list(): ExpressionListContext[] {
    return this.getTypedRuleContexts(ExpressionListContext) as ExpressionListContext[];
  }
  public expressionList(i: number): ExpressionListContext {
    return this.getTypedRuleContext(ExpressionListContext, i) as ExpressionListContext;
  }
  public assign_op(): Assign_opContext {
    return this.getTypedRuleContext(Assign_opContext, 0) as Assign_opContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_assignment;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitAssignment) {
	 		listener.exitAssignment(this);
    }
  }
}


export class Assign_opContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public ASSIGN(): TerminalNode {
    return this.getToken(GoParser.ASSIGN, 0);
  }
  public PLUS(): TerminalNode {
    return this.getToken(GoParser.PLUS, 0);
  }
  public MINUS(): TerminalNode {
    return this.getToken(GoParser.MINUS, 0);
  }
  public OR(): TerminalNode {
    return this.getToken(GoParser.OR, 0);
  }
  public CARET(): TerminalNode {
    return this.getToken(GoParser.CARET, 0);
  }
  public STAR(): TerminalNode {
    return this.getToken(GoParser.STAR, 0);
  }
  public DIV(): TerminalNode {
    return this.getToken(GoParser.DIV, 0);
  }
  public MOD(): TerminalNode {
    return this.getToken(GoParser.MOD, 0);
  }
  public LSHIFT(): TerminalNode {
    return this.getToken(GoParser.LSHIFT, 0);
  }
  public RSHIFT(): TerminalNode {
    return this.getToken(GoParser.RSHIFT, 0);
  }
  public AMPERSAND(): TerminalNode {
    return this.getToken(GoParser.AMPERSAND, 0);
  }
  public BIT_CLEAR(): TerminalNode {
    return this.getToken(GoParser.BIT_CLEAR, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_assign_op;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterAssign_op) {
	 		listener.enterAssign_op(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitAssign_op) {
	 		listener.exitAssign_op(this);
    }
  }
}


export class ShortVarDeclContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public identifierList(): IdentifierListContext {
    return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
  }
  public DECLARE_ASSIGN(): TerminalNode {
    return this.getToken(GoParser.DECLARE_ASSIGN, 0);
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_shortVarDecl;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterShortVarDecl) {
	 		listener.enterShortVarDecl(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitShortVarDecl) {
	 		listener.exitShortVarDecl(this);
    }
  }
}


export class EmptyStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public EOS(): TerminalNode {
    return this.getToken(GoParser.EOS, 0);
  }
  public SEMI(): TerminalNode {
    return this.getToken(GoParser.SEMI, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_emptyStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterEmptyStmt) {
	 		listener.enterEmptyStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitEmptyStmt) {
	 		listener.exitEmptyStmt(this);
    }
  }
}


export class LabeledStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(GoParser.COLON, 0);
  }
  public statement(): StatementContext {
    return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_labeledStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterLabeledStmt) {
	 		listener.enterLabeledStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitLabeledStmt) {
	 		listener.exitLabeledStmt(this);
    }
  }
}


export class ReturnStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public RETURN(): TerminalNode {
    return this.getToken(GoParser.RETURN, 0);
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_returnStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterReturnStmt) {
	 		listener.enterReturnStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitReturnStmt) {
	 		listener.exitReturnStmt(this);
    }
  }
}


export class BreakStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public BREAK(): TerminalNode {
    return this.getToken(GoParser.BREAK, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_breakStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterBreakStmt) {
	 		listener.enterBreakStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitBreakStmt) {
	 		listener.exitBreakStmt(this);
    }
  }
}


export class ContinueStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public CONTINUE(): TerminalNode {
    return this.getToken(GoParser.CONTINUE, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_continueStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterContinueStmt) {
	 		listener.enterContinueStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitContinueStmt) {
	 		listener.exitContinueStmt(this);
    }
  }
}


export class GotoStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public GOTO(): TerminalNode {
    return this.getToken(GoParser.GOTO, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_gotoStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterGotoStmt) {
	 		listener.enterGotoStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitGotoStmt) {
	 		listener.exitGotoStmt(this);
    }
  }
}


export class FallthroughStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public FALLTHROUGH(): TerminalNode {
    return this.getToken(GoParser.FALLTHROUGH, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_fallthroughStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterFallthroughStmt) {
	 		listener.enterFallthroughStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitFallthroughStmt) {
	 		listener.exitFallthroughStmt(this);
    }
  }
}


export class DeferStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public DEFER(): TerminalNode {
    return this.getToken(GoParser.DEFER, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_deferStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterDeferStmt) {
	 		listener.enterDeferStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitDeferStmt) {
	 		listener.exitDeferStmt(this);
    }
  }
}


export class IfStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public IF(): TerminalNode {
    return this.getToken(GoParser.IF, 0);
  }
  public block_list(): BlockContext[] {
    return this.getTypedRuleContexts(BlockContext) as BlockContext[];
  }
  public block(i: number): BlockContext {
    return this.getTypedRuleContext(BlockContext, i) as BlockContext;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public eos(): EosContext {
    return this.getTypedRuleContext(EosContext, 0) as EosContext;
  }
  public simpleStmt(): SimpleStmtContext {
    return this.getTypedRuleContext(SimpleStmtContext, 0) as SimpleStmtContext;
  }
  public ELSE(): TerminalNode {
    return this.getToken(GoParser.ELSE, 0);
  }
  public ifStmt(): IfStmtContext {
    return this.getTypedRuleContext(IfStmtContext, 0) as IfStmtContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_ifStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterIfStmt) {
	 		listener.enterIfStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitIfStmt) {
	 		listener.exitIfStmt(this);
    }
  }
}


export class SwitchStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public exprSwitchStmt(): ExprSwitchStmtContext {
    return this.getTypedRuleContext(ExprSwitchStmtContext, 0) as ExprSwitchStmtContext;
  }
  public typeSwitchStmt(): TypeSwitchStmtContext {
    return this.getTypedRuleContext(TypeSwitchStmtContext, 0) as TypeSwitchStmtContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_switchStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterSwitchStmt) {
	 		listener.enterSwitchStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitSwitchStmt) {
	 		listener.exitSwitchStmt(this);
    }
  }
}


export class ExprSwitchStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public SWITCH(): TerminalNode {
    return this.getToken(GoParser.SWITCH, 0);
  }
  public L_CURLY(): TerminalNode {
    return this.getToken(GoParser.L_CURLY, 0);
  }
  public R_CURLY(): TerminalNode {
    return this.getToken(GoParser.R_CURLY, 0);
  }
  public eos(): EosContext {
    return this.getTypedRuleContext(EosContext, 0) as EosContext;
  }
  public exprCaseClause_list(): ExprCaseClauseContext[] {
    return this.getTypedRuleContexts(ExprCaseClauseContext) as ExprCaseClauseContext[];
  }
  public exprCaseClause(i: number): ExprCaseClauseContext {
    return this.getTypedRuleContext(ExprCaseClauseContext, i) as ExprCaseClauseContext;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public simpleStmt(): SimpleStmtContext {
    return this.getTypedRuleContext(SimpleStmtContext, 0) as SimpleStmtContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_exprSwitchStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterExprSwitchStmt) {
	 		listener.enterExprSwitchStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitExprSwitchStmt) {
	 		listener.exitExprSwitchStmt(this);
    }
  }
}


export class ExprCaseClauseContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public exprSwitchCase(): ExprSwitchCaseContext {
    return this.getTypedRuleContext(ExprSwitchCaseContext, 0) as ExprSwitchCaseContext;
  }
  public COLON(): TerminalNode {
    return this.getToken(GoParser.COLON, 0);
  }
  public statementList(): StatementListContext {
    return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_exprCaseClause;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterExprCaseClause) {
	 		listener.enterExprCaseClause(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitExprCaseClause) {
	 		listener.exitExprCaseClause(this);
    }
  }
}


export class ExprSwitchCaseContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public CASE(): TerminalNode {
    return this.getToken(GoParser.CASE, 0);
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
  }
  public DEFAULT(): TerminalNode {
    return this.getToken(GoParser.DEFAULT, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_exprSwitchCase;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterExprSwitchCase) {
	 		listener.enterExprSwitchCase(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitExprSwitchCase) {
	 		listener.exitExprSwitchCase(this);
    }
  }
}


export class TypeSwitchStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public SWITCH(): TerminalNode {
    return this.getToken(GoParser.SWITCH, 0);
  }
  public L_CURLY(): TerminalNode {
    return this.getToken(GoParser.L_CURLY, 0);
  }
  public R_CURLY(): TerminalNode {
    return this.getToken(GoParser.R_CURLY, 0);
  }
  public typeSwitchGuard(): TypeSwitchGuardContext {
    return this.getTypedRuleContext(TypeSwitchGuardContext, 0) as TypeSwitchGuardContext;
  }
  public eos(): EosContext {
    return this.getTypedRuleContext(EosContext, 0) as EosContext;
  }
  public simpleStmt(): SimpleStmtContext {
    return this.getTypedRuleContext(SimpleStmtContext, 0) as SimpleStmtContext;
  }
  public typeCaseClause_list(): TypeCaseClauseContext[] {
    return this.getTypedRuleContexts(TypeCaseClauseContext) as TypeCaseClauseContext[];
  }
  public typeCaseClause(i: number): TypeCaseClauseContext {
    return this.getTypedRuleContext(TypeCaseClauseContext, i) as TypeCaseClauseContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_typeSwitchStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterTypeSwitchStmt) {
	 		listener.enterTypeSwitchStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitTypeSwitchStmt) {
	 		listener.exitTypeSwitchStmt(this);
    }
  }
}


export class TypeSwitchGuardContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public primaryExpr(): PrimaryExprContext {
    return this.getTypedRuleContext(PrimaryExprContext, 0) as PrimaryExprContext;
  }
  public DOT(): TerminalNode {
    return this.getToken(GoParser.DOT, 0);
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GoParser.L_PAREN, 0);
  }
  public TYPE(): TerminalNode {
    return this.getToken(GoParser.TYPE, 0);
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GoParser.R_PAREN, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public DECLARE_ASSIGN(): TerminalNode {
    return this.getToken(GoParser.DECLARE_ASSIGN, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_typeSwitchGuard;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterTypeSwitchGuard) {
	 		listener.enterTypeSwitchGuard(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitTypeSwitchGuard) {
	 		listener.exitTypeSwitchGuard(this);
    }
  }
}


export class TypeCaseClauseContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public typeSwitchCase(): TypeSwitchCaseContext {
    return this.getTypedRuleContext(TypeSwitchCaseContext, 0) as TypeSwitchCaseContext;
  }
  public COLON(): TerminalNode {
    return this.getToken(GoParser.COLON, 0);
  }
  public statementList(): StatementListContext {
    return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_typeCaseClause;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterTypeCaseClause) {
	 		listener.enterTypeCaseClause(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitTypeCaseClause) {
	 		listener.exitTypeCaseClause(this);
    }
  }
}


export class TypeSwitchCaseContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public CASE(): TerminalNode {
    return this.getToken(GoParser.CASE, 0);
  }
  public typeList(): TypeListContext {
    return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
  }
  public DEFAULT(): TerminalNode {
    return this.getToken(GoParser.DEFAULT, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_typeSwitchCase;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterTypeSwitchCase) {
	 		listener.enterTypeSwitchCase(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitTypeSwitchCase) {
	 		listener.exitTypeSwitchCase(this);
    }
  }
}


export class TypeListContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public type__list(): Type_Context[] {
    return this.getTypedRuleContexts(Type_Context) as Type_Context[];
  }
  public type_(i: number): Type_Context {
    return this.getTypedRuleContext(Type_Context, i) as Type_Context;
  }
  public NIL_LIT_list(): TerminalNode[] {
	    	return this.getTokens(GoParser.NIL_LIT);
  }
  public NIL_LIT(i: number): TerminalNode {
    return this.getToken(GoParser.NIL_LIT, i);
  }
  public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GoParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(GoParser.COMMA, i);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_typeList;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterTypeList) {
	 		listener.enterTypeList(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitTypeList) {
	 		listener.exitTypeList(this);
    }
  }
}


export class SelectStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public SELECT(): TerminalNode {
    return this.getToken(GoParser.SELECT, 0);
  }
  public L_CURLY(): TerminalNode {
    return this.getToken(GoParser.L_CURLY, 0);
  }
  public R_CURLY(): TerminalNode {
    return this.getToken(GoParser.R_CURLY, 0);
  }
  public commClause_list(): CommClauseContext[] {
    return this.getTypedRuleContexts(CommClauseContext) as CommClauseContext[];
  }
  public commClause(i: number): CommClauseContext {
    return this.getTypedRuleContext(CommClauseContext, i) as CommClauseContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_selectStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterSelectStmt) {
	 		listener.enterSelectStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitSelectStmt) {
	 		listener.exitSelectStmt(this);
    }
  }
}


export class CommClauseContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public commCase(): CommCaseContext {
    return this.getTypedRuleContext(CommCaseContext, 0) as CommCaseContext;
  }
  public COLON(): TerminalNode {
    return this.getToken(GoParser.COLON, 0);
  }
  public statementList(): StatementListContext {
    return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_commClause;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterCommClause) {
	 		listener.enterCommClause(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitCommClause) {
	 		listener.exitCommClause(this);
    }
  }
}


export class CommCaseContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public CASE(): TerminalNode {
    return this.getToken(GoParser.CASE, 0);
  }
  public sendStmt(): SendStmtContext {
    return this.getTypedRuleContext(SendStmtContext, 0) as SendStmtContext;
  }
  public recvStmt(): RecvStmtContext {
    return this.getTypedRuleContext(RecvStmtContext, 0) as RecvStmtContext;
  }
  public DEFAULT(): TerminalNode {
    return this.getToken(GoParser.DEFAULT, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_commCase;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterCommCase) {
	 		listener.enterCommCase(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitCommCase) {
	 		listener.exitCommCase(this);
    }
  }
}


export class RecvStmtContext extends ParserRuleContext {
  public _recvExpr!: ExpressionContext;
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
  }
  public ASSIGN(): TerminalNode {
    return this.getToken(GoParser.ASSIGN, 0);
  }
  public identifierList(): IdentifierListContext {
    return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
  }
  public DECLARE_ASSIGN(): TerminalNode {
    return this.getToken(GoParser.DECLARE_ASSIGN, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_recvStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterRecvStmt) {
	 		listener.enterRecvStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitRecvStmt) {
	 		listener.exitRecvStmt(this);
    }
  }
}


export class ForStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public FOR(): TerminalNode {
    return this.getToken(GoParser.FOR, 0);
  }
  public block(): BlockContext {
    return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
  }
  public forClause(): ForClauseContext {
    return this.getTypedRuleContext(ForClauseContext, 0) as ForClauseContext;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public rangeClause(): RangeClauseContext {
    return this.getTypedRuleContext(RangeClauseContext, 0) as RangeClauseContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_forStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterForStmt) {
	 		listener.enterForStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitForStmt) {
	 		listener.exitForStmt(this);
    }
  }
}


export class ForClauseContext extends ParserRuleContext {
  public _initStmt!: SimpleStmtContext;
  public _postStmt!: SimpleStmtContext;
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public eos_list(): EosContext[] {
    return this.getTypedRuleContexts(EosContext) as EosContext[];
  }
  public eos(i: number): EosContext {
    return this.getTypedRuleContext(EosContext, i) as EosContext;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public simpleStmt_list(): SimpleStmtContext[] {
    return this.getTypedRuleContexts(SimpleStmtContext) as SimpleStmtContext[];
  }
  public simpleStmt(i: number): SimpleStmtContext {
    return this.getTypedRuleContext(SimpleStmtContext, i) as SimpleStmtContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_forClause;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterForClause) {
	 		listener.enterForClause(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitForClause) {
	 		listener.exitForClause(this);
    }
  }
}


export class RangeClauseContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public RANGE(): TerminalNode {
    return this.getToken(GoParser.RANGE, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
  }
  public ASSIGN(): TerminalNode {
    return this.getToken(GoParser.ASSIGN, 0);
  }
  public identifierList(): IdentifierListContext {
    return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
  }
  public DECLARE_ASSIGN(): TerminalNode {
    return this.getToken(GoParser.DECLARE_ASSIGN, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_rangeClause;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterRangeClause) {
	 		listener.enterRangeClause(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitRangeClause) {
	 		listener.exitRangeClause(this);
    }
  }
}


export class GoStmtContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public GO(): TerminalNode {
    return this.getToken(GoParser.GO, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_goStmt;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterGoStmt) {
	 		listener.enterGoStmt(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitGoStmt) {
	 		listener.exitGoStmt(this);
    }
  }
}


export class Type_Context extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public typeName(): TypeNameContext {
    return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
  }
  public typeLit(): TypeLitContext {
    return this.getTypedRuleContext(TypeLitContext, 0) as TypeLitContext;
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GoParser.L_PAREN, 0);
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GoParser.R_PAREN, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_type_;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterType_) {
	 		listener.enterType_(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitType_) {
	 		listener.exitType_(this);
    }
  }
}


export class TypeNameContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public qualifiedIdent(): QualifiedIdentContext {
    return this.getTypedRuleContext(QualifiedIdentContext, 0) as QualifiedIdentContext;
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_typeName;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterTypeName) {
	 		listener.enterTypeName(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitTypeName) {
	 		listener.exitTypeName(this);
    }
  }
}


export class TypeLitContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public arrayType(): ArrayTypeContext {
    return this.getTypedRuleContext(ArrayTypeContext, 0) as ArrayTypeContext;
  }
  public structType(): StructTypeContext {
    return this.getTypedRuleContext(StructTypeContext, 0) as StructTypeContext;
  }
  public pointerType(): PointerTypeContext {
    return this.getTypedRuleContext(PointerTypeContext, 0) as PointerTypeContext;
  }
  public functionType(): FunctionTypeContext {
    return this.getTypedRuleContext(FunctionTypeContext, 0) as FunctionTypeContext;
  }
  public interfaceType(): InterfaceTypeContext {
    return this.getTypedRuleContext(InterfaceTypeContext, 0) as InterfaceTypeContext;
  }
  public sliceType(): SliceTypeContext {
    return this.getTypedRuleContext(SliceTypeContext, 0) as SliceTypeContext;
  }
  public mapType(): MapTypeContext {
    return this.getTypedRuleContext(MapTypeContext, 0) as MapTypeContext;
  }
  public channelType(): ChannelTypeContext {
    return this.getTypedRuleContext(ChannelTypeContext, 0) as ChannelTypeContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_typeLit;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterTypeLit) {
	 		listener.enterTypeLit(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitTypeLit) {
	 		listener.exitTypeLit(this);
    }
  }
}


export class ArrayTypeContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public L_BRACKET(): TerminalNode {
    return this.getToken(GoParser.L_BRACKET, 0);
  }
  public arrayLength(): ArrayLengthContext {
    return this.getTypedRuleContext(ArrayLengthContext, 0) as ArrayLengthContext;
  }
  public R_BRACKET(): TerminalNode {
    return this.getToken(GoParser.R_BRACKET, 0);
  }
  public elementType(): ElementTypeContext {
    return this.getTypedRuleContext(ElementTypeContext, 0) as ElementTypeContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_arrayType;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterArrayType) {
	 		listener.enterArrayType(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitArrayType) {
	 		listener.exitArrayType(this);
    }
  }
}


export class ArrayLengthContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_arrayLength;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterArrayLength) {
	 		listener.enterArrayLength(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitArrayLength) {
	 		listener.exitArrayLength(this);
    }
  }
}


export class ElementTypeContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_elementType;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterElementType) {
	 		listener.enterElementType(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitElementType) {
	 		listener.exitElementType(this);
    }
  }
}


export class PointerTypeContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public STAR(): TerminalNode {
    return this.getToken(GoParser.STAR, 0);
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_pointerType;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterPointerType) {
	 		listener.enterPointerType(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitPointerType) {
	 		listener.exitPointerType(this);
    }
  }
}


export class InterfaceTypeContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public INTERFACE(): TerminalNode {
    return this.getToken(GoParser.INTERFACE, 0);
  }
  public L_CURLY(): TerminalNode {
    return this.getToken(GoParser.L_CURLY, 0);
  }
  public R_CURLY(): TerminalNode {
    return this.getToken(GoParser.R_CURLY, 0);
  }
  public eos_list(): EosContext[] {
    return this.getTypedRuleContexts(EosContext) as EosContext[];
  }
  public eos(i: number): EosContext {
    return this.getTypedRuleContext(EosContext, i) as EosContext;
  }
  public methodSpec_list(): MethodSpecContext[] {
    return this.getTypedRuleContexts(MethodSpecContext) as MethodSpecContext[];
  }
  public methodSpec(i: number): MethodSpecContext {
    return this.getTypedRuleContext(MethodSpecContext, i) as MethodSpecContext;
  }
  public typeName_list(): TypeNameContext[] {
    return this.getTypedRuleContexts(TypeNameContext) as TypeNameContext[];
  }
  public typeName(i: number): TypeNameContext {
    return this.getTypedRuleContext(TypeNameContext, i) as TypeNameContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_interfaceType;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterInterfaceType) {
	 		listener.enterInterfaceType(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitInterfaceType) {
	 		listener.exitInterfaceType(this);
    }
  }
}


export class SliceTypeContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public L_BRACKET(): TerminalNode {
    return this.getToken(GoParser.L_BRACKET, 0);
  }
  public R_BRACKET(): TerminalNode {
    return this.getToken(GoParser.R_BRACKET, 0);
  }
  public elementType(): ElementTypeContext {
    return this.getTypedRuleContext(ElementTypeContext, 0) as ElementTypeContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_sliceType;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterSliceType) {
	 		listener.enterSliceType(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitSliceType) {
	 		listener.exitSliceType(this);
    }
  }
}


export class MapTypeContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public MAP(): TerminalNode {
    return this.getToken(GoParser.MAP, 0);
  }
  public L_BRACKET(): TerminalNode {
    return this.getToken(GoParser.L_BRACKET, 0);
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
  }
  public R_BRACKET(): TerminalNode {
    return this.getToken(GoParser.R_BRACKET, 0);
  }
  public elementType(): ElementTypeContext {
    return this.getTypedRuleContext(ElementTypeContext, 0) as ElementTypeContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_mapType;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterMapType) {
	 		listener.enterMapType(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitMapType) {
	 		listener.exitMapType(this);
    }
  }
}


export class ChannelTypeContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public elementType(): ElementTypeContext {
    return this.getTypedRuleContext(ElementTypeContext, 0) as ElementTypeContext;
  }
  public CHAN(): TerminalNode {
    return this.getToken(GoParser.CHAN, 0);
  }
  public RECEIVE(): TerminalNode {
    return this.getToken(GoParser.RECEIVE, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_channelType;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterChannelType) {
	 		listener.enterChannelType(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitChannelType) {
	 		listener.exitChannelType(this);
    }
  }
}


export class MethodSpecContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public parameters(): ParametersContext {
    return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
  }
  public result(): ResultContext {
    return this.getTypedRuleContext(ResultContext, 0) as ResultContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_methodSpec;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterMethodSpec) {
	 		listener.enterMethodSpec(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitMethodSpec) {
	 		listener.exitMethodSpec(this);
    }
  }
}


export class FunctionTypeContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public FUNC(): TerminalNode {
    return this.getToken(GoParser.FUNC, 0);
  }
  public signature(): SignatureContext {
    return this.getTypedRuleContext(SignatureContext, 0) as SignatureContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_functionType;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterFunctionType) {
	 		listener.enterFunctionType(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitFunctionType) {
	 		listener.exitFunctionType(this);
    }
  }
}


export class SignatureContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public parameters(): ParametersContext {
    return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
  }
  public result(): ResultContext {
    return this.getTypedRuleContext(ResultContext, 0) as ResultContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_signature;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterSignature) {
	 		listener.enterSignature(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitSignature) {
	 		listener.exitSignature(this);
    }
  }
}


export class ResultContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public parameters(): ParametersContext {
    return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_result;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterResult) {
	 		listener.enterResult(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitResult) {
	 		listener.exitResult(this);
    }
  }
}


export class ParametersContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GoParser.L_PAREN, 0);
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GoParser.R_PAREN, 0);
  }
  public parameterDecl_list(): ParameterDeclContext[] {
    return this.getTypedRuleContexts(ParameterDeclContext) as ParameterDeclContext[];
  }
  public parameterDecl(i: number): ParameterDeclContext {
    return this.getTypedRuleContext(ParameterDeclContext, i) as ParameterDeclContext;
  }
  public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GoParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(GoParser.COMMA, i);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_parameters;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterParameters) {
	 		listener.enterParameters(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitParameters) {
	 		listener.exitParameters(this);
    }
  }
}


export class ParameterDeclContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
  }
  public identifierList(): IdentifierListContext {
    return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
  }
  public ELLIPSIS(): TerminalNode {
    return this.getToken(GoParser.ELLIPSIS, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_parameterDecl;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterParameterDecl) {
	 		listener.enterParameterDecl(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitParameterDecl) {
	 		listener.exitParameterDecl(this);
    }
  }
}


export class ExpressionContext extends ParserRuleContext {
  public _unary_op!: Token;
  public _mul_op!: Token;
  public _add_op!: Token;
  public _rel_op!: Token;
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public primaryExpr(): PrimaryExprContext {
    return this.getTypedRuleContext(PrimaryExprContext, 0) as PrimaryExprContext;
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public PLUS(): TerminalNode {
    return this.getToken(GoParser.PLUS, 0);
  }
  public MINUS(): TerminalNode {
    return this.getToken(GoParser.MINUS, 0);
  }
  public EXCLAMATION(): TerminalNode {
    return this.getToken(GoParser.EXCLAMATION, 0);
  }
  public CARET(): TerminalNode {
    return this.getToken(GoParser.CARET, 0);
  }
  public STAR(): TerminalNode {
    return this.getToken(GoParser.STAR, 0);
  }
  public AMPERSAND(): TerminalNode {
    return this.getToken(GoParser.AMPERSAND, 0);
  }
  public RECEIVE(): TerminalNode {
    return this.getToken(GoParser.RECEIVE, 0);
  }
  public DIV(): TerminalNode {
    return this.getToken(GoParser.DIV, 0);
  }
  public MOD(): TerminalNode {
    return this.getToken(GoParser.MOD, 0);
  }
  public LSHIFT(): TerminalNode {
    return this.getToken(GoParser.LSHIFT, 0);
  }
  public RSHIFT(): TerminalNode {
    return this.getToken(GoParser.RSHIFT, 0);
  }
  public BIT_CLEAR(): TerminalNode {
    return this.getToken(GoParser.BIT_CLEAR, 0);
  }
  public OR(): TerminalNode {
    return this.getToken(GoParser.OR, 0);
  }
  public EQUALS(): TerminalNode {
    return this.getToken(GoParser.EQUALS, 0);
  }
  public NOT_EQUALS(): TerminalNode {
    return this.getToken(GoParser.NOT_EQUALS, 0);
  }
  public LESS(): TerminalNode {
    return this.getToken(GoParser.LESS, 0);
  }
  public LESS_OR_EQUALS(): TerminalNode {
    return this.getToken(GoParser.LESS_OR_EQUALS, 0);
  }
  public GREATER(): TerminalNode {
    return this.getToken(GoParser.GREATER, 0);
  }
  public GREATER_OR_EQUALS(): TerminalNode {
    return this.getToken(GoParser.GREATER_OR_EQUALS, 0);
  }
  public LOGICAL_AND(): TerminalNode {
    return this.getToken(GoParser.LOGICAL_AND, 0);
  }
  public LOGICAL_OR(): TerminalNode {
    return this.getToken(GoParser.LOGICAL_OR, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_expression;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
    }
  }
}


export class PrimaryExprContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public operand(): OperandContext {
    return this.getTypedRuleContext(OperandContext, 0) as OperandContext;
  }
  public conversion(): ConversionContext {
    return this.getTypedRuleContext(ConversionContext, 0) as ConversionContext;
  }
  public methodExpr(): MethodExprContext {
    return this.getTypedRuleContext(MethodExprContext, 0) as MethodExprContext;
  }
  public primaryExpr(): PrimaryExprContext {
    return this.getTypedRuleContext(PrimaryExprContext, 0) as PrimaryExprContext;
  }
  public index(): IndexContext {
    return this.getTypedRuleContext(IndexContext, 0) as IndexContext;
  }
  public slice_(): Slice_Context {
    return this.getTypedRuleContext(Slice_Context, 0) as Slice_Context;
  }
  public typeAssertion(): TypeAssertionContext {
    return this.getTypedRuleContext(TypeAssertionContext, 0) as TypeAssertionContext;
  }
  public arguments(): ArgumentsContext {
    return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
  }
  public DOT(): TerminalNode {
    return this.getToken(GoParser.DOT, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_primaryExpr;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterPrimaryExpr) {
	 		listener.enterPrimaryExpr(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitPrimaryExpr) {
	 		listener.exitPrimaryExpr(this);
    }
  }
}


export class ConversionContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public nonNamedType(): NonNamedTypeContext {
    return this.getTypedRuleContext(NonNamedTypeContext, 0) as NonNamedTypeContext;
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GoParser.L_PAREN, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GoParser.R_PAREN, 0);
  }
  public COMMA(): TerminalNode {
    return this.getToken(GoParser.COMMA, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_conversion;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterConversion) {
	 		listener.enterConversion(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitConversion) {
	 		listener.exitConversion(this);
    }
  }
}


export class NonNamedTypeContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public typeLit(): TypeLitContext {
    return this.getTypedRuleContext(TypeLitContext, 0) as TypeLitContext;
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GoParser.L_PAREN, 0);
  }
  public nonNamedType(): NonNamedTypeContext {
    return this.getTypedRuleContext(NonNamedTypeContext, 0) as NonNamedTypeContext;
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GoParser.R_PAREN, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_nonNamedType;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterNonNamedType) {
	 		listener.enterNonNamedType(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitNonNamedType) {
	 		listener.exitNonNamedType(this);
    }
  }
}


export class OperandContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public literal(): LiteralContext {
    return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
  }
  public operandName(): OperandNameContext {
    return this.getTypedRuleContext(OperandNameContext, 0) as OperandNameContext;
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GoParser.L_PAREN, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GoParser.R_PAREN, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_operand;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterOperand) {
	 		listener.enterOperand(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitOperand) {
	 		listener.exitOperand(this);
    }
  }
}


export class LiteralContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public basicLit(): BasicLitContext {
    return this.getTypedRuleContext(BasicLitContext, 0) as BasicLitContext;
  }
  public compositeLit(): CompositeLitContext {
    return this.getTypedRuleContext(CompositeLitContext, 0) as CompositeLitContext;
  }
  public functionLit(): FunctionLitContext {
    return this.getTypedRuleContext(FunctionLitContext, 0) as FunctionLitContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_literal;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
    }
  }
}


export class BasicLitContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public NIL_LIT(): TerminalNode {
    return this.getToken(GoParser.NIL_LIT, 0);
  }
  public integer(): IntegerContext {
    return this.getTypedRuleContext(IntegerContext, 0) as IntegerContext;
  }
  public string_(): String_Context {
    return this.getTypedRuleContext(String_Context, 0) as String_Context;
  }
  public FLOAT_LIT(): TerminalNode {
    return this.getToken(GoParser.FLOAT_LIT, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_basicLit;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterBasicLit) {
	 		listener.enterBasicLit(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitBasicLit) {
	 		listener.exitBasicLit(this);
    }
  }
}


export class IntegerContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public DECIMAL_LIT(): TerminalNode {
    return this.getToken(GoParser.DECIMAL_LIT, 0);
  }
  public BINARY_LIT(): TerminalNode {
    return this.getToken(GoParser.BINARY_LIT, 0);
  }
  public OCTAL_LIT(): TerminalNode {
    return this.getToken(GoParser.OCTAL_LIT, 0);
  }
  public HEX_LIT(): TerminalNode {
    return this.getToken(GoParser.HEX_LIT, 0);
  }
  public IMAGINARY_LIT(): TerminalNode {
    return this.getToken(GoParser.IMAGINARY_LIT, 0);
  }
  public RUNE_LIT(): TerminalNode {
    return this.getToken(GoParser.RUNE_LIT, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_integer;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterInteger) {
	 		listener.enterInteger(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitInteger) {
	 		listener.exitInteger(this);
    }
  }
}


export class OperandNameContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_operandName;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterOperandName) {
	 		listener.enterOperandName(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitOperandName) {
	 		listener.exitOperandName(this);
    }
  }
}


export class QualifiedIdentContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(GoParser.IDENTIFIER);
  }
  public IDENTIFIER(i: number): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, i);
  }
  public DOT(): TerminalNode {
    return this.getToken(GoParser.DOT, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_qualifiedIdent;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterQualifiedIdent) {
	 		listener.enterQualifiedIdent(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitQualifiedIdent) {
	 		listener.exitQualifiedIdent(this);
    }
  }
}


export class CompositeLitContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public literalType(): LiteralTypeContext {
    return this.getTypedRuleContext(LiteralTypeContext, 0) as LiteralTypeContext;
  }
  public literalValue(): LiteralValueContext {
    return this.getTypedRuleContext(LiteralValueContext, 0) as LiteralValueContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_compositeLit;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterCompositeLit) {
	 		listener.enterCompositeLit(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitCompositeLit) {
	 		listener.exitCompositeLit(this);
    }
  }
}


export class LiteralTypeContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public structType(): StructTypeContext {
    return this.getTypedRuleContext(StructTypeContext, 0) as StructTypeContext;
  }
  public arrayType(): ArrayTypeContext {
    return this.getTypedRuleContext(ArrayTypeContext, 0) as ArrayTypeContext;
  }
  public L_BRACKET(): TerminalNode {
    return this.getToken(GoParser.L_BRACKET, 0);
  }
  public ELLIPSIS(): TerminalNode {
    return this.getToken(GoParser.ELLIPSIS, 0);
  }
  public R_BRACKET(): TerminalNode {
    return this.getToken(GoParser.R_BRACKET, 0);
  }
  public elementType(): ElementTypeContext {
    return this.getTypedRuleContext(ElementTypeContext, 0) as ElementTypeContext;
  }
  public sliceType(): SliceTypeContext {
    return this.getTypedRuleContext(SliceTypeContext, 0) as SliceTypeContext;
  }
  public mapType(): MapTypeContext {
    return this.getTypedRuleContext(MapTypeContext, 0) as MapTypeContext;
  }
  public typeName(): TypeNameContext {
    return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_literalType;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterLiteralType) {
	 		listener.enterLiteralType(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitLiteralType) {
	 		listener.exitLiteralType(this);
    }
  }
}


export class LiteralValueContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public L_CURLY(): TerminalNode {
    return this.getToken(GoParser.L_CURLY, 0);
  }
  public R_CURLY(): TerminalNode {
    return this.getToken(GoParser.R_CURLY, 0);
  }
  public elementList(): ElementListContext {
    return this.getTypedRuleContext(ElementListContext, 0) as ElementListContext;
  }
  public COMMA(): TerminalNode {
    return this.getToken(GoParser.COMMA, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_literalValue;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterLiteralValue) {
	 		listener.enterLiteralValue(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitLiteralValue) {
	 		listener.exitLiteralValue(this);
    }
  }
}


export class ElementListContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public keyedElement_list(): KeyedElementContext[] {
    return this.getTypedRuleContexts(KeyedElementContext) as KeyedElementContext[];
  }
  public keyedElement(i: number): KeyedElementContext {
    return this.getTypedRuleContext(KeyedElementContext, i) as KeyedElementContext;
  }
  public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GoParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(GoParser.COMMA, i);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_elementList;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterElementList) {
	 		listener.enterElementList(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitElementList) {
	 		listener.exitElementList(this);
    }
  }
}


export class KeyedElementContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public element(): ElementContext {
    return this.getTypedRuleContext(ElementContext, 0) as ElementContext;
  }
  public key(): KeyContext {
    return this.getTypedRuleContext(KeyContext, 0) as KeyContext;
  }
  public COLON(): TerminalNode {
    return this.getToken(GoParser.COLON, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_keyedElement;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterKeyedElement) {
	 		listener.enterKeyedElement(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitKeyedElement) {
	 		listener.exitKeyedElement(this);
    }
  }
}


export class KeyContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public literalValue(): LiteralValueContext {
    return this.getTypedRuleContext(LiteralValueContext, 0) as LiteralValueContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_key;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterKey) {
	 		listener.enterKey(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitKey) {
	 		listener.exitKey(this);
    }
  }
}


export class ElementContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public literalValue(): LiteralValueContext {
    return this.getTypedRuleContext(LiteralValueContext, 0) as LiteralValueContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_element;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterElement) {
	 		listener.enterElement(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitElement) {
	 		listener.exitElement(this);
    }
  }
}


export class StructTypeContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public STRUCT(): TerminalNode {
    return this.getToken(GoParser.STRUCT, 0);
  }
  public L_CURLY(): TerminalNode {
    return this.getToken(GoParser.L_CURLY, 0);
  }
  public R_CURLY(): TerminalNode {
    return this.getToken(GoParser.R_CURLY, 0);
  }
  public fieldDecl_list(): FieldDeclContext[] {
    return this.getTypedRuleContexts(FieldDeclContext) as FieldDeclContext[];
  }
  public fieldDecl(i: number): FieldDeclContext {
    return this.getTypedRuleContext(FieldDeclContext, i) as FieldDeclContext;
  }
  public eos_list(): EosContext[] {
    return this.getTypedRuleContexts(EosContext) as EosContext[];
  }
  public eos(i: number): EosContext {
    return this.getTypedRuleContext(EosContext, i) as EosContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_structType;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterStructType) {
	 		listener.enterStructType(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitStructType) {
	 		listener.exitStructType(this);
    }
  }
}


export class FieldDeclContext extends ParserRuleContext {
  public _tag!: String_Context;
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public identifierList(): IdentifierListContext {
    return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
  }
  public embeddedField(): EmbeddedFieldContext {
    return this.getTypedRuleContext(EmbeddedFieldContext, 0) as EmbeddedFieldContext;
  }
  public string_(): String_Context {
    return this.getTypedRuleContext(String_Context, 0) as String_Context;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_fieldDecl;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterFieldDecl) {
	 		listener.enterFieldDecl(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitFieldDecl) {
	 		listener.exitFieldDecl(this);
    }
  }
}


export class String_Context extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public RAW_STRING_LIT(): TerminalNode {
    return this.getToken(GoParser.RAW_STRING_LIT, 0);
  }
  public INTERPRETED_STRING_LIT(): TerminalNode {
    return this.getToken(GoParser.INTERPRETED_STRING_LIT, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_string_;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterString_) {
	 		listener.enterString_(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitString_) {
	 		listener.exitString_(this);
    }
  }
}


export class EmbeddedFieldContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public typeName(): TypeNameContext {
    return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
  }
  public STAR(): TerminalNode {
    return this.getToken(GoParser.STAR, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_embeddedField;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterEmbeddedField) {
	 		listener.enterEmbeddedField(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitEmbeddedField) {
	 		listener.exitEmbeddedField(this);
    }
  }
}


export class FunctionLitContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public FUNC(): TerminalNode {
    return this.getToken(GoParser.FUNC, 0);
  }
  public signature(): SignatureContext {
    return this.getTypedRuleContext(SignatureContext, 0) as SignatureContext;
  }
  public block(): BlockContext {
    return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_functionLit;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterFunctionLit) {
	 		listener.enterFunctionLit(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitFunctionLit) {
	 		listener.exitFunctionLit(this);
    }
  }
}


export class IndexContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public L_BRACKET(): TerminalNode {
    return this.getToken(GoParser.L_BRACKET, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public R_BRACKET(): TerminalNode {
    return this.getToken(GoParser.R_BRACKET, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_index;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterIndex) {
	 		listener.enterIndex(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitIndex) {
	 		listener.exitIndex(this);
    }
  }
}


export class Slice_Context extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public L_BRACKET(): TerminalNode {
    return this.getToken(GoParser.L_BRACKET, 0);
  }
  public R_BRACKET(): TerminalNode {
    return this.getToken(GoParser.R_BRACKET, 0);
  }
  public COLON_list(): TerminalNode[] {
	    	return this.getTokens(GoParser.COLON);
  }
  public COLON(i: number): TerminalNode {
    return this.getToken(GoParser.COLON, i);
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_slice_;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterSlice_) {
	 		listener.enterSlice_(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitSlice_) {
	 		listener.exitSlice_(this);
    }
  }
}


export class TypeAssertionContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public DOT(): TerminalNode {
    return this.getToken(GoParser.DOT, 0);
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GoParser.L_PAREN, 0);
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GoParser.R_PAREN, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_typeAssertion;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterTypeAssertion) {
	 		listener.enterTypeAssertion(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitTypeAssertion) {
	 		listener.exitTypeAssertion(this);
    }
  }
}


export class ArgumentsContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GoParser.L_PAREN, 0);
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GoParser.R_PAREN, 0);
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
  }
  public nonNamedType(): NonNamedTypeContext {
    return this.getTypedRuleContext(NonNamedTypeContext, 0) as NonNamedTypeContext;
  }
  public ELLIPSIS(): TerminalNode {
    return this.getToken(GoParser.ELLIPSIS, 0);
  }
  public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GoParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(GoParser.COMMA, i);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_arguments;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterArguments) {
	 		listener.enterArguments(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitArguments) {
	 		listener.exitArguments(this);
    }
  }
}


export class MethodExprContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public nonNamedType(): NonNamedTypeContext {
    return this.getTypedRuleContext(NonNamedTypeContext, 0) as NonNamedTypeContext;
  }
  public DOT(): TerminalNode {
    return this.getToken(GoParser.DOT, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GoParser.IDENTIFIER, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_methodExpr;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterMethodExpr) {
	 		listener.enterMethodExpr(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitMethodExpr) {
	 		listener.exitMethodExpr(this);
    }
  }
}


export class ReceiverTypeContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_receiverType;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterReceiverType) {
	 		listener.enterReceiverType(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitReceiverType) {
	 		listener.exitReceiverType(this);
    }
  }
}


export class EosContext extends ParserRuleContext {
  constructor(parser?: GoParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    	this.parser = parser;
  }
  public SEMI(): TerminalNode {
    return this.getToken(GoParser.SEMI, 0);
  }
  public EOF(): TerminalNode {
    return this.getToken(GoParser.EOF, 0);
  }
  public EOS(): TerminalNode {
    return this.getToken(GoParser.EOS, 0);
  }
  public get ruleIndex(): number {
    	return GoParser.RULE_eos;
  }
  public enterRule(listener: GoParserListener): void {
	    if(listener.enterEos) {
	 		listener.enterEos(this);
    }
  }
  public exitRule(listener: GoParserListener): void {
	    if(listener.exitEos) {
	 		listener.exitEos(this);
    }
  }
}
