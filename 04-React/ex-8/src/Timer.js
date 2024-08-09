import React from 'react'

export default function Timer() {
    const [visible, setVisible] = useState(true);
      useEffect(()=>{
        const timer = setTimeout(()=>{
            setVisible(false)
        }, 2000);
      });

  return (
    <>
        
    </>
  )
}
