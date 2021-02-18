/*
 [The "BSD licence"]
 Copyright (c) 2020 Kevin Jones
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
    derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import { resolve } from "path";
import * as dir from "node-dir";
import { VFLexer } from "./VFLexer";
import { VFParser } from "./VFParser";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ThrowingErrorListener } from "./ThrowingErrorListener";
import { readFileSync } from "fs";
import { lstatSync } from "fs";

export * from "./VFLexer";
export * from "./VFParser";
export * from "./ThrowingErrorListener";

export function check(): void {
  const path = resolve(process.argv[1] || process.cwd());

  dir.files(path, function (err, files) {
    if (err) throw err;

    let parsedCount = 0;
    files
      .filter((name) => name.endsWith(".page"))
      .forEach((file) => {
        if (lstatSync(file).isFile()) {
          const content = readFileSync(file);
          const lexer = new VFLexer(CharStreams.fromString(content.toString()));
          const tokens = new CommonTokenStream(lexer);

          const parser = new VFParser(tokens);
          const listener = new ThrowingErrorListener();
          parser.removeErrorListeners();
          parser.addErrorListener(listener);
          try {
            parser.vfUnit();
          } catch (err) {
            console.log(`Error parsing ${file}`);
            console.log(err);
          }
          parsedCount += 1;
        }
      });
    console.log(`Parsed ${parsedCount} files`);
  });
}
