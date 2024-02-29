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
                <div className="flex items-center justify-center h-[100vh]">
                    <button className="py-2 px-4 bg-black text-white rounded-2xl" style={copied ? {backgroundColor: '#5CF21A', color: 'black'} : {}} onClick={handleCopy}>{copied ? "Скопировано!" : "Скопировать код"}</button>
                </div>
            ) : (
                <div style={{textAlign: 'center', marginTop: '50px'}}>
                    <p>Код отсутствует</p>
                </div>
            )
    )
}

export default CopyToken;
