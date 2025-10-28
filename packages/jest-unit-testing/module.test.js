import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
   const expected = 100;
   const got = mut.div(1000,10);
   expect(got).toBe(expected);

});

test('Testing div -- divide by 0', () =>{
    expect(() => div(10, 0).toThrow());
});

test('Testing div -- non numeric', () => {
    expect(() => div('a', 5).toThrow());
});

test('Testing containsNumbers -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("aaaa");
    expect(got).toBe(expected);

});

test('Testing containsNumbers -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("1");
    expect(got).toBe(expected);
});

test('Testing containsNumbers -last item is a number!', () => {
    const expected = true;
    const got = mut.containsNumbers("aaaaaaaaaa5");
    expect(got).toBe(expected);

});
test('Testing containsNumbers - empty string', () => {
    const expected = false;
    const got = mut.containsNumbers("");
    expect(got).toBe(expected);
});

test("testing containsNumbers - multiple strings", () => {
    const expected = true;
    const got = mut.containsNumbers("aaaaaaa" + "939jdjdj");
    expect(got).toBe(expected);

});

test("testing containsNumbers - multiple strings 2", () => {
    const expected = false;
    const got = mut.containsNumbers("aaaaaaa" + "oooo");
    expect(got).toBe(expected);

});


test("testing containsNumbers - use of a template text", () => {
    const expect = true;
    const number = "30"
    const got = mut.containsNumbers(`hi! ${number} is a good number.`);
    expect(got).toBe(expected);

})