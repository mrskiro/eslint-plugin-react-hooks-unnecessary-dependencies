import { TSESLint } from "@typescript-eslint/utils"

export const noSetState: TSESLint.RuleModule<"messageId", []> = {
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
      CallExpression(node) {
        console.log("clg,", node)
        context.report({
          node,
          messageId: "messageId",
        })
      },
    }
  },
}
