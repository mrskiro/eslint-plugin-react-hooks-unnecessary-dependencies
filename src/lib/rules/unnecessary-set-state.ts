import { TSESLint } from "@typescript-eslint/utils"

export const unNecessarySetState: TSESLint.RuleModule<"messageId", []> = {
  meta: {
    type: "suggestion",
    messages: {
      messageId: "todo",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => {
    return {
      JSXElement(node) {},
    }
  },
}
