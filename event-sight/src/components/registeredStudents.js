import React from "react"
import CsvDownload from 'react-json-to-csv'

const RegisteredStudents = (props)=>{

    // const sampleData = {
    //     "1" : {"name" : "shivam", "branch" : "cse1"},
    //     "2" : {"name" : "sarthak", "branch" : "cse2"},
    //     "3" : {"name" : "aayush", "branch" : "cse3"},
    //     "4" : {"name" : "arjun", "branch" : "cse4"},
    // }
    const sampleData = {
        name : "hello",
        
    }
    const sampleFileName = "abc.csv"

    return <div>
        <CsvDownload data = {sampleData}/>
    </div>
}

export default RegisteredStudents;