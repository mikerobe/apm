import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';

describe('StarComponent', () => {
    it('should pass a tautology', () => {
        expect(true).toBe(true);
    });

    it('should spy', () => {
        const foo = {
            method: () => 42,
        };


        spyOn(foo, 'method').and.callThrough();

        expect(foo.method()).toBe(42);
        expect(foo.method).toHaveBeenCalled();
    });

    describe('mock', () => {

        it('should mock', () => {
            const foo = jasmine.createSpyObj('foo',
                {
                    method: 44
                });

            expect(foo.method()).toBe(44);
        });

        it('should allow customization of each spy method', () => {
            const foo: {[key: string]: jasmine.Spy; } = jasmine.createSpyObj('foo', ['method', 'method2']);
            foo['method'].and.returnValue(44);
            foo['method2'].and.returnValues(true, false);

            expect(foo.method()).toBe(45);
            expect(foo.method2()).toBe(true);
            expect(foo.method2()).toBe(false);
        });

    });
});
