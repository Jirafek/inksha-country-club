import React, { useState } from 'react';

const CopyToken = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('code');

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`/auth ${token}`).then(() => {
            setCopied(true);
        });
    };

    return (
            token ? (
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <button className="py-2 px-4 bg-black text-white" style={copied && {backgroundColor: '#5CF21A', color: 'black'}} onClick={handleCopy}>{copied ? "Скопировано!" : "Скопировать код"}</button>
                </div>
            ) : (
                <div style={{textAlign: 'center', marginTop: '50px'}}>
                    <p>Код отсутствует</p>
                </div>
            )
    )
}

export default CopyToken;
