import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';
import * as Style from './styles';

type Props = {
    list: Item[];
}

export function TableArea ({list}: Props) {
    return(
        <Style.Table>
            <thead>
                <tr>
                    <Style.TableHeadColumn width={100}>Data</Style.TableHeadColumn>
                    <Style.TableHeadColumn width={130}>Categoria</Style.TableHeadColumn>
                    <Style.TableHeadColumn>Título</Style.TableHeadColumn>
                    <Style.TableHeadColumn width={150}>Valor</Style.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item}/>
                ))}
            </tbody>
        </Style.Table>
    )
}