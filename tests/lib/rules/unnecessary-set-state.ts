import { TSESLint } from "@typescript-eslint/utils"

import { unNecessarySetState } from "../../../src/lib/rules/unnecessary-set-state"

const ruleTester = new TSESLint.RuleTester()
ruleTester.run("no-set-state", unNecessarySetState, {
  valid: [],
  invalid: [
    {
      code: `
        const Component = () => {
          const [state,useState] = useState()
          const fn = useCallback(() => {},[useState])
        }
      `,
      errors: [{ messageId: "messageId" }],
    },
  ],
})

// const ruleTester = new RuleTester();
// ruleTester.run("unnecessary-set-state", rule, {
//   valid: [
//     // give me some code that won't trigger a warning
//   ],

//   invalid: [
//     {
//       code: "todo",
//       errors: [{ message: "Fill me in.", type: "Me too" }],
//     },
//   ],
// });
