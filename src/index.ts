export const add = (a: number, b: number) => a + b;

if (require.main === module) {
  console.log(`Result: ${add(2, 3)}`);
}
