import { useEffect, useState } from 'react';
import * as Style from './App.styles'
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { TableArea } from './components/TableArea';
import { categories } from './data/categories';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/Item';

function App() {
  const [ list, setList ]= useState(items);
  const [ filteredList, setFilteredList ] = useState<Item[]>([]);
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth());
  const [ income, setIncome ] = useState(0);
  const [ expense, setExpense ] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth])

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  },[filteredList])

  function handleMonthChange (newMonth:string) {
    setCurrentMonth(newMonth)
  }

  function handleAddItem(item:Item) {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <Style.Container>
      <Style.Header>
        <Style.HeaderText>Sistema Financeiro</Style.HeaderText>
      </Style.Header>
      <Style.Body>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem}/>
        <TableArea list={filteredList}/>
      </Style.Body>
    </Style.Container>
  );
}

export default App;
