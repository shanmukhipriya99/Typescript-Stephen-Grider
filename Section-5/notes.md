Typed Arrays => Arrays where each element is some consistent type of value.

Why do we care about typed arrays?

- TS can do inferernce while extracting values from an array
- TS can prevent us from adding incompatible values to an array
- We can get help with _map_, _forEach_, _reduce_ functions
- Flexible - Arrays can still contain multiple different types
  Ex: `const impDates = [new Date(), '2023-08-14']`, impDates: (string | Date) []
