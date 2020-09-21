import React, { useState, useEffect } from "react";

export default function App() {

    const [n, setN] = useState(0)

    // 以下代码为副作用操作
    useEffect(() => {
        document.title = `计数器：${n}`
    }, [n])

    return (
        <div>
            <span>{n}</span>
            <button onClick={() => setN(n + 1)}>+</button>
        </div>
    );
}
