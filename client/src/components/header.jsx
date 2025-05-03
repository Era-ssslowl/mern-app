import React from 'react'

export default function Header({style}) {
  return (
    <div className='d-flex align-items-center justify-content-between bg-primary p-1 w-100' style={{height: '45px'}}>
        <span class="nes-text w-25">Gwork</span>
        <span class="nes-text ">Page name</span>
        <div className='d-flex align-items-center h-100 w-25 justify-content-end'>
            <span class="nes-text mx-2">Lv1.</span>
            <progress class="nes-progress h-50 w-50" value="90" max="100"></progress>
            <img className="nes-avatar mx-3 " alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style={{imageRendering: 'pixelated'}}></img>
        </div>

    </div>
  )
}
