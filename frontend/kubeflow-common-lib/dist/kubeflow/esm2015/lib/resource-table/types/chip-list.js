import { get as getAttributeValue } from 'lodash';
export class ChipsListValue {
    constructor(config) {
        this.defaultValues = {
            field: '',
            noValueText: 'No items',
            maxVisibleChips: 3,
        };
        const { field, valueFn, noValueText, maxVisibleChips } = Object.assign(Object.assign({}, this.defaultValues), config);
        this.field = field;
        this.valueFn = valueFn;
        this.noValueText = noValueText;
        this.maxVisibleChips = maxVisibleChips;
    }
    getChips(row) {
        if (this.valueFn) {
            return this.valueFn(row);
        }
        return getAttributeValue(row, this.field);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9yZXNvdXJjZS10YWJsZS90eXBlcy9jaGlwLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQVNsRCxNQUFNLE9BQU8sY0FBYztJQVl6QixZQUFZLE1BQXVCO1FBTjNCLGtCQUFhLEdBQW9CO1lBQ3ZDLEtBQUssRUFBRSxFQUFFO1lBQ1QsV0FBVyxFQUFFLFVBQVU7WUFDdkIsZUFBZSxFQUFFLENBQUM7U0FDbkIsQ0FBQztRQUdBLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsbUNBQ2pELElBQUksQ0FBQyxhQUFhLEdBQ2xCLE1BQU0sQ0FDVixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDekMsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFRO1FBQ2YsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtRQUVELE9BQU8saUJBQWlCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGlwRGVzY3JpcHRvciB9IGZyb20gJy4uLy4uL2RldGFpbHMtbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBnZXQgYXMgZ2V0QXR0cmlidXRlVmFsdWUgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoaXBzTGlzdENvbmZpZyB7XG4gIGZpZWxkPzogc3RyaW5nO1xuICB2YWx1ZUZuPzogKHJvdzogYW55KSA9PiBDaGlwRGVzY3JpcHRvcltdO1xuICBtYXhWaXNpYmxlQ2hpcHM/OiBudW1iZXI7XG4gIG5vVmFsdWVUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGlwc0xpc3RWYWx1ZSB7XG4gIGZpZWxkOiBzdHJpbmc7XG4gIHZhbHVlRm46IChyb3c6IGFueSkgPT4gQ2hpcERlc2NyaXB0b3JbXTtcbiAgbWF4VmlzaWJsZUNoaXBzOiBudW1iZXI7XG4gIG5vVmFsdWVUZXh0OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0VmFsdWVzOiBDaGlwc0xpc3RDb25maWcgPSB7XG4gICAgZmllbGQ6ICcnLFxuICAgIG5vVmFsdWVUZXh0OiAnTm8gaXRlbXMnLFxuICAgIG1heFZpc2libGVDaGlwczogMyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IENoaXBzTGlzdENvbmZpZykge1xuICAgIGNvbnN0IHsgZmllbGQsIHZhbHVlRm4sIG5vVmFsdWVUZXh0LCBtYXhWaXNpYmxlQ2hpcHMgfSA9IHtcbiAgICAgIC4uLnRoaXMuZGVmYXVsdFZhbHVlcyxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xuICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICB0aGlzLnZhbHVlRm4gPSB2YWx1ZUZuO1xuICAgIHRoaXMubm9WYWx1ZVRleHQgPSBub1ZhbHVlVGV4dDtcbiAgICB0aGlzLm1heFZpc2libGVDaGlwcyA9IG1heFZpc2libGVDaGlwcztcbiAgfVxuXG4gIGdldENoaXBzKHJvdzogYW55KSB7XG4gICAgaWYgKHRoaXMudmFsdWVGbikge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVGbihyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZShyb3csIHRoaXMuZmllbGQpO1xuICB9XG59XG4iXX0=