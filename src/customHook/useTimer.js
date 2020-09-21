/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

/**
 * 组件首次渲染后，启动一个定时器
 * 组件卸载后，清除计时器
 * @param {*} func 
 * @param {*} duration 
 */

export default function UseTimer(func,duration) {
  useEffect(() => {
    const timer = setInterval(() => {
      func()
    }, duration);
    return ()=>{
      clearInterval(timer)
    }
  }, [])
}
