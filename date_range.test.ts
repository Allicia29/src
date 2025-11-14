import { DateRange, DateRange } from './date_range';

describe('DateRange Value Object", () =>


    it('deve criar uma instancia de DateRange com a data de inicio e data de término', () => {
       const startDate = new Date("2024-12-20");
       const endDate = new Date("2024-12-25");
       const DateRange = new DateRange(startDate, endDate);
       expect(DateRange.getStartDate()).toEqual(startDate);
       expect(DateRange.getEndDate()).toEqual(startDate);
    });


    it('deve criar instância quando datas são válidas', () => {
        expect(() => {
            new DateRange(new Date('2024-12-25'), new Date('2024-12-20'));
        }).toThrow("a data de término deve ser posterior a data de início");
    });
});