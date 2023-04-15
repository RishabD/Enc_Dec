import { ReactElement } from "react"

type ColumnProps = {
    title?: string
    iconSource: string,
    iconAlt: string
    flexGrow?: boolean,
    children?: ReactElement
}


export default function Column(props: ColumnProps) {
    return (
        <div className={props.flexGrow ? "flex-grow flex items-center justify-center flex-col p-2" : "flex items-center justify-center flex-col p-2 min-w"}>
            {props.title ?
                <p className="text-3xl mb-2 min-w-[10rem] text-center">{props.title}</p>
                : null}
            <img src={props.iconSource} alt={props.iconAlt} className={props.children ? "w-20 min-w-[5rem] mb-4" : "w-20 min-w-[5rem]"} />
            {props.children}
        </div>
    )
}