import Block from "../../common/Block";
import {useEffect, useRef, useState} from "react";
import renameImg from "../../../image/result/rename.svg"
import downloadImg from "../../../image/result/download.svg"
import "./ParsingResults.scss"

const ParsingResults = ({results}) => {
    const [result, setResult] = useState([...results]);
    const inputRef = useRef();

    const handleChangeReadOnly = (event) => {
        inputRef.current = event.currentTarget.previousSibling
        inputRef.current.focus()
        inputRef.current.readOnly = false
    }

    const handleBlur = () => {
        const idRes = inputRef.current.id
        const newValue = inputRef.current.value
        inputRef.current.readOnly = true
        setResult(result.map(res => {
                if (res.id == idRes) {
                    res.resultsName = newValue
                }
                return res
            })
        )
    }

    useEffect(() => {
        console.log("state:", results)
    }, [result])

    console.log(inputRef)

    return (
        <Block stylees="parsing-result result">
            {result.map(row => {
                return (
                    <div key={row.id} className="result-row flex">
                        <div className="result-cell cell-id">
                            {row.id + "."}
                        </div>
                        <div className="result-cell cell-name flex">
                            <input id={row.id} type="text" defaultValue={row.resultsName} readOnly={true}
                                   onBlur={handleBlur}/>
                            {/*{row.resultsName}*/}
                            <button onClick={handleChangeReadOnly}>
                                <img src={renameImg} alt="Изменить"/>
                            </button>
                        </div>
                        <div className="result-cell cell-date">
                            {row.date}
                        </div>
                        <div className="result-cell cell-date">
                            {row.contacts}
                        </div>
                        <div className="result-cell cell-download">
                            <button onClick={() => {
                                alert(JSON.stringify(row, null, 2))
                            }}>
                                <img src={downloadImg} alt=""/>
                            </button>
                        </div>
                    </div>
                )
            })}
        </Block>
    )
}

export default ParsingResults