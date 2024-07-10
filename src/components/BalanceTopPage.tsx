import React, {useEffect, useState} from "react";
import {getBalanceTop} from "../services/BankApi";
import {EstateData} from "../services/EstateApi";

const BalanceTopPage : React.FC = () =>{

    const [estate,setEstate] = useState<EstateData[]>()

    const fetch = async () =>{
        const array = await getBalanceTop()
        setEstate(array)
    }

    const show = () => {
        if (estate === undefined || estate.length === 0)return '情報なし'
        let ret = "資産のランキング"
        estate.forEach((item,index) => {
            ret = ret.concat(`\n${index+1}位:${item.player} ${item.total.toLocaleString()}円`)
        })
        return ret
    }


    useEffect(() => {fetch().then()}, []);

    const ulStyle = {
        padding: '20px',
        fontSize: '20px',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return(
        <div>
            <h1>資産ランキング</h1>
            <div>
                <ul style={ulStyle}>
                    {show().split("\n")
                        .map((line,index) => <li style={{color: 'antiquewhite'}} key={index}>{line}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default BalanceTopPage