import React, {useEffect, createRef, useState, useRef} from "react";
import Layout from "@theme/Layout"
// import clsx from 'clsx';
// import styles from "../css/convert.css";

export default function Convert() {

    const download_link_dom = useRef();
    const [download_link, setDownloadLink] = useState(null);
    const [download_name, setDownloadName] = useState(null);
    
    const replace_options = [
        { target: "local", replace: "locals" },
    ]

    let reader;

    useEffect(() => {
        reader = new FileReader

        reader.addEventListener("load", convertScript)

        return () => {
            reader.removeEventLister("load", convertScript)
        }
    }, [])

    const convertScript = e => {
        let script_body = e.target.result;
        let file_type = download_link_dom.current.download.slice(-4);

        if (file_type !== ".lua") return;

        replace_options.forEach(option => {
            const regex = new RegExp(option.target, "gi")
            script_body = script_body.replaceAll(regex, option.replace)
        })
                
        let script_array = [script_body];
        let blob = new Blob(script_array, { type: "text/plain" });
        let download_link = window.URL.createObjectURL(blob);

        setDownloadLink(download_link)

        download_link_dom.current.click()
    }

    const checkFile = (e) => {
        e.preventDefault()
        const file_select = e.target[0]
        const script = file_select.files[0]
        const script_name = script.name

        setDownloadName(script_name)

        reader.readAsText(script)
    }
      

    return (
        <Layout
        title={`ESX Conversion Page`}
        description="Description will go into a meta tag in <head />">
        <main style={{ padding: "2rem" }}>
            <form style={{ display: "flex", justifyContent: "center", alignContent: "center", height:  "100%"}} onSubmit={checkFile}>
                <div>
                    <input type="file"/>
                </div>
                <div>
                    <input type="text" placeholder="Prefix" />
                    <input type="submit" />
                </div>

                <a ref={download_link_dom} accept=".lua" href={download_link} download={download_name}></a>
            </form>
        </main>
      </Layout>
    )
}