/**
 * @fileoverview todo
 * @author purp1eeeee
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/unnecessary-set-state"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("unnecessary-set-state", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "todo",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
