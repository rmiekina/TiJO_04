describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });
    describe('getDescendingNumbers function', function () {
        it('should Descend Numbers form numberFrom to numberTo', function () {
                       expect(app.getDescendingNumbers(3,1)).toEqual('3 2 1');
            expect(app.getDescendingNumbers(4,2)).toEqual('4 3 2');
        });
            it('should return false when numberFrom is smaller than numberTo', function () {
                       expect(app.getDescendingNumbers(1,2)).toMatch(false);
});
    });

    describe('areaOfTrapezoid function', function () {
        it('should count Trapezoid', function () {
            expect(app.areaOfTrapezoid(2,2,2)).toEqual(4);
            expect(app.areaOfTrapezoid(2,3,4)).toEqual(10);
        });
        it('should count Trapezoid if a<0 ', function () {
            expect(app.areaOfTrapezoid(-1,2,2)).toEqual(false);
        });
            it('should count Trapezoid if b<0 ', function () {
            expect(app.areaOfTrapezoid(1,-2,2)).toEqual(false);
            });
                it('should count Trapezoid if c<0 ', function () {
            expect(app.areaOfTrapezoid(1,2,-2)).toEqual(false);
    });
});
    describe('maxArray function', function () {
        it('should point the biggest digital', function () {
            expect(app.maxArray(2,12,5)).toEqual(12);
            expect(app.maxArray(2,"3",4)).toEqual(false);
            expect(app.maxArray(2,[3,4])).toEqual(false);
        });
    });
});