vf-parser
=========

Parser for Salesforce Visualforce pages. This is based on an ANTLR4 grammar (see antlr/VFParser.g4 & VFLexer.g4) 
using antlr4ts to generate a parser/lexer in Typescript. 

This module just contains the Parser & Lexer and provides no further support for analysing the generated parse trees 
beyond what is provided by antlr4ts. See [pkgforce](https://github.com/nawforce/pkgforce) for example code on how this 
may be used. 

You can find some minimal examples in the src/\__test__ directory. 

### Example
To parse a page file:

    let lexer = new VFLexer(CharStreams.fromString("<apex:page/>"));
    let tokens = new CommonTokenStream(lexer);

    let parser = new VFParser(tokens);
    let context = parser.vfUnit();

The 'context' is a VfUnitContext object which is the root of the parsed representation of the page. You can access the 
parse tree via functions on it.

### Change grammar
If you change the Parser or Lexer grammar files you will need to update the parser with

    npm run antlr4ts 

### History
    1.0.0 - Initial version

### Source & Licenses

All the source code included uses a 3-clause BSD license. 
