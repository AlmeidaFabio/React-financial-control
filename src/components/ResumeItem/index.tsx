import * as Style from './styles';

type Props = {
    title:string;
    value:number;
    color?:string;
}

export function ResumeItem({title, value, color}: Props) {
    return (
        <Style.Container>
            <Style.Title>{title}</Style.Title>
            <Style.Info color={color}>R$ {value}</Style.Info>
        </Style.Container>
    )
}