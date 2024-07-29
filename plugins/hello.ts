export default defineNuxtPlugin({
  setup() {
    return {
      provide: {
        hello: 'hello',
      },
    };
  },
});
