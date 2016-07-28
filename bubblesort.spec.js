describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sorts an array', function(){
    expect(bubbleSort([8,4,7,1,9])).toEqual([1,4,7,8,9])
  })
});