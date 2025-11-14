export class DateRange {
    constructor(
        private readonly startDate: Date, 
        private readonly endDate: Date
    ) {
        if (endDate <= startDate) {
            throw new Error("A data de término deve ser posterior à data de início");
        }
    }

    getStartDate(): Date {
        return this.startDate;
    }

    getEndDate(): Date {
        return this.endDate;
    }
}


export {};