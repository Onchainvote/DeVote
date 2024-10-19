import {useState, useEffect} from 'react'

function WelcomeModal() {

    //state to manage modal visibility
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        const hasDismissed = localStorage.getItem('modalDismissed');
        if(!hasDismissed){
            setShowModal(true); //show modal if not dismissed before
        }
    }, [])

    const handleCloseModal = ()=>{
        setShowModal(false);

        localStorage.setItem('modalDismissed', 'true'); //saves users choice in loacalstorage
    }

    const tempClose = () => {
        setShowModal(false)
    }

  return (
    <>
        {
            showModal && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white p-8 rounded-lg shadow-lg text-center'>
                        <button className='absolute bg-blue-600 top-2 right-2 text-white hover:text-grey-600' onClick={tempClose}>&#10005;</button>
                        <h2 className='text-2xl'>Welcome to DeVote</h2>
                        <p>Experience Traditional Governance Onchain</p>
                        <p>Getting Started</p>
                        <ul>
                            <li>- Click the Connect Wallet button to begin your onchain journey</li>
                            <li>- Ensure your wallet has a basename registered to it <br /> <a href="https://www.base.org/names" target='_blank'>Dont have a basename yet? get it here</a> </li>
                            <li>-Ensure you have your citizen ID <br />  to confirm you as an eligible voter in your country</li>
                            <li>- For this demo version your basename will be your testID. <br/> Just click on "ACCREDITATE" and yh...</li>
                            <li>Happy Voting :)</li>
                        </ul>
                        <button onClick={handleCloseModal}>Don't show this again</button>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default WelcomeModal