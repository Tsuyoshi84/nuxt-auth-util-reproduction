// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['nuxt-auth-utils'],
  typescript: {
    tsConfig: {
      compilerOptions: {
        allowUnreachableCode: false, // 到達不可能なコードを許可しない
        forceConsistentCasingInFileNames: true, // ファイル名の大文字小文字を厳密にする
        noErrorTruncation: true, // エラーのメッセージを切り詰めない
        noFallthroughCasesInSwitch: true, // switch 文の case で fallthrough しないようにする
        noImplicitOverride: true, // override 修飾子を強制する
        noImplicitReturns: true, // 関数の戻り値の型を明示する
        noUncheckedIndexedAccess: true, // インデックスアクセスの型チェックを厳密にする
        noUnusedLocals: false, // ESLint でチェックするので TypeScript ではチェックしない
        noUnusedParameters: false, // ESLint でチェックするので TypeScript ではチェックしない
        useUnknownInCatchVariables: true, // catch ステートメントの変数の型を unknown にする
        strict: true, // 厳密な型チェックを行う
      },
    },
  },
});
