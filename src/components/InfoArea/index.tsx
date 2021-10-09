import { formatMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
import * as Style from './styles';

type Props = {
    currentMonth:string;
    onMonthChange: (newMonth:string) => void;
    income:number;
    expense:number;
}

export function InfoArea({currentMonth, onMonthChange, income, expense}: Props) {
    function handlePrevMonth(){
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`);
    }

    function handleNextMonth(){
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`);
    }

    return (
        <Style.Container>
            <Style.MonthArea>
                <Style.MonthArrow onClick={handlePrevMonth}>⬅️</Style.MonthArrow>
                <Style.MonthTitle>{formatMonth(currentMonth)}</Style.MonthTitle>
                <Style.MonthArrow onClick={handleNextMonth}>➡️</Style.MonthArrow>
            </Style.MonthArea>
            <Style.ResumeArea>
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem title="Balanço" value={income - expense} color={(income - expense) < 0 ? 'red' : 'green'}/>
            </Style.ResumeArea>
        </Style.Container>
    )
}