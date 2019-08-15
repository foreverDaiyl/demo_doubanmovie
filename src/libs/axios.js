import axios from 'axios'
import {API_ROOT,API_KEY} from '../config'
// import { promises } from 'fs';

export default function (url,params){
    return new Promise((resolve,reject)=>{
        axios(API_ROOT+url,{
            params,
            headers:{
                apikey:API_KEY
            }
        }).then(res=>{
            let {err,data,msg}=res.data;

            if(err){
                console.log(msg)
                reject(msg)
            }else{
                resolve(data);
            }
        },err=>{
            alert('读取数据失败，请刷新重试')
            reject(err)
        })
    })
}