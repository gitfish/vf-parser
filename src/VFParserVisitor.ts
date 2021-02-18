// Generated from VFParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `VFParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface VFParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `VFParser.vfUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVfUnit?: (ctx: VfUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `VFParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `VFParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `VFParser.attributeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeName?: (ctx: AttributeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VFParser.attributeValues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeValues?: (ctx: AttributeValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `VFParser.content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContent?: (ctx: ContentContext) => Result;

	/**
	 * Visit a parse tree produced by `VFParser.chardata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChardata?: (ctx: ChardataContext) => Result;

	/**
	 * Visit a parse tree produced by `VFParser.processingInstruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessingInstruction?: (ctx: ProcessingInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `VFParser.scriptChardata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptChardata?: (ctx: ScriptChardataContext) => Result;
}

