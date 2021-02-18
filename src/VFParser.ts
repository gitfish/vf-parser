// Generated from VFParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { VFParserListener } from "./VFParserListener";
import { VFParserVisitor } from "./VFParserVisitor";


export class VFParser extends Parser {
	public static readonly COMMENT = 1;
	public static readonly PI_START = 2;
	public static readonly OPEN = 3;
	public static readonly OPEN_SCRIPT = 4;
	public static readonly CDATA_START = 5;
	public static readonly EL_START = 6;
	public static readonly CHARDATA_REF = 7;
	public static readonly WS_NL = 8;
	public static readonly TEXT = 9;
	public static readonly CLOSE_SCRIPT = 10;
	public static readonly CLOSE_OPEN_SCRIPT = 11;
	public static readonly ScriptName = 12;
	public static readonly SCRIPT_ATTRS_START = 13;
	public static readonly SCRIPT_ATTRD_START = 14;
	public static readonly SCRIPT_WS = 15;
	public static readonly END_SCRIPT = 16;
	public static readonly SCRIPT_EL_START = 17;
	public static readonly SCRIPT_CHARDATA_REF = 18;
	public static readonly SCRIPT_WS_NL = 19;
	public static readonly SCRIPT_TEXT = 20;
	public static readonly PI_END = 21;
	public static readonly CLOSE = 22;
	public static readonly SLASH_CLOSE = 23;
	public static readonly SLASH = 24;
	public static readonly EQUALS = 25;
	public static readonly STRING = 26;
	public static readonly ATTRS_START = 27;
	public static readonly ATTRD_START = 28;
	public static readonly WS = 29;
	public static readonly Name = 30;
	public static readonly EL_END = 31;
	public static readonly EL_BODY = 32;
	public static readonly CDATA_END = 33;
	public static readonly CDATA_EL = 34;
	public static readonly CDATA_TEXT = 35;
	public static readonly ATTRS_END = 36;
	public static readonly ATTRS_EL_START = 37;
	public static readonly ATTRS_TEXT = 38;
	public static readonly ATTRD_END = 39;
	public static readonly ATTRD_EL_START = 40;
	public static readonly ATTRD_TEXT = 41;
	public static readonly RULE_vfUnit = 0;
	public static readonly RULE_element = 1;
	public static readonly RULE_attribute = 2;
	public static readonly RULE_attributeName = 3;
	public static readonly RULE_attributeValues = 4;
	public static readonly RULE_content = 5;
	public static readonly RULE_chardata = 6;
	public static readonly RULE_processingInstruction = 7;
	public static readonly RULE_scriptChardata = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"vfUnit", "element", "attribute", "attributeName", "attributeValues", 
		"content", "chardata", "processingInstruction", "scriptChardata",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'<'", "'<script'", "'<![CDATA['", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'</script>'", undefined, undefined, undefined, 
		undefined, "'?>'", undefined, undefined, "'/'", "'='", undefined, undefined, 
		undefined, undefined, undefined, "'}'", undefined, "']]>'", undefined, 
		undefined, "'''", undefined, undefined, "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMENT", "PI_START", "OPEN", "OPEN_SCRIPT", "CDATA_START", 
		"EL_START", "CHARDATA_REF", "WS_NL", "TEXT", "CLOSE_SCRIPT", "CLOSE_OPEN_SCRIPT", 
		"ScriptName", "SCRIPT_ATTRS_START", "SCRIPT_ATTRD_START", "SCRIPT_WS", 
		"END_SCRIPT", "SCRIPT_EL_START", "SCRIPT_CHARDATA_REF", "SCRIPT_WS_NL", 
		"SCRIPT_TEXT", "PI_END", "CLOSE", "SLASH_CLOSE", "SLASH", "EQUALS", "STRING", 
		"ATTRS_START", "ATTRD_START", "WS", "Name", "EL_END", "EL_BODY", "CDATA_END", 
		"CDATA_EL", "CDATA_TEXT", "ATTRS_END", "ATTRS_EL_START", "ATTRS_TEXT", 
		"ATTRD_END", "ATTRD_EL_START", "ATTRD_TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(VFParser._LITERAL_NAMES, VFParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return VFParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "VFParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return VFParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return VFParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(VFParser._ATN, this);
	}
	// @RuleVersion(0)
	public vfUnit(): VfUnitContext {
		let _localctx: VfUnitContext = new VfUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, VFParser.RULE_vfUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VFParser.COMMENT) | (1 << VFParser.PI_START) | (1 << VFParser.WS_NL))) !== 0)) {
				{
				this.state = 21;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case VFParser.COMMENT:
					{
					this.state = 18;
					this.match(VFParser.COMMENT);
					}
					break;
				case VFParser.WS_NL:
					{
					this.state = 19;
					this.match(VFParser.WS_NL);
					}
					break;
				case VFParser.PI_START:
					{
					this.state = 20;
					this.processingInstruction();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 26;
			this.element();
			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VFParser.COMMENT || _la === VFParser.WS_NL) {
				{
				{
				this.state = 27;
				_la = this._input.LA(1);
				if (!(_la === VFParser.COMMENT || _la === VFParser.WS_NL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 33;
			this.match(VFParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, VFParser.RULE_element);
		let _la: number;
		try {
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 35;
				this.match(VFParser.OPEN);
				this.state = 36;
				this.match(VFParser.Name);
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VFParser.ScriptName || _la === VFParser.Name) {
					{
					{
					this.state = 37;
					this.attribute();
					}
					}
					this.state = 42;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 43;
				this.match(VFParser.CLOSE);
				this.state = 44;
				this.content();
				this.state = 45;
				this.match(VFParser.OPEN);
				this.state = 46;
				this.match(VFParser.SLASH);
				this.state = 47;
				this.match(VFParser.Name);
				this.state = 48;
				this.match(VFParser.CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 50;
				this.match(VFParser.OPEN);
				this.state = 51;
				this.match(VFParser.Name);
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VFParser.ScriptName || _la === VFParser.Name) {
					{
					{
					this.state = 52;
					this.attribute();
					}
					}
					this.state = 57;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 58;
				this.match(VFParser.SLASH_CLOSE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 59;
				this.match(VFParser.OPEN_SCRIPT);
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VFParser.ScriptName || _la === VFParser.Name) {
					{
					{
					this.state = 60;
					this.attribute();
					}
					}
					this.state = 65;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 66;
				this.match(VFParser.CLOSE_OPEN_SCRIPT);
				this.state = 67;
				this.scriptChardata();
				this.state = 68;
				this.match(VFParser.END_SCRIPT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 70;
				this.match(VFParser.OPEN_SCRIPT);
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VFParser.ScriptName || _la === VFParser.Name) {
					{
					{
					this.state = 71;
					this.attribute();
					}
					}
					this.state = 76;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 77;
				this.match(VFParser.CLOSE_SCRIPT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, VFParser.RULE_attribute);
		let _la: number;
		try {
			this.state = 120;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this.attributeName();
				this.state = 81;
				this.match(VFParser.ATTRD_START);
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (VFParser.ATTRS_EL_START - 37)) | (1 << (VFParser.ATTRS_TEXT - 37)) | (1 << (VFParser.ATTRD_EL_START - 37)) | (1 << (VFParser.ATTRD_TEXT - 37)))) !== 0)) {
					{
					{
					this.state = 82;
					this.attributeValues();
					}
					}
					this.state = 87;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 88;
				this.match(VFParser.ATTRD_END);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 90;
				this.attributeName();
				this.state = 91;
				this.match(VFParser.ATTRS_START);
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (VFParser.ATTRS_EL_START - 37)) | (1 << (VFParser.ATTRS_TEXT - 37)) | (1 << (VFParser.ATTRD_EL_START - 37)) | (1 << (VFParser.ATTRD_TEXT - 37)))) !== 0)) {
					{
					{
					this.state = 92;
					this.attributeValues();
					}
					}
					this.state = 97;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 98;
				this.match(VFParser.ATTRS_END);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 100;
				this.attributeName();
				this.state = 101;
				this.match(VFParser.SCRIPT_ATTRD_START);
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (VFParser.ATTRS_EL_START - 37)) | (1 << (VFParser.ATTRS_TEXT - 37)) | (1 << (VFParser.ATTRD_EL_START - 37)) | (1 << (VFParser.ATTRD_TEXT - 37)))) !== 0)) {
					{
					{
					this.state = 102;
					this.attributeValues();
					}
					}
					this.state = 107;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 108;
				this.match(VFParser.ATTRD_END);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 110;
				this.attributeName();
				this.state = 111;
				this.match(VFParser.SCRIPT_ATTRS_START);
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (VFParser.ATTRS_EL_START - 37)) | (1 << (VFParser.ATTRS_TEXT - 37)) | (1 << (VFParser.ATTRD_EL_START - 37)) | (1 << (VFParser.ATTRD_TEXT - 37)))) !== 0)) {
					{
					{
					this.state = 112;
					this.attributeValues();
					}
					}
					this.state = 117;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 118;
				this.match(VFParser.ATTRS_END);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeName(): AttributeNameContext {
		let _localctx: AttributeNameContext = new AttributeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, VFParser.RULE_attributeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			_la = this._input.LA(1);
			if (!(_la === VFParser.ScriptName || _la === VFParser.Name)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeValues(): AttributeValuesContext {
		let _localctx: AttributeValuesContext = new AttributeValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, VFParser.RULE_attributeValues);
		let _la: number;
		try {
			this.state = 136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VFParser.ATTRD_TEXT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.match(VFParser.ATTRD_TEXT);
				}
				break;
			case VFParser.ATTRS_TEXT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 125;
				this.match(VFParser.ATTRS_TEXT);
				}
				break;
			case VFParser.ATTRD_EL_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 126;
				this.match(VFParser.ATTRD_EL_START);
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VFParser.EL_BODY) {
					{
					this.state = 127;
					this.match(VFParser.EL_BODY);
					}
				}

				this.state = 130;
				this.match(VFParser.EL_END);
				}
				break;
			case VFParser.ATTRS_EL_START:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 131;
				this.match(VFParser.ATTRS_EL_START);
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VFParser.EL_BODY) {
					{
					this.state = 132;
					this.match(VFParser.EL_BODY);
					}
				}

				this.state = 135;
				this.match(VFParser.EL_END);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public content(): ContentContext {
		let _localctx: ContentContext = new ContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, VFParser.RULE_content);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.chardata();
			this.state = 147;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 142;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case VFParser.COMMENT:
						{
						this.state = 139;
						this.match(VFParser.COMMENT);
						}
						break;
					case VFParser.PI_START:
						{
						this.state = 140;
						this.processingInstruction();
						}
						break;
					case VFParser.OPEN:
					case VFParser.OPEN_SCRIPT:
						{
						this.state = 141;
						this.element();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 144;
					this.chardata();
					}
					}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chardata(): ChardataContext {
		let _localctx: ChardataContext = new ChardataContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, VFParser.RULE_chardata);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VFParser.CDATA_START) | (1 << VFParser.EL_START) | (1 << VFParser.CHARDATA_REF) | (1 << VFParser.WS_NL) | (1 << VFParser.TEXT))) !== 0)) {
				{
				this.state = 171;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case VFParser.TEXT:
					{
					this.state = 150;
					this.match(VFParser.TEXT);
					}
					break;
				case VFParser.WS_NL:
					{
					this.state = 151;
					this.match(VFParser.WS_NL);
					}
					break;
				case VFParser.CHARDATA_REF:
					{
					this.state = 152;
					this.match(VFParser.CHARDATA_REF);
					}
					break;
				case VFParser.EL_START:
					{
					this.state = 153;
					this.match(VFParser.EL_START);
					this.state = 155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VFParser.EL_BODY) {
						{
						this.state = 154;
						this.match(VFParser.EL_BODY);
						}
					}

					this.state = 157;
					this.match(VFParser.EL_END);
					}
					break;
				case VFParser.CDATA_START:
					{
					this.state = 158;
					this.match(VFParser.CDATA_START);
					this.state = 167;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === VFParser.CDATA_EL || _la === VFParser.CDATA_TEXT) {
						{
						this.state = 165;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case VFParser.CDATA_TEXT:
							{
							this.state = 159;
							this.match(VFParser.CDATA_TEXT);
							}
							break;
						case VFParser.CDATA_EL:
							{
							this.state = 160;
							this.match(VFParser.CDATA_EL);
							this.state = 162;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VFParser.EL_BODY) {
								{
								this.state = 161;
								this.match(VFParser.EL_BODY);
								}
							}

							this.state = 164;
							this.match(VFParser.EL_END);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						this.state = 169;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 170;
					this.match(VFParser.CDATA_END);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processingInstruction(): ProcessingInstructionContext {
		let _localctx: ProcessingInstructionContext = new ProcessingInstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, VFParser.RULE_processingInstruction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(VFParser.PI_START);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VFParser.ScriptName || _la === VFParser.Name) {
				{
				{
				this.state = 177;
				this.attribute();
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 183;
			this.match(VFParser.PI_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scriptChardata(): ScriptChardataContext {
		let _localctx: ScriptChardataContext = new ScriptChardataContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, VFParser.RULE_scriptChardata);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VFParser.SCRIPT_EL_START) | (1 << VFParser.SCRIPT_CHARDATA_REF) | (1 << VFParser.SCRIPT_WS_NL) | (1 << VFParser.SCRIPT_TEXT))) !== 0)) {
				{
				this.state = 193;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case VFParser.SCRIPT_TEXT:
					{
					this.state = 185;
					this.match(VFParser.SCRIPT_TEXT);
					}
					break;
				case VFParser.SCRIPT_WS_NL:
					{
					this.state = 186;
					this.match(VFParser.SCRIPT_WS_NL);
					}
					break;
				case VFParser.SCRIPT_CHARDATA_REF:
					{
					this.state = 187;
					this.match(VFParser.SCRIPT_CHARDATA_REF);
					}
					break;
				case VFParser.SCRIPT_EL_START:
					{
					this.state = 188;
					this.match(VFParser.SCRIPT_EL_START);
					this.state = 190;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VFParser.EL_BODY) {
						{
						this.state = 189;
						this.match(VFParser.EL_BODY);
						}
					}

					this.state = 192;
					this.match(VFParser.EL_END);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\xC9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x07\x02\x18" +
		"\n\x02\f\x02\x0E\x02\x1B\v\x02\x03\x02\x03\x02\x07\x02\x1F\n\x02\f\x02" +
		"\x0E\x02\"\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03)\n\x03" +
		"\f\x03\x0E\x03,\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x07\x038\n\x03\f\x03\x0E\x03;\v\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03@\n\x03\f\x03\x0E\x03C\v\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03K\n\x03\f\x03\x0E\x03N\v\x03\x03" +
		"\x03\x05\x03Q\n\x03\x03\x04\x03\x04\x03\x04\x07\x04V\n\x04\f\x04\x0E\x04" +
		"Y\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04`\n\x04\f\x04\x0E" +
		"\x04c\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04j\n\x04\f\x04" +
		"\x0E\x04m\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04t\n\x04" +
		"\f\x04\x0E\x04w\v\x04\x03\x04\x03\x04\x05\x04{\n\x04\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06\x83\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06\x88\n\x06\x03\x06\x05\x06\x8B\n\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\x91\n\x07\x03\x07\x07\x07\x94\n\x07\f\x07\x0E\x07\x97\v\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x9E\n\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b\xA5\n\b\x03\b\x07\b\xA8\n\b\f\b\x0E\b\xAB\v\b\x03\b\x07\b\xAE" +
		"\n\b\f\b\x0E\b\xB1\v\b\x03\t\x03\t\x07\t\xB5\n\t\f\t\x0E\t\xB8\v\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xC1\n\n\x03\n\x07\n\xC4\n" +
		"\n\f\n\x0E\n\xC7\v\n\x03\n\x02\x02\x02\v\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x04\x04\x02\x03\x03\n\n\x04\x02" +
		"\x0E\x0E  \x02\xE8\x02\x19\x03\x02\x02\x02\x04P\x03\x02\x02\x02\x06z\x03" +
		"\x02\x02\x02\b|\x03\x02\x02\x02\n\x8A\x03\x02\x02\x02\f\x8C\x03\x02\x02" +
		"\x02\x0E\xAF\x03\x02\x02\x02\x10\xB2\x03\x02\x02\x02\x12\xC5\x03\x02\x02" +
		"\x02\x14\x18\x07\x03\x02\x02\x15\x18\x07\n\x02\x02\x16\x18\x05\x10\t\x02" +
		"\x17\x14\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x17\x16\x03\x02\x02\x02" +
		"\x18\x1B\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02" +
		"\x1A\x1C\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1C \x05\x04\x03\x02" +
		"\x1D\x1F\t\x02\x02\x02\x1E\x1D\x03\x02\x02\x02\x1F\"\x03\x02\x02\x02 " +
		"\x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!#\x03\x02\x02\x02\" \x03\x02\x02" +
		"\x02#$\x07\x02\x02\x03$\x03\x03\x02\x02\x02%&\x07\x05\x02\x02&*\x07 \x02" +
		"\x02\')\x05\x06\x04\x02(\'\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02" +
		"\x02\x02*+\x03\x02\x02\x02+-\x03\x02\x02\x02,*\x03\x02\x02\x02-.\x07\x18" +
		"\x02\x02./\x05\f\x07\x02/0\x07\x05\x02\x0201\x07\x1A\x02\x0212\x07 \x02" +
		"\x0223\x07\x18\x02\x023Q\x03\x02\x02\x0245\x07\x05\x02\x0259\x07 \x02" +
		"\x0268\x05\x06\x04\x0276\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02" +
		"\x029:\x03\x02\x02\x02:<\x03\x02\x02\x02;9\x03\x02\x02\x02<Q\x07\x19\x02" +
		"\x02=A\x07\x06\x02\x02>@\x05\x06\x04\x02?>\x03\x02\x02\x02@C\x03\x02\x02" +
		"\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02BD\x03\x02\x02\x02CA\x03\x02\x02" +
		"\x02DE\x07\r\x02\x02EF\x05\x12\n\x02FG\x07\x12\x02\x02GQ\x03\x02\x02\x02" +
		"HL\x07\x06\x02\x02IK\x05\x06\x04\x02JI\x03\x02\x02\x02KN\x03\x02\x02\x02" +
		"LJ\x03\x02\x02\x02LM\x03\x02\x02\x02MO\x03\x02\x02\x02NL\x03\x02\x02\x02" +
		"OQ\x07\f\x02\x02P%\x03\x02\x02\x02P4\x03\x02\x02\x02P=\x03\x02\x02\x02" +
		"PH\x03\x02\x02\x02Q\x05\x03\x02\x02\x02RS\x05\b\x05\x02SW\x07\x1E\x02" +
		"\x02TV\x05\n\x06\x02UT\x03\x02\x02\x02VY\x03\x02\x02\x02WU\x03\x02\x02" +
		"\x02WX\x03\x02\x02\x02XZ\x03\x02\x02\x02YW\x03\x02\x02\x02Z[\x07)\x02" +
		"\x02[{\x03\x02\x02\x02\\]\x05\b\x05\x02]a\x07\x1D\x02\x02^`\x05\n\x06" +
		"\x02_^\x03\x02\x02\x02`c\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02" +
		"\x02bd\x03\x02\x02\x02ca\x03\x02\x02\x02de\x07&\x02\x02e{\x03\x02\x02" +
		"\x02fg\x05\b\x05\x02gk\x07\x10\x02\x02hj\x05\n\x06\x02ih\x03\x02\x02\x02" +
		"jm\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02ln\x03\x02\x02\x02" +
		"mk\x03\x02\x02\x02no\x07)\x02\x02o{\x03\x02\x02\x02pq\x05\b\x05\x02qu" +
		"\x07\x0F\x02\x02rt\x05\n\x06\x02sr\x03\x02\x02\x02tw\x03\x02\x02\x02u" +
		"s\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02\x02wu\x03\x02\x02\x02" +
		"xy\x07&\x02\x02y{\x03\x02\x02\x02zR\x03\x02\x02\x02z\\\x03\x02\x02\x02" +
		"zf\x03\x02\x02\x02zp\x03\x02\x02\x02{\x07\x03\x02\x02\x02|}\t\x03\x02" +
		"\x02}\t\x03\x02\x02\x02~\x8B\x07+\x02\x02\x7F\x8B\x07(\x02\x02\x80\x82" +
		"\x07*\x02\x02\x81\x83\x07\"\x02\x02\x82\x81\x03\x02\x02\x02\x82\x83\x03" +
		"\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x8B\x07!\x02\x02\x85\x87\x07" +
		"\'\x02\x02\x86\x88\x07\"\x02\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02" +
		"\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8B\x07!\x02\x02\x8A~\x03\x02\x02" +
		"\x02\x8A\x7F\x03\x02\x02\x02\x8A\x80\x03\x02\x02\x02\x8A\x85\x03\x02\x02" +
		"\x02\x8B\v\x03\x02\x02\x02\x8C\x95\x05\x0E\b\x02\x8D\x91\x07\x03\x02\x02" +
		"\x8E\x91\x05\x10\t\x02\x8F\x91\x05\x04\x03\x02\x90\x8D\x03\x02\x02\x02" +
		"\x90\x8E\x03\x02\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02" +
		"\x92\x94\x05\x0E\b\x02\x93\x90\x03\x02\x02\x02\x94\x97\x03\x02\x02\x02" +
		"\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\r\x03\x02\x02\x02" +
		"\x97\x95\x03\x02\x02\x02\x98\xAE\x07\v\x02\x02\x99\xAE\x07\n\x02\x02\x9A" +
		"\xAE\x07\t\x02\x02\x9B\x9D\x07\b\x02\x02\x9C\x9E\x07\"\x02\x02\x9D\x9C" +
		"\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xAE" +
		"\x07!\x02\x02\xA0\xA9\x07\x07\x02\x02\xA1\xA8\x07%\x02\x02\xA2\xA4\x07" +
		"$\x02\x02\xA3\xA5\x07\"\x02\x02\xA4\xA3\x03\x02\x02\x02\xA4\xA5\x03\x02" +
		"\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA8\x07!\x02\x02\xA7\xA1\x03\x02" +
		"\x02\x02\xA7\xA2\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02" +
		"\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xA9\x03\x02" +
		"\x02\x02\xAC\xAE\x07#\x02\x02\xAD\x98\x03\x02\x02\x02\xAD\x99\x03\x02" +
		"\x02\x02\xAD\x9A\x03\x02\x02\x02\xAD\x9B\x03\x02\x02\x02\xAD\xA0\x03\x02" +
		"\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02" +
		"\x02\x02\xB0\x0F\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB6\x07\x04" +
		"\x02\x02\xB3\xB5\x05\x06\x04\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB8\x03\x02" +
		"\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB9\x03\x02" +
		"\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBA\x07\x17\x02\x02\xBA\x11\x03\x02" +
		"\x02\x02\xBB\xC4\x07\x16\x02\x02\xBC\xC4\x07\x15\x02\x02\xBD\xC4\x07\x14" +
		"\x02\x02\xBE\xC0\x07\x13\x02\x02\xBF\xC1\x07\"\x02\x02\xC0\xBF\x03\x02" +
		"\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x07!" +
		"\x02\x02\xC3\xBB\x03\x02\x02\x02\xC3\xBC\x03\x02\x02\x02\xC3\xBD\x03\x02" +
		"\x02\x02\xC3\xBE\x03\x02\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02" +
		"\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\x13\x03\x02\x02\x02\xC7\xC5\x03\x02" +
		"\x02\x02\x1E\x17\x19 *9ALPWakuz\x82\x87\x8A\x90\x95\x9D\xA4\xA7\xA9\xAD" +
		"\xAF\xB6\xC0\xC3\xC5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VFParser.__ATN) {
			VFParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(VFParser._serializedATN));
		}

		return VFParser.__ATN;
	}

}

export class VfUnitContext extends ParserRuleContext {
	public element(): ElementContext {
		return this.getRuleContext(0, ElementContext);
	}
	public EOF(): TerminalNode { return this.getToken(VFParser.EOF, 0); }
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.COMMENT);
		} else {
			return this.getToken(VFParser.COMMENT, i);
		}
	}
	public WS_NL(): TerminalNode[];
	public WS_NL(i: number): TerminalNode;
	public WS_NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.WS_NL);
		} else {
			return this.getToken(VFParser.WS_NL, i);
		}
	}
	public processingInstruction(): ProcessingInstructionContext[];
	public processingInstruction(i: number): ProcessingInstructionContext;
	public processingInstruction(i?: number): ProcessingInstructionContext | ProcessingInstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcessingInstructionContext);
		} else {
			return this.getRuleContext(i, ProcessingInstructionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VFParser.RULE_vfUnit; }
	// @Override
	public enterRule(listener: VFParserListener): void {
		if (listener.enterVfUnit) {
			listener.enterVfUnit(this);
		}
	}
	// @Override
	public exitRule(listener: VFParserListener): void {
		if (listener.exitVfUnit) {
			listener.exitVfUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VFParserVisitor<Result>): Result {
		if (visitor.visitVfUnit) {
			return visitor.visitVfUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.OPEN);
		} else {
			return this.getToken(VFParser.OPEN, i);
		}
	}
	public Name(): TerminalNode[];
	public Name(i: number): TerminalNode;
	public Name(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.Name);
		} else {
			return this.getToken(VFParser.Name, i);
		}
	}
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.CLOSE);
		} else {
			return this.getToken(VFParser.CLOSE, i);
		}
	}
	public content(): ContentContext | undefined {
		return this.tryGetRuleContext(0, ContentContext);
	}
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(VFParser.SLASH, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	public SLASH_CLOSE(): TerminalNode | undefined { return this.tryGetToken(VFParser.SLASH_CLOSE, 0); }
	public OPEN_SCRIPT(): TerminalNode | undefined { return this.tryGetToken(VFParser.OPEN_SCRIPT, 0); }
	public CLOSE_OPEN_SCRIPT(): TerminalNode | undefined { return this.tryGetToken(VFParser.CLOSE_OPEN_SCRIPT, 0); }
	public scriptChardata(): ScriptChardataContext | undefined {
		return this.tryGetRuleContext(0, ScriptChardataContext);
	}
	public END_SCRIPT(): TerminalNode | undefined { return this.tryGetToken(VFParser.END_SCRIPT, 0); }
	public CLOSE_SCRIPT(): TerminalNode | undefined { return this.tryGetToken(VFParser.CLOSE_SCRIPT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VFParser.RULE_element; }
	// @Override
	public enterRule(listener: VFParserListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: VFParserListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VFParserVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public attributeName(): AttributeNameContext {
		return this.getRuleContext(0, AttributeNameContext);
	}
	public ATTRD_START(): TerminalNode | undefined { return this.tryGetToken(VFParser.ATTRD_START, 0); }
	public ATTRD_END(): TerminalNode | undefined { return this.tryGetToken(VFParser.ATTRD_END, 0); }
	public attributeValues(): AttributeValuesContext[];
	public attributeValues(i: number): AttributeValuesContext;
	public attributeValues(i?: number): AttributeValuesContext | AttributeValuesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeValuesContext);
		} else {
			return this.getRuleContext(i, AttributeValuesContext);
		}
	}
	public ATTRS_START(): TerminalNode | undefined { return this.tryGetToken(VFParser.ATTRS_START, 0); }
	public ATTRS_END(): TerminalNode | undefined { return this.tryGetToken(VFParser.ATTRS_END, 0); }
	public SCRIPT_ATTRD_START(): TerminalNode | undefined { return this.tryGetToken(VFParser.SCRIPT_ATTRD_START, 0); }
	public SCRIPT_ATTRS_START(): TerminalNode | undefined { return this.tryGetToken(VFParser.SCRIPT_ATTRS_START, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VFParser.RULE_attribute; }
	// @Override
	public enterRule(listener: VFParserListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: VFParserListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VFParserVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeNameContext extends ParserRuleContext {
	public Name(): TerminalNode | undefined { return this.tryGetToken(VFParser.Name, 0); }
	public ScriptName(): TerminalNode | undefined { return this.tryGetToken(VFParser.ScriptName, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VFParser.RULE_attributeName; }
	// @Override
	public enterRule(listener: VFParserListener): void {
		if (listener.enterAttributeName) {
			listener.enterAttributeName(this);
		}
	}
	// @Override
	public exitRule(listener: VFParserListener): void {
		if (listener.exitAttributeName) {
			listener.exitAttributeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VFParserVisitor<Result>): Result {
		if (visitor.visitAttributeName) {
			return visitor.visitAttributeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeValuesContext extends ParserRuleContext {
	public ATTRD_TEXT(): TerminalNode | undefined { return this.tryGetToken(VFParser.ATTRD_TEXT, 0); }
	public ATTRS_TEXT(): TerminalNode | undefined { return this.tryGetToken(VFParser.ATTRS_TEXT, 0); }
	public ATTRD_EL_START(): TerminalNode | undefined { return this.tryGetToken(VFParser.ATTRD_EL_START, 0); }
	public EL_END(): TerminalNode | undefined { return this.tryGetToken(VFParser.EL_END, 0); }
	public EL_BODY(): TerminalNode | undefined { return this.tryGetToken(VFParser.EL_BODY, 0); }
	public ATTRS_EL_START(): TerminalNode | undefined { return this.tryGetToken(VFParser.ATTRS_EL_START, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VFParser.RULE_attributeValues; }
	// @Override
	public enterRule(listener: VFParserListener): void {
		if (listener.enterAttributeValues) {
			listener.enterAttributeValues(this);
		}
	}
	// @Override
	public exitRule(listener: VFParserListener): void {
		if (listener.exitAttributeValues) {
			listener.exitAttributeValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VFParserVisitor<Result>): Result {
		if (visitor.visitAttributeValues) {
			return visitor.visitAttributeValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContentContext extends ParserRuleContext {
	public chardata(): ChardataContext[];
	public chardata(i: number): ChardataContext;
	public chardata(i?: number): ChardataContext | ChardataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ChardataContext);
		} else {
			return this.getRuleContext(i, ChardataContext);
		}
	}
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.COMMENT);
		} else {
			return this.getToken(VFParser.COMMENT, i);
		}
	}
	public processingInstruction(): ProcessingInstructionContext[];
	public processingInstruction(i: number): ProcessingInstructionContext;
	public processingInstruction(i?: number): ProcessingInstructionContext | ProcessingInstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcessingInstructionContext);
		} else {
			return this.getRuleContext(i, ProcessingInstructionContext);
		}
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VFParser.RULE_content; }
	// @Override
	public enterRule(listener: VFParserListener): void {
		if (listener.enterContent) {
			listener.enterContent(this);
		}
	}
	// @Override
	public exitRule(listener: VFParserListener): void {
		if (listener.exitContent) {
			listener.exitContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VFParserVisitor<Result>): Result {
		if (visitor.visitContent) {
			return visitor.visitContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChardataContext extends ParserRuleContext {
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.TEXT);
		} else {
			return this.getToken(VFParser.TEXT, i);
		}
	}
	public WS_NL(): TerminalNode[];
	public WS_NL(i: number): TerminalNode;
	public WS_NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.WS_NL);
		} else {
			return this.getToken(VFParser.WS_NL, i);
		}
	}
	public CHARDATA_REF(): TerminalNode[];
	public CHARDATA_REF(i: number): TerminalNode;
	public CHARDATA_REF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.CHARDATA_REF);
		} else {
			return this.getToken(VFParser.CHARDATA_REF, i);
		}
	}
	public EL_START(): TerminalNode[];
	public EL_START(i: number): TerminalNode;
	public EL_START(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.EL_START);
		} else {
			return this.getToken(VFParser.EL_START, i);
		}
	}
	public EL_END(): TerminalNode[];
	public EL_END(i: number): TerminalNode;
	public EL_END(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.EL_END);
		} else {
			return this.getToken(VFParser.EL_END, i);
		}
	}
	public CDATA_START(): TerminalNode[];
	public CDATA_START(i: number): TerminalNode;
	public CDATA_START(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.CDATA_START);
		} else {
			return this.getToken(VFParser.CDATA_START, i);
		}
	}
	public CDATA_END(): TerminalNode[];
	public CDATA_END(i: number): TerminalNode;
	public CDATA_END(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.CDATA_END);
		} else {
			return this.getToken(VFParser.CDATA_END, i);
		}
	}
	public EL_BODY(): TerminalNode[];
	public EL_BODY(i: number): TerminalNode;
	public EL_BODY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.EL_BODY);
		} else {
			return this.getToken(VFParser.EL_BODY, i);
		}
	}
	public CDATA_TEXT(): TerminalNode[];
	public CDATA_TEXT(i: number): TerminalNode;
	public CDATA_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.CDATA_TEXT);
		} else {
			return this.getToken(VFParser.CDATA_TEXT, i);
		}
	}
	public CDATA_EL(): TerminalNode[];
	public CDATA_EL(i: number): TerminalNode;
	public CDATA_EL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.CDATA_EL);
		} else {
			return this.getToken(VFParser.CDATA_EL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VFParser.RULE_chardata; }
	// @Override
	public enterRule(listener: VFParserListener): void {
		if (listener.enterChardata) {
			listener.enterChardata(this);
		}
	}
	// @Override
	public exitRule(listener: VFParserListener): void {
		if (listener.exitChardata) {
			listener.exitChardata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VFParserVisitor<Result>): Result {
		if (visitor.visitChardata) {
			return visitor.visitChardata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessingInstructionContext extends ParserRuleContext {
	public PI_START(): TerminalNode { return this.getToken(VFParser.PI_START, 0); }
	public PI_END(): TerminalNode { return this.getToken(VFParser.PI_END, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VFParser.RULE_processingInstruction; }
	// @Override
	public enterRule(listener: VFParserListener): void {
		if (listener.enterProcessingInstruction) {
			listener.enterProcessingInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: VFParserListener): void {
		if (listener.exitProcessingInstruction) {
			listener.exitProcessingInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VFParserVisitor<Result>): Result {
		if (visitor.visitProcessingInstruction) {
			return visitor.visitProcessingInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScriptChardataContext extends ParserRuleContext {
	public SCRIPT_TEXT(): TerminalNode[];
	public SCRIPT_TEXT(i: number): TerminalNode;
	public SCRIPT_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.SCRIPT_TEXT);
		} else {
			return this.getToken(VFParser.SCRIPT_TEXT, i);
		}
	}
	public SCRIPT_WS_NL(): TerminalNode[];
	public SCRIPT_WS_NL(i: number): TerminalNode;
	public SCRIPT_WS_NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.SCRIPT_WS_NL);
		} else {
			return this.getToken(VFParser.SCRIPT_WS_NL, i);
		}
	}
	public SCRIPT_CHARDATA_REF(): TerminalNode[];
	public SCRIPT_CHARDATA_REF(i: number): TerminalNode;
	public SCRIPT_CHARDATA_REF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.SCRIPT_CHARDATA_REF);
		} else {
			return this.getToken(VFParser.SCRIPT_CHARDATA_REF, i);
		}
	}
	public SCRIPT_EL_START(): TerminalNode[];
	public SCRIPT_EL_START(i: number): TerminalNode;
	public SCRIPT_EL_START(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.SCRIPT_EL_START);
		} else {
			return this.getToken(VFParser.SCRIPT_EL_START, i);
		}
	}
	public EL_END(): TerminalNode[];
	public EL_END(i: number): TerminalNode;
	public EL_END(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.EL_END);
		} else {
			return this.getToken(VFParser.EL_END, i);
		}
	}
	public EL_BODY(): TerminalNode[];
	public EL_BODY(i: number): TerminalNode;
	public EL_BODY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VFParser.EL_BODY);
		} else {
			return this.getToken(VFParser.EL_BODY, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VFParser.RULE_scriptChardata; }
	// @Override
	public enterRule(listener: VFParserListener): void {
		if (listener.enterScriptChardata) {
			listener.enterScriptChardata(this);
		}
	}
	// @Override
	public exitRule(listener: VFParserListener): void {
		if (listener.exitScriptChardata) {
			listener.exitScriptChardata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VFParserVisitor<Result>): Result {
		if (visitor.visitScriptChardata) {
			return visitor.visitScriptChardata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


