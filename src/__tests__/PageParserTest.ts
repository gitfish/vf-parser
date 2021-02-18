/*
 * These are just smoke tests for the JS implementation, see https://github.com/nawforce/pkgforce for JVM 
 * implementation and associated tests. 
 */
import { VFLexer } from "../VFLexer";
import { ElementContext, VFParser, VfUnitContext } from "../VFParser";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { SyntaxException, ThrowingErrorListener } from "../ThrowingErrorListener";

test("Single element page", () => {
  let lexer = new VFLexer(CharStreams.fromString("<apex:page/>"));
  let tokens = new CommonTokenStream(lexer);

  let parser = new VFParser(tokens);
  let context = parser.vfUnit();

  expect(context).toBeInstanceOf(VfUnitContext);
  expect(context.element()).toBeInstanceOf(ElementContext);
});

test("Broken page", () => {
  let lexer = new VFLexer(CharStreams.fromString("<apex:page"));
  let tokens = new CommonTokenStream(lexer);

  let parser = new VFParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(new ThrowingErrorListener());
    try {
        parser.vfUnit();
        expect(true).toBe(false);
    } catch (ex) {
        expect(ex).toBeInstanceOf(SyntaxException)
        expect(ex.message).toEqual("no viable alternative at input '<apex:page'")
        expect(ex.line).toEqual(1)
        expect(ex.column).toEqual(10)
    }
});
