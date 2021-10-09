import { useState } from 'react';
import { categories } from '../../data/categories';
import { Item } from '../../types/Item';
import * as Style from './styles';

type Props = {
    onAdd: (item: Item) => void;
}

export function InputArea({ onAdd }:Props ) {
    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);

    const handleAddEvent = () => {
        let errors: string[] = [];

        if(isNaN(new Date(dateField).getTime())) {
        errors.push('Data inválida!');
        }
        if(!categoryKeys.includes(categoryField)) {
        errors.push('Categoria inválida!');
        }
        if(titleField === '') {
        errors.push('Título vazio!');
        }
        if(valueField <= 0) {
        errors.push('Valor inválido!');
        }

        if(errors.length > 0) {
        alert(errors.join("\n"));
        } else {
        onAdd({
            date: new Date(dateField),
            category: categoryField,
            title: titleField,
            value: valueField
        });
        clearFields();
        }
    }

    const clearFields = () => {
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
    }

    return (
        <Style.Container>
            <Style.InputLabel>
            <Style.InputTitle>Data</Style.InputTitle>
            <Style.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
            </Style.InputLabel>
            <Style.InputLabel>
            <Style.InputTitle>Categoria</Style.InputTitle>
            <Style.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                <>
                <option></option>
                {categoryKeys.map((key, index) => (
                    <option key={index} value={key}>{categories[key].title}</option>
                ))}
                </>
            </Style.Select>
            </Style.InputLabel>
            <Style.InputLabel>
            <Style.InputTitle>Título</Style.InputTitle>
            <Style.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
            </Style.InputLabel>
            <Style.InputLabel>
            <Style.InputTitle>Valor</Style.InputTitle>
            <Style.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
            </Style.InputLabel>
            <Style.InputLabel>
            <Style.InputTitle>&nbsp;</Style.InputTitle>
            <Style.Button onClick={handleAddEvent}>Adicionar</Style.Button>
            </Style.InputLabel>
        </Style.Container>
    );
}