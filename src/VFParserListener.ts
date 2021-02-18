// Generated from VFParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { VfUnitContext } from "./VFParser";
import { ElementContext } from "./VFParser";
import { AttributeContext } from "./VFParser";
import { AttributeNameContext } from "./VFParser";
import { AttributeValuesContext } from "./VFParser";
import { ContentContext } from "./VFParser";
import { ChardataContext } from "./VFParser";
import { ProcessingInstructionContext } from "./VFParser";
import { ScriptChardataContext } from "./VFParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `VFParser`.
 */
export interface VFParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `VFParser.vfUnit`.
	 * @param ctx the parse tree
	 */
	enterVfUnit?: (ctx: VfUnitContext) => void;
	/**
	 * Exit a parse tree produced by `VFParser.vfUnit`.
	 * @param ctx the parse tree
	 */
	exitVfUnit?: (ctx: VfUnitContext) => void;

	/**
	 * Enter a parse tree produced by `VFParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `VFParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `VFParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `VFParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `VFParser.attributeName`.
	 * @param ctx the parse tree
	 */
	enterAttributeName?: (ctx: AttributeNameContext) => void;
	/**
	 * Exit a parse tree produced by `VFParser.attributeName`.
	 * @param ctx the parse tree
	 */
	exitAttributeName?: (ctx: AttributeNameContext) => void;

	/**
	 * Enter a parse tree produced by `VFParser.attributeValues`.
	 * @param ctx the parse tree
	 */
	enterAttributeValues?: (ctx: AttributeValuesContext) => void;
	/**
	 * Exit a parse tree produced by `VFParser.attributeValues`.
	 * @param ctx the parse tree
	 */
	exitAttributeValues?: (ctx: AttributeValuesContext) => void;

	/**
	 * Enter a parse tree produced by `VFParser.content`.
	 * @param ctx the parse tree
	 */
	enterContent?: (ctx: ContentContext) => void;
	/**
	 * Exit a parse tree produced by `VFParser.content`.
	 * @param ctx the parse tree
	 */
	exitContent?: (ctx: ContentContext) => void;

	/**
	 * Enter a parse tree produced by `VFParser.chardata`.
	 * @param ctx the parse tree
	 */
	enterChardata?: (ctx: ChardataContext) => void;
	/**
	 * Exit a parse tree produced by `VFParser.chardata`.
	 * @param ctx the parse tree
	 */
	exitChardata?: (ctx: ChardataContext) => void;

	/**
	 * Enter a parse tree produced by `VFParser.processingInstruction`.
	 * @param ctx the parse tree
	 */
	enterProcessingInstruction?: (ctx: ProcessingInstructionContext) => void;
	/**
	 * Exit a parse tree produced by `VFParser.processingInstruction`.
	 * @param ctx the parse tree
	 */
	exitProcessingInstruction?: (ctx: ProcessingInstructionContext) => void;

	/**
	 * Enter a parse tree produced by `VFParser.scriptChardata`.
	 * @param ctx the parse tree
	 */
	enterScriptChardata?: (ctx: ScriptChardataContext) => void;
	/**
	 * Exit a parse tree produced by `VFParser.scriptChardata`.
	 * @param ctx the parse tree
	 */
	exitScriptChardata?: (ctx: ScriptChardataContext) => void;
}

