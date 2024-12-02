const isUpperCase = require('../utils/esmayuscula');

describe('calculator', () => {
    test.each`
      firstValue | expectedResult    
      ${HOLA}       | ${true}        
         
   
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });